---
type: Validation Rule
title: OPERATOR_6
description: Operator missing CustomerServiceContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_6
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing CustomerServiceContactDetails element on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator[not(CustomerServiceContactDetails)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
