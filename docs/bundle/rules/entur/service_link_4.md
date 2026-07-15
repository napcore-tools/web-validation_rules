---
type: Validation Rule
title: SERVICE_LINK_4
description: ServiceLink missing coordinate list
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_LINK_4
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing coordinates list on ServiceLink`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
serviceLinks/ServiceLink/projections/LinkSequenceProjection/g:LineString/g:posList[not(normalize-space(text()))]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
