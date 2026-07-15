---
type: Validation Rule
title: SERVICE_LINK_3
description: ServiceLink missing element Projections
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_LINK_3
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing projections element on ServiceLink`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
serviceLinks/ServiceLink[not(projections)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
