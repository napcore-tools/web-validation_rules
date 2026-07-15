---
type: Validation Rule
title: SERVICE_JOURNEY_4
description: ServiceJourney missing arrival and departure
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_4
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `TimetabledPassingTime contains neither DepartureTime/EarliestDepartureTime nor ArrivalTime/LatestArrivalTime`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/passingTimes/TimetabledPassingTime[not(DepartureTime or EarliestDepartureTime) and not(ArrivalTime or LatestArrivalTime)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
