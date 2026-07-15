<script setup lang="ts">
/**
 * Collapsible metadata box appended to every rule page by okfMarkdownPlugin.
 * Shows the complete rule Concept frontmatter as a table; collapsed by default
 * so it complements the RuleInfo badge row without cluttering the page.
 */
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { data as sources } from '@/core/data-loaders/sources.data';

const { frontmatter } = useData();

const source = computed(() => sources.find((s) => s.slug === frontmatter.value.source));

const tags = computed(() => {
  const value = frontmatter.value.tags;
  return Array.isArray(value) ? value.join(', ') : '';
});

/** Date part of the Concept timestamp (e.g. '2026-07-15T00:00:00' → '2026-07-15'). */
const retrieved = computed(() => {
  const value = frontmatter.value.timestamp;
  return typeof value === 'string' ? value.split('T')[0] : '';
});
</script>

<template>
  <details class="rule-metadata">
    <summary>Rule metadata</summary>
    <table>
      <tbody>
        <tr v-if="frontmatter.code">
          <th scope="row">Code</th>
          <td>
            <code>{{ frontmatter.code }}</code>
          </td>
        </tr>
        <tr v-if="frontmatter.standard">
          <th scope="row">Standard</th>
          <td>{{ frontmatter.standard }}</td>
        </tr>
        <tr v-if="source">
          <th scope="row">Source</th>
          <td>
            <a :href="withBase(source.url)">{{ source.title }}</a>
          </td>
        </tr>
        <tr v-if="frontmatter.severity">
          <th scope="row">Severity</th>
          <td>{{ frontmatter.severity }}</td>
        </tr>
        <tr v-if="frontmatter.category">
          <th scope="row">Category</th>
          <td>{{ frontmatter.category }}</td>
        </tr>
        <tr v-if="frontmatter.maturity">
          <th scope="row">Maturity</th>
          <td>{{ frontmatter.maturity }}</td>
        </tr>
        <tr v-if="tags">
          <th scope="row">Tags</th>
          <td>{{ tags }}</td>
        </tr>
        <tr v-if="retrieved">
          <th scope="row">Retrieved</th>
          <td>{{ retrieved }}</td>
        </tr>
        <tr v-if="frontmatter.resource">
          <th scope="row">Reference</th>
          <td>
            <a :href="frontmatter.resource" target="_blank" rel="noreferrer">{{ frontmatter.resource }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </details>
</template>

<style scoped>
.rule-metadata {
  margin: 32px 0 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.rule-metadata summary {
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  user-select: none;
}

.rule-metadata summary:hover {
  color: var(--vp-c-brand-1);
}

.rule-metadata table {
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: collapse;
  font-size: 14px;
}

.rule-metadata th {
  width: 8em;
  padding: 6px 16px;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  text-align: left;
  vertical-align: top;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: none;
  white-space: nowrap;
}

.rule-metadata td {
  padding: 6px 16px;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  overflow-wrap: anywhere;
}

.rule-metadata a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.rule-metadata a:hover {
  text-decoration: underline;
}
</style>
