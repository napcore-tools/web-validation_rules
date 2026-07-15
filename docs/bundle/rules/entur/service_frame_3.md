---
type: Validation Rule
title: SERVICE_FRAME_3
description: ServiceFrame missing Projection on RoutePoint
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_FRAME_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Projection on RoutePoint`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routePoints/RoutePoint[not(projections)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
