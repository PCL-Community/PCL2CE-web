import type { FooterData } from '@theojs/lumen';
import { en } from './en';
import { zh } from './zh';

export type Lang = 'zh-CN' | 'en';

// 本地化消息类型定义
export interface LocaleMessages {
  nav: {
    home: string;
    download: string;
    about: string;
  };
  theme: {
    prevPage: string;
    nextPage: string;
    outlineLabel: string;
    lastUpdated: string;
    langMenuLabel: string;
    returnToTopLabel: string;
    sidebarMenuLabel: string;
    darkModeSwitchLabel: string;
    lightModeSwitchTitle: string;
    darkModeSwitchTitle: string;
  };
  footer: {
    quickLinks: string;
    home: string;
    download: string;
    about: string;
    community: string;
    feedback: string;
    discussions: string;
    beian: string;
    copyright: string;
  };
  download: {
    title: string;
    latestStable: string;
    systemCheck: string;
    systemCheckDesc: string;
    systemType: string;
    x64Hint: string;
    arm64Hint: string;
    tipTitle: string;
    tipX64: string;
    tipArm64: string;
    tipUnsure: string;
    privacyTitle: string;
    privacyDesc: string;
    mirrorChyanTitle: string;
    mirrorChyanDesc: string;
    mirrorChyanBtn: string;
    downloadLinks: string;
    x64Version: string;
    x64Desc: string;
    arm64Version: string;
    arm64Desc: string;
    historicalVersions: string;
    historicalDesc: string;
    historicalBtn: string;
    alsoDownload: string;
  };
  about: {
    title: string;
    subtitle: string;
    githubTitle: string;
    githubDesc: string;
    bilibiliTitle: string;
    bilibiliDesc: string;
    joinTitle: string;
    joinDesc: string;
  };
}

// 本地化消息映射
export const messages: Record<Lang, LocaleMessages> = {
  'zh-CN': zh,
  en,
};

// 获取本地化消息
export function getMessages(lang: Lang): LocaleMessages {
  return messages[lang] || messages['zh-CN'];
}

// 导航栏翻译
export const navTranslations: Record<
  Lang,
  Array<{ text: string; link: string }>
> = {
  'zh-CN': [
    { text: zh.nav.home, link: '/' },
    { text: zh.nav.download, link: '/download' },
    { text: zh.nav.about, link: '/about' },
  ],
  en: [
    { text: en.nav.home, link: '/en/' },
    { text: en.nav.download, link: '/en/download' },
    { text: en.nav.about, link: '/en/about' },
  ],
};

// 主题配置翻译
export const themeConfigTranslations: Record<Lang, object> = {
  'zh-CN': {
    docFooter: {
      prev: zh.theme.prevPage,
      next: zh.theme.nextPage,
    },
    outline: {
      label: zh.theme.outlineLabel,
    },
    lastUpdated: {
      text: zh.theme.lastUpdated,
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: zh.theme.langMenuLabel,
    returnToTopLabel: zh.theme.returnToTopLabel,
    sidebarMenuLabel: zh.theme.sidebarMenuLabel,
    darkModeSwitchLabel: zh.theme.darkModeSwitchLabel,
    lightModeSwitchTitle: zh.theme.lightModeSwitchTitle,
    darkModeSwitchTitle: zh.theme.darkModeSwitchTitle,
  },
  en: {
    docFooter: {
      prev: en.theme.prevPage,
      next: en.theme.nextPage,
    },
    outline: {
      label: en.theme.outlineLabel,
    },
    lastUpdated: {
      text: en.theme.lastUpdated,
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: en.theme.langMenuLabel,
    returnToTopLabel: en.theme.returnToTopLabel,
    sidebarMenuLabel: en.theme.sidebarMenuLabel,
    darkModeSwitchLabel: en.theme.darkModeSwitchLabel,
    lightModeSwitchTitle: en.theme.lightModeSwitchTitle,
    darkModeSwitchTitle: en.theme.darkModeSwitchTitle,
  },
};

// Footer 数据
export const getFooterData = (lang: Lang): FooterData => {
  const msgs = getMessages(lang);

  const footerData: Record<Lang, FooterData> = {
    'zh-CN': {
      group: [
        {
          title: msgs.footer.quickLinks,
          links: [
            { name: msgs.footer.home, link: '/', icon: 'mdi:home' },
            {
              name: msgs.footer.download,
              link: '/download',
              icon: 'mdi:download',
            },
            {
              name: msgs.footer.about,
              link: '/about',
              icon: 'mdi:information',
            },
          ],
        },
        {
          title: msgs.footer.community,
          links: [
            {
              name: 'GitHub',
              link: 'https://github.com/PCL-Community',
              icon: 'mdi:github',
            },
            {
              name: msgs.footer.feedback,
              link: 'https://github.com/PCL-Community/PCL2-CE/issues',
              icon: 'mdi:bug',
            },
            {
              name: msgs.footer.discussions,
              link: 'https://github.com/orgs/PCL-Community/discussions',
              icon: 'mdi:forum',
            },
          ],
        },
      ],
      beian: {
        showIcon: true,
        icp: {
          number: msgs.footer.beian,
          link: 'https://beian.miit.gov.cn/',
          rel: 'nofollow',
        },
      },
      author: {
        name: 'PCL Community',
        link: 'https://github.com/PCL-Community',
        startYear: 2024,
        text: msgs.footer.copyright,
      },
    },
    en: {
      group: [
        {
          title: msgs.footer.quickLinks,
          links: [
            { name: msgs.footer.home, link: '/en/', icon: 'mdi:home' },
            {
              name: msgs.footer.download,
              link: '/en/download',
              icon: 'mdi:download',
            },
            {
              name: msgs.footer.about,
              link: '/en/about',
              icon: 'mdi:information',
            },
          ],
        },
        {
          title: msgs.footer.community,
          links: [
            {
              name: 'GitHub',
              link: 'https://github.com/PCL-Community',
              icon: 'mdi:github',
            },
            {
              name: msgs.footer.feedback,
              link: 'https://github.com/PCL-Community/PCL2-CE/issues',
              icon: 'mdi:bug',
            },
            {
              name: msgs.footer.discussions,
              link: 'https://github.com/orgs/PCL-Community/discussions',
              icon: 'mdi:forum',
            },
          ],
        },
      ],
      author: {
        name: 'PCL Community',
        link: 'https://github.com/PCL-Community',
        startYear: 2024,
        text: msgs.footer.copyright,
      },
    },
  };
  return footerData[lang];
};

// 导出类型和消息
export { en, zh };
