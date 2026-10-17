import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { site, universities } from '../data/site';
import { prefillLeadForm } from '../lib/prefill';

export default function Universities() {
  return (
    <section id="universities" className="py-20 md:py-28 bg-slate-50">
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
            <Award className="w-4 h-4 text-navy-600" />
            <span className="text-sm font-semibold text-navy-700">Partner Universities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Universities We Work With
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We guide students through admissions at these universities for regular and
            online programs. Tap a university to get free counselling for it.
          </p>
        </motion.div>

        {/* University Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {universities.map((uni, i) => (
            <motion.button
              type="button"
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i, 10) * 0.04 }}
              onClick={() => prefillLeadForm({ university: uni.name })}
              aria-label={`Get admission counselling for ${uni.name}`}
              className="university-card group relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-navy-200 text-left focus-visible:outline-2 focus-visible:outline-navy-500"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${uni.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className={`${uni.short.length > 3 ? 'text-sm' : 'text-lg'} font-bold text-white`}>{uni.short}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 leading-tight">{uni.name}</h3>
                  {uni.location && <p className="text-xs text-slate-400 mt-1">{uni.location}</p>}
                </div>
                {uni.online ? (
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Online Programs</span>
                ) : (
                  <span className="text-xs font-medium text-navy-500 bg-navy-50 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    Enquire <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 text-white shadow-xl shadow-navy-500/20 text-center">
            <Award className="w-5 h-5 text-navy-300 flex-shrink-0" />
            <span className="font-semibold">{site.universitiesCount}+ Universities · Regular &amp; Online Degrees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
