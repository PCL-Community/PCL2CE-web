import { figure } from '@mdit/plugin-figure'
import { defineConfig, type HeadConfig } from 'vitepress'
import { navTranslations, themeConfigTranslations, getFooterData, type Lang } from './data/i18n'

// SEO 相关常量
const SITE_URL = 'https://pclce-web.demo.fis.ink'
const SITE_NAME = 'PCL 社区版'
const DEFAULT_DESCRIPTION =
  'PCL 社区版是基于 PCL2 构建的开源免费 Minecraft 启动器，提供智能崩溃分析、多文件夹实例管理、资源一键下载与多账号支持'
const DEFAULT_KEYWORDS =
  'PCL,PCL2,Minecraft启动器,我的世界启动器,开源启动器,崩溃分析,模组管理,Java管理'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'PCL 社区版',
  description: '开源免费的 Minecraft 启动器',
  cleanUrls: true,
  sitemap: {
    hostname: SITE_URL,
  },

  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    config: (md) => {
      md.use(figure)
    },
  },

  // 支持 iconify-icon 组件
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['meta', { name: 'theme-color', content: '#0066CC' }],
    // SEO 基础标签
    ['meta', { name: 'author', content: 'PCL Community' }],
    ['meta', { name: 'keywords', content: DEFAULT_KEYWORDS }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // 预连接优化
    ['link', { rel: 'preconnect', href: 'https://github.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://github.com' }],
  ],

  // 动态生成 SEO 标签
  transformPageData(pageData) {
    const pagePath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index$/, '/')
    const canonicalUrl = `${SITE_URL}/${pagePath}`
    const ogImage = pageData.frontmatter.ogImage || '/img/f1.png'
    const pageKeywords = pageData.frontmatter.keywords || DEFAULT_KEYWORDS

    // 确定当前语言和路径
    let langCode = 'zh-CN'
    let langPath = pagePath
    if (pagePath.startsWith('en/')) {
      langCode = 'en'
      langPath = pagePath.replace('en/', '')
    }

    // 生成 hreflang 标签
    const hreflangLinks: HeadConfig[] = [
      ['link', { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/${langPath}` }],
      ['link', { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en/${langPath}` }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/${langPath}` }],
    ]

    const head: HeadConfig[] = [
      // Open Graph 标签
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
      ['meta', { property: 'og:locale', content: langCode }],
      ['meta', { property: 'og:title', content: pageData.title || SITE_NAME }],
      ['meta', { property: 'og:description', content: pageData.description || DEFAULT_DESCRIPTION }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: `${SITE_URL}${ogImage}` }],
      // Twitter Card 标签
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageData.title || SITE_NAME }],
      ['meta', { name: 'twitter:description', content: pageData.description || DEFAULT_DESCRIPTION }],
      ['meta', { name: 'twitter:image', content: `${SITE_URL}${ogImage}` }],
      // SEO 标签
      ['meta', { name: 'keywords', content: pageKeywords }],
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ...hreflangLinks,
    ]

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(...head)
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'PCL 社区版',
      description: '开源免费的 Minecraft 启动器，支持崩溃分析与多版本管理',
      themeConfig: {
        nav: navTranslations['zh-CN'],
        ...themeConfigTranslations['zh-CN'],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'PCL Community Edition',
      description: 'Open Source & Free Minecraft Launcher with Smart Crash Analysis',
      themeConfig: {
        nav: navTranslations.en,
        ...themeConfigTranslations.en,
      },
    },
  },

  themeConfig: {
    logo: '/img/logo.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PCL-Community' },
    ],
  },
})