---
type: Validation Rule
title: DATED_SERVICE_JOURNEY_2
description: DatedServiceJourney missing ServiceJourneyRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DATED_SERVICE_JOURNEY_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing ServiceJourneyRef on DatedServiceJourney`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DatedServiceJourney[not(ServiceJourneyRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
