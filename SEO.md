# SEO (Fase 8)

Data: 23/10/2026. O comando /auditar-site e as skills seo, seo-schema, seo-local e seo-sitemap não estão instalados neste ambiente; a auditoria foi feita com script próprio sobre a build (34 páginas).

## Entregue
| Item | Onde | Situação |
|---|---|---|
| sitemap.xml | `app/src/pages/sitemap.xml.ts` → `/sitemap.xml` | 30 URLs (10 páginas x 3 idiomas), cada uma com hreflang pt-BR, en, zh-CN e x-default. Página Obrigado fora |
| robots.txt | `app/public/robots.txt` | Libera tudo, bloqueia /obrigado nos 3 idiomas, aponta o sitemap |
| llms.txt | `app/public/llms.txt` | Resumo da empresa, aviso legal, links dos serviços e dos outros idiomas |
| Títulos e descriptions | `app/src/i18n/*.ts` (meta) | Únicos em todas as páginas; títulos até 60 caracteres e descriptions até 160 em PT e EN |
| Canonical e hreflang | `app/src/layouts/Base.astro` | Em todas as páginas indexáveis, com barra final igual ao formato da build |
| Alt text | Todas as imagens | Logo e fotos com alt localizado; ilustrações decorativas com aria-hidden |
| Open Graph | `tools/og.py` → `app/public/og/<idioma>/<página>.png` | 30 imagens 1200x630 com o título da página; og:image, og:image:alt e Twitter card em todas as páginas |
| Schema local | `SchemaOrg.astro` | ProfessionalService com endereço de Sumaré, telefone, email, idiomas, fundador e redes sociais |
| Schema de serviço | `ServiceSchema.astro` | Service nas 4 páginas de serviço, ligado à empresa |
| Outros schemas | | BreadcrumbList nas páginas internas; FAQPage na página de Perguntas |
| noindex | Obrigado e 404 | Fora do índice |

## Auditoria (script sobre app/dist)
Verifica: title e description presentes e no tamanho, canonical, hreflang, og:image existente, exatamente um h1, atributo lang, alt em toda imagem e JSON-LD válido.
Resultado: 34 páginas, nenhum item crítico.

## Pendências que dependem do cliente
- Horário de atendimento (entra em `openingHours` do schema e no rodapé)
- Coordenadas do escritório, se quiser o pino exato no schema (`geo`)
- Link do perfil do Google (avaliações)
- Google Search Console: enviar `https://www.migrafacil.net/sitemap.xml` depois da publicação
- Google Analytics ou equivalente, com banner de cookies (a Política de Privacidade já prevê)
- Revisão das imagens Open Graph em chinês por um falante nativo
