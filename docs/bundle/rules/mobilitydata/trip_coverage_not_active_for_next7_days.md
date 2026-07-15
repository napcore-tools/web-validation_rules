---
type: Validation Rule
title: trip_coverage_not_active_for_next7_days
description: Trips data should be valid for at least the next seven days.
resource: https://gtfs-validator.mobilitydata.org/rules.html#trip_coverage_not_active_for_next7_days
tags:
- mobilitydata
- gtfs
- currency
timestamp: '2026-06-12T00:00:00'
code: trip_coverage_not_active_for_next7_days
standard: GTFS
source: mobilitydata
severity: WARNING
category: currency
maturity: draft
---

# Parameters

- `horizon_days` = 7

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [trip_coverage_not_active_for_next7_days rule reference](https://gtfs-validator.mobilitydata.org/rules.html#trip_coverage_not_active_for_next7_days)
