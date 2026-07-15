---
type: Validation Rule
title: JOURNEY_PATTERN_9
description: JourneyPattern  BookWhen without LatestBookingTime or LatestBookingTime
  without BookWhen
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_9
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `BookWhen must be used together with LatestBookingTime on StopPointInJourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern/BookingArrangements[(BookWhen and not(LatestBookingTime)) or (not(BookWhen) and LatestBookingTime)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
