import type { LocaleMessages } from './index';

export const en: LocaleMessages = {
  // Navigation
  nav: {
    home: '<iconify-icon class="i-mr" icon="mdi:home" style="color:#3498db"></iconify-icon>Home',
    download:
      '<iconify-icon class="i-mr" icon="mdi:download" style="color:#2ecc71"></iconify-icon>Download',
    about:
      '<iconify-icon class="i-mr" icon="mdi:information" style="color:#9b59b6"></iconify-icon>About',
    history:
      '<iconify-icon class="i-mr" icon="mdi:history" style="color:#e67e22"></iconify-icon>History',
  },

  // Theme config
  theme: {
    prevPage: 'Previous',
    nextPage: 'Next',
    outlineLabel: 'On this page',
    lastUpdated: 'Last updated',
    langMenuLabel: 'Language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Light theme',
    darkModeSwitchTitle: 'Dark theme',
  },

  // Footer
  footer: {
    quickLinks: 'Quick Links',
    home: 'Home',
    download: 'Download',
    about: 'About',
    community: 'Community',
    feedback: 'Issues',
    discussions: 'Discussions',
    beian: '京ICP备2025138063号',
    copyright: 'MIT License.',
  },

  // Download page
  download: {
    title: 'Download PCL CE',
    latestStable: 'Latest Stable Release',
    systemCheck: 'Check System Architecture',
    systemCheckDesc: 'Press **Win + S**, search for **System Information**.',
    systemType: 'Check **System Type**:',
    x64Hint: '**x64-based PC** → Download X64',
    arm64Hint: '**ARM64-based PC** → Download ARM64',
    tipTitle: 'Tips',
    tipX64: 'Most PCs are **X64**',
    tipArm64: '**ARM64** is for devices like Surface Pro X',
    tipUnsure: 'Unsure? Try **X64** first',
    privacyTitle: 'Privacy Notice',
    privacyDesc: 'By downloading and running, you agree to our privacy policy:',
    mirrorChyanTitle: 'MirrorChyan Download',
    mirrorChyanDesc: 'Use MirrorChyan CDK for high-speed download',
    mirrorChyanBtn: 'MirrorChyan Download',
    downloadLinks: 'Download Links',
    x64Version: 'X64 Version',
    x64Desc: 'For most Windows PCs',
    arm64Version: 'ARM64 Version',
    arm64Desc: 'For ARM-based Windows PCs',
    historicalVersions: 'Historical Versions',
    historicalDesc: 'Need an older version? Download here:',
    historicalBtn: 'Historical Versions',
    alsoDownload: 'Or download directly from:',
  },

  history: {
    title: 'Historical Releases',
    subtitle: 'Select a release, choose source, then download the installer.',
    selectLabel: 'Select a release',
    sourceLabel: 'Download source',
    sourceGithub: 'GitHub Official',
    sourceMirror1: 'Mirror 1 (Accelerated)',
    loading: 'Loading releases…',
    error: 'Failed to load releases.',
    retry: 'Retry',
    empty: 'No historical releases found.',
    noAssets: 'No downloadable assets for this release.',
    noChangelog: 'No release notes available for this release.',
    viewOnGithub: 'View on GitHub',
    x64Label: 'Download X64',
    arm64Label: 'Download ARM64',
  },

  // About page
  about: {
    title: 'PCL Community',
    subtitle:
      'Unofficial community organization, not affiliated with PCL developer.',
    githubTitle: 'GitHub',
    githubDesc: 'Source code, issues & contributions',
    bilibiliTitle: 'Bilibili',
    bilibiliDesc: 'Updates and tutorials',
    joinTitle: 'Join Us',
    joinDesc: 'Join discussions and build together',
  },
};
