---
type: Validation Rule
title: DATED_SERVICE_JOURNEY_4
description: DatedServiceJourney multiple versions
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: DATED_SERVICE_JOURNEY_4
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `DatedServiceJourney is repeated with a different version`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/DatedServiceJourney[@id = preceding-sibling::DatedServiceJourney/@id]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
