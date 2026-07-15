---
type: Validation Rule
title: NETWORK_1
description: Network missing AuthorityRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: NETWORK_1
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing AuthorityRef on Network`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
Network[not(AuthorityRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
