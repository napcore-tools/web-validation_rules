---
type: Validation Rule
title: DEAD_RUN_3
description: DeadRun missing DayType references
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DEAD_RUN_3
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The Dead run does not reference day types`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DeadRun[not(dayTypes/DayTypeRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
