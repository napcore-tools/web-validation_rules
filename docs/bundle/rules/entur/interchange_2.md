---
type: Validation Rule
title: INTERCHANGE_2
description: Interchange unexpected MaximumWaitTime
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: INTERCHANGE_2
standard: NeTEx
source: entur
severity: WARNING
category: semantic
maturity: draft
---

# Details

- **Message:** `Guaranteed Interchange should not have a maximum wait time value of zero`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
journeyInterchanges/ServiceJourneyInterchange[Guaranteed='true' and  (MaximumWaitTime='PT0S' or MaximumWaitTime='PT0M') ]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
