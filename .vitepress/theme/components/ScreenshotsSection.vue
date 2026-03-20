<script setup lang="ts">
interface ScreenshotItem {
  src: string
  alt: string
  title: string
  description: string
}

defineProps<{
  title: string
  description: string
  items: ScreenshotItem[]
}>()
</script>

<template>
  <div class="screenshots-section">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="screenshot-grid">
      <div v-for="item in items" :key="item.src" class="screenshot-item">
        <img :src="item.src" :alt="item.alt" loading="lazy" />
        <div class="overlay">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>