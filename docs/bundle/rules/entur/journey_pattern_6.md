---
type: Validation Rule
title: JOURNEY_PATTERN_6
description: JourneyPattern stop point without boarding or alighting
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_6
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `StopPointInJourneyPattern neither allows boarding nor alighting`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern/pointsInSequence/StopPointInJourneyPattern[ForAlighting = 'false' and ForBoarding = 'false']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
