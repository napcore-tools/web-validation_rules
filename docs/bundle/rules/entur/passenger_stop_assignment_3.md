---
type: Validation Rule
title: PASSENGER_STOP_ASSIGNMENT_3
description: PassengerStopAssignment duplicated Quay assignment
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: PASSENGER_STOP_ASSIGNMENT_3
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `The same quay is assigned more than once in PassengerStopAssignments`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
stopAssignments/PassengerStopAssignment[QuayRef/@ref = following-sibling::PassengerStopAssignment/QuayRef/@ref]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
