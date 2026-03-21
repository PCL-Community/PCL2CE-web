// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext, Theme } from 'vitepress';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import '@theojs/lumen/style';
import { BoxCube, Card, CopyText, Footer, Links, Pill } from '@theojs/lumen';
import { getFooterData, getMessages, type Lang } from '../data/i18n';
import './style.css';
import MirrorGrid from './components/MirrorGrid.vue';
import AboutPage from './components/AboutPage.vue';
import VideoSection from './components/VideoSection.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => {
        const { lang } = useData();
        const currentLang = (lang.value || 'zh-CN') as Lang;
        const messages = getMessages(currentLang);
        return h(
          'a',
          {
            href: '#VPContent',
            class: 'skip-to-content',
          },
          messages.skipToContent,
        );
      },
      'layout-bottom': () => {
        const { lang } = useData();
        const currentLang = (lang.value || 'zh-CN') as Lang;
        const footerData = getFooterData(currentLang);
        return h(Footer, { Footer_Data: footerData });
      },
    });
  },
  enhanceApp: ({ app }: EnhanceAppContext) => {
    // 注册 lumen 组件
    app.component('BoxCube', BoxCube);
    app.component('Card', Card);
    app.component('Links', Links);
    app.component('Pill', Pill);
    app.component('Copy', CopyText);
    // 注册自定义组件
    app.component('MirrorGrid', MirrorGrid);
    app.component('AboutPage', AboutPage);
    app.component('VideoSection', VideoSection);
  },
} satisfies Theme;
