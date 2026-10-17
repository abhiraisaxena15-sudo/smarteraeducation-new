export interface PrefillDetail {
  university?: string;
  service?: string;
}

export const PREFILL_EVENT = 'smartera:prefill';

/** Lead form mein value bhar ke contact section pe scroll karta hai */
export function prefillLeadForm(detail: PrefillDetail) {
  window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#contact');
  } else {
    window.location.href = '/#contact';
  }
}
