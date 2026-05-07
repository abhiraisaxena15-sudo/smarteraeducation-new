import { motion } from 'framer-motion';
import { BookOpen, Compass, Trophy, Banknote, Monitor, Plane, Sparkles } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Admission Guidance',
    description: 'End-to-end support for university admissions including application filling, document verification, and interview preparation.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Compass,
    title: 'Career Counselling',
    description: 'Personalized career roadmap sessions with certified counsellors to help you choose the right path for your future.',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Trophy,
    title: 'Scholarship Assistance',
    description: 'We help you identify and apply for merit-based and need-based scholarships to reduce your education costs.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Banknote,
    title: 'Education Loan Support',
    description: 'Expert guidance on education loans from top banks and NBFCs with competitive interest rates and flexible terms.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Monitor,
    title: 'Online Degree Admissions',
    description: 'Get admission to UGC-approved online degree programs from top Indian universities with flexible learning options.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Plane,
    title: 'Study Abroad Guidance',
    description: 'Comprehensive support for overseas education including university selection, visa processing, and pre-departure briefing.',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 border border-navy-100 mb-6">
            <Sparkles className="w-4 h-4 text-navy-600" />
            <span className="text-sm font-semibold text-navy-700">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Comprehensive Education Services
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From admission guidance to scholarship support, we provide end-to-end services 
            to make your educational journey smooth and successful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="service-card group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-navy-200"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
