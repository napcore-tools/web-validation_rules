---
type: Validation Rule
title: NOTICE_6
description: Notice assignment missing reference to noticed object
tags:
- entur
- netex
- integrity
timestamp: '2026-06-12T00:00:00'
code: NOTICE_6
standard: NeTEx
source: entur
severity: ERROR
category: integrity
maturity: draft
---

# Details

- **Message:** `The notice assignment does not reference an object`
- **Scope:** **frame:** MultipleFrames

# Implementation

```xpath
(ServiceFrame | TimetableFrame)/noticeAssignments/NoticeAssignment[not(NoticedObjectRef)]
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
