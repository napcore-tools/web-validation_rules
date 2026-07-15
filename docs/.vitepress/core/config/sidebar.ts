// Sidebar built from the OKF bundle: sources only (rules are browsed via the
// filterable tables on the rules index pages, not the sidebar).
//
// Built at config-load time (Node/esbuild), where the VitePress virtual `data`
// export is not available - load straight from the data loaders instead.

import rulesDataLoader from '../data-loaders/rules.data';
import sourcesDataLoader from '../data-loaders/sources.data';

/**
 * Generates the site sidebar: rule browsing entry points and the list of sources,
 * each with a rule-count badge derived from the actual bundle contents.
 *
 * @returns Sidebar configuration array shared by all bundle routes
 */
export function getSidebar() {
  const sources = sourcesDataLoader.load();
  const rules = rulesDataLoader.load();

  const countBySource: Record<string, number> = {};
  rules.forEach((rule) => {
    countBySource[rule.source] = (countBySource[rule.source] || 0) + 1;
  });

  return [
    {
      text: 'Rules',
      collapsed: false,
      items: [
        { text: `All rules <span class="sidebar-badge">${rules.length}</span>`, link: '/rules/' },
        ...sources.map((source) => ({
          text: `${source.shortTitle} <span class="sidebar-badge">${countBySource[source.slug] || 0}</span>`,
          link: `/rules/${source.slug}/`,
        })),
      ],
    },
    {
      text: 'Sources',
      collapsed: false,
      items: sources.map((source) => ({
        text: `${source.shortTitle} · ${source.standard}`,
        link: source.url,
      })),
    },
    {
      text: 'Catalogue',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/catalogue' },
        { text: 'Changelog', link: '/log' },
      ],
    },
  ];
}
