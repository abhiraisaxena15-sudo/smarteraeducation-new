import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Zap, HeartHandshake, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Universities',
    description: 'All our partner universities are UGC-approved and NAAC-accredited institutions with proven track records.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: UserCheck,
    title: 'Expert Counsellors',
    description: 'Our team consists of certified education counsellors with 10+ years of experience in university admissions.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Zap,
    title: 'Fast Admission Process',
    description: 'We streamline the entire admission journey, reducing processing time by up to 60% compared to self-applications.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Guidance',
    description: 'Transparent pricing with no hidden costs. Our counselling fees are among the most competitive in the industry.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Target,
    title: 'Personalized Support',
    description: 'One dedicated counsellor per student ensuring personalized attention throughout your admission journey.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Lightbulb,
    title: 'Career-Focused Approach',
    description: 'We do not just get you admission — we align your education with your long-term career goals and industry trends.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const trustBadges = [
  'UGC Approved Universities',
  'NAAC Accredited Partners',
  'ISO 9001:2015 Certified',
  '10+ Years Experience',
  '5000+ Google Reviews',
  'PAN India Presence',
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 border border-navy-100 mb-6">
              <Target className="w-4 h-4 text-navy-600" />
              <span className="text-sm font-semibold text-navy-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Smart Era Advantage
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              We combine industry expertise, technology, and a student-first approach to deliver 
              unmatched admission consultancy services. Our commitment to transparency and excellence 
              has made us one of India's most trusted education partners.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-navy-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
