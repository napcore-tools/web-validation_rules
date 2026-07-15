---
type: Validation Rule
title: NOTICE_3
description: Notice missing language with alternative text
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: NOTICE_3
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Missing element Lang for Notice Alternative Text`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/notices/Notice/alternativeTexts/AlternativeText/Text[not(@lang)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
