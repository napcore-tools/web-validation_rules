---
type: Validation Rule
title: ROUTE_7
description: Route missing JourneyPattern
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: ROUTE_7
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `A Route should have at least one JourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route[not(@id = ../../journeyPatterns/JourneyPattern/RouteRef/@ref)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
