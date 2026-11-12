import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { school } from '@/data/school';

export default function ContactDetails() {
  return (
    <div className="rounded-2xl p-6 md:p-8 h-full" style={{ backgroundColor: '#DDF3F1' }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
        Contact Information
      </h2>

      <div className="space-y-5">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF3F6820' }}>
            <MapPin size={20} style={{ color: '#FF3F68' }} />
          </div>
          <div>
            <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}>Address</p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>{school.address}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#08BFC120' }}>
            <Phone size={20} style={{ color: '#08BFC1' }} />
          </div>
          <div>
            <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}>Phone</p>
            <a href={`tel:${school.phone}`} className="text-sm hover:underline" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>{school.phone}</a>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#A75CE220' }}>
            <Mail size={20} style={{ color: '#A75CE2' }} />
          </div>
          <div>
            <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}>Email</p>
            <a href={`mailto:${school.email}`} className="text-sm hover:underline" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>{school.email}</a>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFBA0820' }}>
            <Clock size={20} style={{ color: '#FFBA08' }} />
          </div>
          <div>
            <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}>School Hours</p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>{school.workingHours}</p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="mt-8">
        <p className="font-semibold text-sm mb-3" style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}>Follow Us</p>
        <div className="flex gap-3">
          <a
            href={school.socialLinks.facebook}
            aria-label="Facebook"
            className="p-3 rounded-xl transition-colors duration-200"
            style={{ backgroundColor: '#fff', color: '#572A8D' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href={school.socialLinks.instagram}
            aria-label="Instagram"
            className="p-3 rounded-xl transition-colors duration-200"
            style={{ backgroundColor: '#fff', color: '#FF3F68' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
