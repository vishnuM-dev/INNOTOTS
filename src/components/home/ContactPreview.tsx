import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { school } from '@/data/school';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const contactCards = [
  { icon: MapPin, label: 'Visit Us', value: school.address, color: '#FF3F68', bg: '#FFF0F3' },
  { icon: Phone, label: 'Call Us', value: school.phone, color: '#08BFC1', bg: '#F0FAFA' },
  { icon: Mail, label: 'Email Us', value: school.email, color: '#A75CE2', bg: '#F7F0FD' },
  { icon: Clock, label: 'School Hours', value: school.workingHours, color: '#FFBA08', bg: '#FFFBEC' },
];

export default function ContactPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="We'd love to hear from you. Reach out and let's start your child's journey together."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {contactCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: card.bg, border: `1px solid ${card.color}20` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: card.color + '20' }}
                >
                  <card.icon size={24} style={{ color: card.color }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F', fontSize: '1.1rem' }}>
                  {card.label}
                </h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                  {card.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
