---
type: Validation Rule
title: COMPOSITE_FRAME_2
description: CompositeFrame - invalid nested ValidityCondition
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_2
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `ValidityConditions defined inside a frame inside a CompositeFrame`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
frames//validityConditions
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
