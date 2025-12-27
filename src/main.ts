import { createApp } from 'vue';
import './assets/styles/global.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');

// 添加统计代码，仅在生产环境加载
if (import.meta.env.PROD) {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://um.fis.ink/script.js';
  script.setAttribute('data-website-id', '4e7333ce-6a82-408f-9ed5-bd0d0784cb5b');
  document.head.appendChild(script);
}
