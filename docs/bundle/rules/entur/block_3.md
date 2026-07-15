---
type: Validation Rule
title: BLOCK_3
description: Block missing DayType
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: BLOCK_3
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `At least one DayType must be defined for Block`
- **Scope:** **frame:** VehicleScheduleFrame

# Implementation

```xpath
blocks/Block[not(dayTypes)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
