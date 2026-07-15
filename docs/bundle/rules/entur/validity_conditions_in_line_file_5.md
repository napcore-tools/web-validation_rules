---
type: Validation Rule
title: VALIDITY_CONDITIONS_IN_LINE_FILE_5
description: ValidityConditions missing in VehicleScheduleFrame
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: VALIDITY_CONDITIONS_IN_LINE_FILE_5
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Multiple frames of same type without validity conditions`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
VehicleScheduleFrame[not(validityConditions) and count(//VehicleScheduleFrame) > 1]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
