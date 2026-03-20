<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
  buttonLink: string
}>()
</script>

<template>
  <div class="download-cta">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="buttonLink" class="download-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {{ buttonText }}
    </a>
  </div>
</template>