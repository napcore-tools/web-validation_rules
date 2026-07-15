---
type: Validation Rule
title: NOTICE_1
description: Notice missing Text
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: NOTICE_1
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing element Text for Notice`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/notices/Notice[not(Text) or normalize-space(Text/text()) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
