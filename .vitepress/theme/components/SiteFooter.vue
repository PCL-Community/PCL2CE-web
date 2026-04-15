<script setup lang="ts">
import type { FooterData } from '@theojs/lumen';
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ Footer_Data: FooterData }>();

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const isExternal = (path: string): boolean => EXTERNAL_URL_RE.test(path);

const resolveTarget = (href?: string, target?: string) => {
  if (target) return target;
  return href && isExternal(href) ? '_blank' : undefined;
};

const resolveRel = (href?: string, rel?: string, target?: string) => {
  if (rel) return rel;
  const resolvedTarget = resolveTarget(href, target);
  return resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined;
};

const { localeIndex } = useData();
const localeKey = computed(() => localeIndex.value);

const footer = computed(() => {
  return props.Footer_Data.i18n?.[localeKey.value] ?? props.Footer_Data;
});

const currentYear = ref('');
onMounted(() => (currentYear.value = new Date().getFullYear().toString()));
</script>

<template>
  <footer class="footer">
    <div v-if="footer.group?.length" class="list-container">
      <section v-for="(section, i) in footer.group" :key="section.title + i">
        <h3 class="list-title">
          <iconify-icon v-if="section.icon" class="icon-space" :icon="section.icon" width="12" height="12" />
          <img v-else-if="section.image" class="image-inline" :src="section.image" width="12" height="12" loading="lazy" />
          {{ section.title }}
        </h3>
        <ul class="list-links">
          <li v-for="(link, i) in section.links" :key="link.name + i">
            <iconify-icon v-if="link.icon" class="icon-space" :icon="link.icon" width="12" height="12" />
            <img v-else-if="link.image" class="image-inline" :src="link.image" width="12" height="12" loading="lazy" />
            <a
              :href="link.link"
              :rel="resolveRel(link.link, link.rel, link.target)"
              :target="resolveTarget(link.link, link.target)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </section>
    </div>

    <div v-if="footer.beian?.icp || footer.beian?.police || footer.author" class="footer-info">
      <template v-if="footer.beian?.icp || footer.beian?.police">
        <span v-if="footer.beian?.icp?.number" class="footer-infotext">
          <template v-if="footer.beian?.showIcon">
            <iconify-icon v-if="footer.beian.icp.icon" class="icon-space" :icon="footer.beian.icp.icon" width="12" height="12" />
            <img
              v-else-if="footer.beian.icp.image"
              class="image-inline"
              :src="footer.beian.icp.image"
              width="12"
              height="12"
              loading="eager"
            />
            <img v-else class="image-inline" src="/img/miit.ico" width="12" height="12" loading="eager" />
          </template>
          <a
            :href="footer.beian.icp.link || 'https://beian.miit.gov.cn/'"
            :rel="footer.beian.icp.rel || 'nofollow'"
            :target="footer.beian.icp.target || '_blank'"
          >
            {{ footer.beian.icp.number }}
          </a>
        </span>

        <span class="info-spacing"></span>

        <span v-if="footer.beian?.police?.number" class="footer-infotext">
          <template v-if="footer.beian?.showIcon">
            <iconify-icon v-if="footer.beian.police.icon" class="icon-space" :icon="footer.beian.police.icon" width="12" height="12" />
            <img
              v-else-if="footer.beian.police.image"
              class="image-inline"
              :src="footer.beian.police.image"
              width="12"
              height="12"
              loading="eager"
            />
            <img v-else class="image-inline" src="https://i.theojs.cn/logo/mps.webp" width="12" height="12" loading="eager" />
          </template>
          <a
            :href="footer.beian.police.link || 'https://beian.mps.gov.cn/'"
            :rel="footer.beian.police.rel"
            :target="footer.beian.police.target || '_blank'"
          >
            {{ footer.beian.police.number }}
          </a>
        </span>
      </template>

      <span class="info-spacing-copyright"></span>

      <span v-if="footer.author?.name" class="footer-infotext">
        <iconify-icon v-if="footer.author.icon" class="icon-space" :icon="footer.author.icon" width="12" height="12" />
        <img v-else-if="footer.author.image" class="image-inline" :src="footer.author.image" width="12" height="12" loading="lazy" />
        <iconify-icon v-else class="icon-space" :icon="'ri:copyright-line'" width="12" height="12" />
        <a
          :href="footer.author.link || `https://github.com/${footer.author.name}`"
          :rel="resolveRel(footer.author.link, footer.author.rel, footer.author.target)"
          :target="resolveTarget(footer.author.link, footer.author.target)"
        >
          {{ footer.author.startYear ? footer.author.startYear + ' - ' : '' }}{{ currentYear }}
          {{ footer.author.name }}
          {{ (footer.author.text && footer.author.text !== 'MIT License.') ? footer.author.text : '' }}
        </a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--lm-Footer-bg);
  width: 100%;
}

.footer a {
  position: relative;
  transition:
    color 0.25s,
    opacity 0.25s,
    text-decoration-color 0.25s;
}

.footer a:hover {
  color: var(--lm-Footer-link-hover);
  -webkit-text-decoration: underline solid;
  text-decoration: underline solid;
  text-underline-offset: 4px;
}

.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  row-gap: 1.25em;
  justify-items: center;
  margin: 1.25em auto;
  max-width: 65%;
}

.list-container section {
  text-align: center;
}

.list-title {
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.5;
}

.list-links {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 2.4;
}

.list-links a {
  opacity: 0.75;
}

.list-links a:hover {
  opacity: 1;
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
}

.icon-space {
  margin-right: 0.3em;
}

.footer-info {
  margin: 0.875em 0;
  text-align: center;
}

.footer-infotext {
  display: inline-block;
  margin: 0;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.6;
}

.info-spacing,
.info-spacing-copyright {
  margin-left: 1em;
}

.image-inline {
  display: inline-block;
  vertical-align: -0.125em;
  margin-right: 0.3em;
}

@media (max-width: 768px) {
  .info-spacing-copyright {
    margin-left: -1em;
  }
}
</style>
