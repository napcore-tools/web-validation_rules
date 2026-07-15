---
type: Validation Rule
title: SERVICE_JOURNEY_14
description: ServiceJourney duplicated reference to calendar data
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_14
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The ServiceJourney references both DayTypes and DatedServiceJourneys`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[dayTypes/DayTypeRef and @id=//TimetableFrame/vehicleJourneys/DatedServiceJourney/ServiceJourneyRef/@ref]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
