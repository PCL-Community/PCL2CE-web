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