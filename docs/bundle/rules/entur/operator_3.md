---
type: Validation Rule
title: OPERATOR_3
description: Operator missing LegalName
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_3
standard: NeTEx
source: entur
severity: INFO
category: structure
maturity: draft
---

# Details

- **Message:** `Missing LegalName element on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator[not(LegalName) or normalize-space(LegalName) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
