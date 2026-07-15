---
type: Validation Rule
title: big_gap_in_service
description: A service has a gap of more than 13 days between active service dates.
resource: https://gtfs-validator.mobilitydata.org/rules.html#big_gap_in_service
tags:
- mobilitydata
- gtfs
- currency
timestamp: '2026-06-12T00:00:00'
code: big_gap_in_service
standard: GTFS
source: mobilitydata
severity: INFO
category: currency
maturity: draft
---

# Parameters

- `gap_days` = 13

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [big_gap_in_service rule reference](https://gtfs-validator.mobilitydata.org/rules.html#big_gap_in_service)
