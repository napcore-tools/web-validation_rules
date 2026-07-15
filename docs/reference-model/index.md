# Reference model

_Work in progress_

## 1. Purpose

Establish shared vocabulary for the NAPCORE Validation Rules Catalogue:
the data model rules operate on, the scopes at which rules apply, and
the structure of validation reports they produce.

## 2. Containment hierarchy

Validation rules operate over a five-level containment hierarchy. Each
level is a class with its own properties; lower levels inherit context
from their parents.

```
Dataset
  └── Distribution
        └── Session
              └── Sample
                    └── Entity
```

### 2.1 Dataset

Abstract data source of a given type and scope (as defined by
mobilityDCAT-AP). Properties include publisher, declared geographic and
thematic scope, declared format family.

### 2.2 Distribution

Concrete representation of a dataset using one format, protocol, and
scope (mobilityDCAT-AP). One dataset may have 1..N distributions (e.g.
`ParkingTablePublication` for static data + `ParkingStatusPublication`
for dynamic data). Properties include endpoint, protocol, format
version, scope subset.

### 2.3 Session

One continuous subscription period to one distribution, captured by
InQMS/KOA. A session typically starts with an initial snapshot followed
by deltas and must not lose messages. Properties include subscription
start, subscription parameters, expected message types, declared update
frequency.

### 2.4 Sample

One delivery unit captured within a session - a file in file-based
publishing, or a single message in messaging-based delivery. Properties:

- `timestamp_collected` - when InQMS received it
- `timestamp_published` - `publicationTime` from the payload
- `payload` and `payload_format` (e.g. DATEX II 2.3 vs 3.x, encoding)
- `session_ref`
- `message_type` - for multi-type streams
- `kind` ∈ {`snapshot`, `delta`, `keepalive`, `heartbeat`} - publishing
  pattern
- `sequence_number` (or equivalent) - for delta ordering and gap
  detection

The term _publication_ originates in DATEX II; _sample_ is the
format-agnostic name used in this catalogue.

### 2.5 Entity

An independently identifiable unit of information with stable identity
across samples. In DATEX II these are "identifiable" or
"version-identifiable" instances; in NeTEx, instances of
`EntityInVersion`; in TN-ITS, road features with persistent IDs. SIRI's
message-centric model is handled via its own identity scheme (see §4).

One sample contains 1..N entities. The InQMS metric _number of records_
counts entities; "record" is retained as a synonym for
tabular-flavoured payloads but **entity** is the canonical term.

### 2.6 Property inheritance

Each level has its own properties and inherits context from its parent.
A rule operating on an entity has access to the enclosing sample,
session, distribution, and dataset properties through containment.

Each property is marked as **declared** (set at registration /
subscription / contract) or **observed** (extracted from arriving data).
Many validation rules compare the two.

## 3. Validation scopes

The scope of a rule determines what data the validation engine must
access to evaluate it.

