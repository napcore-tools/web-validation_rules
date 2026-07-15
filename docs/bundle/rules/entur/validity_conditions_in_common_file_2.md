---
type: Validation Rule
title: VALIDITY_CONDITIONS_IN_COMMON_FILE_2
description: ValidityConditions missing in ResourceFrames
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: VALIDITY_CONDITIONS_IN_COMMON_FILE_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Multiple ResourceFrames without validity conditions`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
ResourceFrame[not(validityConditions) and count(//ResourceFrame) > 1]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
