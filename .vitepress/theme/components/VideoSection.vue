<script setup lang="ts">
defineProps<{
  title: string
  description: string
  videoSrc: string
}>()
</script>

<template>
  <div class="video-section">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="video-container">
      <iframe
        :src="videoSrc"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.video-section {
  text-align: center;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.video-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.video-section p {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  aspect-ratio: 16 / 9;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .video-section {
    padding: 1.5rem 0.75rem;
  }

  .video-section h2 {
    font-size: 1.5rem;
  }

  .video-container {
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}
</style>