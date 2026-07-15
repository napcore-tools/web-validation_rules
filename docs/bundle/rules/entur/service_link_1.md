---
type: Validation Rule
title: SERVICE_LINK_1
description: ServiceLink missing FromPointRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_LINK_1
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing FromPointRef on ServiceLink`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
serviceLinks/ServiceLink[not(FromPointRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
