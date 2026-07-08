import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // 👈 改成这里
  site: 'https://pangyu.online',

  integrations: [mdx(), sitemap()],
  adapter: vercel(),
});