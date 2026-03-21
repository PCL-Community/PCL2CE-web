<script setup lang="ts">
interface AboutCard {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const _pnprops = defineProps<{
  cards: AboutCard[];
  imageSrc: string;
  imageAlt: string;
}>();
</script>

<template>
  <div class="about-page">
    <div class="about-content">
      <div class="about-cards">
        <a
          v-for="(card, index) in cards"
          :key="index"
          :href="card.href"
          :target="card.href ? '_blank' : undefined"
          class="about-card"
          :class="{ 'about-card-link': card.href }"
        >
          <div class="about-card-icon">
            <iconify-icon :icon="card.icon" width="24" height="24"></iconify-icon>
          </div>
          <div class="about-card-content">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </a>
      </div>
      <div class="about-image">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.about-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.about-card-link {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.about-card-link:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(2, 102, 193, 0.12);
  transform: translateX(4px);
}

.about-card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 10px;
  color: white;
  line-height: 0;
}

.about-card-icon :deep(iconify-icon) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 24px !important;
  height: 24px !important;
  vertical-align: top !important;
}

.about-card-content h3 {
  margin: 0 0 0.375rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.about-card-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.about-image {
  flex-shrink: 0;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .about-image {
    width: 200px;
  }

  .about-cards {
    width: 100%;
  }
}
</style>