---
type: Validation Rule
title: SERVICE_JOURNEY_1
description: ServiceJourney must exist
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `There should be at least one ServiceJourney`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
