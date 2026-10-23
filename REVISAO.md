# REVISÃO DE DESIGN (Fase 7)

Data: 23/10/2026. Método: crítica estruturada em 5 camadas (hierarquia, tipografia, cor, espaçamento, consistência) + checagens automáticas de acessibilidade em 13 páginas (PT, EN e ZH), desktop 1280px e mobile 375px.

## O que funciona
- Um ponto de ênfase só por tela: o carmim aparece no CTA principal e no check; o resto é azul e papel. O botão de WhatsApp nunca disputa atenção.
- Hierarquia clara no herói: título em 3 linhas, subtítulo, CTA e promessa de 24h, todos acima da dobra no desktop.
- Divisão de públicos logo depois do herói ("Moro no Brasil" / "Sou brasileiro") resolve o principal risco de um site com dois públicos.
- Informação oficial tratada como carimbo (fonte + data), o que reforça a confiança sem poluir.
- Contraste: todos os textos passam WCAG AA nas 13 páginas.
- Nenhuma rolagem horizontal no mobile; CTA fixo não cobre o rodapé (espaço reservado).

## Problemas e correções

### Crítico
Nenhum problema crítico de usabilidade ou conversão encontrado.

### Importante
| Problema | Correção | Status |
|---|---|---|
| Herói da home ocupava 100% da altura em telas muito altas, deixando um vazio grande | Altura mínima limitada a 880px | Corrigido |
| Porta "Sou brasileiro" ficava vazia ao lado da porta de estrangeiros, que tem lista | Adicionados 3 itens do que está incluído no visto americano (texto já aprovado no COPY.md) | Corrigido |
| Página de Perguntas pulava de h1 para h3 | Acordeão aceita nível de título; na página de Perguntas usa h2 | Corrigido |
| Respostas fechadas do FAQ continuavam recebendo foco do teclado e leitura de tela | Painéis fechados ficam inert | Corrigido |

### Polimento
| Problema | Correção | Status |
|---|---|---|
| Elemento 3D: lateral grossa e escura do passaporte aparecia ao inclinar, e as peças podiam ser cortadas na borda da área 3D (apontado pelo usuário) | Espessura reduzida e lateral na cor da capa, inclinação menor, área 3D com margem de 90 unidades em volta, brilho holográfico mais discreto | Corrigido |
| Links do rodapé e breadcrumbs com área de toque de 20px | Área ampliada (padding vertical) | Corrigido |
| Borda picotada de selo na seção "Duas portas" ficava invisível (papel sobre papel) | Movida para o topo da faixa de CTA azul noite, onde aparece contra o papel | Corrigido |
| Links de fonte com 18px de altura | Mantido: são links dentro do texto, isentos pela WCAG 2.5.8 | Justificado |
| "404" decorativo com contraste baixo | Mantido: é decorativo e oculto para leitores de tela (aria-hidden) | Justificado |

## Verificações funcionais
- FAQ: abre e fecha, uma resposta por vez, aria-expanded correto.
- Navegação com transição (ClientRouter): ida e volta entre páginas reinicia menu, Lenis, animação do herói e cena 3D.
- 3D: monta no desktop com WebGL; não carrega no mobile (zero requisições de three.js).
- Console sem erros nas páginas testadas.

## Limitação desta revisão
O painel de navegador usado nos testes fica oculto em parte do tempo, o que pausa animações. A sequência de entrada do herói foi conferida no estado final; vale ver ao vivo num navegador comum antes de publicar.
