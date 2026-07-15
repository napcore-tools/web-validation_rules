---
type: Validation Rule
title: LINE_1
description: Line - exactly one Line or FlexibleLine
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `There must be exactly one Line or one Flexible Line`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
