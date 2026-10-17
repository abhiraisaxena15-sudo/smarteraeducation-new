import { site, universities, courses, primaryPhone } from '../data/site';

/**
 * Admission Help chatbot ke jawab. Website ke data (site.ts) se hi
 * jawab banta hai, isliye number/universities badalne par yahan
 * kuch badalne ki zaroorat nahi.
 */

const phones = site.phones.map((p) => p.display).join(' / ');
const online = universities.filter((u) => u.online).map((u) => u.name);
const topRegular = universities.filter((u) => !u.online).slice(0, 8).map((u) => u.short === u.name ? u.name : `${u.name} (${u.short})`);

interface Intent {
  keys: RegExp;
  answer: () => string;
}

const intents: Intent[] = [
  {
    keys: /\b(hi|hello|hey|namaste|hlo|hii+)\b/,
    answer: () => 'Hello! 👋 Ask me about admissions, fees, scholarships, universities, online degrees or documents.',
  },
  {
    keys: /(free|charge|paisa|cost of counsel|counsell?ing fee|consult(ation)? fee)/,
    answer: () => `Our counselling is 100% FREE — no charges, no hidden fees. Fill the form on this page or WhatsApp us to book your free session.`,
  },
  {
    keys: /(time|timeline|kitne din|how long|days|fast|jaldi)/,
    answer: () => 'Many universities confirm admission within a few weeks. With our help the process is up to 60% faster than applying on your own.',
  },
  {
    keys: /(fee|fees|price|budget|cost|structure|kitna (paisa|kharcha)|kharcha)/,
    answer: () => `Our counselling is 100% FREE. University fees depend on the university and course — tell us your course and budget and we'll share the exact fee structure. Call ${primaryPhone.display}.`,
  },
  {
    keys: /(scholar|discount|concession|waiver)/,
    answer: () => 'Most of our partner universities offer merit-based scholarships, and some offer need-based aid. We check your eligibility and help you apply. Share your 12th/graduation marks with our counsellor to know your options.',
  },
  {
    keys: /(online|distance|working|job ke sath|part.?time)/,
    answer: () => `We help with UGC-entitled online degrees (MBA, MCA, BBA, BCA, B.Com, MA and more) from ${online.join(', ')}, NMIMS and others. Ideal if you are working.`,
  },
  {
    keys: /(document|docs|certificate|marksheet|kagaz|papers)/,
    answer: () => 'Usually needed: 10th & 12th marksheets, graduation marksheets (for PG), Aadhaar/ID proof, passport-size photos, transfer/migration certificate, and category certificate if applicable. Exact list depends on the university.',
  },
  {
    keys: /(loan|emi|bank|nbfc|finance)/,
    answer: () => 'Yes, we guide you on education loan options from banks and NBFCs and help with documentation. The lender decides approval and interest rate.',
  },
  {
    keys: /(university|universities|college|colleges|kaun|which|list|partner)/,
    answer: () => `We work with ${site.universitiesCount}+ universities including ${topRegular.join(', ')}, plus online programs from ${online.join(', ')}. Tell me which one you're interested in!`,
  },
  {
    keys: /(apply|admission|process|kaise|how to|enrol|register|form)/,
    answer: () => 'Simple: 1) Fill the form on this page or WhatsApp us, 2) Get a free counselling call, 3) Shortlist universities, 4) We help with application & documents until your admission is confirmed.',
  },
  {
    keys: /(success|result|guarantee|pakka|sure)/,
    answer: () => `We have guided ${site.studentsGuided.toLocaleString('en-IN')}+ students with a ${site.successRate}% admission success rate. Final admission is decided by the university, and we help you put your best application forward.`,
  },
  {
    keys: /(contact|call|phone|number|mobile|whats ?app|baat)/,
    answer: () => `Call us at ${phones}, or tap "Talk to a counsellor on WhatsApp" below.`,
  },
  {
    keys: /(address|office|location|kahan|where|visit)/,
    answer: () => `Our office: ${site.address.street}, ${site.address.city}, ${site.address.state} - ${site.address.pincode}. Please call before visiting: ${primaryPhone.display}.`,
  },
  {
    keys: /(instagram|insta|social)/,
    answer: () => 'Follow us on Instagram @smartera_education for admission updates and student stories.',
  },
  {
    keys: /(thank|thanks|thx|dhanyavad|shukriya|ok|okay)/,
    answer: () => 'You\'re welcome! 😊 Fill the form on this page and our counsellor will call you within 24 hours.',
  },
];

function findUniversity(q: string) {
  return universities.find((u) => {
    const short = u.short.toLowerCase();
    const name = u.name.toLowerCase();
    return (short.length >= 2 && new RegExp(`\\b${short}\\b`).test(q)) || q.includes(name);
  });
}

function findCourse(q: string) {
  // "b.tech", "b tech", "btech" sab ek jaise samjho
  const norm = q.replace(/\./g, '').replace(/\b([bm])\s+(tech|com|sc|pharm|a|ba)\b/g, '$1$2');
  return courses.find((c) => {
    if (c === 'Other') return false;
    const key = c.toLowerCase().replace(/[.\s]/g, '');
    return new RegExp(`(^|[^a-z])${key}([^a-z]|$)`).test(norm);
  });
}

export function getBotReply(input: string): string {
  const q = input.toLowerCase().trim();

  const uni = findUniversity(q);
  if (uni) {
    return `Yes! We help with admissions at ${uni.name}${uni.location ? ` (${uni.location})` : ''}${uni.online ? ' — online programs' : ''}. Counselling is 100% free. Fill the form on this page (choose ${uni.name}) or WhatsApp us for fees, eligibility and scholarships.`;
  }

  const course = findCourse(q);
  const intent = intents.find((i) => i.keys.test(q));

  if (course && (!intent || /admission|apply|kaise|how/.test(q))) {
    return `Great choice! We guide ${course} admissions at ${site.universitiesCount}+ universities, in regular and online mode. Share your marks and budget with our counsellor — counselling is 100% free. Fill the form or call ${primaryPhone.display}.`;
  }

  if (intent) return intent.answer();

  return `Good question! Our counsellor can answer that best — chat on WhatsApp below or call ${phones}. Counselling is 100% free.`;
}

export const quickQuestions = [
  'How to apply for admission?',
  'What are the fees?',
  'Which universities?',
  'Scholarship options?',
  'Online degree options?',
  'Documents required?',
];
