// .vitepress/theme/index.ts
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import './markdown-sections.css';
import KeyboardNav from './components/KeyboardNav.vue';
import RuleInfo from './components/rules/RuleInfo.vue';
import RuleMetadata from './components/rules/RuleMetadata.vue';
import RuleBrowser from './components/rules/RuleBrowser.vue';
import SourceCards from './components/rules/SourceCards.vue';
import { initializeDetailsNavigation } from '@/core/utils';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(KeyboardNav),
    });
  },
  /**
   * Enhances the VitePress app by registering global Vue components.
   * RuleInfo and RuleBrowser are injected into bundle pages by okfMarkdownPlugin,
   * so they must be globally available.
   *
   * @param app - Vue app instance
   */
  enhanceApp({ app }) {
    app.component('RuleInfo', RuleInfo);
    app.component('RuleMetadata', RuleMetadata);
    app.component('RuleBrowser', RuleBrowser);
    app.component('SourceCards', SourceCards);

    // Initialize details navigation (client-side only)
    if (typeof window !== 'undefined') {
      initializeDetailsNavigation();
    }
  },
} satisfies Theme;
