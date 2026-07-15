---
type: Validation Rule
title: JOURNEY_PATTERN_1
description: JourneyPattern illegal element ServiceJourneyPattern
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `ServiceJourneyPattern not allowed`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/ServiceJourneyPattern
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
