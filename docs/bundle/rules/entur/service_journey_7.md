---
type: Validation Rule
title: SERVICE_JOURNEY_7
description: ServiceJourney identical arrival and departure
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_7
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `ArrivalTime is identical to DepartureTime`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/passingTimes/TimetabledPassingTime[DepartureTime = ArrivalTime]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
