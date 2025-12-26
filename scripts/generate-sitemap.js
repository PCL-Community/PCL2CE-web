import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// 网站基础 URL
const SITE_URL = 'https://pclce-web.demo.fis.ink';

// 定义所有页面路由
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/download', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
];

// 生成站点地图
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const writeStream = createWriteStream(resolve(process.cwd(), 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  // 添加所有路由
  routes.forEach((route) => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});
