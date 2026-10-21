<script setup lang="ts">
import { useRegionGuard } from '../composables/useRegionGuard';

interface MirrorItem {
  href: string;
  label: string;
}

defineProps<{
  items: MirrorItem[];
}>();

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const { blocked, message, hint } = useRegionGuard();
</script>

<template>
  <div class="mirror-grid">
    <div v-if="blocked" class="mirror-blocked">
      <div>{{ message }}</div>
      <div class="mirror-blocked-hint">{{ hint }}</div>
    </div>
    <template v-else>
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        class="mirror-btn"
      >
        {{ item.label }}
      </a>
    </template>
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

.mirror-blocked {
  grid-column: 1 / -1;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.mirror-blocked-hint {
  margin-top: 0.35rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .mirror-grid {
    grid-template-columns: 1fr;
  }
}
</style>
