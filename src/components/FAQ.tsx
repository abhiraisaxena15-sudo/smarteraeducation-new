import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does Smart Era Education help with university admissions?',
    answer: 'We provide end-to-end admission support including university shortlisting, application filling, document verification, entrance exam guidance, interview preparation, and final admission confirmation. Our counsellors work closely with you to understand your profile and match you with the best-fit universities.',
  },
  {
    question: 'Are your partner universities UGC-approved?',
    answer: 'Yes, all our partner universities including LPU, Amity, Chandigarh University, Manipal, and others are UGC-approved and NAAC-accredited institutions. We only work with verified and recognized universities to ensure the value of your degree.',
  },
  {
    question: 'Do you charge for counselling sessions?',
    answer: 'Your first counselling session is completely free. We believe in understanding your needs before any commitment. Our service fees are transparent and among the most competitive in the industry, with no hidden charges.',
  },
  {
    question: 'Can you help with scholarship applications?',
    answer: 'Absolutely! We have dedicated scholarship counsellors who help identify merit-based and need-based scholarship opportunities. We assist with scholarship application preparation and documentation to maximize your chances of receiving financial aid.',
  },
  {
    question: 'What is the typical admission timeline?',
    answer: 'The admission timeline varies by university and program. Generally, UG admissions take 2-4 weeks and PG admissions take 3-6 weeks from application to confirmation. We keep you updated at every step and expedite the process wherever possible.',
  },
  {
    question: 'Do you provide education loan assistance?',
    answer: 'Yes, we partner with leading banks and NBFCs to help students secure education loans at competitive interest rates. Our team assists with loan application documentation, eligibility assessment, and lender coordination.',
  },
  {
    question: 'Is online degree admission support available?',
    answer: 'Yes, we provide complete support for UGC-approved online degree programs from top Indian universities. These programs offer flexibility for working professionals and students who prefer remote learning.',
  },
  {
    question: 'What documents are required for admission?',
    answer: 'Typically required documents include: 10th and 12th mark sheets, graduation mark sheets (for PG), ID proof (Aadhaar/PAN), passport-size photographs, transfer certificate, and category certificate (if applicable). Specific requirements may vary by university.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 border border-navy-100 mb-6">
            <HelpCircle className="w-4 h-4 text-navy-600" />
            <span className="text-sm font-semibold text-navy-700">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Find answers to common questions about our admission consultancy services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-navy-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-navy-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-slate-500 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
