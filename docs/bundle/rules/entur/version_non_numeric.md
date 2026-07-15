---
type: Validation Rule
title: VERSION_NON_NUMERIC
description: Non-numeric NeTEx version
tags:
- entur
- netex
- format
timestamp: '2026-06-12T00:00:00'
code: VERSION_NON_NUMERIC
standard: NeTEx
source: entur
severity: WARNING
category: format
maturity: draft
---

# Details

- **Scope:** **frame:** Root

# Implementation

```xpath
.//*[@version != 'any' and number(@version) != number(@version)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
