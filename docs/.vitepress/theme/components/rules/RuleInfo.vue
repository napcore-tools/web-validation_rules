<script setup lang="ts">
/**
 * Badge row injected under a rule's title by okfMarkdownPlugin.
 * Reads the rule Concept's frontmatter directly (single source of truth) and
 * resolves the source link/title via sources.data.
 */
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { data as sources } from '@/core/data-loaders/sources.data';

const { frontmatter } = useData();

const source = computed(() => sources.find((s) => s.slug === frontmatter.value.source));

/**
 * Severity vocabularies differ per source: MobilityData/Entur use ERROR/WARNING/INFO,
 * DATA4PT uses numeric strings. Named levels get a colour; anything else renders as a
 * neutral badge with the raw value.
 */
const severityClass = computed(() => {
  const value = String(frontmatter.value.severity ?? '').toUpperCase();
  if (value === 'ERROR') return 'severity-error';
  if (value === 'WARNING') return 'severity-warning';
  if (value === 'INFO') return 'severity-info';
  return 'severity-other';
});
</script>

<template>
  <div class="rule-info">
    <span v-if="frontmatter.severity" class="rule-badge" :class="severityClass">
      {{ frontmatter.severity }}
    </span>
    <span v-if="frontmatter.standard" class="rule-badge standard">{{ frontmatter.standard }}</span>
    <span v-if="frontmatter.category" class="rule-badge">{{ frontmatter.category }}</span>
    <span v-if="frontmatter.maturity" class="rule-badge maturity">{{ frontmatter.maturity }}</span>
    <a v-if="source" class="rule-source-link" :href="withBase(source.url)"> {{ source.title }} </a>
  </div>
</template>

<style scoped>
.rule-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 16px 0 24px;
}

.rule-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.rule-badge.severity-error {
  background-color: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
}

.rule-badge.severity-warning {
  background-color: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}

.rule-badge.severity-info {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

/* Unknown vocabularies (e.g. DATA4PT numeric severities) stay neutral */
.rule-badge.severity-other {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
}

.rule-badge.standard {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.rule-badge.maturity {
  font-style: italic;
  font-weight: 500;
}

.rule-source-link {
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.rule-source-link:hover {
  text-decoration: underline;
}
</style>
