import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null;

  const initScrollAnimation = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // 观察所有带有 scroll-animate 类的元素
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      // 检查元素是否在首屏（视口内）
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // 首屏元素立即显示，不使用动画
        el.classList.add('is-visible');
      } else {
        // 非首屏元素使用观察器
        observer?.observe(el);
      }
    });
  };

  onMounted(() => {
    // 延迟初始化以确保 DOM 已渲染
    setTimeout(initScrollAnimation, 100);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    initScrollAnimation,
  };
}
