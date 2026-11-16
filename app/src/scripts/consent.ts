// Consentimento de cookies (LGPD) com o Consent Mode v2 do Google.
// Sem aceite, o Google Tag Manager (e a tag do Google Ads dentro dele) nem é carregado.
// Com aceite, o consentimento é atualizado para "granted" e o carregador do GTM entra na página.
// A escolha fica em localStorage (chave bv-cookies) e pode ser mudada pelo botão "Preferências de cookies" do rodapé.

const KEY = 'bv-cookies';
const GTM_ID = 'GTM-TV527NM9';

type Choice = 'granted' | 'denied';
type Win = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
const w = window as Win;

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function write(v: Choice) {
  try {
    localStorage.setItem(KEY, v);
  } catch {}
}

const consentState = (v: Choice) => ({
  ad_storage: v,
  ad_user_data: v,
  ad_personalization: v,
  analytics_storage: v,
});

/** Cria o dataLayer e o gtag e registra o consentimento padrão como negado, antes de qualquer tag do Google. */
function setup() {
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag() {
      // O dataLayer do Google exige o objeto arguments, não um array.
      (w.dataLayer as unknown[]).push(arguments);
    };
  }
  w.gtag('consent', 'default', { ...consentState('denied'), wait_for_update: 500 });
}

let loaded = false;
function loadGtm() {
  if (loaded) return;
  loaded = true;
  w.gtag?.('js', new Date());
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

function grant() {
  w.gtag?.('consent', 'update', consentState('granted'));
  loadGtm();
}

/** Quem já aceitou e depois recusa: avisa o Google e apaga os cookies do próprio site (_ga, _gcl, _gac...). */
function revoke() {
  w.gtag?.('consent', 'update', consentState('denied'));
  const names = document.cookie.split(';').map((c) => c.split('=')[0].trim());
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
  for (const name of names) {
    if (!/^(_ga|_gid|_gat|_gcl|_gac|_gv)/.test(name)) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
    }
  }
}

/** Roda uma vez por carregamento completo da página: consentimento padrão e, se já aceito antes, carrega o Google. */
export function initConsent() {
  setup();
  if (read() === 'granted') grant();
}

/** Liga os botões do banner e do rodapé. Roda a cada troca de página (ClientRouter troca o DOM). */
export function bindConsent() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  const show = () => banner.removeAttribute('hidden');
  const hide = () => banner.setAttribute('hidden', '');
  if (!read()) show();
  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => {
    write('granted');
    grant();
    hide();
  });
  banner.querySelector('[data-cookie-decline]')?.addEventListener('click', () => {
    write('denied');
    revoke();
    hide();
  });
  document.querySelectorAll('[data-cookie-settings]').forEach((el) => el.addEventListener('click', show));
}
