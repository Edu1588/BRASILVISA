import type { Dict } from './pt';

// Texto do site em chinês simplificado. Mesma forma de pt.ts.

const SRC = {
  decreto: 'https://www2.camara.leg.br/legin/fed/decret/2017/decreto-9199-20-novembro-2017-785772-publicacaooriginal-154263-pe.html',
  pfFaq: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/duvidas-frequentes',
  govCrnm: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio',
  govNat: 'https://www.gov.br/pt-br/servicos/solicitar-naturalizacao',
  waitTimes: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html',
};

const zh: Dict = {
  lang: 'zh-CN',
  langLabel: '中文',
  checkedOn: '核实于2026年10月23日',
  source: '来源',

  wa: {
    geral: '您好，我是通过 Migrafácil 网站联系您的，想咨询一下我的情况。',
    crnm: '您好，我需要办理 CRNM 居留卡相关业务（登记、续签或补办合法身份），请问能指导一下吗？',
    residencia: '您好，我想咨询在巴西申请居留许可的事宜。',
    empresa: '您好，我们公司准备聘用一名外籍员工，需要相关咨询。',
    naturalizacao: '您好，我想了解自己是否可以申请巴西入籍，以及如何开始办理。',
    vistoEua: '您好，我想咨询美国签证的办理流程。',
  },

  nav: {
    home: '首页',
    crnm: 'CRNM 居留卡',
    naturalizacao: '入籍',
    residencia: '居留',
    vistoAmericano: '美国签证',
    sobre: '关于我们',
    cases: '案例',
    perguntas: '常见问题',
    contato: '联系我们',
    cta: 'WhatsApp 咨询',
    menu: '菜单',
    close: '关闭',
    skip: '跳到正文',
    languages: '语言',
  },

  common: {
    talk: '咨询专业顾问',
    reply24: '24小时内回复。',
    mobileCta: '咨询专业顾问',
    mobileCtaNote: '24小时内回复',
    trust: [
      '提供葡萄牙语、英语和中文服务',
      '全巴西线上服务',
      '圣保罗州 Sumaré 线下服务',
      '24小时内回复',
    ],
    breadcrumbLabel: '当前位置',
    fieldSoon: '即将推出',
  },

  footer: {
    about: 'Migrafácil，移民与证件咨询。与 RNE Brasil 为同一团队。',
    address: 'Alameda dos Professores, 90, Parque Villa Flores, Sumaré SP, 13175-670',
    hoursLabel: '线下接待',
    hours: '', // PREENCHER: dias e horários
    legal:
      'Migrafácil 是一家私营咨询机构，与联邦警察（Polícia Federal）、司法部、美国大使馆或领事馆均无隶属关系。证件和签证的审批与签发完全由主管机关决定，我们不保证任何结果。官方费用（联邦警察 GRU 缴费单、MRV 签证费）直接缴纳给政府，不包含在我们的服务费中。官方表格可在 gov.br 免费获取。如案件需要律师，我们会推荐在巴西律师协会（OAB）注册的合作律师。',
    privacy: '隐私政策',
    faq: '常见问题',
    cases: '成功案例',
    rights: '版权所有。',
  },

  home: {
    meta: {
      title: 'Migrafácil：CRNM 居留卡、居留、入籍与美国签证',
      description:
        '位于圣保罗州 Sumaré 并提供线上服务的移民咨询机构。CRNM 居留卡（原 RNE）、居留许可、入籍及美国签证。提供葡萄牙语、英语和中文服务，24小时内回复。',
    },
    hero: {
      kicker: '圣保罗州 Sumaré 及线上移民咨询',
      title: '您的移民证件，井井有条，一次办好。',
      subtitle:
        '我们为在巴西生活的外国人（CRNM 居留卡、居留和入籍）以及想办理美国签证的巴西人提供指导。每个环节在提交联邦警察或领事馆之前都经过审核。',
      cta: '咨询专业顾问',
      secondary: '查看服务',
      note: '24小时内回复，可使用葡萄牙语、英语或中文。',
    },
    paths: {
      title: '您从哪里开始？',
      foreign: {
        title: '我是在巴西生活的外国人',
        text: 'CRNM 居留卡登记与续签、基于工作或投资的居留许可，以及巴西入籍。',
        link: '查看外国人服务',
      },
      brazilian: {
        title: '我是巴西人，想去美国',
        text: 'DS-160 审核、证件整理以及领事馆面签练习。',
        link: '查看美国签证协助',
      },
    },
    services: {
      title: '服务',
      items: [
        { key: 'crnm', name: 'CRNM 居留卡（原 RNE）', text: '根据您的居留法律依据，办理外国人证件的登记、续签和合法身份补办。' },
        { key: 'residencia', name: '居留许可', text: '工作、投资及其他法律依据，为 MigranteWeb 和联邦警察准备完整材料。' },
        { key: 'naturalizacao', name: '巴西入籍', text: '判断适合的入籍类型，准备完整材料，并跟进直至审批结果。' },
        { key: 'vistoAmericano', name: '美国签证', text: 'DS-160、材料清单、缴费与预约指导以及模拟面签。' },
      ],
      more: '了解更多',
    },
    why: {
      title: '熟悉内部流程，才能少出错。',
      items: [
        { title: '联邦警察实务经验', text: '我们的创始人 David Cristofhor de Lima 在联邦警察积累了实务经验，并以此建立了自己的职业生涯。' },
        { title: '真正的三语服务', text: '我们提供葡萄牙语、英语和中文服务。据我们调查，我们是巴西唯一提供中文服务的 CRNM 居留卡和入籍咨询机构。' },
        { title: '费用透明', text: '我们会说明哪些是政府费用、哪些是服务费，并附上每项金额的官方链接。' },
        { title: '线下与线上', text: 'Sumaré 设有办公室，并为全巴西及海外客户提供远程服务。' },
      ],
    },
    steps: {
      title: '服务流程',
      items: [
        { title: '初步沟通', text: '通过 WhatsApp 告诉我们您的情况，我们会在24小时内回复。' },
        { title: '评估', text: '确定适合的法律依据或签证类别，以及还缺少哪些材料。' },
        { title: '材料准备', text: '材料清单、表格审核、翻译和海牙认证，均符合规定标准。' },
        { title: '全程跟进', text: '指导递交和预约，并陪伴您直至审批结果。' },
      ],
    },
    // PREENCHER: números reais. Enquanto a lista estiver vazia, a seção não aparece.
    stats: [],
    reviews: {
      title: '客户评价',
      // PREENCHER: avaliações reais do Google, com autorização.
      items: [],
      link: '在 Google 上查看全部评价',
      url: '', // PREENCHER: link do perfil no Google
    },
    casesTeaser: {
      title: '真实案例，从头到尾讲清楚。',
      text: '看看我们如何办理 CRNM 居留卡、入籍和美国签证。',
      link: '查看成功案例',
    },
    faqTitle: '常见问题',
    final: {
      title: '告诉我们您的情况，我们24小时内回复。',
      text: '无需任何承诺。沟通之后，您就会知道下一步该怎么做。',
    },
    where: { title: '我们的地址', route: '查看路线' },
  },

  crnm: {
    meta: {
      title: 'CRNM 居留卡（原 RNE）：登记、续签与合法身份补办 | Migrafácil',
      description:
        'CRNM 居留卡（原 RNE）登记、续签和合法身份补办咨询。详解联邦警察的官方期限和费用。24小时内回复。',
    },
    hero: {
      title: '轻松办理 CRNM 居留卡：登记、续签与合法身份补办。',
      subtitle:
        '我们根据您的居留法律依据准备申请，避免重复返工，并跟进每个环节，直到您拿到居留卡。',
    },
    what: {
      title: '什么是 CRNM 居留卡',
      text: 'CRNM（Carteira de Registro Nacional Migratório，国家移民登记卡）是在巴西居住的外国人的身份证件。根据《移民法》（Lei 13.445/2017），它取代了原来的 RNE，由联邦警察（Polícia Federal）签发。',
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    who: {
      title: '适用人群',
      items: [
        '持临时签证入境、需要办理登记的人。',
        '居留许可已获批准、需要办理居留卡的人。',
        '居留卡即将到期、已过期或信息需要更新的人。',
        '居留卡遗失或被盗的人。',
      ],
    },
    deadlines: {
      title: '您需要了解的期限',
      items: [
        { label: '临时签证', value: '入境巴西后90天内办理登记。', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 64' },
        { label: '在巴西获批的居留', value: '公布之日起30天内办理登记。', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 66' },
        { label: '续签', value: '最早可在到期前90天开始办理，需到联邦警察现场办理。', src: SRC.pfFaq, srcLabel: 'PF，常见问题' },
        { label: '申请回执', value: '在最长180天内享有同等权利。', src: SRC.pfFaq, srcLabel: 'PF，常见问题' },
        { label: '临时居留过期', value: '按逾期天数计算罚款。', src: SRC.pfFaq, srcLabel: 'PF，常见问题' },
      ],
    },
    fees: {
      title: '联邦警察官方费用',
      head: ['费用项目', '金额'],
      rows: [
        ['居留许可申请', 'R$ 168,13'],
        ['CRNM 居留卡签发', 'R$ 204,77'],
        ['预约与领取', '免费'],
      ],
      note: '以上费用通过 GRU 缴费单直接缴纳给政府。我们的服务费另计，会在评估时告知。',
      src: SRC.govCrnm,
      srcLabel: 'gov.br',
    },
    do: {
      title: '我们的服务内容',
      items: [
        '确定适合您申请的法律依据。',
        '根据您的情况制定材料清单。',
        '提交前审核表格和信息。',
        '指导开具 GRU 缴费单并在联邦警察预约。',
        '帮助您做好现场办理的准备。',
        '在 SISMIGRA 系统中跟进申请，直至领取。',
      ],
    },
    avoid: {
      title: '我们帮您避免的错误',
      items: [
        '按错误的法律依据提交申请。',
        '证件过期，或缺少宣誓翻译和海牙认证。',
        '错过90天期限，导致罚款累积。',
        '到联邦警察时缺少材料，只能重新预约。',
      ],
    },
    cta: {
      title: '您的居留卡将在几个月内到期吗？',
      text: '越早开始，可选的预约日期越多。',
    },
    disclaimer: '我们提供咨询与指导服务。申请通过官方渠道递交，审批由联邦警察决定。',
  },

  naturalizacao: {
    meta: {
      title: '巴西入籍：条件、期限与材料 | Migrafácil',
      description:
        '巴西普通入籍、特别入籍和临时入籍咨询。资格评估、完整材料准备，并跟进直至审批结果。',
    },
    hero: {
      title: '巴西入籍，首次提交就准备好正确的材料。',
      subtitle: '我们分析适合您的入籍类型，整理材料，并跟进申请直至审批结果。',
    },
    types: {
      title: '入籍类型',
      items: [
        { title: '普通入籍', text: '申请前连续居住满4年；如有巴西籍子女或配偶，则为1年。须具备葡萄牙语沟通能力且无刑事定罪记录。' },
        { title: '特别入籍', text: '在巴西连续居住超过15年。' },
        { title: '临时入籍及转为永久入籍', text: '适用于儿童时期来到巴西的人。' },
      ],
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    official: {
      title: '官方流程',
      text: '申请免费，通过 gov.br 账户在 Naturalizar-se 平台提交，并需到联邦警察现场核对原件和采集生物信息。官方预计办理时间最长180天。如申请被拒，须在10天内提出申诉。',
      src: SRC.govNat,
      srcLabel: 'gov.br',
    },
    how: {
      title: '我们如何帮助您',
      items: [
        '按入籍类型进行资格评估。',
        '材料规划：原件、宣誓翻译和海牙认证。',
        '葡萄牙语能力证明指导（Celpe-Bras 及其他认可的文件）。',
        '整理材料并做最终核对。',
        '指导在官方平台提交申请。',
        '跟进直至审批结果，如需申诉提供指导。',
      ],
    },
    avoid: {
      title: '我们帮您避免的错误',
      items: [
        '选错适合自己的入籍类型。',
        '居住证明和无犯罪记录证明存在缺漏。',
        '翻译和海牙认证不符合标准。',
        '错过10天的申诉期限。',
      ],
    },
    cta: { title: '看看您现在是否已经可以申请入籍。', text: '' },
    disclaimer: '我们提供咨询服务。入籍由司法部决定。需要司法申诉的案件将转介给合作律师。',
  },

  residencia: {
    meta: {
      title: '基于工作或投资的居留许可 | Migrafácil',
      description:
        '为外籍专业人士、聘用外籍员工的企业和投资者提供巴西居留许可咨询。为 MigranteWeb 和联邦警察准备材料。',
    },
    hero: {
      title: '通过工作或投资获得巴西居留，申请准备得当。',
      subtitle: '面向外籍专业人士、聘用外籍员工的企业和投资者。我们为 MigranteWeb 和联邦警察整理申请材料。',
    },
    fronts: {
      title: '三大类别',
      items: [
        { title: '工作', text: '适用于受聘于巴西企业的专业人士，以及负责招聘的人力资源部门。' },
        { title: '投资', text: '适用于在巴西投资企业或房产的人。最低投资金额以国家移民委员会现行决议为准，并在评估时确认。' },
        { title: '其他法律依据', text: '家庭团聚、学习以及《移民法》规定的其他情形。' },
      ],
    },
    how: {
      title: '我们如何帮助您',
      items: [
        '确定正确的法律依据。',
        '为个人以及（如适用）企业制定材料清单。',
        '在 MigranteWeb 上审核申请。',
        '指导缴费、预约以及在联邦警察办理登记。',
        '流程结束时办理 CRNM 居留卡。',
      ],
    },
    company: {
      title: '准备聘用外籍员工？',
      text: '我们负责证件手续，让您的人力资源部门专注于招聘。从申请到拿到居留卡，只需一个对接人。',
    },
    cta: { title: '告诉我们您的情况，我们24小时内回复。', text: '' },
    disclaimer: '我们提供咨询服务。居留许可由司法部和联邦警察决定。',
  },

  vistoAmericano: {
    meta: {
      title: '美国签证协助：DS-160 与面签 | Migrafácil',
      description:
        '在 Sumaré、Campinas 及线上提供美国签证协助。DS-160 审核、材料清单和模拟面签。不承诺签证获批。',
    },
    hero: {
      title: '美国签证不再靠猜：从 DS-160 到面签。',
      subtitle: '不只是填表。我们审核您的个人经历，整理材料，并帮助您准备领事馆面签。',
    },
    included: {
      title: '服务内容',
      items: [
        '评估您的个人情况以及适合此次出行的签证类别。',
        '协助填写 DS-160，并对信息做最终核对。',
        '根据您的情况定制材料清单。',
        '指导缴纳签证费并通过官方渠道预约。',
        '模拟面签并提供反馈。',
        '全程 WhatsApp 支持。',
      ],
    },
    avoid: {
      title: '我们帮您避免的错误',
      items: [
        'DS-160 信息与您的工作经历不符。',
        '与巴西的联系没有充分说明。',
        '面签时回答含糊或前后矛盾。',
        '签证类别或面签地点选错。',
      ],
    },
    fee: {
      title: '签证费与等待时间',
      // PREENCHER: confirmar valor atual da taxa MRV em travel.state.gov antes de citar número.
      text: '旅游及商务签证（B1/B2）的签证费由美国政府收取，直接缴纳给美国政府。面签等待时间因城市而异。',
      link: '查询官方等待时间',
      src: SRC.waitTimes,
    },
    denied: {
      title: '曾经被拒签？',
      text: '我们会分析您的经历以及上次申请以来的变化，避免您再次出现同样的不一致。',
    },
    disclaimer:
      'Migrafácil 是一家私营咨询机构，与美国大使馆或领事馆无隶属关系。我们不保证签证获批：决定权完全在领事官员。我们没有任何特殊预约通道。',
  },

  sobre: {
    meta: {
      title: '关于 Migrafácil 与 RNE Brasil 团队',
      description: '了解 Migrafácil 与 RNE Brasil 团队，一家在圣保罗州 Sumaré 设有办公室并提供线上服务的移民咨询机构。',
    },
    title: 'Migrafácil 与 RNE Brasil：一个团队，两条路径。',
    text: 'Migrafácil 是 RNE Brasil 团队的咨询品牌。我们为希望在巴西生活的外国人以及希望前往美国的巴西人提供指导，在 Sumaré 提供线下服务，并为全巴西及海外客户提供线上服务。',
    mission: { label: '使命', text: '以负责、清晰和高质量的态度，指导移民与证件办理流程。' },
    values: { label: '价值观', text: '安全、透明、卓越。' },
    teamTitle: '团队',
    team: [
      {
        name: 'David Cristofhor de Lima',
        role: 'CEO',
        bio: '', // PREENCHER: bio curta, confirmando a experiência na Polícia Federal sem sugerir vínculo atual
        photo: '', // PREENCHER: foto real
      },
    ],
    photoPending: '团队照片即将上线',
    certsTitle: '教育背景与证书',
    certs: [
      '移民法法律更新课程',
      '公文写作',
      '当代巴西国际移民导论',
    ],
  },

  cases: {
    meta: {
      title: '成功案例 | Migrafácil',
      description: 'CRNM 居留卡、入籍、居留和美国签证的真实案例，经客户授权发布。',
    },
    title: '真实案例，从头到尾讲清楚。',
    text: '以下每个案例均经客户授权发布。为保护隐私，姓名可能以缩写显示。',
    labels: { situation: '情况', did: '我们做了什么', result: '结果' },
    // PREENCHER: 3 a 6 cases reais com autorização.
    items: [],
    empty: '我们正在整理首批经客户授权的案例。在此期间，欢迎告诉我们您的情况，看看我们能如何帮助您。',
  },

  perguntas: {
    meta: {
      title: 'CRNM 居留卡、入籍与签证常见问题 | Migrafácil',
      description: 'CRNM 居留卡即将到期、60岁后的有效期、官方费用、入籍办理时间以及美国签证是否有保证：附官方来源的解答。',
    },
    title: '常见问题',
    items: [
      {
        q: '我的 CRNM 居留卡快到期了，但在联邦警察约不到时间，怎么办？',
        a: '续签最早可在到期前90天申请，所以请尽早开始。申请回执在最长180天内享有同等权利。请注意：如果您是临时居留，居留卡过期会按逾期天数计算罚款；如果是永久居留，则没有续签罚款。我们会帮您准备申请并寻找预约时间。',
        src: SRC.pfFaq,
        srcLabel: 'PF，常见问题',
      },
      {
        q: '我已年满60岁或有残疾，居留卡还会过期吗？',
        a: '根据 Decreto 9.199/2017，对于在证件到期前已年满60岁的人以及残障人士，无固定期限居留的居留卡有效期为无限期。我们会分析您的情况，判断您是否符合条件以及需要办理哪些手续。',
        src: SRC.decreto,
        srcLabel: 'Decreto 9.199, art. 74',
      },
      {
        q: '费用是多少？哪些是政府费用，哪些是服务费？',
        a: '官方费用直接缴纳给政府：居留许可申请 R$ 168,13，CRNM 居留卡签发 R$ 204,77（gov.br，核实于2026年10月23日）。美国签证的签证费缴纳给美国政府。我们的服务费另计，会在评估后根据您案件的复杂程度告知。',
        src: SRC.govCrnm,
        srcLabel: 'gov.br',
      },
      {
        q: '入籍需要多长时间？如果申请被拒怎么办？',
        a: '在 Naturalizar-se 平台办理，官方预计时间最长180天。普通入籍要求居住满4年（如有巴西籍子女或配偶则为1年），特别入籍要求超过15年。如申请被拒，须在10天内提出申诉。我们会指导申诉，如案件需要，会推荐合作律师。',
        src: SRC.govNat,
        srcLabel: 'gov.br',
      },
      {
        q: '你们能保证我拿到美国签证吗？除了 DS-160 还做什么？',
        a: '不能。任何咨询机构都无法保证签证获批：决定权只在领事馆。我们的工作是减少导致拒签的错误：个人情况评估、DS-160 审核、证明您与巴西联系的材料，以及带反馈的模拟面签。',
        src: '',
        srcLabel: '',
      },
    ],
  },

  contato: {
    meta: {
      title: '联系我们 | Migrafácil',
      description: '通过 WhatsApp 或表单联系 Migrafácil。24小时内回复，可使用葡萄牙语、英语或中文。办公室位于圣保罗州 Sumaré。',
    },
    title: '联系我们，24小时内回复。',
    text: '最快的方式是 WhatsApp。您也可以留下联系方式，我们会回复您。',
    waButton: '打开 WhatsApp',
    form: {
      name: '姓名',
      phone: 'WhatsApp',
      email: '电子邮箱',
      subject: '咨询事项',
      subjects: ['CRNM 居留卡', '居留', '入籍', '美国签证', '其他'],
      language: '首选语言',
      languages: ['Português', 'English', '中文'],
      message: '留言',
      consent: '我已阅读并同意隐私政策。',
      submit: '提交',
      sending: '正在提交',
      note: '您的信息仅用于回复您的咨询。',
      error: '提交失败。请重试，或通过 WhatsApp 联系我们。',
      required: '请填写此项。',
    },
  },

  obrigado: {
    meta: { title: '已收到您的留言 | Migrafácil', description: '我们已收到您的留言，将在24小时内回复。' },
    title: '我们已收到您的留言。',
    text: '我们将在24小时内用您选择的语言回复。如有急事，请立即通过 WhatsApp 联系我们。',
    waButton: '打开 WhatsApp',
    back: '返回首页',
  },

  notFound: {
    meta: { title: '页面不存在 | Migrafácil', description: '此页面不存在。' },
    title: '此页面不存在。',
    text: '网址可能已更改。请选择要前往的页面：',
  },

  privacidade: {
    meta: { title: '隐私政策 | Migrafácil', description: 'Migrafácil 如何依据 LGPD 收集、使用和保护您的个人数据。' },
    title: '隐私政策',
    controller: '数据处理负责方：[公司名称及 CNPJ 待填写]。', // PREENCHER
    updated: '最后更新：2026年10月23日。',
    sections: [
      { title: '我们收集哪些数据', text: '姓名、电话、电子邮箱，以及您通过表单或 WhatsApp 发送的留言。如您同意，还包括用于访问统计的 Cookie。' },
      { title: '数据用途', text: '用于回复您的咨询；如您委托我们，则用于提供咨询服务。' },
      { title: '法律依据', text: '《通用数据保护法》（LGPD，Lei 13.709/2018）：回复咨询基于您的同意，提供所委托的咨询服务基于合同履行。' },
      { title: '数据共享对象', text: '我们绝不出售数据。仅在您本人申请服务时与官方机构共享，以及与提供服务所必需的托管和通讯服务商共享。' },
      { title: '保存期限', text: '在提供服务和履行法定义务所需的期限内保存。[保存期限待填写]' },
      { title: '您的权利', text: '您可以要求访问、更正、删除和转移您的数据，并可随时撤回同意。' },
      { title: 'Cookie', text: '统计类 Cookie 仅在您同意后使用。您可以在浏览器设置中拒绝或删除 Cookie。' },
      { title: '数据保护负责人联系方式', text: '数据保护负责人：[姓名待填写]。电子邮箱：contato@rnebrasil.com。' },
    ],
  },
};

export default zh;
