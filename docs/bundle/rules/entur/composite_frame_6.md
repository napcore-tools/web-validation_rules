---
type: Validation Rule
title: COMPOSITE_FRAME_6
description: CompositeFrame - missing AvailabilityCondition
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_6
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `AvailabilityCondition must have either FromDate or ToDate or both present`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
//AvailabilityCondition[not(FromDate) and not(ToDate)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
