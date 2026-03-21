<script setup lang="ts">
interface MirrorItem {
  href: string;
  label: string;
}

defineProps<{
  items: MirrorItem[];
}>();
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

<style scoped>
.mirror-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.mirror-btn {
  display: block;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}

.mirror-btn:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .mirror-grid {
    grid-template-columns: 1fr;
  }
}
</style>
