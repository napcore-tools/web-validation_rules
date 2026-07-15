---
type: Validation Rule
title: FLEXIBLE_SERVICE_1
description: FlexibleService missing Id on FlexibleServiceProperties
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: FLEXIBLE_SERVICE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing id on FlexibleServiceProperties`
- **Scope:** **frame:** TimetableFrame

# Implementation

```xpath
vehicleJourneys/ServiceJourney/FlexibleServiceProperties[not(@id)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
