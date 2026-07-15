---
type: Validation Rule
title: DEAD_RUN_2
description: DeadRun missing JourneyPattern references
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DEAD_RUN_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The Dead run does not reference a journey pattern`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DeadRun[not(JourneyPatternRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
