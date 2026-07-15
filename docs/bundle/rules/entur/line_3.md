---
type: Validation Rule
title: LINE_3
description: Line missing PublicCode
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_3
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing PublicCode on Line`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine][not(PublicCode) or normalize-space(PublicCode) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
