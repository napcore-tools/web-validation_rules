---
type: Validation Rule
title: DEAD_RUN_1
description: DeadRun missing PassingTime references
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DEAD_RUN_1
standard: NeTEx
source: entur
severity: INFO
category: integrity
maturity: draft
---

# Details

- **Message:** `The Dead run does not reference passing times`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DeadRun[not(passingTimes)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
