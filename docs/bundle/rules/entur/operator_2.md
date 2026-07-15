---
type: Validation Rule
title: OPERATOR_2
description: Operator missing Name
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Name on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator[not(Name) or normalize-space(Name) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
