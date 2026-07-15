---
type: Validation Rule
title: forbidden_continuous_pickup_drop_off
description: Continuous pickup or drop-off are forbidden when routes.continuous_pickup
  or routes.continuous_drop_off are 0, 2 or 3 and stop_times.start_pickup_drop_off_window
  or stop_times.end_pickup_drop_off_window are defined for any trip of this route.
resource: https://gtfs-validator.mobilitydata.org/rules.html#forbidden_continuous_pickup_drop_off
tags:
- mobilitydata
- gtfs
- integrity
timestamp: '2026-06-12T00:00:00'
code: forbidden_continuous_pickup_drop_off
standard: GTFS
source: mobilitydata
severity: ERROR
category: integrity
maturity: draft
---

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [forbidden_continuous_pickup_drop_off rule reference](https://gtfs-validator.mobilitydata.org/rules.html#forbidden_continuous_pickup_drop_off)
