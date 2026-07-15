---
type: Validation Rule
title: SERVICE_LINK_2
description: ServiceLink missing ToPointRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_LINK_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing ToPointRef on ServiceLink`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
serviceLinks/ServiceLink[not(ToPointRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
