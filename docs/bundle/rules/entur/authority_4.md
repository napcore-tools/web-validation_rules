---
type: Validation Rule
title: AUTHORITY_4
description: Authority missing ContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: AUTHORITY_4
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing ContactDetails on Authority`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Authority[not(ContactDetails)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
