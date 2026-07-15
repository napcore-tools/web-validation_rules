---
type: Validation Rule
title: LINE_8
description: Invalid color coding length on Presentation
tags:
- entur
- netex
- format
timestamp: '2026-06-12T00:00:00'
code: LINE_8
standard: NeTEx
source: entur
severity: WARNING
category: format
maturity: draft
---

# Details

- **Message:** `Line colour should be encoded with 6 hexadecimal digits`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/*[self::Line or self::FlexibleLine]/*[self::Presentation or self::AlternativePresentation]/*[self::Colour or self::TextColour][text()][string-length(text())!=6]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
