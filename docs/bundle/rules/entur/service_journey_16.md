---
type: Validation Rule
title: SERVICE_JOURNEY_16
description: ServiceJourney multiple versions
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_16
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `ServiceJourney is repeated with a different version`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[@id = preceding-sibling::ServiceJourney/@id]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
