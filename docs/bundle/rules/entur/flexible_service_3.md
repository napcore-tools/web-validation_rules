---
type: Validation Rule
title: FLEXIBLE_SERVICE_3
description: FlexibleService illegal use of both BookWhen and MinimumBookingPeriod
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_SERVICE_3
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `Only one of BookWhen or MinimumBookingPeriod should be specified on FlexibleServiceProperties`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/FlexibleServiceProperties[BookWhen and MinimumBookingPeriod]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
