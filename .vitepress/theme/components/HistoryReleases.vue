<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { getMessages, type Lang } from '../../data/i18n';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface ReleaseItem {
  id: number;
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
}

interface DisplayAsset {
  label: string;
  officialHref: string;
  mirrorHref: string;
}

interface DisplayRelease {
  id: number;
  title: string;
  tag: string;
  date: string;
  url: string;
  assets: DisplayAsset[];
}

type SourceType = 'github' | 'mirror1';

const API_URL =
  'https://api.github.com/repos/PCL-Community/PCL2-CE/releases?per_page=30';
const SOURCE_MIRROR_BASE = 'https://download.fishcpy.top/dl/pclce/pcl2ce';

const loading = ref(true);
const error = ref<string | null>(null);
const releases = ref<DisplayRelease[]>([]);
const selectedId = ref<number | null>(null);
const menuOpen = ref(false);
const sourceMenuOpen = ref(false);
const selectedSource = ref<SourceType>('github');

const { lang } = useData();
const messages = computed(() => {
  const currentLang = (lang.value || 'zh-CN') as Lang;
  return getMessages(currentLang).history;
});

function formatDate(value: string) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString();
}

function buildMirrorHref(tag: string, fileName: string) {
  return `${SOURCE_MIRROR_BASE}/${encodeURIComponent(tag)}/${fileName}`;
}

function matchAssets(assets: ReleaseAsset[], tag: string): DisplayAsset[] {
  const result: DisplayAsset[] = [];
  const x64 = assets.find((asset) => /(x64|amd64)/i.test(asset.name));
  const arm64 = assets.find((asset) => /arm64/i.test(asset.name));

  if (x64) {
    result.push({
      label: messages.value.x64Label,
      officialHref: x64.browser_download_url,
      mirrorHref: buildMirrorHref(tag, x64.name),
    });
  }
  if (arm64) {
    result.push({
      label: messages.value.arm64Label,
      officialHref: arm64.browser_download_url,
      mirrorHref: buildMirrorHref(tag, arm64.name),
    });
  }
  return result;
}

async function loadReleases() {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data: ReleaseItem[] = await response.json();
    const filtered = data.filter((item) => !item.prerelease && !item.draft);
    releases.value = filtered.map((item) => {
      const assets = matchAssets(item.assets || [], item.tag_name);
      return {
        id: item.id,
        title: item.name || item.tag_name,
        tag: item.tag_name,
        date: formatDate(item.published_at),
        url: item.html_url,
        assets,
      };
    });
    selectedId.value = releases.value[0]?.id ?? null;
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  void loadReleases();
  document.addEventListener('click', handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
});

const selectedRelease = computed(() => {
  if (!selectedId.value) return null;
  return releases.value.find((item) => item.id === selectedId.value) || null;
});

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const selectedAssets = computed(() => {
  if (!selectedRelease.value) return [];
  return selectedRelease.value.assets.map((asset) => ({
    label: asset.label,
    href:
      selectedSource.value === 'github' ? asset.officialHref : asset.mirrorHref,
  }));
});

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const selectedSourceLabel = computed(() => {
  return selectedSource.value === 'github'
    ? messages.value.sourceGithub
    : messages.value.sourceMirror1;
});

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) sourceMenuOpen.value = false;
}

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
function toggleSourceMenu() {
  sourceMenuOpen.value = !sourceMenuOpen.value;
  if (sourceMenuOpen.value) menuOpen.value = false;
}

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
function selectRelease(id: number) {
  selectedId.value = id;
  menuOpen.value = false;
}

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
function selectSource(source: SourceType) {
  selectedSource.value = source;
  sourceMenuOpen.value = false;
}

function handleOutsideClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  if (
    target.closest('.history-select-wrap') ||
    target.closest('.history-source-select-wrap')
  )
    return;
  menuOpen.value = false;
  sourceMenuOpen.value = false;
}
</script>

<template>
  <div class="history-releases">
    <div class="history-header">
      <h1>{{ messages.title }}</h1>
      <p>{{ messages.subtitle }}</p>
    </div>

    <div v-if="loading" class="history-state">
      <div class="history-loading"></div>
      <span>{{ messages.loading }}</span>
    </div>

    <div v-else-if="error" class="history-state history-error">
      <p>{{ messages.error }}</p>
      <button type="button" class="retry-btn" @click="loadReleases">
        {{ messages.retry }}
      </button>
      <p class="error-detail">{{ error }}</p>
    </div>

    <div v-else-if="releases.length === 0" class="history-state">
      <span>{{ messages.empty }}</span>
    </div>

    <div v-else class="history-list">
      <div class="history-selector">
        <label class="history-label" for="history-release-select">
          {{ messages.selectLabel }}
        </label>
        <div class="history-select-wrap">
          <button
            id="history-release-select"
            type="button"
            class="history-select"
            @click="toggleMenu"
          >
            <span class="history-select-main">
              {{ selectedRelease?.title || '' }}
              <span v-if="selectedRelease" class="history-select-tag">
                {{ selectedRelease.tag }}
              </span>
            </span>
            <span class="history-select-arrow" aria-hidden="true"></span>
          </button>
          <div v-if="menuOpen" class="history-select-menu">
            <button
              v-for="release in releases"
              :key="release.id"
              type="button"
              class="history-select-option"
              @click="selectRelease(release.id)"
            >
              <span class="history-select-title">{{ release.title }}</span>
              <span class="history-select-tag">{{ release.tag }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="history-selector">
        <label class="history-label" for="history-source-select">
          {{ messages.sourceLabel }}
        </label>
        <div class="history-select-wrap history-source-select-wrap">
          <button
            id="history-source-select"
            type="button"
            class="history-select"
            @click="toggleSourceMenu"
          >
            <span class="history-select-main">
              {{ selectedSourceLabel }}
            </span>
            <span class="history-select-arrow" aria-hidden="true"></span>
          </button>
          <div v-if="sourceMenuOpen" class="history-select-menu">
            <button
              type="button"
              class="history-select-option"
              @click="selectSource('github')"
            >
              <span class="history-select-title">{{ messages.sourceGithub }}</span>
            </button>
            <button
              type="button"
              class="history-select-option"
              @click="selectSource('mirror1')"
            >
              <span class="history-select-title">{{ messages.sourceMirror1 }}</span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="selectedAssets.length > 0" class="history-assets">
        <a
          v-for="asset in selectedAssets"
          :key="asset.href"
          :href="asset.href"
          class="history-btn"
          target="_blank"
        >
          {{ asset.label }}
        </a>
      </div>
      <div v-else class="history-assets-empty">
        {{ messages.noAssets }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-releases {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  width: 100%;
  box-sizing: border-box;
}

.history-header {
  text-align: center;
  margin-bottom: 2rem;
}

.history-header h1 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
  color: var(--vp-c-text-1);
}

.history-header p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.history-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--vp-c-text-2);
  padding: 3rem 0;
}

