---
type: Validation Rule
title: AUTHORITY_5
description: Authority missing Url for ContactDetails
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: AUTHORITY_5
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `The Url must be defined for ContactDetails on Authority and it must start with 'http://' or 'https://'`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Authority/ContactDetails[not(Url) or not(starts-with(Url, 'http://') or (starts-with(Url, 'https://')) )]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
