# PROGRESSO: Site Migrafácil (CRNM / antigo RNE)

Referência atual: https://www.migrafacil.net/asessoria-em-rne/

| Fase | Status | O que foi feito |
|---|---|---|
| 1. Planejamento | concluída | 4 páginas do site atual lidas; decisões salvas em BRIEFING.md e confirmadas |
| 2. Pesquisa | concluída | PESQUISA.md: fatos legais e taxas oficiais, 8 concorrentes, dores do público, palavras-chave PT/EN/ZH, regras de copy |
| 3. Copy | concluída | COPY.md em PT: 12 páginas, FAQ de 5, avisos legais, mensagens de WhatsApp por serviço; EN e ZH traduzidos na Fase 5 |
| 4. Design | concluída | PRODUCT.md e DESIGN.md: papel de documento oficial, cores do logo, Schibsted Grotesk, ficha CRNM com check no herói |
| 5. Construção | concluída | Astro 5 + React + Tailwind v4 + Lenis + GSAP em app/; 11 páginas x 3 idiomas + 404 (34 páginas); build sem erros. Azul noite #03034A do site de referência aplicado no herói e seções escuras, a pedido |
| 6. Extras | concluída | Elemento 3D (three.js) no herói da home: carteira e passaporte com espessura, inclinação pelo mouse e brilho holográfico, textura gerada da própria ilustração SVG; só desktop com WebGL e sem movimento reduzido; carregado sob demanda (141 kB gzip) |
| 7. Revisão de design | concluída | REVISAO.md: nenhum crítico; 4 importantes e 2 polimentos corrigidos, 2 itens justificados; contraste AA em 13 páginas |
| 8. SEO | aguardando ok | SEO.md: sitemap.xml com hreflang, robots.txt, llms.txt, títulos e descriptions ajustados, 30 imagens Open Graph, schema ProfessionalService + Service; auditoria sem itens críticos |
| 9. Segurança e entrega | pendente | |

## Ajustes pedidos durante a Fase 8
- Botões de WhatsApp na cor oficial (#25D366) com o logo; botão redondo fixo no canto inferior direito (desktop)
- Efeitos de entrada e rolagem (GSAP ScrollTrigger), desligados com movimento reduzido
- Barra de ferramentas do Astro desligada no modo de desenvolvimento
- Fotos geradas no Gemini para as 4 páginas de serviço e a home (aguardando o arquivo salvo em imagens-gemini/)

## O que o cliente precisa fornecer
- Números reais dos contadores (o site atual mostra "+0" em todos)
- Fotos reais da equipe
- Avaliações reais (Google ou WhatsApp, com autorização)
- Cases de sucesso reais (com autorização)
- Confirmar se o endereço de Sumaré recebe clientes (horário de atendimento presencial)
- Certificados do CEO em arquivo (PDF ou imagem) para a página de equipe
- Tradução revisada por nativo do mandarim (a IA gera, um nativo valida)
- Respostas completas do FAQ atual (4 das 5 perguntas estão sem resposta)
- Razão social, CNPJ e encarregado de dados para a Política de Privacidade
- Link do perfil no Google (avaliações)
- Endpoint do formulário (variável PUBLIC_FORM_ENDPOINT); sem ele o formulário abre o WhatsApp com a mensagem pronta
- Revisão das traduções por nativos (inglês e chinês), em especial termos jurídicos e nomes dos certificados
- Domínio e hospedagem; acesso ao Google Search Console e Analytics

## Conferir manualmente antes de publicar
- Valor da taxa MRV e da Visa Integrity Fee (sites oficiais dos EUA bloquearam a leitura)
- Redação vigente do art. 74 do Decreto 9.199/2017
- Valores de investimento do CNIg (fonte secundária)
