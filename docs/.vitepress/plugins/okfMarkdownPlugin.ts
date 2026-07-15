import type MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

/**
 * Render-time presentation layer for the generated OKF bundle.
 *
 * The bundle under docs/bundle/ is read-only generated content: rule/source Concepts
 * carry their title only in frontmatter and use H1s for body sections (# Notes,
 * # Details, ...). This plugin adapts them for VitePress at render time - the files
 * on disk are never modified, so a bundle re-export never conflicts with the site.
 */

interface OkfFrontmatter {
  type?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

/**
 * Demotes ATX H1 headings (`# `) to H2 (`## `) so the page has a single H1 and the
 * right-hand outline (levels 2-3) picks up the body sections. Lines inside fenced
 * code blocks are left untouched.
 *
 * @param content - Markdown body (without frontmatter)
 * @param keepFirst - Keep the first H1 as-is (for pages whose first H1 is the title)
 */
function demoteH1s(content: string, keepFirst: boolean): string {
  let insideFence = false;
  let firstSeen = false;

  return content
    .split('\n')
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        insideFence = !insideFence;
        return line;
      }
      if (!insideFence && line.startsWith('# ')) {
        if (keepFirst && !firstSeen) {
          firstSeen = true;
          return line;
        }
        return `#${line}`;
      }
      return line;
    })
    .join('\n');
}

/**
 * Builds the injected header for a rule/source Concept: H1 title, description
 * blockquote and (for rules) the RuleInfo badge row.
 */
function conceptHeader(data: OkfFrontmatter, withRuleInfo: boolean): string {
  let header = '';
  if (data.title) {
    header += `# ${data.title}\n\n`;
  }
  if (data.description) {
    header += `> ${data.description}\n\n`;
  }
  if (withRuleInfo) {
    header += `<RuleInfo />\n\n`;
  }
  return header;
}

/**
 * Resolves the page's path inside the bundle (e.g. `rules/entur/authority_1.md`),
 * or null for non-bundle pages. Two rendering contexts must be handled:
 * - markdownToVue applies the site's rewrites first, so `env.relativePath` is the
 *   rewritten route path and `env.realPath` holds the physical file path;
 * - the local-search indexer passes the physical path as `env.relativePath` and
 *   sets no `realPath`.
 */
function bundlePath(env: Record<string, unknown>): string | null {
  const relativePath = typeof env?.relativePath === 'string' ? env.relativePath : '';
  if (relativePath.startsWith('bundle/')) {
    return relativePath.slice('bundle/'.length);
  }
  const realPath = typeof env?.realPath === 'string' ? env.realPath.replace(/\\/g, '/') : '';
  if (realPath.includes('/bundle/')) {
    // Rewritten context: relativePath is already bundle-internal (the rewrite
    // strips the bundle/ prefix; bundle/index.md becomes catalogue.md).
    return relativePath;
  }
  return null;
}

/**
 * Custom markdown-it plugin adapting OKF bundle pages for VitePress.
 * Keyed off the Concept `type` frontmatter and the page path; non-bundle pages
 * are rendered unchanged.
 *
 * Note: VitePress 2 renders pages via markdown-it-async's `renderAsync`, which
 * delegates to `this.render`, so overriding the instance `render` still
 * intercepts every page.
 *
 * @param md - MarkdownIt instance to extend
 */
export function okfMarkdownPlugin(md: MarkdownIt) {
  const originalRender = md.render.bind(md);

  md.render = (src: string, env: Record<string, unknown>) => {
    const pagePath = bundlePath(env);
    if (pagePath === null) {
      return originalRender(src, env);
    }

    const { data, content } = matter(src) as { data: OkfFrontmatter; content: string };

    // Rule listing pages: the generated flat link lists are replaced with the
    // filterable RuleBrowser (scoped to one source on per-source pages).
    const sourceIndexMatch = pagePath.match(/^rules\/([^/]+)\/index\.md$/);
    if (pagePath === 'rules/index.md' || sourceIndexMatch) {
      const heading = content.split('\n').find((line) => line.startsWith('# ')) ?? '# Validation Rules';
      const browser = sourceIndexMatch ? `<RuleBrowser source="${sourceIndexMatch[1]}" />` : '<RuleBrowser />';
      return originalRender(src.replace(content, `${heading}\n\n${browser}\n`), env);
    }

    let transformed: string;
    if (data.type === 'Validation Rule' || data.type === 'Validation Rule Source') {
      // Concept pages have no H1 title of their own; inject it and demote all
      // body section H1s. Rule pages additionally get the collapsible metadata
      // box at the end.
      const isRule = data.type === 'Validation Rule';
      const header = conceptHeader(data, isRule);
      const footer = isRule ? '\n\n<RuleMetadata />\n' : '';
      transformed = header + demoteH1s(content, false) + footer;
    } else {
      // Remaining bundle pages (catalogue overview, changelog, sources index) start
      // with a title H1 but may use further H1s as sections.
      transformed = demoteH1s(content, true);
    }

    return originalRender(src.replace(content, transformed), env);
  };
}
