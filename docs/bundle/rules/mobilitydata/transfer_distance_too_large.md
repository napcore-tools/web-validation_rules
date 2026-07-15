---
type: Validation Rule
title: transfer_distance_too_large
description: The transfer distance from stop to stop in `transfers.txt` is larger
  than 10 km.
resource: https://gtfs-validator.mobilitydata.org/rules.html#transfer_distance_too_large
tags:
- mobilitydata
- gtfs
- plausibility
timestamp: '2026-06-12T00:00:00'
code: transfer_distance_too_large
standard: GTFS
source: mobilitydata
severity: WARNING
category: plausibility
maturity: draft
---

# Parameters

- `max_distance_km` = 10

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [transfer_distance_too_large rule reference](https://gtfs-validator.mobilitydata.org/rules.html#transfer_distance_too_large)
