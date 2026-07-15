---
type: Validation Rule
title: SERVICE_CALENDAR_1
description: ServiceCalendar unused DayType
tags:
- entur
- netex
- quality
timestamp: '2026-06-12T00:00:00'
code: SERVICE_CALENDAR_1
standard: NeTEx
source: entur
severity: WARNING
category: quality
maturity: draft
---

# Details

- **Message:** `The DayType is not assigned to any calendar dates or periods`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//DayType[not(//DayTypeAssignment/DayTypeRef/@ref = @id)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
