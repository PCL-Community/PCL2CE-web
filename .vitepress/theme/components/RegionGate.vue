<script setup lang="ts">
import { useRegionGuard } from '../composables/useRegionGuard';

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const { blocked, message, hint } = useRegionGuard();
</script>

<template>
  <div v-if="blocked" class="region-blocked">
    <div>{{ message }}</div>
    <div class="region-blocked-hint">{{ hint }}</div>
  </div>
  <slot v-else />
</template>

<style scoped>
.region-blocked {
  display: inline-block;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.region-blocked-hint {
  margin-top: 0.35rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}
</style>
