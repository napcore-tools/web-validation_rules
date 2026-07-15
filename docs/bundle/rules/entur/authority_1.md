---
type: Validation Rule
title: AUTHORITY_1
description: Authority missing CompanyNumber
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: AUTHORITY_1
standard: NeTEx
source: entur
severity: INFO
category: structure
maturity: draft
---

# Details

- **Message:** `Missing CompanyNumber element on Authority`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Authority[not(CompanyNumber) or normalize-space(CompanyNumber) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
