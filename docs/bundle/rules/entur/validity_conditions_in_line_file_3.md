---
type: Validation Rule
title: VALIDITY_CONDITIONS_IN_LINE_FILE_3
description: ValidityConditions missing in ServiceCalendarFrames
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: VALIDITY_CONDITIONS_IN_LINE_FILE_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Multiple frames of same type without validity conditions`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
ServiceCalendarFrame[not(validityConditions) and count(//ServiceCalendarFrame) > 1]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
