<template>
  <div class="about-view">
    <section class="about-hero">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <div class="section-header">
              <h1>{{ t('about.title') }}</h1>
              <p>{{ t('about.desc') }}</p>
            </div>
            <div class="about-links">
              <a
                href="https://github.com/PCL-Community"
                target="_blank"
                class="link-card"
              >
                <div class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </div>
                <div class="link-content">
                  <h4>{{ t('about.links.github.title') }}</h4>
                  <p>{{ t('about.links.github.url') }}</p>
                </div>
              </a>

              <a
                href="https://space.bilibili.com/3546847192811755"
                target="_blank"
                class="link-card"
              >
                <div class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
                    />
                  </svg>
                </div>
                <div class="link-content">
                  <h4>{{ t('about.links.bilibili.title') }}</h4>
                  <p>{{ t('about.links.bilibili.url') }}</p>
                </div>
              </a>

              <a
                href="https://github.com/orgs/PCL-Community/discussions/10"
                target="_blank"
                class="link-card"
              >
                <div class="link-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div class="link-content">
                  <h4>{{ t('about.links.join.title') }}</h4>
                  <p>{{ t('about.links.join.url') }}</p>
                </div>
              </a>
            </div>
          </div>
          <div class="about-visual">
            <div class="about-image">
              <img src="/img/pclce.png" alt="PCL Community" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.about-view {
  width: 100%;
}
.about-hero {
  min-height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--white) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

.about-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.link-card {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  transition: var(--transition);
  box-shadow: var(--glass-shadow);
  text-decoration: none;
  color: inherit;
}

.link-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.link-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
  border: 2px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.link-content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--white);
}

.link-content p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.9rem;
  word-break: break-all;
}

.about-visual {
  position: relative;
}

.about-image {
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow-hover);
  border: 2px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  transition: var(--transition);
}

.about-image:hover {
  border-color: var(--glass-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
