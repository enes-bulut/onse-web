import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import test from 'node:test';
import { siteUrl, basePath } from '../site-config.mjs';

const read = file => readFile(new URL(`../out/${file}`, import.meta.url), 'utf8');

test('exports the current research branding without email', async () => {
  const html = await read('index.html');
  assert.match(html, /Ontology-Native Software Engineering/);
  assert.match(html, /Own the meaning behind your systems/);
  assert.match(html, /The ontology is the software/);
  assert.match(html, /non-commercial technical research project/);
  assert.match(html, /90-second research self-assessment/i);
  assert.match(html, /validated research instrument/);
  assert.match(html, /<title>Ontology-Native Software Engineering/);
  assert.doesNotMatch(html, /ontologyas\.software|mailto:|hello@|Share Research Feedback|semantic friction/i);
  assert.ok(html.includes(`rel="canonical" href="${siteUrl}"`));
  assert.doesNotMatch(html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0] ?? "", /<img\b/);
});

test('exports local JS and CSS assets with the publishing base path', async () => {
  const html = await read('index.html');
  const assets = [...html.matchAll(/(?:src|href)="([^"?]+\.(?:js|css))(?:\?[^" ]*)?"/g)].map(match => match[1]);
  assert.ok(assets.some(path => path.endsWith('.js')));
  assert.ok(assets.some(path => path.endsWith('.css')));
  for (const path of assets) {
    assert.ok(path.startsWith(`${basePath}/_next/`), path);
    await access(new URL(`../out/${path.slice(basePath.length + 1)}`, import.meta.url));
  }
  await access(new URL('../out/.nojekyll', import.meta.url));
});

test('publishes matching discovery files and social metadata', async () => {
  for (const file of ['index.html.md', 'llms.txt', 'robots.txt', 'sitemap.xml']) {
    const content = await read(file);
    assert.ok(content.includes(siteUrl), file);
    assert.doesNotMatch(content, /__SITE_URL__|ontologyas\.software|mailto:|hello@/i);
  }
  const html = await read('index.html');
  assert.ok(html.includes(`${siteUrl}og.png`));
  assert.match(html, /property="og:title" content="Ontology-Native Software Engineering/);
});
