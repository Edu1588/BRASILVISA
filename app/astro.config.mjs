// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Domínio provisório: trocar pelo domínio internacional (.com) quando for definido.
  site: 'https://www.brasillvisa.com',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  image: {
    service: passthroughImageService(),
  },
  // CSP com hashes gerados pelo Astro para os scripts e estilos inline (ilhas, ClientRouter).
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        // Google Tag Manager, Google Analytics e Google Ads (medição de conversões e remarketing).
        "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com https://www.google.com https://www.google.com.br https://*.doubleclick.net https://www.googleadservices.com",
        "font-src 'self'",
        "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://www.google.com.br https://*.doubleclick.net https://www.googleadservices.com",
        "frame-src https://maps.google.com https://www.google.com https://td.doubleclick.net https://www.googletagmanager.com",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
      // Hash do script inline da troca de idioma (Base.astro): scripts is:inline não entram no cálculo automático.
      // Se o conteúdo desse script mudar, recalcular (extrair da dist e rodar sha256 em base64).
      // Os resources liberam o carregador do Google Tag Manager, que scripts/consent.ts injeta só após o aceite.
      scriptDirective: {
        resources: ["'self'", 'https://www.googletagmanager.com', 'https://googleads.g.doubleclick.net', 'https://www.googleadservices.com'],
        hashes: ['sha256-/+TK/jE9MtX0YjADkWy1sUyhcakcDxBzo49P1nUpDd4='],
      },
    },
  },
  integrations: [
    react(),
  ],
  // assetsInlineLimit 0: nenhuma fonte vira data: no CSS (a CSP só permite fontes do próprio site).
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
