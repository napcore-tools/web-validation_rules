---
type: Validation Rule
title: trip_with_shape_dist_traveled_but_no_shape_distances
description: A trip has shape_dist_traveled values in stop_times.txt but the shape
  referenced by the trip's shape_id does not have shape_dist_traveled values on all
  of its points in shapes.txt.
resource: https://gtfs-validator.mobilitydata.org/rules.html#trip_with_shape_dist_traveled_but_no_shape_distances
tags:
- mobilitydata
- gtfs
- semantic
timestamp: '2026-06-12T00:00:00'
code: trip_with_shape_dist_traveled_but_no_shape_distances
standard: GTFS
source: mobilitydata
severity: INFO
category: semantic
maturity: draft
---

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [trip_with_shape_dist_traveled_but_no_shape_distances rule reference](https://gtfs-validator.mobilitydata.org/rules.html#trip_with_shape_dist_traveled_but_no_shape_distances)
