<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <img src="/img/logo.ico" alt="PCL Logo" class="logo" />
            <span class="brand-text">PCL 社区版</span>
          </router-link>
        </div>

        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button v-if="isMenuOpen" class="menu-close" @click="closeMenu" aria-label="关闭菜单">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
          <a href="/#features" class="nav-link" @click="closeMenu">功能特性</a>
          <router-link to="/download" class="nav-link" @click="closeMenu">下载</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">关于</router-link>
          <a
            href="https://github.com/PCL-Community/PCL2-CE"
            target="_blank"
            class="nav-link github-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <main id="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="main-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <img src="/img/logo.ico" alt="PCL Logo" class="footer-logo" />
              <div class="brand-info">
                <h3>PCL 社区版</h3>
                <p>开源免费的 Minecraft 启动器</p>
              </div>
            </div>
            <p class="footer-description">
              基于龙腾猫跃 PCL2 构建的社区版本，为 Minecraft 玩家提供最好的游戏体验。
            </p>
          </div>

          <div class="footer-section">
            <h4>快速链接</h4>
            <ul class="footer-links">
              <li><router-link to="/">首页</router-link></li>
              <li><a href="/#features">功能特性</a></li>
              <li><router-link to="/download">下载</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>资源下载</h4>
            <ul class="footer-links">
              <li><router-link to="/download">最新版本</router-link></li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE" target="_blank">源代码</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>社区</h4>
            <ul class="footer-links">
              <li><a href="https://github.com/PCL-Community/PCL2-CE" target="_blank">GitHub</a></li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE/issues" target="_blank"
                  >问题反馈</a
                >
              </li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE/discussions" target="_blank"
                  >讨论区</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-info">
            <p>© PCL Community {{ currentYear }} 版权所有</p>
            <p>
              <a href="https://beian.miit.gov.cn" target="_blank" class="footer-link"
                >京ICP备2025138063号</a
              >
            </p>
          </div>
          <div class="copyright-info">
            <p>
              "Minecraft" 以及 "我的世界" 为美国微软公司的商标。PCL社区版和本网站与美国微软公司之间没有从属关系。
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-strong);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  transition: var(--transition);
}

.navbar:hover {
  background: var(--glass-bg-hover);
  border-bottom-color: var(--glass-border-hover);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 大屏幕使用更宽的布局 */
@media (min-width: 1600px) {
  .nav-container {
    max-width: 1600px;
  }
}

@media (min-width: 1920px) {
  .nav-container {
    max-width: 1800px;
  }
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--white);
  border-radius: var(--border-radius);
  transition: var(--transition);
  padding: 0.5rem 0.75rem;
}

.brand-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 900;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.router-link-active {
  color: var(--primary);
}

.github-link {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
}

.github-link:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  color: var(--white);
  box-shadow: var(--glass-shadow);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 0.75rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.menu-toggle span {
  width: 28px;
  height: 3px;
  background: var(--white);
  margin: 4px 0;
  transition: var(--transition);
  border-radius: 2px;
}

.menu-close {
  display: none;
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 1001;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  color: var(--white);
}

.menu-close:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: rotate(90deg);
}

#main-content {
  flex: 1;
  padding-top: 0;
}

/* 页面切换动画 */
.page-enter-active {
  transition: opacity 0.4s ease;
}

.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}

/* 页脚 */
.main-footer {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-strong);
  border-top: 1px solid var(--glass-border);
  padding: 3rem 0 1rem;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-top: auto;
}

.main-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius);
}

.brand-info h3 {
  color: var(--white);
  margin-bottom: 0.25rem;
  font-weight: 900;
}

.brand-info p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.9rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-info p,
.copyright-info p {
  margin: 0.25rem 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--primary);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-close {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-menu .nav-link {
    font-size: 1.5rem;
    color: #333;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.05);
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    text-align: center;
  }

  .nav-menu .nav-link:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