.history-loading {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 3px solid var(--vp-c-brand-soft);
  border-top-color: var(--vp-c-brand-1);
  animation: spin 1s linear infinite;
}

.history-error {
  color: var(--vp-c-danger-1);
}

.retry-btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}

.retry-btn:hover {
  background: var(--vp-c-brand-2);
}

.error-detail {
  font-size: 0.85rem;
  opacity: 0.7;
}

.history-list {
  display: grid;
  gap: 0.75rem;
}

.history-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.history-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.history-select-wrap {
  position: relative;
  flex: 1;
  min-width: 220px;
  min-width: 0;
}

.history-select {
  width: 100%;
  flex: 1;
  min-width: 220px;
  min-width: 0;
  padding: 0.55rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
}

.history-select:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.history-select-tag {
  display: inline-flex;
  margin-left: 0.5rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
}

.history-select-main {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.history-select-arrow {
  width: 14px;
  height: 14px;
  border-right: 2px solid var(--vp-c-brand-1);
  border-bottom: 2px solid var(--vp-c-brand-1);
  transform: rotate(45deg);
  position: relative;
  top: -4px;
}

.history-select-menu {
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 0;
  right: 0;
  z-index: 10;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  max-height: 280px;
  overflow: auto;
}

.history-select-option {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
  cursor: pointer;
  min-width: 0;
}

.history-select-option:hover {
  background: var(--vp-c-brand-soft);
}

.history-select-title {
  font-weight: 600;
  min-width: 0;
  overflow-wrap: anywhere;
}

.history-changelog {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.history-changelog-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
}

.history-changelog-title h2 {
  margin: 0;
  line-height: 1.2;
}

.history-changelog-body {
  margin: 0 0 0.5rem;
  line-height: 1.55;
  color: inherit;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.history-changelog-body :deep(p) {
  margin: 0.35rem 0;
}

.history-changelog-body :deep(ul),
.history-changelog-body :deep(ol) {
  margin: 0.35rem 0 0.35rem 1.1rem;
  padding: 0;
}

.history-changelog-body :deep(li) {
  margin: 0.2rem 0;
}

.history-changelog-body :deep(h1),
.history-changelog-body :deep(h2),
.history-changelog-body :deep(h3),
.history-changelog-body :deep(h4) {
  margin: 0.35rem 0 0.25rem;
  line-height: 1.3;
}

.history-changelog-body :deep(h1:first-child),
.history-changelog-body :deep(h2:first-child),
.history-changelog-body :deep(h3:first-child),
.history-changelog-body :deep(h4:first-child) {
  margin-top: 0 !important;
}

.history-changelog-body :deep(*:first-child) {
  margin-top: 0 !important;
}

.history-changelog-body :deep(*:last-child) {
  margin-bottom: 0 !important;
}

.history-changelog-body :deep(pre) {
  margin: 0.5rem 0;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  overflow-x: auto;
  max-width: 100%;
}

.history-changelog-body :deep(hr) {
  display: none;
}

.history-changelog-body :deep(code) {
  background: rgba(255, 255, 255, 0.12);
  padding: 0.1rem 0.3rem;
  border-radius: 6px;
}

.history-changelog-empty {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
}

.history-tag {
  display: inline-flex;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
}

.history-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.history-assets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 0.6rem 0 0.35rem;
}

.history-btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.history-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.history-assets-empty {
  margin: 0.75rem 0 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.history-release-link {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  text-decoration: underline;
}

.history-changelog .history-release-link {
  color: var(--vp-c-text-2);
}

.history-changelog-body :deep(h1 + hr),
.history-changelog-body :deep(h2 + hr),
.history-changelog-body :deep(h3 + hr),
.history-changelog-body :deep(h4 + hr) {
  margin-top: 0;
}

.history-changelog-body :deep(hr + *) {
  margin-top: 0.25rem !important;
}

.dark .history-changelog {
  background: #0c1f33;
  color: #fff;
}

.dark .history-changelog-body {
  color: rgba(255, 255, 255, 0.86);
}

.dark .history-changelog-empty {
  color: rgba(255, 255, 255, 0.72);
}

.dark .history-changelog-body :deep(hr) {
  border-top-color: rgba(255, 255, 255, 0.2);
}

.dark .history-changelog .history-release-link {
  color: rgba(255, 255, 255, 0.8);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .history-header h1 {
    font-size: 1.6rem;
  }

  .history-selector {
    flex-direction: column;
    align-items: stretch;
  }

  .history-label {
    width: 100%;
  }
}
</style>
