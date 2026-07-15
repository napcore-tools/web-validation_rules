---
type: Validation Rule
title: NOTICE_2
description: Notice missing Text with alternative text
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: NOTICE_2
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing or empty element Text for Notice Alternative Text`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/notices/Notice/alternativeTexts/AlternativeText[not(Text) or normalize-space(Text/text()) = '']
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
