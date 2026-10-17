import { site } from '../data/site';

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  course: string;
  university: string;
  mode: string;
  city: string;
  service: string;
  /** honeypot — insaan ise kabhi nahi bharta, bots bharte hain */
  website: string;
}

/** +91 / 0 / spaces / dashes hata ke 10-digit Indian mobile number */
export function normalizePhone(raw: string) {
  let d = raw.replace(/\D/g, '');
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d;
}

export function validateLead(data: LeadData) {
  const errors: Partial<Record<keyof LeadData, string>> = {};
  if (data.name.trim().replace(/[^\p{L}]/gu, '').length < 2) errors.name = 'Please enter your full name';
  if (!/^[6-9]\d{9}$/.test(normalizePhone(data.phone))) errors.phone = 'Enter a valid 10-digit mobile number';
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) errors.email = 'Enter a valid email or leave it blank';
  if (!data.course) errors.course = 'Please select a course';
  if (data.city.trim().length < 2) errors.city = 'Please enter your city';
  return errors;
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'] as const;
const UTM_STORE = 'se_utm';

/** Ad / campaign source yaad rakhta hai taaki Sheet mein pata chale lead kahan se aayi */
export function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v.slice(0, 200);
    });
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORE, JSON.stringify(found));
  } catch {
    /* storage blocked — ignore */
  }
}

function readUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORE) || '{}');
  } catch {
    return {};
  }
}

export type SubmitResult = 'sent' | 'no-endpoint' | 'error';

export async function submitLead(data: LeadData): Promise<SubmitResult> {
  if (!site.leadsEndpoint) return 'no-endpoint';

  const body = new URLSearchParams({
    name: data.name.trim(),
    phone: normalizePhone(data.phone),
    email: data.email.trim(),
    course: data.course,
    university: data.university,
    mode: data.mode,
    city: data.city.trim(),
    service: data.service,
    website: data.website,
    page: window.location.href.slice(0, 300),
    ...readUtm(),
  });

  try {
    // Apps Script cross-origin response nahi padhne deta, isliye no-cors.
    // Request pahunch jaati hai; network fail hone par hi error aata hai.
    await fetch(site.leadsEndpoint, { method: 'POST', mode: 'no-cors', body });
    return 'sent';
  } catch {
    return 'error';
  }
}

export function leadWhatsappText(data: LeadData) {
  const lines = [
    'Hi Smart Era Education, I want admission guidance.',
    `Name: ${data.name.trim()}`,
    `Phone: ${normalizePhone(data.phone)}`,
    data.email.trim() && `Email: ${data.email.trim()}`,
    `Course: ${data.course}`,
    data.university && `University: ${data.university}`,
    data.mode && `Mode: ${data.mode}`,
    `City: ${data.city.trim()}`,
  ].filter(Boolean);
  return lines.join('\n');
}
