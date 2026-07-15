---
type: Validation Rule
title: DESTINATION_DISPLAY_2
description: DestinationDisplay missing DestinationDisplayRef on Via
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DESTINATION_DISPLAY_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing DestinationDisplayRef on Via`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
destinationDisplays/DestinationDisplay/vias/Via[not(DestinationDisplayRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
