---
type: Validation Rule
title: ROUTE_3
description: Route missing LineRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: ROUTE_3
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing lineRef on Route`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route[not(LineRef) and not(FlexibleLineRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
