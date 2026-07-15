---
type: Validation Rule
title: PASSENGER_STOP_ASSIGNMENT_2
description: PassengerStopAssignment missing QuayRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: PASSENGER_STOP_ASSIGNMENT_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing QuayRef on PassengerStopAssignment`
- **Scope:** **frame:** ServiceFrame

# Implementation

```xpath
stopAssignments/PassengerStopAssignment[not(QuayRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
