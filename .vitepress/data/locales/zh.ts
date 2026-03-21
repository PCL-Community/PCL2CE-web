import type { LocaleMessages } from './index';

export const zh: LocaleMessages = {
  // 导航栏
  nav: {
    home: '<iconify-icon class="i-mr" icon="mdi:home" style="color:#3498db"></iconify-icon>首页',
    download:
      '<iconify-icon class="i-mr" icon="mdi:download" style="color:#2ecc71"></iconify-icon>下载',
    about:
      '<iconify-icon class="i-mr" icon="mdi:information" style="color:#9b59b6"></iconify-icon>关于',
    history:
      '<iconify-icon class="i-mr" icon="mdi:history" style="color:#e67e22"></iconify-icon>历史版本',
  },

  // 主题配置
  theme: {
    prevPage: '上一页',
    nextPage: '下一页',
    outlineLabel: '页面导航',
    lastUpdated: '最后更新于',
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  // Footer
  footer: {
    quickLinks: '快速链接',
    home: '首页',
    download: '下载',
    about: '关于',
    community: '社区',
    feedback: '问题反馈',
    discussions: '讨论区',
    beian: '京ICP备2025138063号',
    copyright: 'MIT License.',
  },

  // 下载页面
  download: {
    title: 'PCL CE下载',
    latestStable: '最新稳定版',
    systemCheck: '系统架构检查',
    systemCheckDesc: '按下 **Win + S** 键打开搜索，搜索 **系统信息** 并打开。',
    systemType: '查看 **系统类型**：',
    x64Hint: '若显示 **x64 电脑** → 下载 X64 版本',
    arm64Hint: '若显示 **ARM64 电脑** → 下载 ARM64 版本',
    tipTitle: '小提示',
    tipX64: '常规台式机/笔记本通常为 **X64**',
    tipArm64: '**ARM64** 主要用于微软 Surface Pro X 等设备',
    tipUnsure: '若不确定，优先选 **X64**（兼容性更广），若不可用再选 ARM64',
    privacyTitle: '隐私协议提示',
    privacyDesc:
      '如果您点击下方任意下载并运行程序，代表同意我们的隐私协议，隐私协议请点击下方链接查看：',
    mirrorChyanTitle: 'Mirror 酱高速下载',
    mirrorChyanDesc: '如果你有 Mirror 酱 CDK 可以直接使用此高速下载源',
    mirrorChyanBtn: 'Mirror 酱下载',
    downloadLinks: '下载链接',
    x64Version: 'X64 版本',
    x64Desc: '适用于大多数 Windows 电脑',
    arm64Version: 'ARM64 版本',
    arm64Desc: '适用于 ARM 架构的 Windows 电脑',
    historicalVersions: '历史版本下载',
    historicalDesc: '如果您需要旧版本的 PCL CE，可以从以下链接下载：',
    historicalBtn: '历史版本',
    alsoDownload: '你也可以直接在下方的链接中下载',
  },

  history: {
    title: '历史版本下载',
    subtitle: '选择版本查看更新日志并下载对应安装包。',
    selectLabel: '选择版本',
    loading: '正在获取版本列表…',
    error: '获取失败，请稍后再试。',
    retry: '重试',
    empty: '暂无可用的历史版本。',
    noAssets: '该版本暂无可用下载资源。',
    noChangelog: '该版本没有更新日志描述。',
    viewOnGithub: '在 GitHub 查看详情',
    x64Label: '下载 X64',
    arm64Label: '下载 ARM64',
  },

  // 关于页面
  about: {
    title: 'PCL Community',
    subtitle: '非官方的 PCL 社区玩家组织，不代表开发者龙腾猫跃和 PCL 官方。',
    githubTitle: 'GitHub',
    githubDesc: '查看源代码、提交 Issue 或参与贡献',
    bilibiliTitle: 'B 站',
    bilibiliDesc: '关注我们获取最新动态和教程视频',
    joinTitle: '加入组织',
    joinDesc: '参与社区讨论，共同建设 PCL 生态',
  },
};
