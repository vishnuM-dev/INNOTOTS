'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(7, 25, 79, 0.08)' : '0 1px 0 rgba(7, 25, 79, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Official Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center py-1 transition-transform hover:scale-[1.02]"
            aria-label="InnoTots Preschool Home"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/logo/innotots-logo.png"
                alt="InnoTots Preschool"
                width={80}
                height={92}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks
              .filter((link) => link.href !== '/admissions-contact')
              .map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#FF3F68] bg-[#FFF0F3] shadow-xs'
                        : 'text-[#07194F] hover:text-[#FF3F68] hover:bg-[#FFF0F3]/60'
                    }`}
                    style={{ fontFamily: 'var(--font-nunito)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            <Link
              href="/admissions-contact"
              className={`ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 ${
                pathname === '/admissions-contact'
                  ? 'ring-4 ring-[#FF3F68]/30 shadow-md scale-105'
                  : ''
              }`}
              style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              aria-current={pathname === '/admissions-contact' ? 'page' : undefined}
            >
              <Sparkles size={15} className="animate-spin-slow" />
              <span>Admissions Open</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} className="text-[#07194F]" />
            ) : (
              <Menu size={22} className="text-[#07194F]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-5 space-y-1.5">
              {navLinks
                .filter((link) => link.href !== '/admissions-contact')
                .map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-[#FF3F68] bg-[#FFF0F3]'
                          : 'text-[#07194F] hover:text-[#FF3F68] hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'var(--font-nunito)' }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              <div className="pt-2">
                <Link
                  href="/admissions-contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-bold text-white shadow-sm"
                  style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
                >
                  <Sparkles size={16} />
                  <span>Admissions Open — Apply Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
