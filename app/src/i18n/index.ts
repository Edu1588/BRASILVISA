import pt, { type Dict } from './pt';
import en from './en';
import zh from './zh';

export type Lang = 'pt' | 'en' | 'zh';
export const LANGS: Lang[] = ['pt', 'en', 'zh'];
export const DICTS: Record<Lang, Dict> = { pt, en, zh };

export const WHATSAPP = '5511963959030';
export const WHATSAPP_DISPLAY = '(11) 96395-9030';
export const EMAIL = 'contato@rnebrasil.com';
export const ADDRESS_QUERY = 'Alameda dos Professores, 90, Parque Villa Flores, Sumaré SP, 13175-670';
export const SOCIAL = {
  instagram: 'https://www.instagram.com/rne_brasil/',
  facebook: 'https://www.facebook.com/rnebrasilassessoria/',
  linkedin: 'https://www.linkedin.com/company/rne-brasil-vistos-e-passaporte/',
  youtube: 'https://www.youtube.com/channel/UC-gaTsR41GjbD_KPOwUf_Og',
};

export type PageKey =
  | 'home' | 'crnm' | 'naturalizacao' | 'residencia' | 'vistoAmericano'
  | 'sobre' | 'cases' | 'perguntas' | 'contato' | 'obrigado' | 'privacidade';

export const SLUGS: Record<PageKey, string> = {
  home: '',
  crnm: 'crnm',
  naturalizacao: 'naturalizacao',
  residencia: 'residencia',
  vistoAmericano: 'visto-americano',
  sobre: 'sobre',
  cases: 'cases',
  perguntas: 'perguntas',
  contato: 'contato',
  obrigado: 'obrigado',
  privacidade: 'privacidade',
};

/** Caminho localizado: português na raiz, os demais em /en e /zh. */
export function href(lang: Lang, page: PageKey): string {
  const slug = SLUGS[page];
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  return slug ? `${prefix}/${slug}` : prefix || '/';
}

export function waLink(lang: Lang, key: keyof Dict['wa']): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(DICTS[lang].wa[key])}`;
}

/** Usado por getStaticPaths de todas as páginas: pt na raiz, en e zh com prefixo. */
export function langPaths() {
  return LANGS.map((l) => ({ params: { lang: l === 'pt' ? undefined : l }, props: { lang: l } }));
}
