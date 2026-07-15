---
type: Validation Rule
title: PASSENGER_STOP_ASSIGNMENT_1
description: PassengerStopAssignment missing ScheduledStopPointRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: PASSENGER_STOP_ASSIGNMENT_1
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing ScheduledStopPointRef on PassengerStopAssignment`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
stopAssignments/PassengerStopAssignment[not(ScheduledStopPointRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
