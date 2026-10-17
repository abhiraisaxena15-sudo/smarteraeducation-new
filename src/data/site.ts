/**
 * ============================================================
 *  SMART ERA EDUCATION — SITE SETTINGS
 *  Phone, email, address, universities, stats sab yahin se
 *  poori website mein jaate hain. Kuch badalna ho toh
 *  sirf is file ko edit karo.
 * ============================================================
 */

export const site = {
  name: 'Smart Era Education',
  url: 'https://smarteraeducation.in',

  /** Hero badge + ticker mein dikhta hai. Har saal update karo. */
  admissionIntake: '2027',

  phones: [
    { display: '+91 87559 99764', tel: '+918755999764' },
    { display: '+91 63677 78950', tel: '+916367778950' },
  ],

  /** Floating WhatsApp button + form fallback isi number pe jaata hai */
  whatsapp: '916367778950',

  email: 'info.smarteraeducation@gmail.com',

  /** TODO: address confirm karo — yeh purani website se liya gaya hai */
  address: {
    street: 'B-42, Sector 62',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    country: 'IN',
  },

  instagram: 'https://www.instagram.com/smartera_education/',

  /**
   * Google Sheet (Apps Script) Web App URL.
   * Setup steps: google-apps-script/SETUP.md
   * Yahan URL paste karo, ya hosting pe VITE_LEADS_ENDPOINT env variable set karo.
   */
  leadsEndpoint:
    (import.meta.env.VITE_LEADS_ENDPOINT as string | undefined) ||
    'https://script.google.com/macros/s/AKfycbwoCr9ggTfsJB3GtsotMqtt_AGtSx8kELFudTiOpIXSqH-IyQR6UrhWlyUG8TdzoSc3/exec',

  studentsGuided: 5000,
  /** Hero, stats aur badges mein "20+ Universities" */
  universitiesCount: 20,
  successRate: 95,
} as const;

export const primaryPhone = site.phones[0];

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} - ${site.address.pincode}`;

export const whatsappLink = (text = 'Hi Smart Era Education, I want to know more about university admissions') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export interface University {
  short: string;
  name: string;
  location?: string;
  online?: boolean;
  color: string;
}

/**
 * Jin universities mein Smart Era admission guidance deta hai.
 * TODO: CCU, DSU, MIT aur Jamia ka full naam/location confirm karo.
 */
export const universities: University[] = [
  { short: 'CU', name: 'Chandigarh University', location: 'Mohali, Punjab', color: 'from-red-600 to-rose-700' },
  { short: 'LPU', name: 'Lovely Professional University', location: 'Phagwara, Punjab', color: 'from-orange-500 to-red-600' },
  { short: 'CGC', name: 'Chandigarh Group of Colleges', location: 'Mohali, Punjab', color: 'from-blue-600 to-indigo-700' },
  { short: 'CCU', name: 'CCU', color: 'from-sky-500 to-blue-600' },
  { short: 'MUJ', name: 'Manipal University Jaipur', location: 'Jaipur, Rajasthan', color: 'from-teal-500 to-cyan-600' },
  { short: 'SMU', name: 'Sikkim Manipal University', online: true, color: 'from-cyan-500 to-teal-600' },
  { short: 'AO', name: 'Amity University Online', online: true, color: 'from-amber-500 to-orange-600' },
  { short: 'VGU', name: 'Vivekananda Global University Online', online: true, color: 'from-violet-600 to-purple-700' },
  { short: 'NMIMS', name: 'NMIMS', location: 'Mumbai, Maharashtra', color: 'from-rose-500 to-red-600' },
  { short: 'VIT', name: 'VIT', location: 'Vellore, Tamil Nadu', color: 'from-indigo-500 to-blue-700' },
  { short: 'BVDU', name: 'Bharati Vidyapeeth', location: 'Pune, Maharashtra', color: 'from-emerald-500 to-green-600' },
  { short: 'GLA', name: 'GLA University', location: 'Mathura, UP', color: 'from-lime-600 to-green-700' },
  { short: 'GU', name: 'Galgotias University', location: 'Greater Noida, UP', color: 'from-sky-600 to-indigo-600' },
  { short: 'JP', name: 'Jaypee', color: 'from-slate-600 to-slate-800' },
  { short: 'DSU', name: 'DSU', color: 'from-fuchsia-500 to-pink-600' },
  { short: 'MIT', name: 'MIT', color: 'from-red-500 to-orange-600' },
  { short: 'SU', name: 'Shoolini University', location: 'Solan, Himachal Pradesh', color: 'from-green-500 to-emerald-700' },
  { short: 'JU', name: 'Jamia University', color: 'from-teal-600 to-emerald-700' },
  { short: 'UU', name: 'Uttaranchal University', location: 'Dehradun, Uttarakhand', color: 'from-pink-500 to-rose-600' },
];

export const courses = [
  'B.Tech', 'M.Tech', 'BCA', 'MCA', 'BBA', 'MBA', 'B.Com', 'M.Com',
  'BA', 'MA', 'B.Sc', 'M.Sc', 'LLB', 'LLM', 'B.Pharm', 'M.Pharm',
  'Diploma', 'PhD', 'Other',
];
