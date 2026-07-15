---
type: Validation Rule
title: SERVICE_FRAME_IN_COMMON_FILE_2
description: ServiceFrame unexpected element Route
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_FRAME_IN_COMMON_FILE_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Route not allowed in common files`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
routes/Route
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
