---
type: Validation Rule
title: fare_transfer_rule_with_forbidden_transfer_count
description: A row from `fare_transfer_rules.txt` has `from_leg_group_id` not equal
  to `to_leg_group_id`, but has `transfer_count` specified.
resource: https://gtfs-validator.mobilitydata.org/rules.html#fare_transfer_rule_with_forbidden_transfer_count
tags:
- mobilitydata
- gtfs
- integrity
timestamp: '2026-06-12T00:00:00'
code: fare_transfer_rule_with_forbidden_transfer_count
standard: GTFS
source: mobilitydata
severity: ERROR
category: integrity
maturity: draft
---

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [fare_transfer_rule_with_forbidden_transfer_count rule reference](https://gtfs-validator.mobilitydata.org/rules.html#fare_transfer_rule_with_forbidden_transfer_count)
