---
type: Validation Rule
title: JOURNEY_PATTERN_8
description: JourneyPattern  illegal use of both BookWhen and MinimumBookingPeriod
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_8
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `Only one of BookWhen or MinimumBookingPeriod should be specified on StopPointInJourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern/BookingArrangements[BookWhen and MinimumBookingPeriod]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
