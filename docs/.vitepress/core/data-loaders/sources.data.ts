/**
 * VitePress Data Loader for Validation Rule Sources
 *
 * Loads every source Concept from the generated OKF bundle (docs/bundle/sources/*.md)
 * at build time. YAML key order in the bundle is not significant; sources are returned
 * sorted by title.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { validateSourceFrontmatter } from '../validation/rules';
import { handleValidationResult } from '../validation/utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCES_DIR = path.resolve(__dirname, '../../../bundle/sources');

/** One validation rule source Concept from the OKF bundle. */
export interface RuleSource {
  /** Bundle folder slug (e.g. `mobilitydata`) */
  slug: string;
  /** Full title (e.g. "MobilityData canonical GTFS Schedule validator") */
  title: string;
  /** Compact label for navigation (first word of the title, e.g. "MobilityData") */
  shortTitle: string;
  description: string;
  /** Data standard covered (e.g. GTFS, NeTEx) */
  standard: string;
  /** Rule count as declared by the export (actual counts come from rules.data) */
  ruleCount?: number;
  /** Severity values this source uses */
  severityVocabulary: string[];
  /** Upstream reference URL */
  resource?: string;
  /** Site-absolute route (without base), e.g. `/sources/mobilitydata` */
  url: string;
}

declare const data: RuleSource[];
export { data };

export default {
  // VitePress will watch these files for changes and trigger HMR
  watch: ['../../../bundle/sources/*.md'],

  // This function only runs at build time in Node.js environment
  load(): RuleSource[] {
    const files = fs.readdirSync(SOURCES_DIR).filter((file) => file.endsWith('.md') && file !== 'index.md');

    const sources = files.map((file) => {
      const raw = fs.readFileSync(path.join(SOURCES_DIR, file), 'utf-8');
      const { data: fm } = matter(raw);

      const relPath = `bundle/sources/${file}`;
      handleValidationResult(relPath, validateSourceFrontmatter(fm, file.replace(/\.md$/, '')));

      const slug = String(fm.slug ?? file.replace(/\.md$/, ''));
      const title = String(fm.title ?? slug);

      return {
        slug,
        title,
        shortTitle: title.split(/\s+/)[0],
        description: String(fm.description ?? ''),
        standard: String(fm.standard ?? ''),
        ruleCount: typeof fm.rule_count === 'number' ? fm.rule_count : undefined,
        severityVocabulary: Array.isArray(fm.severity_vocabulary) ? fm.severity_vocabulary.map(String) : [],
        resource: typeof fm.resource === 'string' ? fm.resource : undefined,
        url: `/sources/${slug}`,
      };
    });

    sources.sort((a, b) => a.title.localeCompare(b.title));

    return sources;
  },
};
