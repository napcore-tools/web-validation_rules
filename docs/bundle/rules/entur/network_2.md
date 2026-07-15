---
type: Validation Rule
title: NETWORK_2
description: Network missing Name on Network
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: NETWORK_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Name element on Network`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
Network[not(Name) or normalize-space(Name) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
