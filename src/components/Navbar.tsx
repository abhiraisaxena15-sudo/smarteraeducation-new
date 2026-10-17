import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { primaryPhone } from '../data/site';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Universities', href: '/#universities' },
  { name: 'Services', href: '/#services' },
  { name: 'Why Us', href: '/#why-us' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = solid || scrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg shadow-navy-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <a href="/#home" aria-label="Smart Era Education home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center shadow-lg group-hover:shadow-navy-500/30 transition-shadow">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold leading-tight transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}>Smart Era</span>
                <span className={`text-[10px] font-semibold tracking-widest uppercase leading-tight transition-colors ${isScrolled ? 'text-navy-500' : 'text-navy-300'}`}>Education</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isScrolled ? 'text-slate-600 hover:text-navy-700 hover:bg-navy-50' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${primaryPhone.tel}`}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${isScrolled ? 'text-navy-700 bg-navy-50 hover:bg-navy-100' : 'text-white bg-white/10 hover:bg-white/20'}`}
              >
                <Phone className="w-4 h-4" />
                <span>{primaryPhone.display}</span>
              </a>
              <a
                href="/#contact"
                className="btn-shine px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-navy-800 to-navy-600 rounded-xl hover:from-navy-700 hover:to-navy-500 transition-all shadow-lg shadow-navy-500/25"
              >
                Free Counselling
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled || isMobileMenuOpen ? 'hover:bg-navy-50' : 'hover:bg-white/10'}`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-800" />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-medium text-slate-700 hover:text-navy-700 hover:bg-navy-50 rounded-xl transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={`tel:${primaryPhone.tel}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-navy-700 bg-navy-50 rounded-xl"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{primaryPhone.display}</span>
                  </a>
                  <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-navy-800 to-navy-600 rounded-xl"
                  >
                    Free Counselling
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
