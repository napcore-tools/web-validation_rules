---
type: Validation Rule
title: equal_shape_distance_diff_coordinates_distance_below_threshold
description: Two consecutive points have equal `shape_dist_traveled` and different
  lat/lon coordinates in `shapes.txt` and the distance between the two points is greater
  than 0 but less than 1.11m.
resource: https://gtfs-validator.mobilitydata.org/rules.html#equal_shape_distance_diff_coordinates_distance_below_threshold
tags:
- mobilitydata
- gtfs
- semantic
timestamp: '2026-06-12T00:00:00'
code: equal_shape_distance_diff_coordinates_distance_below_threshold
standard: GTFS
source: mobilitydata
severity: WARNING
category: semantic
maturity: draft
---

# Parameters

- `distance_threshold_m` = 1.11

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [equal_shape_distance_diff_coordinates_distance_below_threshold rule reference](https://gtfs-validator.mobilitydata.org/rules.html#equal_shape_distance_diff_coordinates_distance_below_threshold)
