---
type: Validation Rule
title: trip_distance_exceeds_shape_distance
description: The distance between the last shape point and last stop point is greater
  than or equal to the 11.1m threshold.
resource: https://gtfs-validator.mobilitydata.org/rules.html#trip_distance_exceeds_shape_distance
tags:
- mobilitydata
- gtfs
- semantic
timestamp: '2026-06-12T00:00:00'
code: trip_distance_exceeds_shape_distance
standard: GTFS
source: mobilitydata
severity: ERROR
category: semantic
maturity: draft
---

# Parameters

- `distance_threshold_m` = 11.1

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [trip_distance_exceeds_shape_distance rule reference](https://gtfs-validator.mobilitydata.org/rules.html#trip_distance_exceeds_shape_distance)
