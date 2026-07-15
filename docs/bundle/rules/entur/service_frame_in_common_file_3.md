---
type: Validation Rule
title: SERVICE_FRAME_IN_COMMON_FILE_3
description: ServiceFrame unexpected element JourneyPattern
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_FRAME_IN_COMMON_FILE_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `JourneyPattern not allowed in common files`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern | journeyPatterns/ServiceJourneyPattern
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
