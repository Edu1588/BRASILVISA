# SEGURANÇA (Fase 9)

Data: 23/10/2026. O comando /seguranca não está instalado neste ambiente; a auditoria foi feita diretamente sobre o código e a build.

## Resultado: nenhuma falha crítica

| Verificação | Resultado |
|---|---|
| Dependências (`npm audit`) | 0 vulnerabilidades, depois da atualização do Astro (ver abaixo) |
| Segredos no código e no histórico do git | Nenhum (chaves, tokens, senhas) |
| Links externos com `target="_blank"` | Todos com `rel="noopener"` |
| Recursos por `http://` | Nenhum |
| Content Security Policy | Meta tag em todas as páginas, com hash de cada script e estilo inline (Astro `security.csp`); testada na build de produção sem nenhuma violação |
| Cabeçalhos HTTP | `.htaccess` (Hostinger/Apache) e `_headers` (Netlify/Cloudflare): HSTS, nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, COOP; HTTPS e www forçados no Apache |
| Mapa do Google | iframe com `sandbox` e carregamento adiado |
| Formulário | Campos com limite de tamanho, honeypot contra robôs, consentimento obrigatório; sem endpoint configurado não envia dados a terceiros (abre o WhatsApp) |
| LGPD | Política de Privacidade publicada; nenhum cookie ou rastreador instalado |
| Fontes | Servidas pelo próprio site (sem Google Fonts), nenhuma fonte embutida como `data:` |

## Atualização do Astro 5 para o Astro 7
O pipeline pede Astro 5, mas a última versão 5 (5.18.2) tem alertas sem correção na linha 5, entre eles um **crítico** (execução remota de código na otimização de imagens AVIF, GHSA-26w7-cxv4-gfx2) e dois **altos**. O gate desta fase exige nenhuma falha crítica, então o site foi atualizado para o **Astro 7.4.2** e o **@astrojs/react 7.1.1**. Build, páginas, 3D, efeitos, FAQ, formulário, transições e os três idiomas foram testados de novo na build de produção.

Se precisar voltar ao Astro 5 por exigência do pipeline, o commit anterior a esta fase guarda a versão 5, mas com os alertas acima em aberto.

## Atenção ao configurar
- **Endpoint do formulário:** ao definir `PUBLIC_FORM_ENDPOINT`, inclua o domínio dele em `connect-src` na CSP (`app/astro.config.mjs`), senão o envio será bloqueado.
- **Google Analytics ou outro rastreador:** exige liberar o domínio na CSP e um banner de consentimento de cookies (LGPD).
- **Hospedagem fora de Apache/Netlify/Cloudflare:** replicar os cabeçalhos de `app/public/_headers`.
- Rodar `npm audit` antes de cada publicação.
