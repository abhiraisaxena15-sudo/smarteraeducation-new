import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Building2, TrendingUp, BadgeIndianRupee } from 'lucide-react';
import { site } from '../data/site';

type Stat =
  | { icon: typeof Users; value: number; suffix: string; label: string; color: string }
  | { icon: typeof Users; text: string; label: string; color: string };

const stats: Stat[] = [
  { icon: Users, value: site.studentsGuided, suffix: '+', label: 'Students Guided', color: 'from-blue-500 to-blue-600' },
  { icon: Building2, value: site.universitiesCount, suffix: '+', label: 'Partner Universities', color: 'from-violet-500 to-violet-600' },
  { icon: TrendingUp, value: site.successRate, suffix: '%', label: 'Admission Success Rate', color: 'from-emerald-500 to-emerald-600' },
  { icon: BadgeIndianRupee, text: '100% Free', label: 'Counselling', color: 'from-amber-500 to-amber-600' },
];

/**
 * Final number pehle se render hota hai (Google aur slow phones ke liye),
 * aur screen pe aane par 0 se count-up animation chalta hai.
 */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Hydration ke baad, agar counter abhi screen pe nahi hai, toh 0 se shuru karo
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const visible = r.top < window.innerHeight && r.bottom > 0;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!visible && !reduced) setCount(0);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Smart Era Education in numbers" className="py-16 md:py-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg mb-5`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {'value' in stat ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : stat.text}
              </div>
              <div className="text-sm sm:text-base text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
