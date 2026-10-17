import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2, MessageCircle, X, AlertTriangle } from 'lucide-react';
import { site, courses, universities, fullAddress, whatsappLink } from '../data/site';
import { PREFILL_EVENT, type PrefillDetail } from '../lib/prefill';
import { captureUtm, leadWhatsappText, submitLead, validateLead, type LeadData } from '../lib/leads';

const emptyForm: LeadData = {
  name: '',
  phone: '',
  email: '',
  course: '',
  university: '',
  mode: '',
  city: '',
  service: '',
  website: '',
};

const inputBase =
  'w-full px-4 py-3 rounded-xl border text-slate-800 placeholder:text-slate-400 transition-all';
const inputCls = (err?: string) => `${inputBase} ${err ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'}`;

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-rose-600">
      {msg}
    </p>
  );
}

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<null | 'sent' | 'whatsapp'>(null);
  const [submitError, setSubmitError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    captureUtm();
    const onPrefill = (e: Event) => {
      const detail = (e as CustomEvent<PrefillDetail>).detail || {};
      setResult(null);
      setFormData((prev) => ({
        ...prev,
        university: detail.university ?? prev.university,
        service: detail.service ?? prev.service,
      }));
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    const found = validateLead(formData);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementsByName(firstError)[0]?.focus();
      return;
    }

    setIsSubmitting(true);
    const res = await submitLead(formData);
    setIsSubmitting(false);

    if (res === 'sent') {
      setResult('sent');
    } else if (res === 'no-endpoint') {
      // Google Sheet abhi connect nahi hai — lead WhatsApp pe bhejo taaki gum na ho
      window.open(whatsappLink(leadWhatsappText(formData)), '_blank', 'noopener');
      setResult('whatsapp');
    } else {
      setSubmitError(true);
    }
  };

  const reset = () => {
    setResult(null);
    setErrors({});
    setFormData(emptyForm);
  };

  if (result) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl"
            role="status"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Thank You!</h3>
            <p className="text-slate-500 text-lg mb-8">
              {result === 'sent'
                ? 'Your enquiry has been received. Our counselling team will contact you within 24 hours.'
                : 'Please press "Send" in WhatsApp to share your details with our counselling team.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <button
                onClick={reset}
                className="px-6 py-3 text-sm font-semibold text-navy-700 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-navy-300 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Start Your Admission Journey Today
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Fill out the form and our counsellors will call you to discuss the best
              university and course options for your profile.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-navy-300" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Call Us</p>
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block text-white font-semibold hover:underline">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-navy-300" />
                </div>
                <div>
                  <p className="text-sm text-white/50">WhatsApp</p>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
                    Chat with a counsellor
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-navy-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/50">Email Us</p>
                  <a href={`mailto:${site.email}`} className="text-white font-semibold hover:underline break-all">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy-300" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Visit Us</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${fullAddress}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                  >
                    {fullAddress}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Get Free Counselling</h3>
              <p className="text-slate-500 mb-6">Our experts will reach out within 24 hours</p>

              {formData.service && (
                <div className="mb-5 inline-flex items-center gap-2 pl-3 pr-1 py-1 rounded-full bg-navy-50 border border-navy-100 text-sm text-navy-700">
                  Enquiry for: <span className="font-semibold">{formData.service}</span>
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, service: '' }))}
                    aria-label="Remove service"
                    className="w-6 h-6 rounded-full hover:bg-navy-100 flex items-center justify-center"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot (hidden from humans) */}
                <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                  </label>
                </div>

                <div>
                  <label htmlFor="lf-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    ref={nameRef}
                    id="lf-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={80}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'lf-name-err' : undefined}
                    className={inputCls(errors.name)}
                  />
                  <FieldError id="lf-name-err" msg={errors.name} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lf-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Mobile Number *</label>
                    <input
                      id="lf-phone"
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={16}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'lf-phone-err' : undefined}
                      className={inputCls(errors.phone)}
                    />
                    <FieldError id="lf-phone-err" msg={errors.phone} />
                  </div>
                  <div>
                    <label htmlFor="lf-email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      id="lf-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      maxLength={120}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'lf-email-err' : undefined}
                      className={inputCls(errors.email)}
                    />
                    <FieldError id="lf-email-err" msg={errors.email} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lf-course" className="block text-sm font-medium text-slate-700 mb-1.5">Course Interest *</label>
                    <select
                      id="lf-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      aria-invalid={!!errors.course}
                      aria-describedby={errors.course ? 'lf-course-err' : undefined}
                      className={`${inputCls(errors.course)} bg-white`}
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                    <FieldError id="lf-course-err" msg={errors.course} />
                  </div>
                  <div>
                    <label htmlFor="lf-city" className="block text-sm font-medium text-slate-700 mb-1.5">City *</label>
                    <input
                      id="lf-city"
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      maxLength={60}
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? 'lf-city-err' : undefined}
                      className={inputCls(errors.city)}
                    />
                    <FieldError id="lf-city-err" msg={errors.city} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lf-university" className="block text-sm font-medium text-slate-700 mb-1.5">Preferred University</label>
                    <select
                      id="lf-university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className={`${inputCls()} bg-white`}
                    >
                      <option value="">Not sure yet</option>
                      {universities.map((u) => (
                        <option key={u.name} value={u.name}>{u.name}</option>
                      ))}
                    </select>
                  </div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-slate-700 mb-1.5">Study Mode</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {['Regular', 'Online'].map((m) => (
                        <label
                          key={m}
                          className={`cursor-pointer text-center px-3 py-3 rounded-xl border text-sm font-medium transition-colors ${
                            formData.mode === m
                              ? 'border-navy-500 bg-navy-50 text-navy-800'
                              : 'border-slate-200 text-slate-600 hover:border-navy-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="mode"
                            value={m}
                            checked={formData.mode === m}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {m}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {submitError && (
                  <div role="alert" className="flex gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <p>
                      Could not submit — please check your internet and try again, or{' '}
                      <a href={whatsappLink(leadWhatsappText(formData))} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                        send your details on WhatsApp
                      </a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-shine flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-navy-800 to-navy-600 rounded-xl hover:from-navy-700 hover:to-navy-500 transition-all shadow-lg shadow-navy-500/25 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Free Counselling
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to be contacted by call, SMS or WhatsApp and to our{' '}
                  <a href="/privacy-policy" className="underline hover:text-navy-600">Privacy Policy</a> and{' '}
                  <a href="/terms" className="underline hover:text-navy-600">Terms</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
