---
type: Validation Rule
title: TIMETABLE_FRAME_IN_COMMON_FILE
description: TimetableFrame illegal in Common file
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: TIMETABLE_FRAME_IN_COMMON_FILE
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Timetable frame not allowed in common files`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
TimetableFrame
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
