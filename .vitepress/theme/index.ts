// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext, Theme } from 'vitepress';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import '@theojs/lumen/style';
import { BoxCube, Card, CopyText, Links, Pill } from '@theojs/lumen';
import { getFooterData, getMessages, type Lang } from '../data/i18n';
import './style.css';
import AboutPage from './components/AboutPage.vue';
import HistoryReleases from './components/HistoryReleases.vue';
import HomeUnderline from './components/HomeUnderline.vue';
import ImageGallery from './components/ImageGallery.vue';
import MirrorGrid from './components/MirrorGrid.vue';
import SiteFooter from './components/SiteFooter.vue';
import VideoSection from './components/VideoSection.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        const { lang } = useData();
        const currentLang = (lang.value || 'zh-CN') as Lang;
        const footerData = getFooterData(currentLang);
        return h(SiteFooter, { Footer_Data: footerData });
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
    app.component('HistoryReleases', HistoryReleases);
    app.component('VideoSection', VideoSection);
    app.component('HomeUnderline', HomeUnderline);
    app.component('ImageGallery', ImageGallery);
  },
} satisfies Theme;
