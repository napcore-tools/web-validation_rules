---
type: Validation Rule
title: ROUTE_1
description: Route missing
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: ROUTE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `There should be at least one Route`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
