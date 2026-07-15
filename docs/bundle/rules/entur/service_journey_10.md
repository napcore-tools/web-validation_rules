---
type: Validation Rule
title: SERVICE_JOURNEY_10
description: ServiceJourney missing reference to JourneyPattern
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_10
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The ServiceJourney does not refer to a JourneyPattern`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[not(JourneyPatternRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
