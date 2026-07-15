---
type: Validation Rule
title: DESTINATION_DISPLAY_1
description: DestinationDisplay missing FrontText
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: DESTINATION_DISPLAY_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing FrontText on DestinationDisplay`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
destinationDisplays/DestinationDisplay[not(FrontText) or normalize-space(FrontText) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
