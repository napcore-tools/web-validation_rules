---
type: Validation Rule
title: COMPOSITE_FRAME_5
description: CompositeFrame - invalid AvailabilityCondition
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_5
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `FromDate cannot be after ToDate on AvailabilityCondition`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
//AvailabilityCondition[FromDate and ToDate and ToDate < FromDate]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
