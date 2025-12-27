import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null;

  // 数字增长动画函数
  const animateCounter = (element: Element) => {
    const target = parseInt((element as HTMLElement).dataset.target || '0');
    const suffix = (element as HTMLElement).dataset.suffix || '';
    let current = 0;
    const duration = 2000; // 动画持续时间（毫秒）
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用缓动函数使动画更自然
      const easeOutQuad = progress * (2 - progress);
      current = Math.floor(target * easeOutQuad);
      
      // 格式化显示，对于大于1000的数字添加K
      let displayValue = current;
      if (suffix.includes('K')) {
        displayValue = Math.floor(current / 1000);
      }
      
      (element as HTMLElement).textContent = `${displayValue}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // 确保最终值准确
        (element as HTMLElement).textContent = `${Math.floor(target / (suffix.includes('K') ? 1000 : 1))}${suffix}`;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const initScrollAnimation = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // 检查是否是计数器元素
            if (entry.target.classList.contains('counter')) {
              animateCounter(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // 观察所有带有动画类的元素，包括计数器
    const elements = document.querySelectorAll('.scroll-animate, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .counter');
    elements.forEach((el) => {
      // 检查元素是否在首屏（视口内）
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // 首屏元素立即显示
        el.classList.add('is-visible');
        
        // 首屏的计数器元素也需要触发动画
        if (el.classList.contains('counter')) {
          animateCounter(el);
        }
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
