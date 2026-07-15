---
type: Validation Rule
title: AUTHORITY_2
description: Authority missing Name
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: AUTHORITY_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Name element on Authority`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Authority[not(Name) or normalize-space(Name) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
