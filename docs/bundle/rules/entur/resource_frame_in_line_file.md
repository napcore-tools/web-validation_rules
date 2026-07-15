---
type: Validation Rule
title: RESOURCE_FRAME_IN_LINE_FILE
description: ResourceFrame must be exactly one
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: RESOURCE_FRAME_IN_LINE_FILE
standard: NeTEx
source: entur
severity: ERROR
category: structure
maturity: draft
---

# Details

- **Message:** `Exactly one ResourceFrame should be present`
- **Scope:** **frame:** SingleFrames

# Implementation

```xpath
ResourceFrame
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
