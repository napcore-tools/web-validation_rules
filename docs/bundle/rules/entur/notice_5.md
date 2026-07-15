---
type: Validation Rule
title: NOTICE_5
description: Notice duplicated assignment
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: NOTICE_5
standard: NeTEx
source: entur
severity: WARNING
category: integrity
maturity: draft
---

# Details

- **Message:** `The notice is assigned multiple times to the same object`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/noticeAssignments/NoticeAssignment[for $a in following-sibling::NoticeAssignment return if(NoticeRef/@ref= $a/NoticeRef/@ref and NoticedObjectRef/@ref= $a/NoticedObjectRef/@ref) then $a else ()]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
