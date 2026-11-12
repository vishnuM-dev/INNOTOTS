import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink } from 'lucide-react';
import { school } from '@/data/school';

export default function ContactDetails() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-100 h-full flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#08BFC1] bg-[#F0FAFA] px-3 py-1 rounded-full inline-block mb-2" style={{ fontFamily: 'var(--font-nunito)' }}>
            Direct Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
            School Office
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1" style={{ fontFamily: 'var(--font-nunito)' }}>
            We warmly welcome parents to visit and experience our nurturing space.
          </p>
        </div>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#FFF0F3] text-[#FF3F68] shadow-2xs">
              <MapPin size={22} />
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                Campus Address
              </p>
              <p className="text-sm font-semibold text-[#07194F] leading-snug" style={{ fontFamily: 'var(--font-nunito)' }}>
                {school.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#F0FAFA] text-[#08BFC1] shadow-2xs">
              <Phone size={22} />
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                Direct Phone
              </p>
              <a
                href={`tel:${school.phone}`}
                className="text-sm font-semibold text-[#07194F] hover:text-[#FF3F68] hover:underline transition-colors"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {school.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#F7F0FD] text-[#A75CE2] shadow-2xs">
              <Mail size={22} />
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                Admissions Email
              </p>
              <a
                href={`mailto:${school.email}`}
                className="text-sm font-semibold text-[#07194F] hover:text-[#FF3F68] hover:underline transition-colors"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {school.email}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#FFFBEC] text-[#FFBA08] shadow-2xs">
              <Clock size={22} />
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                Office Timings
              </p>
              <p className="text-sm font-semibold text-[#07194F] leading-snug" style={{ fontFamily: 'var(--font-nunito)' }}>
                {school.workingHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Reassurance */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: 'var(--font-nunito)' }}>
          Follow InnoTots
        </p>
        <div className="flex items-center gap-3">
          <a
            href={school.socialLinks.facebook}
            aria-label="Facebook"
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gray-50 text-[#572A8D] hover:bg-[#F4EFF9] hover:scale-105 transition-all shadow-2xs"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href={school.socialLinks.instagram}
            aria-label="Instagram"
            className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gray-50 text-[#FF3F68] hover:bg-[#FFF0F3] hover:scale-105 transition-all shadow-2xs"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
