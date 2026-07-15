---
type: Validation Rule
title: ROUTE_4
description: Route missing pointsInSequence
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: ROUTE_4
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing pointsInSequence on Route`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route[not(pointsInSequence)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
