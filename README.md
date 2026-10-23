# Migrafácil: site

Site da Migrafácil (equipe RNE Brasil): CRNM, autorização de residência, naturalização e visto americano. Português, inglês e chinês simplificado.

## Estrutura
- `app/`: código do site (Astro 5, React, Tailwind CSS v4, Lenis, GSAP, three.js)
- `BRIEFING.md`, `PESQUISA.md`, `COPY.md`, `PRODUCT.md`, `DESIGN.md`, `REVISAO.md`: documentos de cada fase do projeto
- `PROGRESSO.md`: andamento das fases e o que o cliente ainda precisa fornecer

## Rodar localmente
Requer Node 22.23 ou superior (ver `engines` em `app/package.json`).

```bash
cd app
npm install
npm run dev
```

## Gerar a versão de produção
```bash
cd app
npm run build
```
O resultado fica em `app/dist/` (site estático).

## Variável opcional
- `PUBLIC_FORM_ENDPOINT`: endereço que recebe o formulário de contato. Sem ela, o formulário abre o WhatsApp com a mensagem pronta.
