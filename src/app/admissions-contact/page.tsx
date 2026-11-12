import type { Metadata } from 'next';
import AdmissionsHero from '@/components/admissions/AdmissionsHero';
import AdmissionProcess from '@/components/admissions/AdmissionProcess';
import EnquiryForm from '@/components/admissions/EnquiryForm';
import ContactDetails from '@/components/admissions/ContactDetails';
import FAQAccordion from '@/components/admissions/FAQAccordion';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';

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
      <WaveDivider color="#DDF3F1" />

      {/* Form + Contact */}
      <section className="py-16" style={{ backgroundColor: '#DDF3F1' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <EnquiryForm />
            </div>
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-10" style={{ backgroundColor: '#DDF3F1' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{ height: 300, backgroundColor: '#c8ebe9', border: '2px dashed #08BFC1' }}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-base font-semibold" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                Embed Google Maps here
              </p>
              <p className="text-sm mt-1" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                Replace this placeholder with an actual Google Maps embed
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />
      <FAQAccordion />
      <WaveDivider color="#572A8D" />
      <AdmissionCTA />
    </>
  );
}
