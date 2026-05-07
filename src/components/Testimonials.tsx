import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    course: 'MBA',
    university: 'Lovely Professional University',
    image: '/images/student-rahul.jpg',
    review: 'Smart Era Education made my MBA admission process incredibly smooth. Their counsellors helped me choose the right specialization and even secured a 30% scholarship. I could not have done it without their expert guidance!',
    rating: 5,
    location: 'Delhi',
  },
  {
    name: 'Priya Verma',
    course: 'B.Tech Computer Science',
    university: 'Chandigarh University',
    image: '/images/student-priya.jpg',
    review: 'I was confused about which university to choose for B.Tech. The team at Smart Era patiently explained all options and helped me get into Chandigarh University with a merit scholarship. Truly grateful for their support!',
    rating: 5,
    location: 'Lucknow',
  },
  {
    name: 'Aman Gupta',
    course: 'BCA',
    university: 'Amity University',
    image: '/images/student-aman.jpg',
    review: 'From application to admission, every step was handled professionally. They even assisted with my education loan paperwork. Got admission to Amity University Noida within 2 weeks of contacting them. Highly recommended!',
    rating: 5,
    location: 'Jaipur',
  },
  {
    name: 'Sneha Kapoor',
    course: 'MCA',
    university: 'Manipal University Jaipur',
    image: '/images/student-sneha.jpg',
    review: 'The personalized counselling sessions were a game-changer. They understood my career goals and matched me with the perfect MCA program at Manipal University. The admission process was hassle-free and fast!',
    rating: 5,
    location: 'Mumbai',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
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
            <MessageSquare className="w-4 h-4 text-navy-600" />
            <span className="text-sm font-semibold text-navy-700">Student Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Students Say
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real stories from real students who achieved their academic dreams with our guidance.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="testimonial-card bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <Quote className="w-12 h-12 text-navy-100 mb-6" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 italic">
                "{testimonials[current].review}"
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-navy-900">{testimonials[current].name}</h4>
                    <p className="text-sm text-slate-500">
                      {testimonials[current].course} • {testimonials[current].university}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonials[current].location}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-navy-50 hover:border-navy-300 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-navy-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-navy-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-navy-50 hover:border-navy-300 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-navy-700" />
            </button>
          </div>
        </div>

        {/* All testimonials grid for mobile/desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                i === current
                  ? 'bg-navy-50 border-navy-200 shadow-md'
                  : 'bg-white border-slate-100 hover:border-navy-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.course}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
