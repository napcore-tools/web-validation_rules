---
type: Validation Rule
title: SERVICE_JOURNEY_9
description: ServiceJourney missing version on TimetabledPassingTime
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_9
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing version on TimetabledPassingTime`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/passingTimes/TimetabledPassingTime[not(@version)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
