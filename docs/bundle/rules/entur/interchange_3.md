---
type: Validation Rule
title: INTERCHANGE_3
description: Interchange excessive MaximumWaitTime
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: INTERCHANGE_3
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `The maximum waiting time after planned departure for the interchange consumer journey (MaximumWaitTime) should not be longer than one hour`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
journeyInterchanges/ServiceJourneyInterchange[MaximumWaitTime > xs:dayTimeDuration('PT1H')]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
