<template>
  <div class="gallery-container" ref="containerRef" :style="{ height: containerHeight + 'px' }">
    <div class="sticky-wrapper">
      <div class="horizontal-track" ref="trackRef" :style="{ transform: `translate3d(${currentTranslate}px, 0, 0)` }">
        <img 
          v-for="(src, index) in images" 
          :key="index" 
          :src="src.url" 
          :alt="src.alt" 
          class="gallery-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

defineProps<{
  images: { url: string; alt: string }[];
}>();

const containerRef = ref<HTMLElement | null>(null);
const trackRef = ref<HTMLElement | null>(null);
const currentTranslate = ref(0);
const containerHeight = ref(2000);

let targetTranslate = 0;
let animationFrameId = 0;
let resizeObserver: ResizeObserver | null = null;

const updateHeight = () => {
  if (trackRef.value && containerRef.value) {
    const scrollWidth = trackRef.value.scrollWidth;
    const clientWidth = containerRef.value.clientWidth; // 不包含滚动条的宽度
    const maxTranslate = Math.max(0, scrollWidth - clientWidth);
    const vh = window.innerHeight;
    // 缩短 containerHeight 从而加快滚动并减小上下间距的感知
    containerHeight.value = maxTranslate + vh * 0.5;
  }
};

const onScroll = () => {
  if (!containerRef.value || !trackRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  const trackScrollWidth = trackRef.value.scrollWidth;
  const clientWidth = containerRef.value.clientWidth;
  const windowHeight = window.innerHeight;

  // 最大横向移动距离 = 轨道总宽度 - 容器可用宽度
  const maxTranslate = Math.max(0, trackScrollWidth - clientWidth);

  // 调整触发位置，让它更靠近中间
  const stickyTop = windowHeight * 0.2;

  if (maxTranslate <= 0) return;

  // 当前滚动进度 (0 到 1)
  let progress = (stickyTop - containerRect.top) / maxTranslate;

  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  targetTranslate = -(progress * maxTranslate);
};

const loop = () => {
  onScroll();
  currentTranslate.value += (targetTranslate - currentTranslate.value) * 0.08;

  if (Math.abs(targetTranslate - currentTranslate.value) < 0.1) {
    currentTranslate.value = targetTranslate;
  }

  animationFrameId = requestAnimationFrame(loop);
};

onMounted(() => {
  setTimeout(() => {
    updateHeight();
  }, 100);

  window.addEventListener('resize', updateHeight);

  if (trackRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(trackRef.value);
  }

  loop();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', updateHeight);
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<style scoped>
.gallery-container {
  position: relative;
  width: 100%;
  margin-left: 0;
  overflow-x: clip;
}

@supports (width: 100dvw) {
  .gallery-container {
    width: 100dvw;
    margin-left: calc(50% - 50dvw);
  }
}

.sticky-wrapper {
  position: sticky;
  top: 20vh; /* 吸顶位置下移一点 */
  height: 60vh; /* 减小高度 */
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.horizontal-track {
  display: flex;
  align-items: center;
  gap: 3rem;
  /* 使用 50% 确保居中时不受滚动条影响；800px max-width 对应 400px 半宽 */
  padding-left: calc(50% - clamp(0px, 37.5vw, 400px));
  padding-right: calc(50% - clamp(0px, 37.5vw, 400px));
  will-change: transform;
}

.gallery-image {
  width: 75vw;
  max-width: 800px; /* 限制最大宽度，让两边留白更明显 */
  max-height: 60vh;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  object-fit: cover;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-drag: none;
  transition: box-shadow 0.3s ease;
}

.gallery-image:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  /* 删除了 transform: scale 飞起动画 */
}

@media (max-width: 768px) {
  .horizontal-track {
    gap: 1.5rem;
    padding-left: calc(50% - 42.5vw);
    padding-right: calc(50% - 42.5vw);
  }
  .gallery-image {
    width: 85vw;
    border-radius: 8px;
  }
}

:global(.VPContent) {
  overflow-x: hidden;
  overflow-x: clip;
}
</style>
