---
type: Validation Rule
title: SERVICE_LINK_5
description: ServiceLink less than 2 points
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_LINK_5
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `Less than 2 points on ServiceLink`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
serviceLinks/ServiceLink/projections/LinkSequenceProjection/g:LineString[count(g:pos) = 1]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
