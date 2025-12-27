<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <img src="/img/logo.ico" alt="PCL Logo" class="logo" />
            <span class="brand-text">{{ t('home.title') }}</span>
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
          <router-link to="/" class="nav-link" @click="closeMenu">{{ t('nav.home') }}</router-link>
          <a href="/#features" class="nav-link" @click="closeMenu">{{ t('nav.features') }}</a>
          <router-link to="/download" class="nav-link" @click="closeMenu">{{ t('nav.download') }}</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">{{ t('nav.about') }}</router-link>
          
          <!-- 语言切换下拉菜单 -->
          <div class="language-dropdown" @click.stop>
            <button class="lang-toggle" @click="toggleLangMenu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{{ locale === 'zh-CN' ? '简体中文' : 'English' }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: isLangMenuOpen }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="lang-menu" v-show="isLangMenuOpen">
              <button @click="switchLanguage('zh-CN')" :class="{ active: locale === 'zh-CN' }" class="lang-option">
                简体中文
              </button>
              <button @click="switchLanguage('en-US')" :class="{ active: locale === 'en-US' }" class="lang-option">
                English
              </button>
            </div>
          </div>
          
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

    <footer class="main-footer fade-in">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section slide-in-left" style="transition-delay: 0.2s;">
            <div class="footer-brand">
              <img src="/img/logo.ico" alt="PCL Logo" class="footer-logo" />
              <div class="brand-info">
                <h3>{{ t('home.title') }}</h3>
                <p>{{ t('home.subtitle') }}</p>
              </div>
            </div>
            <p class="footer-description">
              {{ t('footer.description') }}
            </p>
          </div>

          <div class="footer-section slide-in-right" style="transition-delay: 0.3s;">
            <h4>{{ t('footer.quickLinks') }}</h4>
            <ul class="footer-links">
              <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
              <li><a href="/#features">{{ t('nav.features') }}</a></li>
              <li><router-link to="/download">{{ t('nav.download') }}</router-link></li>
              <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
            </ul>
          </div>

          <div class="footer-section fade-in" style="transition-delay: 0.4s;">
            <h4>{{ t('footer.resources') }}</h4>
            <ul class="footer-links">
              <li><router-link to="/download">{{ t('footer.latestVersion') }}</router-link></li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE" target="_blank">{{ t('footer.sourceCode') }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-section slide-in-left" style="transition-delay: 0.5s;">
            <h4>{{ t('footer.community') }}</h4>
            <ul class="footer-links">
              <li><a href="https://github.com/PCL-Community/PCL2-CE" target="_blank">GitHub</a></li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE/issues" target="_blank"
                  >{{ t('footer.issues') }}</a
                >
              </li>
              <li>
                <a href="https://github.com/PCL-Community/PCL2-CE/discussions" target="_blank"
                  >{{ t('footer.discussions') }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom fade-in" style="transition-delay: 0.6s;">
          <div class="footer-info">
            <div class="footer-links-row">
              <a href="https://github.com/PCL-Community/PCL2CE-web" target="_blank" class="footer-link footer-link-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                {{ t('footer.websiteRepo') }}
              </a>
              <a href="https://beian.miit.gov.cn" target="_blank" class="footer-link footer-link-icon">
                {{ t('footer.icpRecord') }}
              </a>
            </div>
          </div>
          <div class="copyright-info">
            <p>
              © PCL Community {{ currentYear }} {{ t('footer.copyright') }}
            </p>
            <p>
              {{ t('footer.disclaimer') }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useScrollAnimation } from './composables/useScrollAnimation';
import i18n from './i18n';

const { t, locale } = useI18n();
const isMenuOpen = ref(false);
const isLangMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value;
};

const route = useRoute();

const updatePageTitle = () => {
  if (route.meta.titleKey) {
    document.title = i18n.global.t(route.meta.titleKey as string);
  }
};

const switchLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';
  isLangMenuOpen.value = false;
  // 语言切换后更新页面标题
  updatePageTitle();
};

// 页面加载和路由变化时更新标题
watch(() => route.path, () => {
  updatePageTitle();
}, { immediate: true });

// 点击外部关闭语言菜单
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.language-dropdown')) {
    isLangMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// 监听菜单状态，控制 body 滚动
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    // 菜单打开时禁止 body 滚动
    document.body.style.overflow = 'hidden';
  } else {
    // 菜单关闭时恢复 body 滚动
    document.body.style.overflow = '';
  }
});

// 初始化滚动动画，确保所有页面的动画元素都能正常工作
useScrollAnimation();
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

.language-dropdown {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  font-size: 0.9rem;
}

.lang-toggle:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  color: var(--white);
}

.lang-toggle svg:last-child {
  transition: transform 0.3s ease;
}

.lang-toggle svg:last-child.rotated {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-strong);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  box-shadow: var(--glass-shadow-hover);
  min-width: 150px;
  overflow: hidden;
  z-index: 1001;
}

.lang-option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  font-size: 0.9rem;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.lang-option.active {
  background: var(--gradient-primary);
  color: var(--white);
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
  top: 1rem;
  right: 20px;
  z-index: 1001;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 0.75rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  color: var(--white);
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.copyright-info {
  text-align: right;
}

.footer-links-row {
  display: block;
  margin-top: 0.5rem;
}

.footer-links-row > a {
  display: block;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--primary);
}

.footer-link-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-link-icon svg {
  flex-shrink: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem 20px;
  }

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
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    padding: 6rem 2rem 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-menu .nav-link {
    font-size: 1.3rem;
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-lg);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 2px solid var(--glass-border);
    width: 100%;
    max-width: 320px;
    text-align: center;
    font-weight: 600;
    box-shadow: var(--glass-shadow);
    transition: all 0.3s ease;
  }

  .nav-menu .nav-link:hover,
  .nav-menu .nav-link.router-link-active {
    background: var(--glass-bg-hover);
    border-color: var(--glass-border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glass-shadow-hover);
    color: var(--primary);
  }

  .nav-menu .github-link {
    background: var(--glass-bg);
    border: 2px solid var(--glass-border);
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-menu .github-link:hover {
    background: var(--glass-bg-hover);
    border-color: var(--glass-border-hover);
    color: var(--white);
  }

  .nav-menu .github-link svg {
    width: 24px;
    height: 24px;
  }

  .nav-menu .language-dropdown {
    width: 100%;
    max-width: 320px;
  }

  .nav-menu .lang-toggle {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 1rem;
    background: var(--glass-bg);
    border: 2px solid var(--glass-border);
  }

  .nav-menu .lang-menu {
    position: static;
    margin-top: 0.5rem;
    width: 100%;
  }

  .nav-menu .lang-option {
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-section {
    text-align: center;
  }

  .footer-brand {
    justify-content: center;
  }

  .footer-description {
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .copyright-info {
    text-align: center;
  }
}
</style>
