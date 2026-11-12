import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { school } from '@/data/school';
import { navLinks } from '@/data/navigation';
import { programs } from '@/data/programs';
import FloatingShape from '@/components/animations/FloatingShape';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-6"
      style={{ backgroundColor: '#DDF3F1' }}
    >
      {/* Decorative floating shapes */}
      <FloatingShape shape="circle" color="#08BFC1" size={60} delay={0} className="absolute top-8 left-8 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="star" color="#FF3F68" size={40} delay={1} className="absolute top-16 right-16 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#A75CE2" size={40} delay={2} className="absolute bottom-20 left-1/4 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="triangle" color="#FFBA08" size={35} delay={0.5} className="absolute bottom-24 right-1/4 pointer-events-none" opacity={0.2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & intro */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="InnoTots Preschool">
              <img
                src="/logo/innotots-logo.svg"
                alt="InnoTots Preschool"
                width={160}
                height={50}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#444', fontFamily: 'var(--font-nunito)' }}>
              A joyful preschool where every little mind is nurtured with love, creativity and the magic of play-based learning.
            </p>
            <div className="flex gap-3">
              <a
                href={school.socialLinks.facebook}
                aria-label="Facebook"
                className="p-2 rounded-full transition-colors duration-200"
                style={{ backgroundColor: '#fff', color: '#572A8D' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={school.socialLinks.instagram}
                aria-label="Instagram"
                className="p-2 rounded-full transition-colors duration-200"
                style={{ backgroundColor: '#fff', color: '#FF3F68' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: '#07194F', fontFamily: 'var(--font-fredoka)' }}>Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-coral-pink transition-colors"
                    style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: '#07194F', fontFamily: 'var(--font-fredoka)' }}>Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p.id}>
                  <Link
                    href="/programs"
                    className="text-sm transition-colors"
                    style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}
                  >
                    {p.name} <span className="text-xs" style={{ color: p.color }}>({p.ageRange})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: '#07194F', fontFamily: 'var(--font-fredoka)' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#FF3F68' }} />
                <span className="text-sm" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>{school.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" style={{ color: '#08BFC1' }} />
                <span className="text-sm" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>{school.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#A75CE2' }} />
                <span className="text-sm" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>{school.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#FFBA08' }} />
                <span className="text-sm" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>{school.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(7,25,79,0.1)' }}>
          <p className="text-sm" style={{ color: '#666', fontFamily: 'var(--font-nunito)' }}>
            © {new Date().getFullYear()} {school.name}. All rights reserved. Made with{' '}
            <span style={{ color: '#FF3F68' }}>♥</span> for little learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
