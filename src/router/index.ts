import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import i18n from '../i18n';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      titleKey: 'meta.titles.home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      titleKey: 'meta.titles.about',
    },
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/DownloadView.vue'),
    meta: {
      titleKey: 'meta.titles.download',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      titleKey: 'meta.titles.notFound',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

// 路由守卫 - 更新页面标题

// 设置页面标题的路由守卫
router.beforeEach((to, _from, next) => {
  if (to.meta.titleKey) {
    document.title = i18n.global.t(to.meta.titleKey as string)
  }
  next()
});

// 路由错误处理
router.onError((error) => {
  console.error('Router error:', error);
});

export default router;
