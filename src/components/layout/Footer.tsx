import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { school } from '@/data/school';
import { navLinks } from '@/data/navigation';
import { programs } from '@/data/programs';
import FloatingShape from '@/components/animations/FloatingShape';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8 border-t border-[#08BFC1]/15"
      style={{ backgroundColor: '#DDF3F1' }}
    >
      {/* Decorative floating shapes */}
      <FloatingShape shape="circle" color="#08BFC1" size={60} delay={0} className="absolute top-8 left-8 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="star" color="#FF3F68" size={40} delay={1} className="absolute top-16 right-16 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#A75CE2" size={40} delay={2} className="absolute bottom-20 left-1/4 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="triangle" color="#FFBA08" size={35} delay={0.5} className="absolute bottom-24 right-1/4 pointer-events-none" opacity={0.2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Logo & intro (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="InnoTots Preschool Home"
              className="inline-block mb-5 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-white rounded-2xl p-3 shadow-xs border border-white/80 inline-flex items-center justify-center">
                <Image
                  src="/logo/innotots-logo.png"
                  alt="InnoTots Preschool"
                  width={140}
                  height={162}
                  className="w-28 sm:w-32 h-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-700 max-w-sm" style={{ fontFamily: 'var(--font-nunito)' }}>
              A joyful preschool where every little mind is nurtured with love, creativity and the magic of play-based learning. Building confidence and wonder in early childhood.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={school.socialLinks.facebook}
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-xs hover:shadow-md hover:scale-110 transition-all duration-200"
                style={{ color: '#572A8D' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={school.socialLinks.instagram}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-xs hover:shadow-md hover:scale-110 transition-all duration-200"
                style={{ color: '#FF3F68' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#FF3F68] transition-colors"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    <ArrowRight size={12} className="opacity-40" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-4 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.id}>
                  <Link
                    href="/programs"
                    className="group inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#07194F] transition-colors"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    <span className="w-2 h-2 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: p.color }} />
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/80 font-medium text-gray-600">
                      {p.ageRange}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-4 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-700" style={{ fontFamily: 'var(--font-nunito)' }}>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/80 text-[#FF3F68]">
                  <MapPin size={15} />
                </div>
                <span className="pt-0.5 leading-snug">{school.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/80 text-[#08BFC1]">
                  <Phone size={15} />
                </div>
                <a href={`tel:${school.phone}`} className="hover:text-[#FF3F68] hover:underline transition-colors">
                  {school.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/80 text-[#A75CE2]">
                  <Mail size={15} />
                </div>
                <a href={`mailto:${school.email}`} className="hover:text-[#FF3F68] hover:underline transition-colors">
                  {school.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/80 text-[#FFBA08]">
                  <Clock size={15} />
                </div>
                <span className="pt-0.5 leading-snug">{school.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#07194F]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-nunito)' }}>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5" style={{ fontFamily: 'var(--font-nunito)' }}>
            Nurturing little minds with <span className="text-[#FF3F68]">♥</span> and joyful learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
