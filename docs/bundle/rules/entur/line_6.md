---
type: Validation Rule
title: LINE_6
description: Line with incorrect use of Route
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: LINE_6
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Routes should not be defined within a Line or FlexibleLine`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine]/routes/Route
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
