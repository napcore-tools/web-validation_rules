---
type: Validation Rule
title: JOURNEY_PATTERN_4
description: JourneyPattern missing DestinationDisplayRef on first stop point
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_4
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing DestinationDisplayRef on first StopPointInJourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern[1][not(DestinationDisplayRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
