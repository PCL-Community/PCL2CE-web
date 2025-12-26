import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

// 检测浏览器语言
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  }
  return 'en-US';
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || getBrowserLanguage(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

export default i18n;
