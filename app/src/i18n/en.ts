import type { Dict } from './pt';

// Texto do site em inglês. Mesma forma de pt.ts.

const SRC = {
  decreto: 'https://www2.camara.leg.br/legin/fed/decret/2017/decreto-9199-20-novembro-2017-785772-publicacaooriginal-154263-pe.html',
  pfFaq: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/duvidas-frequentes',
  govCrnm: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio',
  govNat: 'https://www.gov.br/pt-br/servicos/solicitar-naturalizacao',
  waitTimes: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html',
};

const en: Dict = {
  lang: 'en',
  langLabel: 'English',
  checkedOn: 'checked on 10/23/2026',
  source: 'Source',

  wa: {
    geral: 'Hello, I found Migrafácil through the website and would like guidance on my case.',
    crnm: 'Hello, I need help with my CRNM (registration, renewal or regularization). Can you guide me?',
    residencia: 'Hello, I would like guidance on a residence permit in Brazil.',
    empresa: 'Hello, I work at a company that is going to hire a foreign professional and I need guidance.',
    naturalizacao: 'Hello, I would like to know if I can become a Brazilian citizen and how to get started.',
    vistoEua: 'Hello, I would like guidance on the US visa process.',
  },

  fotos: {
    crnm: 'Hands organizing documents and an ID card on a desk',
    naturalizacao: 'Person seen from behind by a window holding a document folder',
    residencia: 'Handshake over a desk with a contract in an office',
    vistoAmericano: 'Hands checking a passport and a boarding pass',
    escritorio: 'Meeting table with document folders and a passport in a bright office',
  },
  nav: {
    home: 'Home',
    crnm: 'CRNM',
    naturalizacao: 'Naturalization',
    residencia: 'Residence',
    vistoAmericano: 'US visa',
    sobre: 'About',
    cases: 'Cases',
    perguntas: 'FAQ',
    contato: 'Contact',
    cta: 'Chat on WhatsApp',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    languages: 'Language',
  },

  common: {
    talk: 'Talk to a specialist',
    reply24: 'We reply within 24 hours.',
    mobileCta: 'Talk to a specialist',
    mobileCtaNote: 'Reply within 24h',
    trust: [
      'Service in Portuguese, English and Chinese',
      'Online across Brazil',
      'In person in Sumaré SP',
      'Reply within 24 hours',
    ],
    breadcrumbLabel: 'You are here',
    fieldSoon: 'Coming soon',
  },

  footer: {
    about: 'Migrafácil, immigration and documentation consultancy. Same team as RNE Brasil.',
    address: 'Alameda dos Professores, 90, Parque Villa Flores, Sumaré SP, 13175-670',
    hoursLabel: 'In-person service',
    hours: '', // PREENCHER: dias e horários
    legal:
      'Migrafácil is a private consultancy. We are not affiliated with the Federal Police (Polícia Federal), the Ministry of Justice, or the US Embassy or consulates. Decisions and the issuance of documents and visas rest solely with the competent authorities, and no outcome is guaranteed. Official fees (Federal Police GRU, MRV consular fee) are paid directly to the government and are not part of our professional fees. Official forms are free on gov.br. When a case requires a lawyer, we refer partners registered with the OAB (Brazilian Bar Association).',
    privacy: 'Privacy Policy',
    faq: 'Frequently asked questions',
    cases: 'Success stories',
    rights: 'All rights reserved.',
  },

  home: {
    meta: {
      title: 'Migrafácil: CRNM, residence, naturalization and US visa',
      description: 'Immigration consultancy in Sumaré SP and online: CRNM (formerly RNE), residence, naturalization and US visas. Service in 3 languages, reply in 24h.',
    },
    hero: {
      kicker: 'Immigration consultancy in Sumaré SP and online',
      title: 'Your immigration documents, in order and done right the first time.',
      subtitle:
        'We guide foreigners living in Brazil (CRNM, residence and naturalization) and Brazilians who want a US visa. Every step is reviewed before it reaches the Federal Police or the consulate.',
      cta: 'Talk to a specialist',
      secondary: 'See services',
      note: 'Reply within 24 hours, in Portuguese, English or Chinese.',
    },
    paths: {
      title: 'Where do you start?',
      foreign: {
        title: 'I am a foreigner living in Brazil',
        text: 'CRNM registration and renewal, residence permits based on work or investment, and Brazilian naturalization.',
        link: 'See services for foreigners',
      },
      brazilian: {
        title: 'I am Brazilian and want to go to the United States',
        text: 'Reviewed DS-160, organized documents and practice for the consulate interview.',
        link: 'See US visa assistance',
      },
    },
    services: {
      title: 'Services',
      items: [
        { key: 'crnm', name: 'CRNM (formerly RNE)', text: 'Registration, renewal and regularization of the foreigner ID card, according to the legal basis of your residence.' },
        { key: 'residencia', name: 'Residence permit', text: 'Work, investment and other legal bases, with the file prepared for MigranteWeb and the Federal Police.' },
        { key: 'naturalizacao', name: 'Brazilian naturalization', text: 'Assessment of the right type, a complete file and follow-up until the decision.' },
        { key: 'vistoAmericano', name: 'US visa', text: 'DS-160, document checklist, fee and scheduling guidance, and a mock interview.' },
      ],
      more: 'Learn more',
    },
    why: {
      title: 'Knowing the process from the inside means fewer mistakes.',
      items: [
        { title: 'Hands-on experience at the Federal Police', text: 'Our founder, David Cristofhor de Lima, built his career with hands-on experience at the Federal Police.' },
        { title: 'Three languages, for real', text: 'We serve clients in Portuguese, English and Chinese. As far as our research shows, we are the only CRNM and naturalization consultancy in Brazil offering service in Chinese.' },
        { title: 'Transparent fees', text: 'We show what is a government fee and what is our professional fee, with the official link for each amount.' },
        { title: 'In person and online', text: 'Office in Sumaré and remote service across Brazil and abroad.' },
      ],
    },
    steps: {
      title: 'How it works',
      items: [
        { title: 'First conversation', text: 'Tell us about your case on WhatsApp. We reply within 24 hours.' },
        { title: 'Assessment', text: 'We identify the right legal basis or visa category and what is missing.' },
        { title: 'File', text: 'Checklist, form review, translations and apostilles in the required format.' },
        { title: 'Follow-up', text: 'We guide the filing and scheduling and stay with you until the decision.' },
      ],
    },
    // PREENCHER: números reais. Enquanto a lista estiver vazia, a seção não aparece.
    stats: [],
    reviews: {
      title: 'What our clients say',
      // PREENCHER: avaliações reais do Google, com autorização.
      items: [],
      link: 'See all reviews on Google',
      url: '', // PREENCHER: link do perfil no Google
    },
    casesTeaser: {
      title: 'Real cases, explained from start to finish.',
      text: 'See how we organize CRNM, naturalization and US visa processes.',
      link: 'See success stories',
    },
    faqTitle: 'Frequently asked questions',
    final: {
      title: 'Tell us about your case. We reply within 24 hours.',
      text: 'No commitment. You leave the conversation knowing your next step.',
    },
    where: { title: 'Where we are', route: 'Get directions' },
  },

  crnm: {
    meta: {
      title: 'CRNM (formerly RNE): registration and renewal | Migrafácil',
      description: 'Consulting for CRNM (formerly RNE) registration, renewal and regularization, with official Federal Police deadlines and fees explained. Reply in 24 hours.',
    },
    hero: {
      title: 'CRNM without the headache: registration, renewal and regularization.',
      subtitle:
        'We build your process according to the legal basis of your residence, avoid rework and follow every step until the card is in your hands.',
    },
    what: {
      title: 'What the CRNM is',
      text: 'The Carteira de Registro Nacional Migratório (CRNM) is the identity document for foreigners living in Brazil. It replaced the former RNE under the Migration Law (Lei 13.445/2017) and is issued by the Federal Police (Polícia Federal).',
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    who: {
      title: 'Who it is for',
      items: [
        'People who arrived on a temporary visa and need to register.',
        'People whose residence permit was approved and who need to get the card issued.',
        'People whose card is about to expire, has expired or has outdated information.',
        'People whose card was lost or stolen.',
      ],
    },
    deadlines: {
      title: 'Deadlines you need to know',
      items: [
        { label: 'Temporary visa', value: 'Registration within 90 days of entering Brazil.', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 64' },
        { label: 'Residence approved in Brazil', value: 'Registration within 30 days of publication.', src: SRC.decreto, srcLabel: 'Decreto 9.199, art. 66' },
        { label: 'Renewal', value: 'Can start up to 90 days before expiration, with an in-person appointment at the Federal Police.', src: SRC.pfFaq, srcLabel: 'PF, FAQ' },
        { label: 'Filing receipt', value: 'Guarantees the same rights for up to 180 days.', src: SRC.pfFaq, srcLabel: 'PF, FAQ' },
        { label: 'Expired temporary residence', value: 'Results in a fine for each day of delay.', src: SRC.pfFaq, srcLabel: 'PF, FAQ' },
      ],
    },
    fees: {
      title: 'Official Federal Police fees',
      head: ['Fee', 'Amount'],
      rows: [
        ['Residence permit application', 'R$ 168.13'],
        ['CRNM issuance', 'R$ 204.77'],
        ['Scheduling and pickup', 'Free'],
      ],
      note: 'These fees are paid by GRU directly to the government. Our professional fee is separate and provided at the assessment.',
      src: SRC.govCrnm,
      srcLabel: 'gov.br',
    },
    do: {
      title: 'What we do',
      items: [
        'We identify the right legal basis for your application.',
        'We build the document checklist for your profile.',
        'We review forms and data before submission.',
        'We guide you through issuing the GRU and scheduling at the Federal Police.',
        'We prepare you for the in-person appointment.',
        'We track the application in SISMIGRA until pickup.',
      ],
    },
    avoid: {
      title: 'Mistakes we help you avoid',
      items: [
        'Applying under the wrong legal basis.',
        'Expired documents or documents without sworn translation and apostille.',
        'Missing the 90-day deadline and building up fines.',
        'Showing up at the Federal Police without a document and having to reschedule.',
      ],
    },
    cta: {
      title: 'Does your card expire in the next few months?',
      text: 'The sooner you start, the more appointment dates you will find.',
    },
    disclaimer: 'We provide consultancy and guidance. Filing is done through official channels and the decision belongs to the Federal Police.',
  },

  naturalizacao: {
    meta: {
      title: 'Brazilian naturalization: requirements | Migrafácil',
      description:
        'Consultancy for ordinary, extraordinary and provisional Brazilian naturalization. Eligibility assessment, complete file and follow-up until the decision.',
    },
    hero: {
      title: 'Brazilian naturalization with the right file from the first submission.',
      subtitle: 'We analyze which type applies to you, organize the documents and follow the application until the decision.',
    },
    types: {
      title: 'Types',
      items: [
        { title: 'Ordinary', text: '4 years of residence immediately before the application, or 1 year for those with a Brazilian child or spouse. Requires the ability to communicate in Portuguese and no criminal conviction.' },
        { title: 'Extraordinary', text: 'More than 15 uninterrupted years of residence in Brazil.' },
        { title: 'Provisional and conversion to permanent', text: 'For those who arrived in Brazil as a child.' },
      ],
      src: SRC.decreto,
      srcLabel: 'Decreto 9.199/2017',
    },
    official: {
      title: 'How the official process works',
      text: 'The application is free and filed on the Naturalizar-se platform with a gov.br account, with an in-person step at the Federal Police to check originals and collect biometrics. The estimated official timeline is up to 180 days. If the application is denied, an appeal must be filed within 10 days.',
      src: SRC.govNat,
      srcLabel: 'gov.br',
    },
    how: {
      title: 'How we help',
      items: [
        'Eligibility assessment by type.',
        'Document strategy: originals, sworn translations and apostilles.',
        'Guidance on proof of Portuguese (Celpe-Bras and other accepted documents).',
        'Assembly and final check of the file.',
        'Guidance on filing on the official platform.',
        'Follow-up until the decision and guidance in case of appeal.',
      ],
    },
    avoid: {
      title: 'Mistakes we help you avoid',
      items: [
        'Choosing the wrong type for your profile.',
        'Gaps in proof of residence and criminal records.',
        'Translations and apostilles that do not meet the standard.',
        'Missing the 10-day appeal deadline.',
      ],
    },
    cta: { title: 'Find out if you can already become a Brazilian citizen.', text: '' },
    disclaimer: 'We provide consultancy. The decision on naturalization belongs to the Ministry of Justice. Cases requiring a court appeal are referred to partner lawyers.',
  },

  residencia: {
    meta: {
      title: 'Residence permit based on work or investment | Migrafácil',
      description:
        'Consultancy on residence permits in Brazil for foreign professionals, hiring companies and investors. Files prepared for MigranteWeb and the Federal Police.',
    },
    hero: {
      title: 'Residence in Brazil through work or investment, with a well-prepared application.',
      subtitle: 'For foreign professionals, hiring companies and investors. We organize the file for MigranteWeb and the Federal Police.',
    },
    fronts: {
      title: 'Three areas',
      items: [
        { title: 'Work', text: 'For professionals hired by a company in Brazil and for the HR team handling the hire.' },
        { title: 'Investment', text: 'For those investing in a company or real estate in Brazil. Minimum amounts follow the current resolution of the National Immigration Council and are confirmed at the assessment.' },
        { title: 'Other legal bases', text: 'Family reunion, study and other cases provided for in the Migration Law.' },
      ],
    },
    how: {
      title: 'How we help',
      items: [
        'Classification under the correct legal basis.',
        'Document checklist for the individual and, when applicable, for the company.',
        'Review of the application on MigranteWeb.',
        'Guidance on fees, scheduling and registration at the Federal Police.',
        'CRNM issuance at the end of the process.',
      ],
    },
    company: {
      title: 'Hiring a foreign professional?',
      text: 'We handle the paperwork so your HR team can focus on the hire. One single point of contact, from application to issued card.',
    },
    cta: { title: 'Tell us about your case. We reply within 24 hours.', text: '' },
    disclaimer: 'We provide consultancy. The decision on the residence permit belongs to the Ministry of Justice and the Federal Police.',
  },

  vistoAmericano: {
    meta: {
      title: 'US visa assistance: DS-160 and interview | Migrafácil',
      description:
        'US visa assistance in Sumaré, Campinas and online. Reviewed DS-160, document checklist and mock interview. No promise of approval.',
    },
    hero: {
      title: 'US visa without the guesswork: from the DS-160 to the interview.',
      subtitle: 'It is not just filling out a form. We review your history, organize your documents and prepare you for the consulate interview.',
    },
    included: {
      title: 'What is included',
      items: [
        'Assessment of your profile and the right visa category for your trip.',
        'Assisted completion of the DS-160 with a final data check.',
        'Document checklist tailored to your profile.',
        'Guidance on paying the consular fee and scheduling through the official channel.',
        'Mock interview with feedback.',
        'WhatsApp support throughout the process.',
      ],
    },
    avoid: {
      title: 'Mistakes we help you avoid',
      items: [
        'DS-160 data that does not match your work history.',
        'Poorly presented ties to Brazil.',
        'Vague or contradictory answers in the interview.',
        'Wrong visa category or wrong consular post.',
      ],
    },
    fee: {
      title: 'Fee and wait time',
      // PREENCHER: confirmar valor atual da taxa MRV em travel.state.gov antes de citar número.
      text: 'The consular fee for the tourist and business visa (B1/B2) is charged by the US government and paid directly to it. The interview wait time varies by city.',
      link: 'Check the official wait time',
      src: SRC.waitTimes,
    },
    denied: {
      title: 'Has your visa been denied before?',
      text: 'We analyze your history and what has changed since your last attempt, so you do not repeat the same inconsistencies.',
    },
    disclaimer:
      'Migrafácil is a private consultancy, not affiliated with the US Embassy or consulates. We do not guarantee visa issuance: the decision rests solely with the consular authority. We have no access to any special appointment queue.',
  },

  sobre: {
    meta: {
      title: 'About Migrafácil and the RNE Brasil team',
      description: 'Meet the Migrafácil and RNE Brasil team, an immigration consultancy with an office in Sumaré SP and online service.',
    },
    title: 'Migrafácil and RNE Brasil: one team, two paths.',
    text: 'Migrafácil is the consultancy of the RNE Brasil team. We guide foreigners who want to live in Brazil and Brazilians who want to travel to the United States, with in-person service in Sumaré and online service across Brazil and abroad.',
    mission: { label: 'Mission', text: 'To guide immigration and documentation processes with commitment, clarity and quality.' },
    values: { label: 'Values', text: 'Security, transparency and excellence.' },
    teamTitle: 'Team',
    team: [
      {
        name: 'David Cristofhor de Lima',
        role: 'CEO',
        bio: '', // PREENCHER: bio curta, confirmando a experiência na Polícia Federal sem sugerir vínculo atual
        photo: '', // PREENCHER: foto real
      },
    ],
    photoPending: 'Team photo coming soon',
    certsTitle: 'Education and certificates',
    certs: [
      'Legal Update in Immigration Law',
      'Official Writing',
      'Introduction to International Migration in Contemporary Brazil',
    ],
  },

  cases: {
    meta: {
      title: 'Success stories | Migrafácil',
      description: 'Real CRNM, naturalization, residence and US visa cases, published with our clients\' permission.',
    },
    title: 'Real cases, explained from start to finish.',
    text: 'Each case below was published with the client\'s permission. Names may be shortened to protect privacy.',
    labels: { situation: 'Situation', did: 'What we did', result: 'Result' },
    // PREENCHER: 3 a 6 cases reais com autorização.
    items: [],
    empty: 'We are gathering our first cases with clients\' permission. In the meantime, tell us about yours and see how we can help.',
  },

  perguntas: {
    meta: {
      title: 'FAQ about CRNM, naturalization and visas | Migrafácil',
      description: 'Expiring CRNM, validity at age 60, official fees, naturalization timeline and US visa guarantees: answers with official sources.',
    },
    title: 'Frequently asked questions',
    items: [
      {
        q: 'My CRNM is about to expire and I cannot find an appointment at the Federal Police. What should I do?',
        a: 'Renewal can be requested up to 90 days before expiration, so start early. The filing receipt guarantees the same rights for up to 180 days. Note: if your residence is temporary, an expired card results in a fine for each day of delay. If it is permanent, there is no renewal fine. We help you prepare the application and look for an appointment date.',
        src: SRC.pfFaq,
        srcLabel: 'PF, FAQ',
      },
      {
        q: 'I am over 60 or have a disability. Does my card still expire?',
        a: 'Under Decreto 9.199/2017, the card for residence with indefinite term becomes valid indefinitely for those who turned 60 by the document\'s expiration date and for people with disabilities. We review your case to see whether you qualify and what needs to be done.',
        src: SRC.decreto,
        srcLabel: 'Decreto 9.199, art. 74',
      },
      {
        q: 'How much does it cost? What is a government fee and what is your professional fee?',
        a: 'Official fees are paid directly to the government: R$ 168.13 for the residence permit application and R$ 204.77 for CRNM issuance (gov.br, checked on 10/23/2026). For the US visa, the consular fee is paid to the US government. Our professional fee is separate and provided after the assessment, according to the complexity of your case.',
        src: SRC.govCrnm,
        srcLabel: 'gov.br',
      },
      {
        q: 'How long does naturalization take? What if the application is denied?',
        a: 'The estimated official timeline is up to 180 days, on the Naturalizar-se platform. Ordinary naturalization requires 4 years of residence (or 1 year with a Brazilian child or spouse), and extraordinary requires more than 15 years. If the application is denied, an appeal must be filed within 10 days. We guide the appeal and, if the case requires it, refer partner lawyers.',
        src: SRC.govNat,
        srcLabel: 'gov.br',
      },
      {
        q: 'Do you guarantee my US visa? What do you do beyond the DS-160?',
        a: 'No. No consultancy can guarantee a visa: the decision belongs only to the consulate. What we do is reduce the mistakes that lead to denial: profile assessment, reviewed DS-160, documents that show your ties to Brazil and a mock interview with feedback.',
        src: '',
        srcLabel: '',
      },
    ],
  },

  contato: {
    meta: {
      title: 'Contact | Migrafácil',
      description: 'Reach Migrafácil on WhatsApp or through the form. Reply within 24 hours, in Portuguese, English or Chinese. Office in Sumaré SP.',
    },
    title: 'Get in touch. We reply within 24 hours.',
    text: 'The fastest way is WhatsApp. If you prefer, leave your details and we will get back to you.',
    waButton: 'Open WhatsApp',
    form: {
      name: 'Name',
      phone: 'WhatsApp',
      email: 'Email',
      subject: 'Subject',
      subjects: ['CRNM', 'Residence', 'Naturalization', 'US visa', 'Other'],
      language: 'Preferred language',
      languages: ['Português', 'English', '中文'],
      message: 'Message',
      consent: 'I have read and agree to the Privacy Policy.',
      submit: 'Send',
      sending: 'Sending',
      note: 'We use your data only to reply to your message.',
      error: 'Could not send. Please try again or reach us on WhatsApp.',
      required: 'Please fill in this field.',
    },
  },

  obrigado: {
    meta: { title: 'Message received | Migrafácil', description: 'We received your message through the Migrafácil website. We reply within 24 hours, in the language you chose.' },
    title: 'We received your message.',
    text: 'We will reply within 24 hours, in the language you chose. If it is urgent, message us now on WhatsApp.',
    waButton: 'Open WhatsApp',
    back: 'Back to home',
  },

  notFound: {
    meta: { title: 'Page not found | Migrafácil', description: 'This page does not exist.' },
    title: 'This page does not exist.',
    text: 'The address may have changed. Choose where to go next:',
  },

  privacidade: {
    meta: { title: 'Privacy Policy | Migrafácil', description: 'How Migrafácil collects, uses and protects your personal data, in accordance with the LGPD.' },
    title: 'Privacy Policy',
    controller: 'Data controller: [company name and CNPJ to be filled in].', // PREENCHER
    updated: 'Last updated: 10/23/2026.',
    sections: [
      { title: 'What data we collect', text: 'Name, phone number, email and the message you send through the form or WhatsApp. If you accept, audience measurement cookies.' },
      { title: 'How we use it', text: 'To reply to your message and, if you hire us, to provide the consultancy.' },
      { title: 'Legal basis', text: 'Brazilian General Data Protection Law (LGPD, Lei 13.709/2018): consent, to reply to your message, and performance of a contract, for the consultancy you hire.' },
      { title: 'Who we share it with', text: 'We never sell data. We share it only with official bodies when you yourself request the service, and with hosting and messaging providers needed to serve you.' },
      { title: 'How long we keep it', text: 'For as long as needed to serve you and to meet legal obligations. [retention period to be filled in]' },
      { title: 'Your rights', text: 'You can request access, correction, deletion and portability of your data, and withdraw consent at any time.' },
      { title: 'Cookies', text: 'Measurement cookies are only used with your consent. You can refuse or delete cookies in your browser settings.' },
      { title: 'Data protection officer contact', text: 'Data protection officer: [name to be filled in]. Email: contato@rnebrasil.com.' },
    ],
  },
};

export default en;
