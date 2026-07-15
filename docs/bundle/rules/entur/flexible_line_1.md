---
type: Validation Rule
title: FLEXIBLE_LINE_1
description: FlexibleLine missing FlexibleLineType
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_LINE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing FlexibleLineType on FlexibleLine`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/FlexibleLine[not(FlexibleLineType)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
