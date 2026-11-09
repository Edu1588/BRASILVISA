// Identifica visitas que chegam por link citado em ferramentas de IA (ChatGPT, Perplexity, Gemini, Copilot, Claude...)
// e registra a origem uma vez por sessão: no Vercel Analytics (evento "ai_referral") e, se o GA4 for instalado,
// no gtag com o parâmetro ai_referral_source (criar a dimensão personalizada "Origem IA" no GA4).
// AI Overviews do Google chega como busca normal do Google e não dá para separar.
import { track } from '@vercel/analytics';

const SOURCES: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/, 'chatgpt'],
  [/(^|\.)perplexity\.ai$/, 'perplexity'],
  [/(^|\.)gemini\.google\.com$|(^|\.)bard\.google\.com$/, 'gemini'],
  [/(^|\.)copilot\.microsoft\.com$|(^|\.)copilot\.cloud\.microsoft$/, 'copilot'],
  [/(^|\.)claude\.ai$/, 'claude'],
  [/(^|\.)chat\.deepseek\.com$/, 'deepseek'],
  [/(^|\.)you\.com$/, 'you'],
  [/(^|\.)meta\.ai$/, 'meta_ai'],
  [/(^|\.)chat\.mistral\.ai$/, 'mistral'],
  [/(^|\.)grok\.com$/, 'grok'],
];

function match(value: string): string | null {
  const host = value.toLowerCase().replace(/^www\./, '');
  for (const [re, name] of SOURCES) if (re.test(host)) return name;
  return null;
}

/** Origem IA da visita atual: pelo site de onde veio ou pelo utm_source (o ChatGPT acrescenta utm_source=chatgpt.com). */
function detect(): string | null {
  const utm = new URLSearchParams(location.search).get('utm_source');
  if (utm) {
    const byUtm = match(utm);
    if (byUtm) return byUtm;
  }
  if (!document.referrer) return null;
  try {
    return match(new URL(document.referrer).hostname);
  } catch {
    return null;
  }
}

export function trackAiReferral() {
  try {
    if (sessionStorage.getItem('bv-ai-ref')) return;
    const source = detect();
    if (!source) return;
    sessionStorage.setItem('bv-ai-ref', source);
    track('ai_referral', { ai_referral_source: source });
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.('event', 'ai_referral', { ai_referral_source: source });
  } catch {}
}
