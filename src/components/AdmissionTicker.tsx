import { AlertCircle } from 'lucide-react';

const deadlines = [
  'LPU Admissions Closing Soon - Apply by March 31',
  'Amity University Early Bird Scholarship - Last Date April 15',
  'Chandigarh University CUCET Registration Open',
  'Manipal University Jaipur B.Tech Admissions 2025 Live',
  'Sharda University Scholarship Test on April 20',
  'Bennett University Application Deadline Extended',
  'Parul University MBA Admissions Open for 2025',
  'Galgotias University Engineering Admissions - Apply Now',
  'UPES Dehradun Energy Sector Programs - Limited Seats',
  'Jain University Bangalore UG Programs - Enrolling Now',
];

export default function AdmissionTicker() {
  return (
    <div className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 py-3 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...deadlines, ...deadlines].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8">
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
