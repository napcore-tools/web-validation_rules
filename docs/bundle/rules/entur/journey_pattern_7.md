---
type: Validation Rule
title: JOURNEY_PATTERN_7
description: JourneyPattern illegal repetition of DestinationDisplay
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_7
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `StopPointInJourneyPattern declares reference to the same DestinationDisplay as previous StopPointInJourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern[DestinationDisplayRef/@ref = preceding-sibling::StopPointInJourneyPattern[1]/DestinationDisplayRef/@ref and number(@order) >  number(preceding-sibling::StopPointInJourneyPattern[1]/@order)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
