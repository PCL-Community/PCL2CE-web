import type { FooterData } from '@theojs/lumen'

export type Lang = 'zh-CN' | 'en'

// 导航栏翻译
export const navTranslations: Record<Lang, Array<{ text: string; link: string }>> = {
  'zh-CN': [
    { text: '<iconify-icon class="i-mr" icon="mdi:home" style="color:#3498db"></iconify-icon>首页', link: '/' },
    { text: '<iconify-icon class="i-mr" icon="mdi:download" style="color:#2ecc71"></iconify-icon>下载', link: '/download' },
    { text: '<iconify-icon class="i-mr" icon="mdi:information" style="color:#9b59b6"></iconify-icon>关于', link: '/about' },
  ],
  en: [
    { text: '<iconify-icon class="i-mr" icon="mdi:home" style="color:#3498db"></iconify-icon>Home', link: '/en/' },
    { text: '<iconify-icon class="i-mr" icon="mdi:download" style="color:#2ecc71"></iconify-icon>Download', link: '/en/download' },
    { text: '<iconify-icon class="i-mr" icon="mdi:information" style="color:#9b59b6"></iconify-icon>About', link: '/en/about' },
  ],
}

// 主题配置翻译
export const themeConfigTranslations: Record<Lang, object> = {
  'zh-CN': {
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  en: {
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    outline: {
      label: 'On this page',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: 'Language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
  },
}

// Footer 数据
export const getFooterData = (lang: Lang): FooterData => {
  const footerData: Record<Lang, FooterData> = {
    'zh-CN': {
      group: [
        {
          title: '快速链接',
          links: [
            { name: '首页', link: '/', icon: 'mdi:home' },
            { name: '下载', link: '/download', icon: 'mdi:download' },
            { name: '关于', link: '/about', icon: 'mdi:information' },
          ],
        },
        {
          title: '社区',
          links: [
            { name: 'GitHub', link: 'https://github.com/PCL-Community', icon: 'mdi:github' },
            { name: '问题反馈', link: 'https://github.com/PCL-Community/PCL2-CE/issues', icon: 'mdi:bug' },
            { name: '讨论区', link: 'https://github.com/orgs/PCL-Community/discussions', icon: 'mdi:forum' },
          ],
        },
      ],
      beian: {
        showIcon: true,
        icp: {
          number: '京ICP备2025138063号',
          link: 'https://beian.miit.gov.cn/',
          rel: 'nofollow',
        },
      },
      author: {
        name: 'PCL Community',
        link: 'https://github.com/PCL-Community',
        startYear: 2024,
        text: 'All Rights Reserved.',
      },
    },
    en: {
      group: [
        {
          title: 'Quick Links',
          links: [
            { name: 'Home', link: '/en/', icon: 'mdi:home' },
            { name: 'Download', link: '/en/download', icon: 'mdi:download' },
            { name: 'About', link: '/en/about', icon: 'mdi:information' },
          ],
        },
        {
          title: 'Community',
          links: [
            { name: 'GitHub', link: 'https://github.com/PCL-Community', icon: 'mdi:github' },
            { name: 'Issues', link: 'https://github.com/PCL-Community/PCL2-CE/issues', icon: 'mdi:bug' },
            { name: 'Discussions', link: 'https://github.com/orgs/PCL-Community/discussions', icon: 'mdi:forum' },
          ],
        },
      ],
      author: {
        name: 'PCL Community',
        link: 'https://github.com/PCL-Community',
        startYear: 2024,
        text: 'All Rights Reserved.',
      },
    },
  }
  return footerData[lang]
}