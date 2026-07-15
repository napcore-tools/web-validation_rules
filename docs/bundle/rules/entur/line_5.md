---
type: Validation Rule
title: LINE_5
description: Line missing TransportSubmode
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_5
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing TransportSubmode on Line`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine][not(TransportSubmode)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
