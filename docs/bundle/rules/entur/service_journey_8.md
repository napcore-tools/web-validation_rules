---
type: Validation Rule
title: SERVICE_JOURNEY_8
description: ServiceJourney missing id on TimetabledPassingTime
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_8
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing id on TimetabledPassingTime`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/passingTimes/TimetabledPassingTime[not(@id)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
