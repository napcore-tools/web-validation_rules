---
type: Validation Rule
title: COMPOSITE_FRAME_4
description: CompositeFrame - invalid ValidBetween
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_4
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `FromDate cannot be after ToDate on ValidBetween`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
//ValidBetween[FromDate and ToDate and ToDate < FromDate]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
