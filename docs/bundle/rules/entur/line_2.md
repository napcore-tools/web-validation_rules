---
type: Validation Rule
title: LINE_2
description: Line missing Name
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Name on Line`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine][not(Name) or normalize-space(Name) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
