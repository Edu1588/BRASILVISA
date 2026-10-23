// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.migrafacil.net',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