| Scope                        | Validates                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entity-level**             | Structural validity of one entity at one version (mandatory fields, value ranges, enum membership)                                                             |
| **Entity-history**           | The same logical identity across versions/samples (version monotonicity, lifecycle transitions, identity recycling, no resurrection of cancelled situations)   |
| **Sample-level**             | Properties of one delivery as a whole (schema-validates, expected `publicationTime`, `kind` matches subscription contract, expected message types present)     |
| **Intra-sample referential** | References between entities within one sample (e.g. a `SituationRecord`'s location reference resolves inside the same publication)                             |
| **Session-level**            | Temporal/sequence properties across samples in one session (no gaps, sequence numbers contiguous, snapshot present at session start, delta cadence within SLA) |
| **Cross-distribution**       | Consistency across distributions of the same dataset (e.g. `ParkingStatus` IDs ⊂ `ParkingTable` IDs)                                                           |
| **Dataset-level**            | Properties of the dataset as a whole (geographic coverage, declared vs. observed update frequency, all promised distributions live)                            |

Cross-distribution and intra-sample referential are conceptually about
referential integrity; the distinction reflects where the referenced
data physically resides, not what the rule conceptually checks.

## 4. Entity identity

### 4.1 Logical identity

The publisher's claimed identity of an entity. Format-specific:

- DATEX II default: `(class, id, version)`
- DATEX II when `version` is unreliable: `(class, id, publicationTime)`
- NeTEx default: `(class, id, version)`
- SIRI: `(MessageIdentifier, ProducerRef)` or equivalent
- TN-ITS: `(featureClass, featureId, changeEventId)` or equivalent

Each distribution declares its **identity_key** scheme. Rules operate on
`identity_key` generically; the catalogue stays format-agnostic at the
rule level.

### 4.2 Observation identity

A unique handle on one specific occurrence of an entity as it arrived in
our system. Required because:

- The same logical identity may appear in many samples (legitimate
  history).
- The same logical identity may be **recycled** by the publisher with
  different content (a bug to detect).
- One sample may contain duplicate logical identities (also a bug to
  detect).

Observation identity is composed of: enclosing `sample_id` +
`identity_key` + `index` (1 by default, incremented for duplicates
within the same sample).

This allows duplicates and recycling to appear as report findings rather
than being suppressed as preconditions.

### 4.3 Recycling detection

Stated generically: _for any two entity occurrences with the same_
`identity_key`_, content must match._ Independent of underlying format.

## 5. Test context and parametrisation

Rules are parametrised. Parameters supply:

- **Containment context** - dataset, distribution, session (and
  sometimes sample) properties relevant to the rule.
- **Supporting data** - external reference data needed to evaluate the
  rule, e.g. expected geographic boundaries, ALERT-C location tables for
  validating ALERT-C location identifiers.

The same rule definition can be reused across distributions by varying
its parameters.

## 6. Report records

Rules are executed using `pytest` as the runtime. Outcomes follow pytest
conventions.

### 6.1 Outcomes

| Outcome                | Meaning                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- |
| **PASS**               | Rule executed, condition satisfied                                              |
| **FAIL**               | Rule executed, assertion violated - a data problem                              |
| **ERROR**              | Rule could not execute due to an unexpected problem - an infrastructure problem |
| **SKIP**               | Rule deliberately not executed because preconditions were not met               |
| **XFAIL** _(optional)_ | Rule failed but the failure is known/accepted/tracked                           |

FAILs are reported to the data publisher (because data failed to pass a
rule conformance test); ERRORs are routed to the team maintaining the
validator (because the validator implementation for given rule failed to
operate properly).

### 6.2 Severity

Severity is **orthogonal** to outcome:
`{INFO, WARNING, ERROR, CRITICAL}` or similar. The same rule may produce
different severities depending on context.

### 6.3 Report record structure

```
ReportRecord
  ├── rule_ref         which rule produced this record
  ├── outcome          PASS | FAIL | ERROR | SKIP | XFAIL
  ├── severity         applicable when FAIL/ERROR
  ├── scope            entity | entity-history | sample | ... (from §3)
  ├── subject_ref      what was tested - nested structure (see §6.4)
  ├── evaluated_at     when validation ran
  ├── message          human-readable explanation
  ├── evidence         structured detail (expected vs actual, offending values)
  └── context_refs     other entities/samples needed to understand the result
```

### 6.4 subject_ref

`subject_ref` is a nested structure tagged by the scope of the rule. The
structure carries the full containment chain so report consumers can
navigate upward.

Example for an entity-level finding:

```json
{
  "kind": "entity",
  "dataset_id": "...",
  "distribution_id": "...",
  "session_id": "...",
  "sample_id": "...",
  "entity": {
    "class": "SituationRecord",
    "id": "ABC-123",
    "identity_key": { "class": "SituationRecord", "id": "ABC-123", "version": "7" },
    "index": 1
  }
}
```

Other `kind` values (`sample`, `session`, `distribution`, `dataset`)
carry the chain truncated at the appropriate level.

`context_refs` carries additional references needed for debugging - e.g.
for a cross-distribution rule, the `ParkingTable` sample consulted when
evaluating a `ParkingStatus` record.

## 7. Open issues

The following points need clarification before or during implementation:

1. **Report storage vs streaming.** Are report records stored (queryable
   history, trend analysis, SLA reporting) or streamed (emitted live,
   consumed by alerting, not retained in structured form)? This shapes
   how self-describing each record needs to be on the wire.
2. **Record vs entity terminology.** Confirm whether the InQMS metric
   "number of records" remains under that name, or is renamed to "number
   of entities" to align with the catalogue. Equivalence is documented
   either way.
3. **SIRI identity scheme.** Confirm `(MessageIdentifier, ProducerRef)`
   (or alternative) as the identity scheme for SIRI and whether SIRI
   messages map cleanly to single-entity samples or require a separate
   sub-taxonomy.
4. **TN-ITS identity scheme.** Confirm the identity composition for
   TN-ITS road feature change events.
5. **XFAIL adoption.** Decide whether to use the XFAIL outcome for
   documented publisher non-conformances, and how such known issues are
   tracked alongside the catalogue.
6. **Severity vocabulary.** Confirm the exact severity levels and their
   definitions.
7. **Identity_key declaration.** Where is each distribution's
   `identity_key` scheme declared - in the distribution registration, in
   the rule parameters, or both?
8. **Report aggregation.** How do per-record results roll up to
   per-sample / per-session / per-distribution / per-dataset health
   views? Not addressed in this document.
9. **Rule specification format.** How rules are authored in the catalogue
   (pytest is the runtime; the authoring layer is still open).
