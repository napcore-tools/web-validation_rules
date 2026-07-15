---
type: Validation Rule
title: DATED_SERVICE_JOURNEY_5
description: DatedServiceJourney multiple references to the same DatedServiceJourney
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DATED_SERVICE_JOURNEY_5
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Multiple references from a DatedServiceJourney to the same DatedServiceJourney`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DatedServiceJourney/replacedJourneys/DatedVehicleJourneyRef[@ref = preceding-sibling::DatedVehicleJourneyRef/@ref]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
