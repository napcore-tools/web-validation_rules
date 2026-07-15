---
type: Validation Rule
title: equal_shape_distance_diff_coordinates
description: Two consecutive points have equal `shape_dist_traveled` and different
  lat/lon coordinates in `shapes.txt` and the distance between the two points is greater
  than the 1.11m.
resource: https://gtfs-validator.mobilitydata.org/rules.html#equal_shape_distance_diff_coordinates
tags:
- mobilitydata
- gtfs
- semantic
timestamp: '2026-06-12T00:00:00'
code: equal_shape_distance_diff_coordinates
standard: GTFS
source: mobilitydata
severity: ERROR
category: semantic
maturity: draft
---

# Parameters

- `distance_threshold_m` = 1.11

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [equal_shape_distance_diff_coordinates rule reference](https://gtfs-validator.mobilitydata.org/rules.html#equal_shape_distance_diff_coordinates)
