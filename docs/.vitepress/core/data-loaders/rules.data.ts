/**
 * VitePress Data Loader for Validation Rules
 *
 * Loads every rule Concept from the generated OKF bundle (docs/bundle/rules/<source>/*.md)
 * at build time. The bundle is read-only generated content; this loader is the single
 * source of truth for rule metadata used by the sidebar, home page stats and RuleBrowser.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { validateRuleFrontmatter } from '../validation/rules';
import { handleValidationResult } from '../validation/utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RULES_DIR = path.resolve(__dirname, '../../../bundle/rules');

/** One validation rule Concept from the OKF bundle. */
export interface Rule {
  /** Source's own rule code, verbatim (e.g. `foreign_key_violation`, `C.01.02`, `AUTHORITY_1`) */
  code: string;
  title: string;
  description: string;
  /** Data standard the rule applies to (e.g. GTFS, NeTEx) */
  standard: string;
  /** Slug of the source the rule comes from (bundle folder name) */
  source: string;
  /** Severity in the source's own vocabulary (ERROR/WARNING/INFO or numeric strings) */
  severity: string;
  category: string;
  maturity: string;
  tags: string[];
  /** Optional upstream reference URL */
  resource?: string;
  /** Site-absolute route (without base), e.g. `/rules/entur/authority_1` */
  url: string;
}

declare const data: Rule[];
export { data };

export default {
  // VitePress will watch these files for changes and trigger HMR
  watch: ['../../../bundle/rules/**/*.md'],

  // This function only runs at build time in Node.js environment
  load(): Rule[] {
    const rules: Rule[] = [];

    const sourceDirs = fs
      .readdirSync(RULES_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    for (const sourceSlug of sourceDirs) {
      const dir = path.join(RULES_DIR, sourceSlug);
      const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md') && file !== 'index.md');

      for (const file of files) {
        const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
        const { data: fm } = matter(raw);

        const relPath = `bundle/rules/${sourceSlug}/${file}`;
        handleValidationResult(relPath, validateRuleFrontmatter(fm, sourceSlug));

        rules.push({
          code: String(fm.code ?? ''),
          title: String(fm.title ?? ''),
          description: String(fm.description ?? ''),
          standard: String(fm.standard ?? ''),
          source: String(fm.source ?? sourceSlug),
          severity: String(fm.severity ?? ''),
          category: String(fm.category ?? ''),
          maturity: String(fm.maturity ?? ''),
          tags: Array.isArray(fm.tags) ? fm.tags.map(String) : [],
          resource: typeof fm.resource === 'string' ? fm.resource : undefined,
          url: `/rules/${sourceSlug}/${file.replace(/\.md$/, '')}`,
        });
      }
    }

    // Stable order: by source, then by code
    rules.sort((a, b) => a.source.localeCompare(b.source) || a.code.localeCompare(b.code));

    return rules;
  },
};
