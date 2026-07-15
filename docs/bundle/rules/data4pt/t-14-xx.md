---
type: Validation Rule
title: T.14.XX
description: Consistency of the return route
tags:
- data4pt
- netex
- semantic
timestamp: '2026-07-15T00:00:00'
code: T.14.XX
standard: NeTEx
source: data4pt
severity: '20'
category: semantic
maturity: draft
---

# Notes

InverseRouteRef must point to a route belonging to the same line as the examined route (i.e. either have the same LineRef or be referenced by the same line). Code normalized from 'T.14.xx' in the source sheet. Placeholder number in the source sheet (not yet assigned). Upstream numbering clash: T.14.XX is assigned to 2 distinct rules in the source sheet; local -b/-c suffixes keep records apart.

# Details

- **Result:** Error
- **Scope:** **area:** Timetable, **aspect:** Routing, **applies_to:** All usages
- **Mechanism:** code

# Related

- Source: [DATA4PT NeTEx Validation Rules Overview](/sources/data4pt.md)
