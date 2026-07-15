---
type: Validation Rule
title: COMPOSITE_FRAME_1
description: CompositeFrame - missing ValidityCondition
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `A CompositeFrame must define a ValidityCondition valid for all data within the CompositeFrame`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
.[not(validityConditions)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
