'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Users, Puzzle, Image as ImageIcon, Rocket } from 'lucide-react';
import { navLinks } from '@/data/navigation';

const navIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '/': Home,
  '/about': Users,
  '/programs': Puzzle,
  '/gallery': ImageIcon,
};

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
      className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md md:rounded-b-[28px] border-b border-gray-100/60"
      style={{
        boxShadow: scrolled
          ? '0 6px 24px -4px rgba(11, 32, 84, 0.08)'
          : '0 2px 12px -2px rgba(11, 32, 84, 0.04)',
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
          <div className="hidden lg:flex items-center gap-2">
            {navLinks
              .filter((link) => link.href !== '/admissions-contact')
              .map((link) => {
                const isActive = pathname === link.href;
                const Icon = navIcons[link.href];
                const isGallery = link.href === '/gallery';

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? isGallery
                          ? 'text-[#FF2465] bg-[#FFE1E9] shadow-2xs font-bold'
                          : 'text-[#FF2465] bg-[#FFE1E9]/80 shadow-2xs font-bold'
                        : 'text-[#0B2054] hover:text-[#FF2465] hover:bg-[#FFE1E9]/40'
                    }`}
                    style={{ fontFamily: 'var(--font-nunito)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {Icon && (
                      <Icon
                        size={15}
                        className={isActive ? (isGallery ? 'text-[#FF2465]' : 'text-[#FF2465]') : 'opacity-70'}
                      />
                    )}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            <Link
              href="/admissions-contact"
              className={`ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 ${
                pathname === '/admissions-contact'
                  ? 'ring-4 ring-[#FF2465]/30 shadow-md scale-105 bg-[#FF2465]'
                  : 'bg-[#FF2465] hover:bg-[#E01E55]'
              }`}
              style={{ fontFamily: 'var(--font-nunito)' }}
              aria-current={pathname === '/admissions-contact' ? 'page' : undefined}
            >
              <Rocket size={15} />
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
              <X size={22} className="text-[#0B2054]" />
            ) : (
              <Menu size={22} className="text-[#0B2054]" />
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
                  const Icon = navIcons[link.href];
                  const isGallery = link.href === '/gallery';

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? isGallery
                            ? 'text-[#FF2465] bg-[#FFE1E9] font-bold'
                            : 'text-[#FF2465] bg-[#FFE1E9]/80 font-bold'
                          : 'text-[#0B2054] hover:text-[#FF2465] hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'var(--font-nunito)' }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {Icon && <Icon size={16} className={isActive ? 'text-[#FF2465]' : 'opacity-70'} />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              <div className="pt-2">
                <Link
                  href="/admissions-contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-bold text-white shadow-sm bg-[#FF2465]"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  <Rocket size={16} />
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
