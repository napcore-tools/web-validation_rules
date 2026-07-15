---
type: Validation Rule
title: NETWORK_3
description: Network missing Name on GroupOfLines
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: NETWORK_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Name element on GroupOfLines`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
Network/groupsOfLines/GroupOfLines[not(Name)  or normalize-space(Name) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
