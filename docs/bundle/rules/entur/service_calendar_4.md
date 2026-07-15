---
type: Validation Rule
title: SERVICE_CALENDAR_4
description: ServiceCalendar missing FromDate
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: SERVICE_CALENDAR_4
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Missing FromDate on ServiceCalendar`
- **Scope:** **frame:** ServiceCalendarFrame

# Implementation

```xpath
//ServiceCalendar[not(FromDate)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
