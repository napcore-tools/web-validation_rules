---
type: Validation Rule
title: JOURNEY_PATTERN_5
description: JourneyPattern illegal DestinationDisplayRef on last stop point
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_5
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `DestinationDisplayRef not allowed on last StopPointInJourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern[last()][DestinationDisplayRef]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
