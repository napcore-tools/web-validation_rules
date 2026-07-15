---
type: Validation Rule
title: ROUTE_6
description: Route duplicated order
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: ROUTE_6
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `Several points on route have the same order`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route/pointsInSequence/PointOnRoute[@order = preceding-sibling::PointOnRoute/@order]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
