---
layout: home
title: PCL CE | Open Source Minecraft Launcher
description: Free open-source Minecraft launcher with accurate crash analysis, multi-instance management, and one-click resource downloads
keywords: PCL,PCL2,Minecraft Launcher,Open Source Launcher,Crash Analysis,Mod Management

hero:
  name: "PCL CE"
  text: "Open-source, free Minecraft launcher"
  tagline: Built on PCL2 with more features and better experience
  image:
    src: /img/logo.ico
    alt: PCL CE
  actions:
    - theme: brand
      text: Download
      link: /en/download
    - theme: alt
      text: Learn More
      link: /en/about

features:
  - icon: 🔍
    title: Accurate Crash Analysis
    details: Auto-detect crashes and provide solutions.
  - icon: 📁
    title: Multi-Folder Management
    details: Manage multiple game instances with isolated mod packs.
  - icon: 📦
    title: Direct Resource Download
    details: Built-in store for shaders, resource packs and mods.
  - icon: 👤
    title: Multi-Account Support
    details: Quick switch between accounts, official and offline modes.
  - icon: ☕
    title: Java Management
    details: Auto-detect and manage Java versions for each game.
  - icon: 🔓
    title: Open Source & Free
    details: Community-driven, free forever with continuous updates.
---

<HomeUnderline />

<VideoSection
  title="Demo Video"
  description="Watch to explore PCL CE features"
  videoSrc="https://player.bilibili.com/player.html?aid=113865304048458&bvid=BV1w5wheQEAy&cid=28195815657&p=1&autoplay=0&high_quality=3&danmaku=0"
/>

<ImageGallery :images="[
  { url: '/img/f1.png', alt: 'PCL CE Screenshot 1' },
  { url: '/img/x1.png', alt: 'PCL CE Screenshot 2' },
  { url: '/img/x2.png', alt: 'PCL CE Screenshot 3' },
  { url: '/img/x3.png', alt: 'PCL CE Screenshot 4' }
]" />

<div class="contributors-section">
  <h2 class="contributors-title">PCL CE Contributors</h2>
  <a href="https://github.com/PCL-Community/PCL2-CE/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=PCL-Community/PCL2-CE" alt="PCL CE Contributors" />
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