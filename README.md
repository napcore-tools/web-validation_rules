# NAPCORE Validation Rules

> Validation rule catalogue for EU mobility data standards

A website presenting validation rules for public transport data exchange as a
cross-source registry - GTFS and NeTEx today, SIRI and DATEX II to come. The rules are
kept as an [OKF (Open Knowledge Format)](https://pypi.org/project/google-okf/) knowledge
bundle and rendered with VitePress.

## Architecture

The site has two layers:

- **`docs/bundle/` - the OKF bundle (generated, read-only).** One markdown "Concept"
  per rule (`bundle/rules/<source>/*.md`) and per source (`bundle/sources/*.md`), each
  carrying its metadata in YAML frontmatter. The bundle is exported by the
  `yaml2okf.py` pipeline in the companion rule-catalogue repository and copied here
  verbatim. **Never edit bundle files by hand** - a re-export overwrites them.
- **Everything else - the site chrome.** VitePress config, theme, components and data
  loaders derive all presentation (navigation, tables, badges, stats) from the bundle
  frontmatter at build time.

Key mechanisms:

- **Rewrites** (`docs/.vitepress/config.ts`): the bundle's internal links are
  root-absolute, so bundle pages are served at the site root by stripping the
  `bundle/` prefix (`bundle/rules/entur/authority_1.md` → `/rules/entur/authority_1`).
  The bundle's own `index.md` is served as `/catalogue`; `log.md` as `/log`.
- **Data loaders** (`docs/.vitepress/core/data-loaders/rules.data.ts`,
  `sources.data.ts`): scan the bundle frontmatter and feed the sidebar, home page
  stats, and the rule browser. Frontmatter is validated at build time - a broken
  export fails a production build.
- **`okfMarkdownPlugin`** (`docs/.vitepress/plugins/okfMarkdownPlugin.ts`): adapts
  bundle pages at render time (injects the title and description from frontmatter,
  demotes body H1 sections to H2, injects the `<RuleInfo />` badge row, and replaces
  the generated flat rule lists with the `<RuleBrowser />` filterable table). Files on
  disk are never modified.

## Updating the rules

1. Re-export the bundle in the companion repository (`tools/yaml2okf.py`).
2. Replace the contents of `docs/bundle/` with the new export.
3. Build. Counts, tables and navigation update automatically; frontmatter validation
   fails the build if the export is malformed.

## Quick Start

### Prerequisites

- Node.js 18+

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the site locally.

### Build for Production

```bash
npm run build
npm run preview
```

The base path can be overridden with the `VITEPRESS_BASE` environment variable
(used for deployments under a subpath, e.g. GitLab Pages).

### Checks

```bash
npm run lint
npm run type-check
npm run format
```

## Custom Markdown Directives

Generic directives available for hand-crafted pages:

- `+++ chapter ## Heading {open}` … `+++` - collapsible section with a heading
  (`docs/.vitepress/plugins/chapterPlugin.ts`)
- `+++ collapse Title` … `+++` - plain collapsible section
  (`docs/.vitepress/plugins/collapsePlugin.ts`)
- `::: details Title {.plain}` … `:::` - Wikipedia-style minimal collapsible

## Project Structure

```
web-validator-rules/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts                  # VitePress config, rewrites, nav, search
│   │   ├── core/
│   │   │   ├── config/sidebar.ts      # Sidebar built from the bundle
│   │   │   ├── data-loaders/          # rules.data.ts, sources.data.ts
│   │   │   ├── validation/            # Bundle frontmatter validation
│   │   │   └── utils/                 # Generic helpers
│   │   ├── plugins/                   # okfMarkdownPlugin, chapter/collapse
│   │   └── theme/
│   │       └── components/rules/      # RuleInfo, RuleBrowser, SourceCards
│   ├── bundle/                        # OKF bundle (generated - do not edit)
│   │   ├── index.md                   # → /catalogue
│   │   ├── log.md                     # → /log (changelog)
│   │   ├── sources/                   # → /sources/<slug>
│   │   └── rules/<source>/            # → /rules/<source>/<rule>
│   ├── public/                        # favicon, logo
│   └── index.md                       # Home page
├── package.json
└── README.md
```

## About NAPCORE

**NAPCORE** (National Access Point Coordination Organisation for Europe) improves
interoperability of National Access Points as the backbone of European mobility data
exchange. Learn more at [napcore.eu](https://napcore.eu).

## License

- **Catalogue Content**: CC BY 4.0
- **Code**: MIT License
- **Individual rules**: see the respective source's licence

## Acknowledgments

- Rule sources: MobilityData (canonical GTFS Schedule validator), DATA4PT (NeTEx
  validation rules overview), Entur (netex-validator-java)
- European Commission through the Connecting Europe Facility
