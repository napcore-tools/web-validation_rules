---
type: Validation Rule
title: OPERATING_PERIOD_1
description: OperatingPeriod invalid time interval
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: OPERATING_PERIOD_1
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `FromDate cannot be after ToDate on OperatingPeriod`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//OperatingPeriod[FromDate and ToDate and ToDate < FromDate]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
