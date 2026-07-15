---
type: Validation Rule
title: COMPOSITE_FRAME_SITE_FRAME
description: CompositeFrame - unexpected SiteFrame
tags:
- entur
- netex
- structure
timestamp: '2026-06-12T00:00:00'
code: COMPOSITE_FRAME_SITE_FRAME
standard: NeTEx
source: entur
severity: WARNING
category: structure
maturity: draft
---

# Details

- **Message:** `Unexpected element SiteFrame. It will be ignored`
- **Scope:** **frame:** CompositeFrame

# Implementation

```xpath
frames/SiteFrame
```

# Related

- Source: [Entur netex-validator-java](/sources/entur.md)

# Citations

[1] [Entur netex-validator-java](https://github.com/entur/netex-validator-java)
