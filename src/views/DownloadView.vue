<template>
  <div class="download-view">
    <div class="download-container">
      <div class="version-card">
        <div class="version-header">
          <div>
            <h1 class="version-name">{{ t('download.title') }}</h1>
            <span class="version-tag stable">{{ t('download.latestStable') }}</span>
          </div>
        </div>
        <div class="changelog">
          <p>{{ t('download.systemCheck.line1') }}</p>
          <p>{{ t('download.systemCheck.line2') }}</p>
          <p>{{ t('download.systemCheck.line3') }}</p>
          <p>{{ t('download.systemCheck.line4') }}</p>
          <p style="font-size: 20px">{{ t('download.systemCheck.tip') }}</p>
          <p>{{ t('download.systemCheck.tip1') }}</p>
          <p>{{ t('download.systemCheck.tip2') }}</p>
          <p>{{ t('download.systemCheck.tip3') }}</p>
        </div>

        <!-- 隐私协议提示 -->
        <div class="privacy-notice">
          <p>{{ t('download.privacyNotice.text') }}</p>
          <a :href="t('download.privacyNotice.link')" target="_blank">{{ t('download.privacyNotice.link') }}</a>
        </div>

        <div class="download-grid">
          <div class="download-option">
            <h3>{{ t('download.versions.x64.title') }}</h3>
            <p>{{ t('download.versions.x64.desc') }}</p>
            <div class="download-mirrors">
              <a
                href="https://github.com/PCL-Community/PCL2-CE/releases/latest/download/PCL2_CE_Release_x64.exe"
                class="mirror-btn"
              >
                {{ t('download.mirrors.github') }}
              </a>
              <a
                href="https://download.fishcpy.top/dl/pclce/pcl2ce/PCL2_CE_Release_x64.exe"
                class="mirror-btn"
              >
                {{ t('download.mirrors.mirror1') }}
              </a>
              <a href="https://scdn.星.fun/PCL2_CE_Release_x64.exe" class="mirror-btn"> {{ t('download.mirrors.mirror4') }} </a>
            </div>
          </div>

          <div class="download-option">
            <h3>{{ t('download.versions.arm64.title') }}</h3>
            <p>{{ t('download.versions.arm64.desc') }}</p>
            <div class="download-mirrors">
              <a
                href="https://github.com/PCL-Community/PCL2-CE/releases/latest/download/PCL2_CE_Release_ARM64.exe"
                class="mirror-btn"
              >
                {{ t('download.mirrors.github') }}
              </a>
              <a
                href="https://download.fishcpy.top/dl/pclce/pcl2ce/PCL2_CE_Release_ARM64.exe"
                class="mirror-btn"
              >
                {{ t('download.mirrors.mirror1') }}
              </a>
              <a href="https://scdn.星.fun/PCL2_CE_Release_ARM64.exe" class="mirror-btn"> {{ t('download.mirrors.mirror4') }} </a>
            </div>
          </div>
        </div>
      </div>

      <div class="historical-versions-container">
        <h2>{{ t('download.historical.title') }}</h2>
        <p>{{ t('download.historical.desc') }}</p>
        <ul>
          <li>
            <a
              href="https://github.com/PCL-Community/PCL2-CE/releases"
              target="_blank"
              class="footer-link"
              >{{ t('download.historical.link') }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.download-view {
  min-height: calc(100vh - 12rem);
  padding: 8rem 0 4rem;
  background: var(--gradient-dark);
}

.download-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 大屏幕使用更宽的布局 */
@media (min-width: 1600px) {
  .download-container {
    max-width: 1600px;
  }
}

@media (min-width: 1920px) {
  .download-container {
    max-width: 1800px;
  }
}

.version-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-strong);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 3rem;
  box-shadow: var(--glass-shadow);
  margin-bottom: 2rem;
  transition: var(--transition);
}

.version-card:hover {
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--glass-border);
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.version-name {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--white);
  margin-bottom: 0.5rem;
  text-align: center;
}

.version-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.version-tag.stable {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--white);
  box-shadow: var(--glass-shadow);
}

.changelog {
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
}

.changelog p {
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.privacy-notice {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: var(--border-radius);
  text-align: center;
}

.privacy-notice p {
  margin: 0 0 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.privacy-notice a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.privacy-notice a:hover {
  color: var(--white);
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.download-option {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
}

.download-option:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--glass-border-hover);
  transform: translateY(-2px);
  box-shadow: var(--glass-shadow);
}

.download-option h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.download-option p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.download-mirrors {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mirror-btn {
  display: block;
  padding: 0.75rem 1.5rem;
  background: var(--gradient-primary);
  color: var(--white);
  text-align: center;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: var(--shadow-md);
}

.mirror-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.historical-versions-container {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-strong);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 3rem;
  box-shadow: var(--glass-shadow);
  transition: var(--transition);
  text-align: center;
}

.historical-versions-container:hover {
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.historical-versions-container h2 {
  font-size: 2rem;
  font-weight: 900;
  color: var(--white);
  margin-bottom: 1rem;
}

.historical-versions-container p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.historical-versions-container ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.historical-versions-container li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--white);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .download-container {
    padding: 0 20px;
  }

  .version-card {
    padding: 2rem 1.5rem;
  }

  .version-name {
    font-size: 2rem;
  }

  .download-grid {
    grid-template-columns: 1fr;
  }

  .historical-versions-container {
    padding: 2rem 1.5rem;
  }
}
</style>
