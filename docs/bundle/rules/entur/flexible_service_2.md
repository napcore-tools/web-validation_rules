---
type: Validation Rule
title: FLEXIBLE_SERVICE_2
description: FlexibleService missing version on FlexibleServiceProperties
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_SERVICE_2
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `Missing version on FlexibleServiceProperties`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/FlexibleServiceProperties[not(@version)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
