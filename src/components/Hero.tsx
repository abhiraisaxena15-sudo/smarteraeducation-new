import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle2, Users, Award, TrendingUp, Phone, BadgeCheck } from 'lucide-react';
import { site, primaryPhone } from '../data/site';

const stats = [
  { icon: Users, label: 'Students Guided', value: `${site.studentsGuided.toLocaleString('en-IN')}+` },
  { icon: Award, label: 'Partner Universities', value: `${site.universitiesCount}+` },
  { icon: TrendingUp, label: 'Admission Success Rate', value: `${site.successRate}%` },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="Graduates celebrating their university admission success"
          width={1376}
          height={768}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-800/70" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-20 h-20 rounded-2xl bg-navy-400/10 backdrop-blur-sm border border-white/10"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-[15%] w-16 h-16 rounded-full bg-navy-300/10 backdrop-blur-sm border border-white/10"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-[20%] w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Admissions Open for {site.admissionIntake} Intake</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Trusted Partner for{' '}
              <span className="text-navy-300">University Admissions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-xl leading-relaxed"
            >
              Expert admission guidance for regular and online degrees at India's leading
              universities — from choosing the right course to scholarships and final enrolment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500/15 border border-green-400/40"
            >
              <BadgeCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-white font-semibold">
                100% Free Counselling <span className="font-normal text-white/70">— no charges, no hidden fees</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/#contact"
                className="btn-shine group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-navy-900 bg-white rounded-2xl hover:bg-navy-50 transition-all shadow-xl shadow-black/20"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                Free Counselling
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                'Expert Counsellors',
                'UGC-recognised Universities',
                'Up to 60% Faster Admissions',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile stats (right card is desktop-only) */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 border border-white/15 px-3 py-3 text-center">
                  <div className="text-base sm:text-lg font-bold text-white leading-tight">{stat.value}</div>
                  <div className="text-[11px] text-white/60 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-dark rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">Why Students Trust Us</h3>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-400/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-navy-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href={`tel:${primaryPhone.tel}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-sm text-white/70">
                    Talk to a counsellor{' '}
                    <span className="block font-semibold text-white group-hover:underline">{primaryPhone.display}</span>
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
