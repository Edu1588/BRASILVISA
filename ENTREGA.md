# ENTREGA: Site Migrafácil

## O que está pronto
- Site estático em `app/` (Astro 7, React, Tailwind CSS v4, Lenis, GSAP, three.js), 34 páginas: 11 páginas em português, inglês e chinês simplificado, mais a 404.
- Páginas: Início, CRNM, Naturalização, Residência, Visto americano, Sobre, Cases, Perguntas (5), Contato, Obrigado, Privacidade, 404.
- WhatsApp com mensagem pronta por serviço, botões verdes oficiais, barra fixa no celular e botão fixo no desktop. Promessa de retorno em até 24 horas.
- Elemento 3D no topo da home (desktop), efeitos de entrada e rolagem, fotos geradas no Gemini.
- SEO: sitemap.xml, robots.txt, llms.txt, Open Graph, schema local e de serviço (ver SEO.md).
- Segurança: CSP, cabeçalhos HTTP, 0 vulnerabilidades (ver SEGURANCA.md).
- Repositório: https://github.com/Edu1588/BRASILVISA

## Como publicar
```bash
cd app
npm install
npm run build
```
Enviar o conteúdo de `app/dist/` para a hospedagem (inclui `.htaccess` para Hostinger/Apache).

## O que depende do cliente
**Para publicar**
- Domínio (www.migrafacil.net) e hospedagem
- Google Search Console: verificar o domínio e enviar `https://www.migrafacil.net/sitemap.xml`
- Google Analytics (ou equivalente), com banner de cookies e liberação na CSP

**Conteúdo real (blocos ocultos ou marcados até chegar)**
- Fotos reais da equipe (a página Sobre mostra "Foto da equipe em breve")
- Avaliações reais do Google, com autorização, e o link do perfil
- Cases de sucesso reais, com autorização
- Números reais para os contadores da home
- Bio do CEO confirmando a experiência na Polícia Federal sem sugerir vínculo atual, e os arquivos dos certificados
- Horário de atendimento presencial em Sumaré

**Dados legais**
- Razão social, CNPJ, encarregado de dados e prazo de guarda para a Política de Privacidade
- Conferir antes de publicar: taxa MRV e Visa Integrity Fee, redação vigente do art. 74 do Decreto 9.199/2017, valores de investimento do CNIg

**Revisões**
- Traduções em inglês e chinês por falantes nativos, em especial os termos jurídicos e os nomes dos certificados
- Endpoint do formulário (`PUBLIC_FORM_ENDPOINT`), se quiser receber os contatos por email além do WhatsApp
