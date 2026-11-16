import type { Metadata } from 'next';
import AdmissionsHero from '@/components/admissions/AdmissionsHero';
import AdmissionProcess from '@/components/admissions/AdmissionProcess';
import EnquiryForm from '@/components/admissions/EnquiryForm';
import ContactDetails from '@/components/admissions/ContactDetails';
import FAQAccordion from '@/components/admissions/FAQAccordion';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { school } from '@/data/school';

export const metadata: Metadata = {
  title: 'Admissions & Contact | InnoTots Preschool',
  description: 'Begin your child\'s happy learning journey at InnoTots Preschool. Enquire about admissions, visit the school and get in touch with our friendly team.',
  openGraph: {
    title: 'Admissions & Contact | InnoTots Preschool',
    description: 'Enquire about admissions to InnoTots Preschool. We\'d love to welcome your child.',
  },
};

export default function AdmissionsContactPage() {
  return (
    <>
      <AdmissionsHero />
      <AdmissionProcess />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />

      {/* Form + Contact Section */}
      <section className="py-20 lg:py-24 bg-[#F4FAF9] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Form and Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>
          </div>

          {/* Campus Location & Directions Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100 overflow-hidden relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F0FAFA] text-[#08BFC1] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <MapPin size={26} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#07194F] mb-1" style={{ fontFamily: 'var(--font-fredoka)' }}>
                    Campus Location & Directions
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xl leading-relaxed" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Conveniently located with dedicated visitor parking and child-safe pedestrian gates. Drop by during school hours for a guided walk.
                  </p>
                </div>
              </div>

              <a
                href={school.mapLink !== '#' ? school.mapLink : `https://maps.google.com/?q=${encodeURIComponent(school.name + ' ' + school.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex-shrink-0 text-center"
                style={{ backgroundColor: '#08BFC1', fontFamily: 'var(--font-nunito)' }}
              >
                <Navigation size={16} />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />
      <FAQAccordion />
      <WaveDivider color="#572A8D" bgColor="#ffffff" />
      <AdmissionCTA />
      <WaveDivider color="#DDF3F1" bgColor="#572A8D" />
    </>
  );
}
