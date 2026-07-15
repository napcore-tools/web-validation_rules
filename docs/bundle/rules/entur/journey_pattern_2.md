---
type: Validation Rule
title: JOURNEY_PATTERN_2
description: JourneyPattern missing JourneyPattern
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `No JourneyPattern defined in the Service Frame`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
