---
type: Validation Rule
title: service_extends_far_in_the_future
description: A service end date is more than 2 years in the future.
resource: https://gtfs-validator.mobilitydata.org/rules.html#service_extends_far_in_the_future
tags:
- mobilitydata
- gtfs
- currency
timestamp: '2026-06-12T00:00:00'
code: service_extends_far_in_the_future
standard: GTFS
source: mobilitydata
severity: INFO
category: currency
maturity: draft
---

# Parameters

- `horizon_years` = 2

# Related

- Source: [MobilityData canonical GTFS Schedule validator](/sources/mobilitydata.md)

# Citations

[1] [service_extends_far_in_the_future rule reference](https://gtfs-validator.mobilitydata.org/rules.html#service_extends_far_in_the_future)
