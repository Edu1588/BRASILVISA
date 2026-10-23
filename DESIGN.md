# DESIGN: Migrafácil

## Ideia central
**Papel de documento oficial.** O mundo do cliente é feito de passaportes, carteiras de residência e carimbos: papel de segurança com guilhoché, faixa de leitura mecânica (MRZ), selos. O site usa esse vocabulário com contenção, e o check vermelho do logo vira o gesto de "aprovado na conferência" que atravessa as páginas.

Referências estudadas no Inspo (sardine.ai, cdbaby.com, brevo.com): o gênero puxa para grotesca sem serifa em fundo claro e grade bento de SaaS. Fico com a grotesca e o fundo claro, recuso a grade bento e os cards idênticos: um escritório de documentos pede listas, tabelas e fichas, não azulejos.

## Cores (do logo)
| Nome | Hex | Uso |
|---|---|---|
| Tinta | #242374 | Azul do avião do logo. Títulos, fundos escuros, links |
| Carmim | #930C39 | Vermelho do check. Só CTA principal e o gesto de check |
| Papel | #F4F5FA | Fundo geral, branco azulado de papel de segurança (frio, nunca creme) |
| Grafite | #1D1E33 | Texto corrido |
| Guilhoché | #C8CBE4 | Linhas finas, padrões de fundo, divisórias |
| Branco | #FFFFFF | Superfícies de ficha e formulário |

Degradê permitido só onde o logo já usa: carmim para tinta, no traço do check.

## Tipografia
- **Schibsted Grotesk** (Google Fonts), família única para títulos e texto. Grotesca de jornal escandinavo, firme e legível, sem o ar de template de Inter. Títulos em 700 com tracking levemente negativo; texto em 400, 17 a 18px, entrelinha 1.6, linhas até 70 caracteres.
- **Noto Sans SC** para a versão em chinês (fallback automático pela pilha de fontes).
- Escala (razão 1.25): 14 / 17 / 21 / 27 / 34 / 42 / 53 / 66px. Herói usa clamp(2.4rem, 5vw, 4.1rem).
- Sem caixa alta em rótulos, sem sobretítulo em cima de todo título, sem destaque de uma palavra só no título.

## Layout
Coluna central de 1200px, alinhamento à esquerda. Ritmo vertical único: clamp(72px, 10vw, 136px) entre seções.

```
HERÓI (100svh)
+---------------------------------+-----------------------------+
| Título 3 linhas                 |  [ ficha CRNM em SVG ]      |
| Subtítulo                       |   guilhoché, foto vazia,    |
| [Falar com especialista]        |   campos, faixa MRZ;        |
| Retorno em até 24 horas         |   o check do logo é         |
|                                 |   desenhado sobre ela       |
+---------------------------------+-----------------------------+
DUAS PORTAS (o divisor de público)
+-------------------------------+-------------------------------+
| Moro no Brasil e sou          | Sou brasileiro e quero ir     |
| estrangeiro (fundo tinta)     | aos EUA (fundo papel)         |
| CRNM / Residência / Natural.  | Visto americano               |
+-------------------------------+-------------------------------+
SERVIÇOS como lista de linhas (nome | uma frase | link), não cards
POR QUE: 4 itens em duas colunas, texto, sem ícones decorativos
COMO FUNCIONA: 4 passos numerados (é sequência real), linha do tempo horizontal
TAXAS: tabela oficial com "fonte gov.br, conferido em" como carimbo
FAQ: acordeão de 5
CTA FINAL + MAPA
```

Páginas de serviço: herói curto com breadcrumb, depois blocos de leitura em coluna estreita, tabela de prazos e taxas no formato de ficha, aviso legal em caixa com borda guilhoché.

## Movimento
Um único momento orquestrado: na carga da home, a ficha SVG aparece, o check carmim é desenhado sobre ela (GSAP, DrawSVG por stroke-dashoffset) e o título entra por linhas (SplitText). Nada de fade em cada seção. Interações respondem ao usuário: acordeão abre com altura animada, botão confirma ao enviar. `prefers-reduced-motion` desliga tudo.

## Stack aplicada
- Astro 5 + React (atualizado para Astro 7 na Fase 9 por segurança; ver SEGURANCA.md) só onde há interação (acordeão, seletor de idioma, formulário), carregado com client:visible.
- Tailwind CSS v4 com os tokens acima em @theme.
- Lenis para rolagem suave (desligado com reduced motion).
- GSAP + SplitText no herói.
- Barba.js: substituído pelo ClientRouter nativo do Astro (View Transitions). Barba disputa o controle da navegação com as ilhas do Astro e quebra a hidratação; o ClientRouter entrega a mesma transição sem esse conflito.
- SVG mask wave: na passagem da faixa "Duas portas" para a seção seguinte, uma borda ondulada que lembra a borda de selo postal.

## Princípios
1. Clareza de repartição pública bem feita, com acabamento de papel moeda.
2. Ousadia em um lugar só: a ficha com o check do herói. O resto é quieto.
3. Toda informação oficial vem com fonte e data, visualmente tratada como carimbo.
4. O carmim é raro: se tudo é vermelho, nada é aprovado.
