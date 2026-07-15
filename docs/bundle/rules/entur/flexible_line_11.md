---
type: Validation Rule
title: FLEXIBLE_LINE_11
description: FlexibleLine BookWhen without LatestBookingTime or LatestBookingTime
  without BookWhen
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_LINE_11
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `BookWhen must be used together with LatestBookingTime on FlexibleLine`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
lines/FlexibleLine[(BookWhen and not(LatestBookingTime)) or (not(BookWhen) and LatestBookingTime)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
