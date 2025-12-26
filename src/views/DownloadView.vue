<template>
  <div class="download-view">
    <div class="download-container">
      <div class="version-card">
        <div class="version-header">
          <div>
            <div class="version-name">PCL 社区版下载</div>
            <span class="version-tag stable">最新稳定版</span>
          </div>
        </div>
        <div class="changelog">
          <p>按下 Win + S键打开搜索，搜索 系统信息 并打开。</p>
          <p>查看 系统类型：</p>
          <p>若显示 x64 电脑 → 下载 X64 版本。</p>
          <p>若显示 ARM64 电脑 → 下载 ARM64 版本。</p>
          <p style="font-size: 20px">💡 小提示:</p>
          <p>常规台式机/笔记本通常为 X64。</p>
          <p>ARM64 主要用于微软 Surface Pro X 等设备。</p>
          <p>若不确定，优先选 X64（兼容性更广），若不可用再选 ARM64。</p>
        </div>

        <!-- 隐私协议提示 -->
        <div class="privacy-notice">
          <p>如果您点击下方任意下载并运行程序，代表同意我们的隐私协议，隐私协议请点击下方链接查看</p>
          <a href="https://www.pclc.cc/privacy/" target="_blank">https://www.pclc.cc/privacy/</a>
        </div>

        <div class="download-grid">
          <div class="download-option">
            <h3>X64 版本</h3>
            <p>适用于大多数 Windows 电脑</p>
            <div class="download-mirrors">
              <a
                href="https://github.com/PCL-Community/PCL2-CE/releases/latest/download/PCL2_CE_Release_x64.exe"
                class="mirror-btn"
              >
                GitHub（境内下载可能较慢）
              </a>
              <a
                href="https://download.fishcpy.top/dl/pclce/pcl2ce/PCL2_CE_Release_x64.exe"
                class="mirror-btn"
              >
                线路1
              </a>
              <a href="https://scdn.星.fun/PCL2_CE_Release_x64.exe" class="mirror-btn"> 线路4 </a>
            </div>
          </div>

          <div class="download-option">
            <h3>ARM64 版本</h3>
            <p>适用于 ARM 架构的 Windows 电脑</p>
            <div class="download-mirrors">
              <a
                href="https://github.com/PCL-Community/PCL2-CE/releases/latest/download/PCL2_CE_Release_ARM64.exe"
                class="mirror-btn"
              >
                GitHub（境内下载可能较慢）
              </a>
              <a
                href="https://download.fishcpy.top/dl/pclce/pcl2ce/PCL2_CE_Release_ARM64.exe"
                class="mirror-btn"
              >
                线路1
              </a>
              <a href="https://scdn.星.fun/PCL2_CE_Release_ARM64.exe" class="mirror-btn"> 线路4 </a>
            </div>
          </div>
        </div>
      </div>

      <div class="historical-versions-container">
        <h2>历史版本下载</h2>
        <p>如果您需要旧版本的 PCL 社区版，可以从以下链接下载：</p>
        <ul>
          <li>
            <a
              href="https://github.com/PCL-Community/PCL2-CE/releases"
              target="_blank"
              class="footer-link"
              >历史版本</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Download view component
</script>

<style scoped>
.download-view {
  min-height: 100vh;
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
