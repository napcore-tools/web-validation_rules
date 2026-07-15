---
type: Validation Rule
title: SERVICE_JOURNEY_12
description: ServiceJourney missing OperatorRef
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: SERVICE_JOURNEY_12
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing OperatorRef on ServiceJourney (not defined on Line)`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney[not(OperatorRef) and not(//ServiceFrame/lines/*[self::Line or self::FlexibleLine]/OperatorRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
