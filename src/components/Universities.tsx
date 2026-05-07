import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const universities = [
  { name: 'Lovely Professional University', location: 'Punjab', color: 'from-orange-500 to-red-600', abbr: 'LPU', courses: '200+ Courses' },
  { name: 'Amity University', location: 'Noida, UP', color: 'from-blue-600 to-indigo-700', abbr: 'AU', courses: '300+ Courses' },
  { name: 'Chandigarh University', location: 'Chandigarh', color: 'from-red-600 to-rose-700', abbr: 'CU', courses: '250+ Courses' },
  { name: 'Manipal University Jaipur', location: 'Jaipur, Rajasthan', color: 'from-teal-500 to-cyan-600', abbr: 'MUJ', courses: '150+ Courses' },
  { name: 'Sharda University', location: 'Greater Noida, UP', color: 'from-violet-600 to-purple-700', abbr: 'SU', courses: '180+ Courses' },
  { name: 'Bennett University', location: 'Greater Noida, UP', color: 'from-amber-500 to-orange-600', abbr: 'BU', courses: '50+ Courses' },
  { name: 'Parul University', location: 'Vadodara, Gujarat', color: 'from-emerald-500 to-green-600', abbr: 'PU', courses: '160+ Courses' },
  { name: 'Galgotias University', location: 'Greater Noida, UP', color: 'from-sky-500 to-blue-600', abbr: 'GU', courses: '120+ Courses' },
  { name: 'UPES', location: 'Dehradun, Uttarakhand', color: 'from-lime-500 to-green-600', abbr: 'UPES', courses: '100+ Courses' },
  { name: 'Jain University', location: 'Bangalore, Karnataka', color: 'from-pink-500 to-rose-600', abbr: 'JU', courses: '140+ Courses' },
];

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
            <span className="text-sm font-semibold text-navy-700">Trusted Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Top Partner Universities
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We are officially partnered with India's leading universities to provide you 
            with verified admission pathways and exclusive scholarship opportunities.
          </p>
        </motion.div>

        {/* University Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="university-card group relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-navy-200 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${uni.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className="text-lg font-bold text-white">{uni.abbr}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 leading-tight">{uni.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{uni.location}</p>
                </div>
                <span className="text-xs font-medium text-navy-500 bg-navy-50 px-2.5 py-1 rounded-full">
                  {uni.courses}
                </span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-navy-400" />
              </div>
            </motion.div>
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 text-white shadow-xl shadow-navy-500/20">
            <Award className="w-5 h-5 text-navy-300" />
            <span className="font-semibold">100+ Admission Partners Across India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
