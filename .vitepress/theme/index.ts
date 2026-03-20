// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext, Theme } from 'vitepress'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import '@theojs/lumen/style'
import { BoxCube, Card, CopyText, Footer, Links, Pill } from '@theojs/lumen'
import { getFooterData, type Lang } from '../data/i18n'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => {
        const { lang } = useData()
        const skipText: Record<string, string> = {
          'zh-CN': '跳转到主要内容',
          en: 'Skip to main content',
        }
        return h(
          'a',
          {
            href: '#VPContent',
            class: 'skip-to-content',
          },
          skipText[lang.value] || skipText['zh-CN']
        )
      },
      'layout-bottom': () => {
        const { lang } = useData()
        const currentLang = (lang.value || 'zh-CN') as Lang
        const footerData = getFooterData(currentLang)
        return h(Footer, { Footer_Data: footerData })
      },
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext) => {
    // 注册 lumen 组件
    app.component('BoxCube', BoxCube)
    app.component('Card', Card)
    app.component('Links', Links)
    app.component('Pill', Pill)
    app.component('Copy', CopyText)
  },
} satisfies Theme