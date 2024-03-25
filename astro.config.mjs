import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  sitemap: {
    hostname: "https://blog.com",
    exclude: ["/secret"]
  },
  integrations: [sitemap(), robotsTxt()],
  site: 'https://blog.com'
});