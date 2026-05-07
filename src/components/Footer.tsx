import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Universities', href: '#universities' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Admission Guidance',
  'Career Counselling',
  'Scholarship Assistance',
  'Education Loan Support',
  'Online Degree Admissions',
  'Study Abroad Guidance',
];

const legal = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Refund Policy', href: '#' },
  { name: 'Disclaimer', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-navy-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Smart Era</span>
                <span className="text-[10px] font-semibold text-navy-400 tracking-widest uppercase leading-tight">Education</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              India's most trusted education consultancy helping students achieve their academic dreams 
              through expert guidance and verified university partnerships.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-navy-600 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-300 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-300 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-300 mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-navy-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  B-42, Sector 62, Noida,<br />Uttar Pradesh - 201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <a href="mailto:info@smarteraeducation.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@smarteraeducation.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Smart Era Education. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legal.map((item) => (
                <a key={item.name} href={item.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center hover:bg-navy-700 transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
