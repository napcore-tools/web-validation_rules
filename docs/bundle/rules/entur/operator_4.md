---
type: Validation Rule
title: OPERATOR_4
description: Operator missing ContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_4
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing ContactDetails element on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator[not(ContactDetails)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
