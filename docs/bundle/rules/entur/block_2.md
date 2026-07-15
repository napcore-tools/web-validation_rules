---
type: Validation Rule
title: BLOCK_2
description: Block missing Journey
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: BLOCK_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `At least one Journey must be defined for Block`
- **Scope:** **frame:** VehicleScheduleFrame

# Implementation

```xpath
blocks/Block[not(journeys)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
