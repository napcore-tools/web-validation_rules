---
type: Validation Rule
title: SERVICE_CALENDAR_5
description: ServiceCalendar invalid time interval
tags:
- entur
- netex
- semantic
timestamp: '2026-06-12T00:00:00'
code: SERVICE_CALENDAR_5
standard: NeTEx
source: entur
severity: ERROR
category: semantic
maturity: draft
---

# Details

- **Message:** `FromDate cannot be after ToDate on ServiceCalendar`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//ServiceCalendar[FromDate and ToDate and ToDate < FromDate]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
