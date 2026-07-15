---
type: Validation Rule
title: SERVICE_CALENDAR_3
description: ServiceCalendar missing ToDate
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_CALENDAR_3
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing ToDate on ServiceCalendar`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//ServiceCalendar[not(ToDate)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
