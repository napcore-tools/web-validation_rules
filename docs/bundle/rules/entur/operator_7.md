---
type: Validation Rule
title: OPERATOR_7
description: Operator missing Url for CustomerServiceContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_7
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing Url element for CustomerServiceContactDetails on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator/CustomerServiceContactDetails[not(Url) or normalize-space(Url) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
