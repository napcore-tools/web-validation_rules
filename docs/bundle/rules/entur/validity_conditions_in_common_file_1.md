---
type: Validation Rule
title: VALIDITY_CONDITIONS_IN_COMMON_FILE_1
description: ValidityConditions missing in ServiceFrame or ServiceCalendarFrame
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: VALIDITY_CONDITIONS_IN_COMMON_FILE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Neither ServiceFrame nor ServiceCalendarFrame defines ValidityConditions`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
ServiceFrame[validityConditions] | ServiceCalendarFrame[validityConditions]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
