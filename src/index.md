---
layout: home
title: PCL CE官网 | 开源免费的 Minecraft 启动器
description: PCL CE是基于 PCL2 构建的开源免费 Minecraft 启动器，提供精准崩溃分析、多文件夹实例管理、资源一键下载与多账号支持
keywords: PCL,PCL2,Minecraft启动器,我的世界启动器,开源启动器,崩溃分析,模组管理

hero:
  name: "PCL CE"
  text: "开源免费的 Minecraft 启动器"
  tagline: 基于 PCL2 构建，提供更强大的功能和更好的用户体验
  image:
    src: /img/logo.ico
    alt: PCL CE
  actions:
    - theme: brand
      text: 立即下载  
      link: /download
    - theme: alt
      text: 了解更多
      link: /about

features:
  - icon: 🔍
    title: 精准崩溃分析
    details: 自动检测并分析游戏崩溃原因，提供详细的解决方案和建议，让你快速解决问题。
  - icon: 📁
    title: 多文件夹管理
    details: 支持多个游戏实例管理，不同版本、不同模组包完全隔离，轻松切换游戏环境。
  - icon: 📦
    title: 资源直接下载
    details: 内置资源商店，支持直接下载光影、材质包、模组等资源，无需手动安装。
  - icon: 👤
    title: 多账号支持
    details: 支持多个 Minecraft 账号管理，快速切换不同账号，支持正版和离线模式。
  - icon: ☕
    title: Java 版本管理
    details: 自动检测和管理 Java 版本，为不同的 Minecraft 版本选择最适合的 Java 环境。
  - icon: 🔓
    title: 开源免费
    details: 完全开源的项目，永久免费使用，社区驱动开发，持续更新和改进。
---

<HomeUnderline />

<VideoSection
  title="演示视频"
  description="观看视频，了解 PCL CE 的强大功能"
  videoSrc="/video/hero.mp4"
/>

<ImageGallery :images="[
  { url: '/img/f1.png', alt: 'PCL CE Screenshot 1' },
  { url: '/img/x1.png', alt: 'PCL CE Screenshot 2' },
  { url: '/img/x2.png', alt: 'PCL CE Screenshot 3' },
  { url: '/img/x3.png', alt: 'PCL CE Screenshot 4' }
]" />

<div class="contributors-section">
  <h2 class="contributors-title">PCL CE 贡献者</h2>
  <a href="https://github.com/PCL-Community/PCL2-CE/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=PCL-Community/PCL2-CE" alt="PCL CE 贡献者" />
  </a>
</div>

<style>
.contributors-section {
  text-align: center;
  padding: 4rem 1.5rem 6rem;
  max-width: 960px;
  margin: 0 auto;
}
.contributors-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}
.contributors-section img {
  max-width: 100%;
  height: auto;
}
</style>