---
type: Validation Rule
title: transfer_with_invalid_stop_location_type
description: A stop id field from GTFS file `transfers.txt` references a stop that
  has a `location_type` other than 0 or 1 (aka Stop/Platform or Station).
resource: https://gtfs-validator.mobilitydata.org/rules.html#transfer_with_invalid_stop_location_type
tags:
- mobilitydata
- gtfs
- integrity
timestamp: '2026-06-12T00:00:00'
code: transfer_with_invalid_stop_location_type
standard: GTFS
source: mobilitydata
severity: ERROR
category: integrity
maturity: draft
---

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [transfer_with_invalid_stop_location_type rule reference](https://gtfs-validator.mobilitydata.org/rules.html#transfer_with_invalid_stop_location_type)
