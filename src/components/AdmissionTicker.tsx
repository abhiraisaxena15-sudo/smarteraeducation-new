import { AlertCircle } from 'lucide-react';
import { site, primaryPhone } from '../data/site';

/**
 * Ticker mein sirf aisi lines rakho jo expire na hon.
 * Kisi university ki specific last-date daalo toh use
 * deadline nikalne ke baad yahan se hata dena.
 */
const updates = [
  `Admissions Open for ${site.admissionIntake} Intake — UG, PG & Online Programs`,
  'Chandigarh University, LPU & CGC — Admission Guidance Available',
  'Online MBA, BBA, BCA & MCA — Amity Online, NMIMS, Sikkim Manipal, VGU Online',
  'Scholarship Assistance for Eligible Students',
  'Manipal University Jaipur, VIT & Galgotias — Get Expert Counselling',
  `Free Counselling — Call ${primaryPhone.display}`,
];

export default function AdmissionTicker() {
  return (
    <div className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 py-3 overflow-hidden" aria-label="Admission updates">
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...updates, ...updates].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8" aria-hidden={i >= updates.length}>
              <AlertCircle className="w-4 h-4 text-navy-300 flex-shrink-0" />
              <span className="text-sm font-medium text-white/90">{item}</span>
              <span className="text-navy-400 mx-4">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
