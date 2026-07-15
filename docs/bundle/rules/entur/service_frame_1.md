---
type: Validation Rule
title: SERVICE_FRAME_1
description: ServiceFrame unexpected element GroupOfLines
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_FRAME_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Unexpected element groupsOfLines outside of Network`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
groupsOfLines
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
