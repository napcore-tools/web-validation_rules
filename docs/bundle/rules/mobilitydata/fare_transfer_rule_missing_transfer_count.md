---
type: Validation Rule
title: fare_transfer_rule_missing_transfer_count
description: A row from `fare_transfer_rules.txt` has `from_leg_group_id` equal to
  `to_leg_group_id`, but has no `transfer_count` specified.
resource: https://gtfs-validator.mobilitydata.org/rules.html#fare_transfer_rule_missing_transfer_count
tags:
- mobilitydata
- gtfs
- integrity
- deprecated
timestamp: '2026-06-12T00:00:00'
code: fare_transfer_rule_missing_transfer_count
standard: GTFS
source: mobilitydata
category: integrity
maturity: deprecated
severity: null
---

# Notes

Replaced by fare_transfer_rule_without_transfer_count.

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [fare_transfer_rule_missing_transfer_count rule reference](https://gtfs-validator.mobilitydata.org/rules.html#fare_transfer_rule_missing_transfer_count)
