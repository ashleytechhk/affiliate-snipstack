// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Build a slug → publishDate map by reading post frontmatter at config-load time.
// Lets the sitemap emit accurate <lastmod> per article so Google can detect changes.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.resolve(__dirname, 'src/content/posts');
const lastmodBySlug = {};
if (fs.existsSync(postsDir)) {
  for (const file of fs.readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const m = raw.match(/^publishDate:\s*(.+)$/m);
    if (m) {
      const d = new Date(m[1].trim().replace(/['"]/g, ''));
      if (!isNaN(d.getTime())) {
        lastmodBySlug[slug] = d.toISOString();
      }
    }
  }
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://snipstack.io',
  integrations: [
    sitemap({
      serialize(item) {
        try {
          const u = new URL(item.url);
          const slug = u.pathname.replace(/^\/|\/$/g, '');
          if (lastmodBySlug[slug]) {
            item.lastmod = lastmodBySlug[slug];
          }
        } catch {}
        return item;
      },
    }),
  ],
});
