import { ref, onMounted, onUnmounted, computed, type ComputedRef, type Ref } from 'vue';

// 断点常量
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
} as const;

export interface UseResponsiveReturn {
  isMobile: ComputedRef<boolean>;
  isTablet: ComputedRef<boolean>;
  isDesktop: ComputedRef<boolean>;
  screenWidth: Ref<number>;
}

export function useResponsive(): UseResponsiveReturn {
  const screenWidth = ref(window.innerWidth);

  // 媒体查询
  const mobileQuery = window.matchMedia(`(max-width: ${BREAKPOINTS.DESKTOP - 1}px)`);
  const tabletQuery = window.matchMedia(
    `(min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP - 1}px)`
  );
  const desktopQuery = window.matchMedia(`(min-width: ${BREAKPOINTS.DESKTOP}px)`);

  // 更新屏幕宽度
  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  // 计算属性
  const isMobile = computed(() => screenWidth.value < BREAKPOINTS.DESKTOP);
  const isTablet = computed(
    () => screenWidth.value >= BREAKPOINTS.TABLET && screenWidth.value < BREAKPOINTS.DESKTOP
  );
  const isDesktop = computed(() => screenWidth.value >= BREAKPOINTS.DESKTOP);

  onMounted(() => {
    // 监听窗口大小变化
    window.addEventListener('resize', updateScreenWidth);

    // 监听媒体查询变化
    mobileQuery.addEventListener('change', updateScreenWidth);
    tabletQuery.addEventListener('change', updateScreenWidth);
    desktopQuery.addEventListener('change', updateScreenWidth);
  });

  onUnmounted(() => {
    // 清理事件监听
    window.removeEventListener('resize', updateScreenWidth);
    mobileQuery.removeEventListener('change', updateScreenWidth);
    tabletQuery.removeEventListener('change', updateScreenWidth);
    desktopQuery.removeEventListener('change', updateScreenWidth);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
  };
}
