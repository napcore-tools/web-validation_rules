---
type: Validation Rule
title: COMPOSITE_FRAME_3
description: CompositeFrame - missing ValidBetween
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `ValidBetween missing either or both of FromDate/ToDate`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
//ValidBetween[not(FromDate) and not(ToDate)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
