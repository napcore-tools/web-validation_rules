---
type: Validation Rule
title: INTERCHANGE_1
description: Interchange invalid properties
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: INTERCHANGE_1
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `The 'Planned' and 'Advertised' properties of an Interchange should not be specified`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
journeyInterchanges/ServiceJourneyInterchange[Advertised or Planned]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
