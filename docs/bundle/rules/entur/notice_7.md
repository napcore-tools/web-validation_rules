---
type: Validation Rule
title: NOTICE_7
description: Notice assignment missing reference to notice
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: NOTICE_7
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The notice assignment does not reference a notice`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/noticeAssignments/NoticeAssignment[not(NoticeRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
