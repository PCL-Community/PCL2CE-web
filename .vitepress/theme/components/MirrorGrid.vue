<script setup lang="ts">
interface MirrorItem {
  href: string
  label: string
}

defineProps<{
  items: MirrorItem[]
}>()
</script>

<template>
  <div class="mirror-grid">
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      class="mirror-btn"
    >
      {{ item.label }}
    </a>
  </div>
</template>