---
type: Validation Rule
title: VALIDITY_CONDITIONS_IN_COMMON_FILE_3
description: ValidityConditions missing in ServiceFrames
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: VALIDITY_CONDITIONS_IN_COMMON_FILE_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Multiple ServiceFrames without validity conditions`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
ServiceFrame[not(validityConditions) and count(//ServiceFrame) > 1]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
