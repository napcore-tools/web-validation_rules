---
type: Validation Rule
title: OPERATOR_5
description: Operator missing Url for ContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: OPERATOR_5
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `At least one of Url, Phone or Email must be defined for ContactDetails on Operator`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Operator/ContactDetails[(not(Email) or normalize-space(Email) = '') and (not(Phone) or normalize-space(Phone) = '') and (not(Url) or normalize-space(Url) = '')]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
