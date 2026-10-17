import { GraduationCap, Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { site, whatsappLink } from '../data/site';

const quickLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Universities', href: '/#universities' },
  { name: 'Services', href: '/#services' },
  { name: 'Why Choose Us', href: '/#why-us' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
];

const services = [
  'Admission Guidance',
  'Career Counselling',
  'Scholarship Assistance',
  'Education Loan Support',
  'Online Degree Admissions',
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Disclaimer', href: '/disclaimer' },
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
            <a href="/#home" className="flex items-center gap-2.5 mb-5" aria-label="Smart Era Education home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-navy-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Smart Era</span>
                <span className="text-[10px] font-semibold text-navy-400 tracking-widest uppercase leading-tight">Education</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Admission guidance for regular and online degrees at India's leading universities —
              helping {site.studentsGuided.toLocaleString('en-IN')}+ students choose the right course and university.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: site.instagram, label: 'Smart Era Education on Instagram' },
                { icon: MessageCircle, href: whatsappLink(), label: 'Chat on WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
                  <a href="/#services" className="text-sm text-slate-400 hover:text-white transition-colors">{service}</a>
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
                  {site.address.street}, {site.address.city},<br />{site.address.state} - {site.address.pincode}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-navy-400 mt-0.5 flex-shrink-0" />
                <span className="flex flex-col gap-1">
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="text-sm text-slate-400 hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
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
              aria-label="Back to top"
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
