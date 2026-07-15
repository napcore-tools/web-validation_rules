---
type: Validation Rule
title: BLOCK_1
description: Block missing VehicleScheduleFrame
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: BLOCK_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `At least one Block or TrainBlock required in VehicleScheduleFrame`
- **Scope:** **frame:** VehicleScheduleFrame

# Implementation

```xpath
blocks/Block | blocks/TrainBlock
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
