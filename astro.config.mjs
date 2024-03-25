import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  sitemap: {
    hostname: "https://blog.com",
    exclude: ["/secret"],
  },
  integrations: [sitemap()],
  site: 'https://blog.com',
  
});
