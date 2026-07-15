---
type: Validation Rule
title: SERVICE_JOURNEY_11
description: ServiceJourney invalid overriding of transport modes
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_11
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `If overriding Line TransportMode or TransportSubmode on a ServiceJourney, both elements must be present`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[(TransportMode and not(TransportSubmode))  or (not(TransportMode) and TransportSubmode)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
