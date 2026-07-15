---
type: Validation Rule
title: BOOKING_5
description: Missing BookWhen or MinimumBookingPeriod
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: BOOKING_5
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `Either BookWhen or MinimumBookingPeriod should be specified on FlexibleServiceProperties, FlexibleLine or on all StopPointInJourneyPatterns`
- **Scope:** **frame:** ValidateMandatoryBookingWhenOrMinimumBookingPeriodProperty

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
