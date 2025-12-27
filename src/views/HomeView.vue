<template>
  <div class="home-view">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-main">{{ t('home.title') }}</span>
            <span class="title-sub">{{ t('home.subtitle') }}</span>
          </h1>
          <p class="hero-description">
            {{ t('home.description') }}
          </p>
          <div class="hero-buttons">
            <router-link to="/download" class="btn btn-primary btn-large btn-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{{ t('home.downloadLatest') }}</span>
            </router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number counter" data-target="10000" data-suffix="K+">0</span>
              <span class="stat-label">{{ t('home.stats.activeUsers') }}</span>
            </div>
            <div class="stat">
              <span class="stat-number counter" data-target="100" data-suffix="%">0</span>
              <span class="stat-label">{{ t('home.stats.openSource') }}</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">{{ t('home.stats.communitySupport') }}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-container" @mousemove="handleMouseMove" @mouseleave="resetTransform">
            <img src="/img/f1.png" alt="PCL 界面预览" class="hero-image" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 演示视频区域 -->
    <section class="demo-section fade-in">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.videoTitle') }}</h2>
          <p>{{ t('home.videoDesc') }}</p>
        </div>
        <div class="video-container">
          <iframe
            src="https://player.bilibili.com/player.html?aid=113865304048458&bvid=BV1w5wheQEAy&cid=28195815657&p=1&autoplay=0&high_quality=1&danmaku=0"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- 功能特性区域 -->
    <section class="features-section scroll-animate" id="features">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.featuresTitle') }}</h2>
          <p>{{ t('home.featuresDesc') }}</p>
        </div>
        <div class="features-grid">
          <div class="feature-card slide-in-left" style="transition-delay: 0.1s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3>{{ t('home.features.crashAnalysis.title') }}</h3>
            <p>{{ t('home.features.crashAnalysis.desc') }}</p>
          </div>

          <div class="feature-card slide-in-right" style="transition-delay: 0.2s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>{{ t('home.features.folderManagement.title') }}</h3>
            <p>{{ t('home.features.folderManagement.desc') }}</p>
          </div>

          <div class="feature-card scale-in" style="transition-delay: 0.3s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <h3>{{ t('home.features.resourceDownload.title') }}</h3>
            <p>{{ t('home.features.resourceDownload.desc') }}</p>
          </div>

          <div class="feature-card slide-in-left" style="transition-delay: 0.4s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>{{ t('home.features.multiAccount.title') }}</h3>
            <p>{{ t('home.features.multiAccount.desc') }}</p>
          </div>

          <div class="feature-card slide-in-right" style="transition-delay: 0.5s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <h3>{{ t('home.features.javaManagement.title') }}</h3>
            <p>{{ t('home.features.javaManagement.desc') }}</p>
          </div>

          <div class="feature-card scale-in" style="transition-delay: 0.6s;">
            <div class="feature-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                />
              </svg>
            </div>
            <h3>{{ t('home.features.openSource.title') }}</h3>
            <p>{{ t('home.features.openSource.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 界面预览区域 -->
    <section class="screenshots-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.screenshotsTitle') }}</h2>
          <p>{{ t('home.screenshotsDesc') }}</p>
        </div>

        <div class="screenshot-row scroll-animate">
          <div class="screenshot-image slide-in-left">
            <img src="/img/x1.png" alt="Main Interface" loading="lazy" />
          </div>
          <div class="screenshot-content slide-in-right">
            <h3>{{ t('home.screenshots.main.title') }}</h3>
            <p>{{ t('home.screenshots.main.desc') }}</p>
            <ul class="feature-highlights">
              <li>{{ t('home.screenshots.main.features.0') }}</li>
              <li>{{ t('home.screenshots.main.features.1') }}</li>
            </ul>
          </div>
        </div>

        <div class="screenshot-row reverse scroll-animate">
          <div class="screenshot-content slide-in-left">
            <h3>{{ t('home.screenshots.version.title') }}</h3>
            <p>{{ t('home.screenshots.version.desc') }}</p>
            <ul class="feature-highlights">
              <li>{{ t('home.screenshots.version.features.0') }}</li>
              <li>{{ t('home.screenshots.version.features.1') }}</li>
              <li>{{ t('home.screenshots.version.features.2') }}</li>
            </ul>
          </div>
          <div class="screenshot-image slide-in-right">
            <img src="/img/x2.png" alt="Version Management" loading="lazy" />
          </div>
        </div>

        <div class="screenshot-row scroll-animate">
          <div class="screenshot-image slide-in-left">
            <img src="/img/x3.png" alt="Mod Management" loading="lazy" />
          </div>
          <div class="screenshot-content slide-in-right">
            <h3>{{ t('home.screenshots.mod.title') }}</h3>
            <p>{{ t('home.screenshots.mod.desc') }}</p>
            <ul class="feature-highlights">
              <li>{{ t('home.screenshots.mod.features.0') }}</li>
              <li>{{ t('home.screenshots.mod.features.1') }}</li>
              <li>{{ t('home.screenshots.mod.features.2') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 下载区域 -->
    <section class="download-section scroll-animate">
        <div class="container">
          <div class="download-content">
            <div class="download-text slide-in-left">
            <h2>{{ t('home.downloadSection.title') }}</h2>
            <p>{{ t('home.downloadSection.desc') }}</p>
            <div class="download-buttons">
              <router-link to="/download" class="btn btn-primary btn-large btn-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{{ t('home.downloadLatest') }}</span>
              </router-link>
            </div>
          </div>
            <div class="download-visual scale-in">
              <div class="download-card">
              <div class="card-header">
                <div class="card-title">
                  <h3>{{ t('home.downloadSection.cardTitle') }}</h3>
                  <span>{{ t('home.downloadSection.cardSubtitle') }}</span>
                </div>
              </div>
              <div class="card-features">
                <div class="feature-tag">{{ t('home.downloadSection.tags.0') }}</div>
                <div class="feature-tag">{{ t('home.downloadSection.tags.1') }}</div>
                <div class="feature-tag">{{ t('home.downloadSection.tags.2') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { t } = useI18n();

// 初始化滚动动画
useScrollAnimation();

const handleMouseMove = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement;
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const resetTransform = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement;
  container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<style scoped>
.home-view {
  width: 100%;
}

/* 英雄区域 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 大屏幕使用更宽的布局 */
@media (min-width: 1600px) {
  .hero-content {
    max-width: 1600px;
  }
}

@media (min-width: 1920px) {
  .hero-content {
    max-width: 1800px;
  }
}

.hero-title {
  margin-bottom: 2rem;
}

.title-main {
  display: block;
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--white) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.title-sub {
  display: block;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero-image-container {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow-hover);
  border: 2px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}

.hero-image-container:hover {
  border-color: var(--glass-border-hover);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(46, 204, 113, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%);
}

/* 演示视频区域 */
.demo-section {
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.2);
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow-hover);
  position: relative;
  border: 2px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  transition: var(--transition);
}

.video-container:hover {
  border-color: var(--glass-border-hover);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}

.video-container iframe {
  width: 100%;
  height: 500px;
  border: none;
  display: block;
}

/* 功能特性区域 */
.features-section {
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  box-shadow: var(--glass-shadow);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.08) 100%);
  pointer-events: none;
  opacity: 0;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
  background: var(--glass-bg-hover);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--white);
  border: 2px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  transition: var(--transition);
}

.feature-card:hover .feature-icon {
  transform: translateY(-3px) scale(1.05);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: var(--white);
}

.feature-card p {
  color: rgba(255, 255, 255, 0.8);
}

/* 截图展示区域 */
.screenshots-section {
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.2);
}

.screenshot-row {
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.screenshot-row:last-child {
  margin-bottom: 0;
}

.screenshot-row.reverse {
  flex-direction: row-reverse;
}

.screenshot-image,
.screenshot-content {
  flex: 1;
}

.screenshot-image {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow);
  transition: var(--transition);
  border: 2px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
}

.screenshot-image:hover {
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.screenshot-image img {
  width: 100%;
  height: auto;
  display: block;
}

.screenshot-content {
  padding: 1rem;
}

.screenshot-content h3 {
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.screenshot-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.feature-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-highlights li {
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
}

.feature-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.1rem;
}

/* 下载区域 */
.download-section {
  padding: 6rem 0;
  background: var(--gradient-primary);
}

.download-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.download-text h2 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: center;
}

.download-text p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-size: 1.2rem;
  text-align: center;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.download-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--glass-shadow);
  transition: var(--transition);
}

.download-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.card-header {
  margin-bottom: 1.5rem;
}

.card-title h3 {
  color: var(--white);
  margin-bottom: 0.25rem;
  font-size: 1.8rem;
}

.card-title span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.card-features {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-tag {
  background: rgba(255, 255, 255, 0.2);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.btn-white {
  background: var(--white) !important;
  color: var(--primary) !important;
  box-shadow: var(--shadow-md);
}

.btn-white:hover {
  background: rgba(255, 255, 255, 0.9) !important;
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 120px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .title-main {
    font-size: 2.5rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .download-content {
    grid-template-columns: 1fr;
  }

  .screenshot-row {
    flex-direction: column;
    gap: 2rem;
  }

  .screenshot-row.reverse {
    flex-direction: column;
  }
  
  /* 移动端统一文字在上图片在下 */
  .screenshot-row .screenshot-content {
    order: 1;
  }
  
  .screenshot-row .screenshot-image {
    order: 2;
  }
}
</style>
