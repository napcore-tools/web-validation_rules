---
type: Validation Rule
title: ROUTE_5
description: Route illegal DirectionRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: ROUTE_5
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `DirectionRef not allowed on Route (use DirectionType)`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route/DirectionRef
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
