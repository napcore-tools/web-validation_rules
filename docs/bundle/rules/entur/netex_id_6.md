---
type: Validation Rule
title: NETEX_ID_6
description: NeTEx ID reference to invalid element
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: NETEX_ID_6
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Reference to %s is not allowed from element %s. Generally an element named XXXXRef may only reference elements if type XXXX`
- **Scope:** **frame:** ReferenceToValidEntityTypeValidator

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
