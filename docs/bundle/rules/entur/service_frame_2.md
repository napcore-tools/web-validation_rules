---
type: Validation Rule
title: SERVICE_FRAME_2
description: ServiceFrame unexpected element timingPoints
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_FRAME_2
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Unexpected element timingPoints. Content ignored`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
timingPoints
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
