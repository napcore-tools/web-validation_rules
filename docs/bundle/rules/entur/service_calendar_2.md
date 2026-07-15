---
type: Validation Rule
title: SERVICE_CALENDAR_2
description: ServiceCalendar empty ServiceCalendar
tags:
- entur
- netex
- quality
timestamp: '2026-06-12T00:00:00'
code: SERVICE_CALENDAR_2
standard: NeTEx
source: entur
severity: WARNING
category: quality
maturity: draft
---

# Details

- **Message:** `ServiceCalendar does not contain neither DayTypes nor DayTypeAssignments`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//ServiceCalendar[not(dayTypes) and not(dayTypeAssignments)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
