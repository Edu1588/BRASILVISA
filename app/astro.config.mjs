// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.migrafacil.net',
  trailingSlash: 'ignore',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/obrigado'),
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en', zh: 'zh-CN' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
