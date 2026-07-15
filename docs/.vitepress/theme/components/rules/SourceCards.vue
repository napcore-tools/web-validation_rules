<script setup lang="ts">
/**
 * Home page overview: catalogue stats and one card per rule source.
 * All numbers are derived from the OKF bundle via the data loaders, never hard-coded,
 * so a bundle re-export updates the home page automatically.
 */
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { data as rules } from '@/core/data-loaders/rules.data';
import { data as sources } from '@/core/data-loaders/sources.data';

const standards = computed(() => [...new Set(sources.map((source) => source.standard))].sort());

function ruleCount(slug: string): number {
  return rules.filter((rule) => rule.source === slug).length;
}
</script>

<template>
  <div class="source-cards">
    <div class="catalogue-stats">
      <div class="stat">
        <span class="stat-number">{{ rules.length }}</span>
        <span class="stat-label">rules</span>
      </div>
      <div class="stat">
        <span class="stat-number">{{ sources.length }}</span>
        <span class="stat-label">sources</span>
      </div>
      <div class="stat">
        <span class="stat-number">{{ standards.length }}</span>
        <span class="stat-label">standards</span>
      </div>
    </div>

    <div class="cards">
      <article v-for="source in sources" :key="source.slug" class="card">
        <div class="card-header">
          <span class="card-standard">{{ source.standard }}</span>
          <span class="card-count">{{ ruleCount(source.slug) }} rules</span>
        </div>
        <h3 class="card-title">
          <a :href="withBase(source.url)">{{ source.title }}</a>
        </h3>
        <p class="card-description">{{ source.description }}</p>
        <div class="card-actions">
          <a class="card-link" :href="withBase(`/rules/${source.slug}/`)">Browse rules →</a>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.source-cards {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 48px;
}

.catalogue-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 32px 0 40px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.stat-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-standard {
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.card-count {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.card-title {
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 1.4;
}

.card-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.card-title a:hover {
  color: var(--vp-c-brand-1);
}

.card-description {
  flex: 1;
  margin: 0 0 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.card-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
