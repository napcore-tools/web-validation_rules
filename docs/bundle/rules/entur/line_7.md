---
type: Validation Rule
title: LINE_7
description: Line missing Network or GroupOfLines
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_7
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `A Line must refer to a GroupOfLines or a Network through element RepresentedByGroupRef`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine][not(RepresentedByGroupRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
