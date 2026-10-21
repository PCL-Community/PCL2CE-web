import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { getMessages, type Lang } from '../../data/i18n';

const TRACE_URL = 'https://www.cloudflare.com/cdn-cgi/trace';
const TRACE_TIMEOUT = 5000;

const CHINA_TIME_ZONES = new Set([
  'Asia/Shanghai',
  'Asia/Chongqing',
  'Asia/Harbin',
  'Asia/Urumqi',
  'Asia/Kashgar',
  'PRC',
]);

const blocked = ref(false);
let checkStarted = false;

function isChinaTimeZone(): boolean {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  return CHINA_TIME_ZONES.has(timeZone);
}

async function requestTraceLocation(): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TRACE_TIMEOUT);
  try {
    const response = await fetch(TRACE_URL, {
      cache: 'no-store',
      signal: controller.signal,
    });
    if (!response.ok) return '';
    const text = await response.text();
    return (/(?:^|\n)loc=([^\s\r]+)/.exec(text)?.[1] ?? '').toUpperCase();
  } catch {
    return '';
  } finally {
    clearTimeout(timer);
  }
}

function startRegionCheck() {
  if (checkStarted) return;
  checkStarted = true;
  if (isChinaTimeZone()) {
    blocked.value = true;
    return;
  }
  void requestTraceLocation().then((loc) => {
    if (loc === 'CN') blocked.value = true;
  });
}

export function useRegionGuard() {
  const { lang } = useData();
  onMounted(startRegionCheck);
  const region = computed(
    () => getMessages((lang.value || 'zh-CN') as Lang).region,
  );
  return {
    blocked,
    message: computed(() => region.value.blocked),
    hint: computed(() => region.value.hint),
  };
}
