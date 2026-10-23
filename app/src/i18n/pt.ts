// Texto do site em português. Fonte: COPY.md (aprovado na Fase 3).
// en.ts e zh.ts seguem exatamente a mesma forma.
// Campos vazios ("") ou listas vazias escondem o bloco correspondente na página.

const SRC = {
  decreto: 'https://www2.camara.leg.br/legin/fed/decret/2017/decreto-9199-20-novembro-2017-785772-publicacaooriginal-154263-pe.html',
  pfFaq: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/duvidas-frequentes',
  govCrnm: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio',
  govNat: 'https://www.gov.br/pt-br/servicos/solicitar-naturalizacao',
  waitTimes: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html',
};

const pt = {
  lang: 'pt-BR',
  langLabel: 'Português',
  checkedOn: 'conferido em 23/10/2026',
  source: 'Fonte',

  wa: {
    geral: 'Olá, vim pelo site da Migrafácil e gostaria de orientação sobre o meu caso.',
    crnm: 'Olá, preciso de ajuda com a minha CRNM (registro, renovação ou regularização). Pode me orientar?',
    residencia: 'Olá, quero orientação sobre autorização de residência no Brasil.',
    empresa: 'Olá, sou de uma empresa que vai contratar um profissional estrangeiro e preciso de orientação.',
    naturalizacao: 'Olá, quero saber se posso me naturalizar brasileiro e como começar.',
    vistoEua: 'Olá, quero orientação para o processo do visto americano.',
  },

  nav: {
    home: 'Início',
    crnm: 'CRNM',
    naturalizacao: 'Naturalização',
    residencia: 'Residência',
    vistoAmericano: 'Visto americano',
    sobre: 'Sobre',
    cases: 'Cases',
    perguntas: 'Perguntas',
    contato: 'Contato',
    cta: 'Falar no WhatsApp',
    menu: 'Menu',
    close: 'Fechar',
    skip: 'Pular para o conteúdo',
    languages: 'Idioma',
  },

  common: {
    talk: 'Falar com especialista',
    reply24: 'Retorno em até 24 horas.',
    mobileCta: 'Falar com especialista',
    mobileCtaNote: 'Retorno em até 24h',
    trust: [
      'Atendimento em português, inglês e chinês',
      'Online para todo o Brasil',
      'Presencial em Sumaré SP',
      'Retorno em até 24 horas',
    ],
    breadcrumbLabel: 'Você está em',
    fieldSoon: 'Em breve',
  },

  footer: {
    about: 'Migrafácil, consultoria em imigração e documentação. Mesma equipe da RNE Brasil.',
    address: 'Alameda dos Professores, 90, Parque Villa Flores, Sumaré SP, 13175-670',
    hoursLabel: 'Atendimento presencial',
    hours: '', // PREENCHER: dias e horários
    legal:
      'A Migrafácil é uma consultoria privada. Não temos vínculo com a Polícia Federal, o Ministério da Justiça, a Embaixada ou os consulados dos Estados Unidos. Decisões e emissões de documentos e vistos cabem exclusivamente às autoridades competentes, e nenhum resultado é garantido. Taxas oficiais (GRU da Polícia Federal, taxa consular MRV) são pagas diretamente ao governo e não fazem parte dos nossos honorários. Os formulários oficiais são gratuitos no gov.br. Quando o caso exige advogado, indicamos parceiros inscritos na OAB.',
    privacy: 'Política de Privacidade',
    faq: 'Perguntas frequentes',
    cases: 'Cases de sucesso',
    rights: 'Todos os direitos reservados.',
  },

  home: {
    meta: {
      title: 'Migrafácil: CRNM, residência, naturalização e visto americano',
      description:
        'Consultoria em imigração em Sumaré SP e online. CRNM (antigo RNE), autorização de residência, naturalização e visto americano. Atendimento em português, inglês e chinês. Retorno em até 24 horas.',
    },
    hero: {
      kicker: 'Consultoria em imigração em Sumaré SP e online',
      title: 'Seus documentos de imigração, em ordem e sem retrabalho.',
      subtitle:
        'Orientamos estrangeiros que vivem no Brasil (CRNM, residência e naturalização) e brasileiros que querem o visto americano. Cada etapa revisada antes de chegar à Polícia Federal ou ao consulado.',
      cta: 'Falar com especialista',
      secondary: 'Ver serviços',
      note: 'Retorno em até 24 horas, em português, inglês ou chinês.',
    },
    paths: {
      title: 'Por onde você começa?',
      foreign: {
        title: 'Moro no Brasil e sou estrangeiro',
        text: 'Registro e renovação de CRNM, autorização de residência por trabalho ou investimento e naturalização brasileira.',
        link: 'Ver serviços para estrangeiros',
      },
      brazilian: {
        title: 'Sou brasileiro e quero ir aos Estados Unidos',
        text: 'DS-160 revisado, documentos organizados e treino para a entrevista no consulado.',
        link: 'Ver assessoria de visto americano',
      },
    },
    services: {
      title: 'Serviços',
      items: [
        { key: 'crnm', name: 'CRNM (antigo RNE)', text: 'Registro, renovação e regularização da carteira de estrangeiro, conforme a sua base legal de residência.' },
        { key: 'residencia', name: 'Autorização de residência', text: 'Trabalho, investimento e outras bases legais, com o dossiê montado para o MigranteWeb e a PF.' },
        { key: 'naturalizacao', name: 'Naturalização brasileira', text: 'Diagnóstico da modalidade certa, dossiê completo e acompanhamento até a decisão.' },
        { key: 'vistoAmericano', name: 'Visto americano', text: 'DS-160, checklist de documentos, orientação de taxa e agendamento e simulação de entrevista.' },
      ],
      more: 'Saiba mais',
    },
    why: {
      title: 'Quem conhece o processo por dentro erra menos.',
      items: [
        { title: 'Experiência prática na Polícia Federal', text: 'Nosso fundador, David Cristofhor de Lima, construiu a carreira com experiência prática na Polícia Federal.' },
        { title: 'Três idiomas de verdade', text: 'Atendemos em português, inglês e chinês. Pelo que pesquisamos, somos a única consultoria de CRNM e naturalização no Brasil com atendimento em chinês.' },
        { title: 'Taxas às claras', text: 'Mostramos o que é taxa do governo e o que é honorário, com o link oficial de cada valor.' },
        { title: 'Presencial e online', text: 'Escritório em Sumaré e atendimento remoto para todo o Brasil e o exterior.' },
      ],
    },
    steps: {
      title: 'Como funciona',
      items: [
        { title: 'Conversa inicial', text: 'Você conta seu caso no WhatsApp. Retornamos em até 24 horas.' },
        { title: 'Diagnóstico', text: 'Identificamos a base legal ou a categoria de visto certa e o que falta.' },
        { title: 'Dossiê', text: 'Checklist, revisão de formulários, traduções e apostilamentos no padrão exigido.' },
        { title: 'Acompanhamento', text: 'Orientamos o protocolo e o agendamento e seguimos com você até a decisão.' },
      ],
    },
    // PREENCHER: números reais. Enquanto a lista estiver vazia, a seção não aparece.
    stats: [] as { value: string; label: string }[],
    reviews: {
      title: 'O que dizem nossos clientes',
      // PREENCHER: avaliações reais do Google, com autorização.
      items: [] as { name: string; text: string }[],
      link: 'Ver todas as avaliações no Google',
      url: '', // PREENCHER: link do perfil no Google
    },
    casesTeaser: {
      title: 'Casos reais, explicados do começo ao fim.',
      text: 'Veja como organizamos processos de CRNM, naturalização e visto americano.',
      link: 'Ver cases de sucesso',
    },
    faqTitle: 'Perguntas frequentes',
    final: {
      title: 'Conte seu caso. Respondemos em até 24 horas.',
      text: 'Sem compromisso. Você sai da conversa sabendo qual é o seu próximo passo.',
    },
    where: { title: 'Onde estamos', route: 'Como chegar' },
  },

  crnm: {
    meta: {
      title: 'CRNM (antigo RNE): registro, renovação e regularização | Migrafácil',
      description:
        'Consultoria para registro, renovação e regularização da CRNM, o antigo RNE. Prazos e taxas oficiais da Polícia Federal explicados. Retorno em até 24 horas.',
    },
    hero: {
      title: 'CRNM sem dor de cabeça: registro, renovação e regularização.',
      subtitle:
        'Montamos seu processo conforme a sua base legal de residência, evitamos retrabalho e acompanhamos cada etapa até a carteira na sua mão.',
    },
    what: {
      title: 'O que é a CRNM',
      text: 'A Carteira de Registro Nacional Migratório é o documento de identidade do estrangeiro que mora no Brasil. Ela substituiu o antigo RNE com a Lei de Migração (Lei 13.445/2017) e é emitida pela Polícia Federal.',
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    who: {
      title: 'Para quem é',
      items: [
        'Quem chegou com visto temporário e precisa se registrar.',
        'Quem teve a autorização de residência aprovada e precisa emitir a carteira.',
        'Quem está com a carteira perto de vencer, vencida ou com dados desatualizados.',
        'Quem perdeu ou teve a carteira roubada.',
      ],
    },
    deadlines: {
      title: 'Prazos que você precisa conhecer',
      items: [
        { label: 'Visto temporário', value: 'Registro em até 90 dias após a entrada no Brasil.', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 64' },
        { label: 'Residência aprovada no Brasil', value: 'Registro em até 30 dias da publicação.', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 66' },
        { label: 'Renovação', value: 'Pode começar até 90 dias antes do vencimento, com atendimento presencial na PF.', src: SRC.pfFaq, srcLabel: 'PF, Dúvidas frequentes' },
        { label: 'Protocolo do pedido', value: 'Garante os mesmos direitos por até 180 dias.', src: SRC.pfFaq, srcLabel: 'PF, Dúvidas frequentes' },
        { label: 'Residência temporária vencida', value: 'Gera multa por dia de atraso.', src: SRC.pfFaq, srcLabel: 'PF, Dúvidas frequentes' },
      ],
    },
    fees: {
      title: 'Taxas oficiais da Polícia Federal',
      head: ['Taxa', 'Valor'],
      rows: [
        ['Pedido de autorização de residência', 'R$ 168,13'],
        ['Emissão da CRNM', 'R$ 204,77'],
        ['Agendamento e retirada', 'Gratuito'],
      ],
      note: 'Essas taxas são pagas por GRU diretamente ao governo. Nosso honorário é à parte e informado no diagnóstico.',
      src: SRC.govCrnm,
      srcLabel: 'gov.br',
    },
    do: {
      title: 'O que fazemos',
      items: [
        'Identificamos a base legal certa para o seu pedido.',
        'Montamos o checklist de documentos do seu perfil.',
        'Revisamos formulários e dados antes do envio.',
        'Orientamos a emissão da GRU e o agendamento na PF.',
        'Preparamos você para o atendimento presencial.',
        'Acompanhamos o pedido no SISMIGRA até a retirada.',
      ],
    },
    avoid: {
      title: 'Erros que evitamos',
      items: [
        'Pedido feito na base legal errada.',
        'Documento vencido ou sem tradução juramentada e apostilamento.',
        'Perder o prazo de 90 dias e acumular multa.',
        'Comparecer à PF sem um documento e precisar remarcar.',
      ],
    },
    cta: {
      title: 'Sua carteira vence nos próximos meses?',
      text: 'Quanto antes começar, mais datas de agendamento você encontra.',
    },
    disclaimer: 'Prestamos consultoria e orientação. O protocolo é feito nos canais oficiais e a decisão é da Polícia Federal.',
  },

  naturalizacao: {
    meta: {
      title: 'Naturalização brasileira: requisitos, prazos e dossiê | Migrafácil',
      description:
        'Consultoria em naturalização brasileira ordinária, extraordinária e provisória. Diagnóstico de elegibilidade, dossiê completo e acompanhamento até a decisão.',
    },
    hero: {
      title: 'Naturalização brasileira com o dossiê certo desde o primeiro envio.',
      subtitle: 'Analisamos qual modalidade se aplica a você, organizamos os documentos e acompanhamos o pedido até a decisão.',
    },
    types: {
      title: 'Modalidades',
      items: [
        { title: 'Ordinária', text: '4 anos de residência imediatamente anteriores ao pedido, ou 1 ano para quem tem filho ou cônjuge brasileiro. Exige comunicação em português e ausência de condenação penal.' },
        { title: 'Extraordinária', text: 'Mais de 15 anos ininterruptos de residência no Brasil.' },
        { title: 'Provisória e conversão em definitiva', text: 'Para quem chegou ao Brasil ainda criança.' },
      ],
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    official: {
      title: 'Como é o processo oficial',
      text: 'O pedido é gratuito e feito na plataforma Naturalizar-se, com conta gov.br, e tem uma etapa presencial na PF para conferência de originais e biometria. O prazo oficial estimado é de até 180 dias. Se o pedido for negado, o recurso deve ser feito em 10 dias.',
      src: SRC.govNat,
      srcLabel: 'gov.br',
    },
    how: {
      title: 'Como ajudamos',
      items: [
        'Diagnóstico de elegibilidade por modalidade.',
        'Estratégia documental: originais, traduções juramentadas e apostilamentos.',
        'Orientação sobre a comprovação de português (Celpe-Bras e outros documentos aceitos).',
        'Montagem e conferência final do dossiê.',
        'Orientação do protocolo na plataforma oficial.',
        'Acompanhamento até a decisão e orientação em caso de recurso.',
      ],
    },
    avoid: {
      title: 'Erros que evitamos',
      items: [
        'Escolher a modalidade errada para o seu perfil.',
        'Falhas na comprovação de residência e de antecedentes.',
        'Traduções e apostilamentos fora do padrão.',
        'Perder o prazo de 10 dias para recurso.',
      ],
    },
    cta: { title: 'Descubra se você já pode se naturalizar.', text: '' },
    disclaimer: 'Prestamos consultoria. A decisão sobre a naturalização é do Ministério da Justiça. Casos com recurso judicial são encaminhados a advogados parceiros.',
  },

  residencia: {
    meta: {
      title: 'Autorização de residência por trabalho ou investimento | Migrafácil',
      description:
        'Consultoria em autorização de residência no Brasil para profissionais estrangeiros, empresas que contratam e investidores. Dossiê para MigranteWeb e Polícia Federal.',
    },
    hero: {
      title: 'Residência no Brasil por trabalho ou investimento, com o pedido bem montado.',
      subtitle: 'Para profissionais estrangeiros, empresas que contratam e investidores. Organizamos o dossiê para o MigranteWeb e para a Polícia Federal.',
    },
    fronts: {
      title: 'Três frentes',
      items: [
        { title: 'Trabalho', text: 'Para o profissional contratado por empresa no Brasil e para o RH que conduz a contratação.' },
        { title: 'Investimento', text: 'Para quem investe em empresa ou imóvel no Brasil. Os valores mínimos seguem a resolução vigente do Conselho Nacional de Imigração e são confirmados no diagnóstico.' },
        { title: 'Outras bases legais', text: 'Reunião familiar, estudo e demais hipóteses previstas na Lei de Migração.' },
      ],
    },
    how: {
      title: 'Como ajudamos',
      items: [
        'Enquadramento na base legal correta.',
        'Checklist de documentos para a pessoa e, quando for o caso, para a empresa.',
        'Revisão do pedido no MigranteWeb.',
        'Orientação de taxas, agendamento e registro na PF.',
        'Emissão da CRNM ao final do processo.',
      ],
    },
    company: {
      title: 'Vai contratar um estrangeiro?',
      text: 'Cuidamos da parte documental para o seu RH se concentrar na contratação. Um ponto de contato só, do pedido à carteira emitida.',
    },
    cta: { title: 'Conte seu caso. Respondemos em até 24 horas.', text: '' },
    disclaimer: 'Prestamos consultoria. A decisão sobre a autorização de residência é do Ministério da Justiça e da Polícia Federal.',
  },

  vistoAmericano: {
    meta: {
      title: 'Assessoria para visto americano: DS-160 e entrevista | Migrafácil',
      description:
        'Assessoria para visto americano em Sumaré, Campinas e online. DS-160 revisado, checklist de documentos e simulação de entrevista. Sem promessa de aprovação.',
    },
    hero: {
      title: 'Visto americano sem adivinhação: do DS-160 à entrevista.',
      subtitle: 'Não é só preencher formulário. Revisamos seu histórico, organizamos os documentos e treinamos você para a entrevista no consulado.',
    },
    included: {
      title: 'O que está incluído',
      items: [
        'Diagnóstico do seu perfil e da categoria de visto certa para a viagem.',
        'Preenchimento assistido do DS-160 com validação final dos dados.',
        'Checklist de documentos ajustado ao seu perfil.',
        'Orientação para pagar a taxa consular e agendar no canal oficial.',
        'Simulação de entrevista com feedback.',
        'Suporte pelo WhatsApp durante todo o processo.',
      ],
    },
    avoid: {
      title: 'Erros que evitamos',
      items: [
        'Dados do DS-160 que não batem com o seu histórico profissional.',
        'Vínculos com o Brasil mal apresentados.',
        'Respostas vagas ou contraditórias na entrevista.',
        'Categoria de visto ou local de atendimento errados.',
      ],
    },
    fee: {
      title: 'Taxa e espera',
      // PREENCHER: confirmar valor atual da taxa MRV em travel.state.gov antes de citar número.
      text: 'A taxa consular do visto de turismo e negócios (B1/B2) é cobrada pelo governo dos EUA e paga diretamente a ele. O tempo de espera pela entrevista muda por cidade.',
      link: 'Consultar o tempo de espera oficial',
      src: SRC.waitTimes,
    },
    denied: {
      title: 'Já teve o visto negado?',
      text: 'Analisamos seu histórico e o que mudou desde a última tentativa, para você não repetir as mesmas inconsistências.',
    },
    disclaimer:
      'A Migrafácil é uma consultoria privada, sem vínculo com a Embaixada ou os consulados dos EUA. Não garantimos a emissão do visto: a decisão é exclusiva da autoridade consular. Não temos acesso a fila especial de agendamento.',
  },

  sobre: {
    meta: {
      title: 'Sobre a Migrafácil e a equipe RNE Brasil',
      description: 'Conheça a equipe da Migrafácil e da RNE Brasil, consultoria em imigração com escritório em Sumaré SP e atendimento online.',
    },
    title: 'Migrafácil e RNE Brasil: uma equipe, dois caminhos.',
    text: 'A Migrafácil é a consultoria da equipe RNE Brasil. Orientamos estrangeiros que querem viver no Brasil e brasileiros que querem viajar para os Estados Unidos, com atendimento presencial em Sumaré e online para todo o Brasil e o exterior.',
    mission: { label: 'Missão', text: 'Orientar processos de imigração e documentação com compromisso, clareza e qualidade.' },
    values: { label: 'Valores', text: 'Segurança, transparência e excelência.' },
    teamTitle: 'Equipe',
    team: [
      {
        name: 'David Cristofhor de Lima',
        role: 'CEO',
        bio: '', // PREENCHER: bio curta, confirmando a experiência na Polícia Federal sem sugerir vínculo atual
        photo: '', // PREENCHER: foto real
      },
    ],
    photoPending: 'Foto da equipe em breve',
    certsTitle: 'Formação e certificados',
    certs: [
      'Atualização Jurídica em Direito Imigratório',
      'Redação Oficial',
      'Introdução às Migrações Internacionais no Brasil Contemporâneo',
    ],
  },

  cases: {
    meta: {
      title: 'Cases de sucesso | Migrafácil',
      description: 'Casos reais de CRNM, naturalização, residência e visto americano, publicados com autorização dos clientes.',
    },
    title: 'Casos reais, explicados do começo ao fim.',
    text: 'Cada caso abaixo foi publicado com autorização do cliente. Nomes podem ser abreviados para proteger a privacidade.',
    labels: { situation: 'Situação', did: 'O que fizemos', result: 'Resultado' },
    // PREENCHER: 3 a 6 cases reais com autorização.
    items: [] as { title: string; service: string; situation: string; did: string; result: string }[],
    empty: 'Estamos reunindo os primeiros casos com autorização dos clientes. Enquanto isso, conte o seu e veja como podemos ajudar.',
  },

  perguntas: {
    meta: {
      title: 'Perguntas frequentes sobre CRNM, naturalização e visto | Migrafácil',
      description: 'CRNM vencendo, validade aos 60 anos, taxas oficiais, prazo da naturalização e garantia de visto americano: respostas com fonte oficial.',
    },
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Minha CRNM vai vencer e não encontro data na Polícia Federal. O que eu faço?',
        a: 'A renovação pode ser pedida até 90 dias antes do vencimento, então comece cedo. O protocolo do pedido garante os mesmos direitos por até 180 dias. Atenção: se a sua residência for temporária, a carteira vencida gera multa por dia de atraso. Se for permanente, não há multa de renovação. Ajudamos você a montar o pedido e a buscar a data.',
        src: SRC.pfFaq,
        srcLabel: 'PF, Dúvidas frequentes',
      },
      {
        q: 'Tenho mais de 60 anos ou uma deficiência. Minha carteira ainda vence?',
        a: 'Pelo Decreto 9.199/2017, a carteira de residência por prazo indeterminado passa a ter validade indeterminada para quem completou 60 anos até o vencimento do documento e para pessoas com deficiência. Analisamos o seu caso para saber se você se enquadra e o que precisa ser feito.',
        src: SRC.decreto,
        srcLabel: 'Decreto 9.199, art. 74',
      },
      {
        q: 'Quanto custa? O que é taxa do governo e o que é honorário?',
        a: 'As taxas oficiais são pagas diretamente ao governo: R$ 168,13 pelo pedido de autorização de residência e R$ 204,77 pela emissão da CRNM (gov.br, conferido em 23/10/2026). No visto americano, a taxa consular é paga ao governo dos EUA. Nosso honorário é separado e informado depois do diagnóstico, de acordo com a complexidade do seu caso.',
        src: SRC.govCrnm,
        srcLabel: 'gov.br',
      },
      {
        q: 'Quanto tempo leva a naturalização? E se o pedido for negado?',
        a: 'O prazo oficial estimado é de até 180 dias, na plataforma Naturalizar-se. A ordinária pede 4 anos de residência (ou 1 ano com filho ou cônjuge brasileiro), e a extraordinária, mais de 15 anos. Se o pedido for negado, o recurso deve ser feito em até 10 dias. Nós orientamos o recurso e, se o caso exigir, indicamos advogados parceiros.',
        src: SRC.govNat,
        srcLabel: 'gov.br',
      },
      {
        q: 'Vocês garantem meu visto americano? O que fazem além do DS-160?',
        a: 'Não. Nenhuma consultoria pode garantir visto: a decisão é só do consulado. O que fazemos é reduzir os erros que levam à negativa: diagnóstico do perfil, DS-160 revisado, documentos que mostram seus vínculos com o Brasil e simulação de entrevista com feedback.',
        src: '',
        srcLabel: '',
      },
    ],
  },

  contato: {
    meta: {
      title: 'Contato | Migrafácil',
      description: 'Fale com a Migrafácil pelo WhatsApp ou pelo formulário. Retorno em até 24 horas, em português, inglês ou chinês. Escritório em Sumaré SP.',
    },
    title: 'Fale com a gente. Retorno em até 24 horas.',
    text: 'O caminho mais rápido é o WhatsApp. Se preferir, deixe seus dados e retornamos.',
    waButton: 'Abrir WhatsApp',
    form: {
      name: 'Nome',
      phone: 'WhatsApp',
      email: 'Email',
      subject: 'Assunto',
      subjects: ['CRNM', 'Residência', 'Naturalização', 'Visto americano', 'Outro'],
      language: 'Idioma preferido',
      languages: ['Português', 'English', '中文'],
      message: 'Mensagem',
      consent: 'Li e concordo com a Política de Privacidade.',
      submit: 'Enviar',
      sending: 'Enviando',
      note: 'Usamos seus dados só para responder ao seu contato.',
      error: 'Não foi possível enviar. Tente de novo ou fale pelo WhatsApp.',
      required: 'Preencha este campo.',
    },
  },

  obrigado: {
    meta: { title: 'Mensagem recebida | Migrafácil', description: 'Recebemos sua mensagem. Retornamos em até 24 horas.' },
    title: 'Recebemos sua mensagem.',
    text: 'Retornamos em até 24 horas, no idioma que você escolheu. Se for urgente, chame a gente agora no WhatsApp.',
    waButton: 'Abrir WhatsApp',
    back: 'Voltar ao início',
  },

  notFound: {
    meta: { title: 'Página não encontrada | Migrafácil', description: 'Esta página não existe.' },
    title: 'Esta página não existe.',
    text: 'O endereço pode ter mudado. Escolha por onde seguir:',
  },

  privacidade: {
    meta: { title: 'Política de Privacidade | Migrafácil', description: 'Como a Migrafácil coleta, usa e protege seus dados pessoais, conforme a LGPD.' },
    title: 'Política de Privacidade',
    controller: 'Responsável pelo tratamento: [razão social e CNPJ a preencher].', // PREENCHER
    updated: 'Última atualização: 23/10/2026.',
    sections: [
      { title: 'Quais dados coletamos', text: 'Nome, telefone, email e a mensagem que você envia pelo formulário ou pelo WhatsApp. Se você aceitar, cookies de medição de audiência.' },
      { title: 'Para que usamos', text: 'Para responder ao seu contato e, se você contratar, para prestar a consultoria.' },
      { title: 'Base legal', text: 'Lei Geral de Proteção de Dados (Lei 13.709/2018): consentimento, para responder ao contato, e execução de contrato, para a consultoria contratada.' },
      { title: 'Com quem compartilhamos', text: 'Nunca vendemos dados. Compartilhamos apenas com órgãos oficiais quando você mesmo pede o serviço, e com fornecedores de hospedagem e mensagens necessários para o atendimento.' },
      { title: 'Por quanto tempo guardamos', text: 'Pelo tempo necessário para o atendimento e para cumprir obrigações legais. [prazo de guarda a preencher]' },
      { title: 'Seus direitos', text: 'Você pode pedir acesso, correção, exclusão e portabilidade dos seus dados, e revogar o consentimento a qualquer momento.' },
      { title: 'Cookies', text: 'Cookies de medição só são usados com o seu consentimento. Você pode recusar ou apagar os cookies nas configurações do navegador.' },
      { title: 'Contato do encarregado', text: 'Encarregado de dados: [nome a preencher]. Email: contato@rnebrasil.com.' },
    ],
  },
};

export default pt;
export type Dict = typeof pt;
