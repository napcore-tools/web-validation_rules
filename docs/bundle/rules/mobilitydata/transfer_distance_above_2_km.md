---
type: Validation Rule
title: transfer_distance_above_2_km
description: The transfer distance from stop to stop in `transfers.txt` is larger
  than 2 km.
resource: https://gtfs-validator.mobilitydata.org/rules.html#transfer_distance_above_2_km
tags:
- mobilitydata
- gtfs
- plausibility
timestamp: '2026-06-12T00:00:00'
code: transfer_distance_above_2_km
standard: GTFS
source: mobilitydata
severity: INFO
category: plausibility
maturity: draft
---

# Parameters

- `max_distance_km` = 2

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [transfer_distance_above_2_km rule reference](https://gtfs-validator.mobilitydata.org/rules.html#transfer_distance_above_2_km)
