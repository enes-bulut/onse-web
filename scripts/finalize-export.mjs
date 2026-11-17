import { readFile, writeFile } from 'node:fs/promises';
import { siteUrl } from '../site-config.mjs';

for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt', 'index.html.md']) {
  const path = new URL(`../out/${file}`, import.meta.url);
  const content = await readFile(path, 'utf8');
  await writeFile(path, content.replaceAll('__SITE_URL__', siteUrl));
}
await writeFile(new URL('../out/.nojekyll', import.meta.url), '');
console.log(`Static site exported to out/ for ${siteUrl}`);
