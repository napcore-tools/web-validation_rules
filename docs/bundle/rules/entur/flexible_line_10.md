---
type: Validation Rule
title: FLEXIBLE_LINE_10
description: FlexibleLine illegal use of both BookWhen and MinimumBookingPeriod
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_LINE_10
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `Only one of BookWhen or MinimumBookingPeriod should be specified on FlexibleLine`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/FlexibleLine[BookWhen and MinimumBookingPeriod]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
