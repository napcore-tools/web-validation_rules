import { defineConfig } from 'vitepress';
import { getSidebar } from './core/config/sidebar';
import { okfMarkdownPlugin } from './plugins/okfMarkdownPlugin';
import { collapsePlugin } from './plugins/collapsePlugin';
import { chapterPlugin } from './plugins/chapterPlugin';
import llmstxtPlugin from 'vitepress-plugin-llmstxt';
import { fileURLToPath, URL } from 'node:url';

// Use process.env to read the variable.
// If the variable is not set, default to '/' (root path).
const BASE_PATH = process.env.VITEPRESS_BASE || '/';

export default defineConfig({
  title: 'NAPCORE Validation Rules',
  description: 'Validation rule catalogue for EU mobility data standards',
  // Dynamically set the base path for assets and routing
  base: BASE_PATH,

  // The OKF bundle under docs/bundle/ is generated (read-only) and its internal
  // links are root-absolute, assuming the bundle root is the site root. Serve it
  // there by stripping the bundle/ prefix; the bundle's own index moves aside so
  // the hand-crafted docs/index.md stays the home page.
  rewrites(id) {
    if (id === 'bundle/index.md') return 'catalogue.md';
    if (id.startsWith('bundle/')) return id.slice('bundle/'.length);
    return id;
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'alternate', type: 'text/markdown', title: 'LLM-friendly documentation', href: '/llms.txt' }],
    [
      'link',
      { rel: 'alternate', type: 'text/markdown', title: 'Complete LLM-friendly documentation', href: '/llms-full.txt' },
    ],
    ['meta', { name: 'theme-color', content: '#0066cc' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NAPCORE Validation Rules' }],
    ['meta', { property: 'og:description', content: 'Validation rule catalogue for EU mobility data standards' }],
  ],
  markdown: {
    // Shiki has no XPath grammar; Entur rule implementations use ```xpath fences
    languageAlias: { xpath: 'txt' },
    config: (md) => {
      md.use(okfMarkdownPlugin);
      md.use(collapsePlugin);
      md.use(chapterPlugin);
    },
  },

  themeConfig: {
    logo: 'https://napcore.eu/wp-content/themes/napcore/images/napcore-logo.png',

    outline: {
      level: [2, 3],
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules/' },
      { text: 'Sources', link: '/sources/' },
      { text: 'Overview', link: '/catalogue' },
    ],

    sidebar: {
      '/rules/': { base: '/', items: getSidebar() },
      '/sources/': { base: '/', items: getSidebar() },
      '/catalogue': { base: '/', items: getSidebar() },
      '/log': { base: '/', items: getSidebar() },
      '/help': { base: '/', items: getSidebar() },
    },

    socialLinks: [
      { icon: 'gitlab', link: 'https://gitlab.com/tamtamresearch/personal/roman/validator.mobilitydata/web' },
    ],

    footer: {
      message: 'Co-financed by the Connecting Europe Facility of the European Union',
      copyright: 'Copyright © 2026 NAPCORE - National Access Point Coordination Organisation for Europe',
    },

    search: {
      provider: 'local',
      options: {
        // Fold rule frontmatter (code, standard, severity, category, tags) into the
        // local search index, so a rule is findable by its metadata even though those
        // values only appear in the RuleInfo component (invisible to the indexer).
        async _render(src, env, md) {
          const html = await md.renderAsync(src, env);
          const fm = env.frontmatter;
          if (fm?.search === false) return '';
          if (fm?.type === 'Validation Rule') {
            const meta = [
              typeof fm.code === 'string' ? fm.code : '',
              typeof fm.standard === 'string' ? fm.standard : '',
              typeof fm.severity === 'string' ? fm.severity : '',
              typeof fm.category === 'string' ? fm.category : '',
              ...(Array.isArray(fm.tags) ? fm.tags : []),
            ].filter(Boolean);
            if (meta.length) return `${html}\n<p>${md.utils.escapeHtml(meta.join(' '))}</p>`;
          }
          return html;
        },
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search rules',
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
            },
          },
        },
      },
    },
  },

  vite: {
    plugins: [llmstxtPlugin()],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
  },
});
