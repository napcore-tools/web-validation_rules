---
type: Validation Rule
title: SERVICE_JOURNEY_6
description: ServiceJourney missing arrival time for last stop
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_6
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `Last TimetabledPassingTime must have ArrivalTime`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[count(passingTimes/TimetabledPassingTime[last()]/ArrivalTime) = 0 and count(passingTimes/TimetabledPassingTime[last()]/LatestArrivalTime) = 0]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
