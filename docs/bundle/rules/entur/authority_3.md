---
type: Validation Rule
title: AUTHORITY_3
description: Authority missing LegalName
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: AUTHORITY_3
standard: NeTEx
source: entur
severity: INFO
category: structure
maturity: draft
---

# Details

- **Message:** `Missing LegalName element on Authority`
- **Scope:** **frame:** ResourceFrame

# Implementation

```xpath
organisations/Authority[not(LegalName) or normalize-space(LegalName) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
