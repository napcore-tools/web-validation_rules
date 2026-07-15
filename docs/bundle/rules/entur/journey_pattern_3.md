---
type: Validation Rule
title: JOURNEY_PATTERN_3
description: JourneyPattern missing RouteRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: JOURNEY_PATTERN_3
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing RouteRef on JourneyPattern`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
journeyPatterns/JourneyPattern[not(RouteRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
