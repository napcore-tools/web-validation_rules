<script setup lang="ts">
/**
 * Filterable rule table injected on the rules index pages by okfMarkdownPlugin.
 * Global on /rules/, scoped to one source via the `source` prop on /rules/<source>/.
 * Fed by rules.data (the OKF bundle frontmatter) - no page content is duplicated.
 */
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';
import { data as allRules } from '@/core/data-loaders/rules.data';
import { data as sources } from '@/core/data-loaders/sources.data';

const props = defineProps<{
  /** Source slug to scope the table to; omit for the global browser */
  source?: string;
}>();

const query = ref('');
const selectedSource = ref('');
const selectedSeverity = ref('');
const selectedCategory = ref('');

const scopedRules = computed(() => (props.source ? allRules.filter((rule) => rule.source === props.source) : allRules));

// filter(Boolean): deprecated rules have no severity
const severityOptions = computed(() =>
  [...new Set(scopedRules.value.map((rule) => rule.severity))].filter(Boolean).sort()
);
const categoryOptions = computed(() =>
  [...new Set(scopedRules.value.map((rule) => rule.category))].filter(Boolean).sort()
);

const filteredRules = computed(() => {
  const text = query.value.trim().toLowerCase();
  return scopedRules.value.filter((rule) => {
    if (selectedSource.value && rule.source !== selectedSource.value) return false;
    if (selectedSeverity.value && rule.severity !== selectedSeverity.value) return false;
    if (selectedCategory.value && rule.category !== selectedCategory.value) return false;
    if (text) {
      const haystack = `${rule.code} ${rule.title} ${rule.description} ${rule.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(text)) return false;
    }
    return true;
  });
});

const hasFilters = computed(
  () =>
    query.value !== '' || selectedSource.value !== '' || selectedSeverity.value !== '' || selectedCategory.value !== ''
);

/**
 * Compact source label for the table column (e.g. "MobilityData" instead of the
 * full validator title).
 */
function sourceLabel(slug: string): string {
  return sources.find((s) => s.slug === slug)?.shortTitle ?? slug;
}

function clearFilters() {
  query.value = '';
  selectedSource.value = '';
  selectedSeverity.value = '';
  selectedCategory.value = '';
}
</script>

<template>
  <div class="rule-browser">
    <div class="rule-filters">
      <input v-model="query" type="search" class="rule-search" placeholder="Filter by code, title or description…" />

      <select v-if="!props.source" v-model="selectedSource" class="rule-select" aria-label="Filter by source">
        <option value="">All sources</option>
        <option v-for="s in sources" :key="s.slug" :value="s.slug">{{ s.shortTitle }} ({{ s.standard }})</option>
      </select>

      <select v-model="selectedSeverity" class="rule-select" aria-label="Filter by severity">
        <option value="">All severities</option>
        <option v-for="severity in severityOptions" :key="severity" :value="severity">{{ severity }}</option>
      </select>

      <select v-model="selectedCategory" class="rule-select" aria-label="Filter by category">
        <option value="">All categories</option>
        <option v-for="category in categoryOptions" :key="category" :value="category">{{ category }}</option>
      </select>

      <button v-if="hasFilters" class="rule-clear" @click="clearFilters">Clear</button>
    </div>

    <p class="rule-count">{{ filteredRules.length }} of {{ scopedRules.length }} rules</p>

    <div class="rule-table-wrapper">
      <table class="rule-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th v-if="!props.source">Source</th>
            <th>Severity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rule in filteredRules" :key="rule.url">
            <td class="rule-code">
              <a :href="withBase(rule.url)">{{ rule.code }}</a>
            </td>
            <td>{{ rule.description }}</td>
            <td v-if="!props.source" class="rule-source">{{ sourceLabel(rule.source) }}</td>
            <td class="rule-severity">{{ rule.severity }}</td>
            <td class="rule-category">{{ rule.category }}</td>
          </tr>
          <tr v-if="filteredRules.length === 0">
            <td :colspan="props.source ? 4 : 5" class="rule-empty">No rules match the current filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.rule-browser {
  margin: 24px 0;
}

.rule-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.rule-search {
  flex: 1 1 240px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.rule-search:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.rule-select {
  padding: 6px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.rule-clear {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  cursor: pointer;
}

.rule-clear:hover {
  border-color: var(--vp-c-brand-1);
}

.rule-count {
  margin: 12px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.rule-table-wrapper {
  overflow-x: auto;
  margin-top: 8px;
}

.rule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.rule-table th {
  text-align: left;
  padding: 8px 12px;
  border-bottom: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-weight: 600;
  white-space: nowrap;
}

.rule-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: top;
}

.rule-code {
  white-space: nowrap;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
}

.rule-code a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.rule-code a:hover {
  text-decoration: underline;
}

.rule-source,
.rule-severity,
.rule-category {
  white-space: nowrap;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.rule-empty {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 24px 12px;
}
</style>
