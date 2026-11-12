'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(7,25,79,0.1)' : '0 1px 0 rgba(7,25,79,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="InnoTots Preschool Home">
            <img
              src="/logo/innotots-logo.svg"
              alt="InnoTots Preschool"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: isActive ? '#FF3F68' : '#07194F',
                    backgroundColor: isActive ? '#FFF0F3' : 'transparent',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/admissions-contact"
              className="ml-3 px-4 py-2 rounded-full text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
            >
              Admissions Open
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} color="#07194F" />
            ) : (
              <Menu size={24} color="#07194F" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t"
            style={{ backgroundColor: 'rgba(255,255,255,0.98)', borderColor: '#DDF3F1' }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium"
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: isActive ? '#FF3F68' : '#07194F',
                      backgroundColor: isActive ? '#FFF0F3' : 'transparent',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/admissions-contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              >
                Admissions Open
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
