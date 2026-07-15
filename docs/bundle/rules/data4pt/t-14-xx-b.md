---
type: Validation Rule
title: T.14.XX-b
description: LINE and ROUTE should be linked consistently
tags:
- data4pt
- netex
- semantic
timestamp: '2026-07-15T00:00:00'
code: T.14.XX-b
standard: NeTEx
source: data4pt
severity: '20'
category: semantic
maturity: draft
---

# Notes

If Route.LineRef is not specified. then it is imperative that a Line.routes.RouteRef reference the route If Route.LineRef is defined. it is imperative that. if the line has Line.routes.RouteRef. at least one of them references the route Code normalized from 'T.14.xx' in the source sheet. Placeholder number in the source sheet (not yet assigned). Upstream numbering clash: T.14.XX is assigned to 2 distinct rules in the source sheet; local -b/-c suffixes keep records apart.

# Details

- **Result:** Error
- **Scope:** **area:** Timetable, **aspect:** Lines, **applies_to:** Profile specific
- **Mechanism:** code

# Related

- Source: [DATA4PT NeTEx Validation Rules Overview](/sources/data4pt.md)
