---
type: Validation Rule
title: DATED_SERVICE_JOURNEY_1
description: DatedServiceJourney missing OperatingDayRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DATED_SERVICE_JOURNEY_1
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing OperatingDayRef on DatedServiceJourney`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DatedServiceJourney[not(OperatingDayRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
