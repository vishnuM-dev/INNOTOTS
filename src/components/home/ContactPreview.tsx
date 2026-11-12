import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { school } from '@/data/school';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const contactCards = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: school.address,
    href: school.mapLink !== '#' ? school.mapLink : '/admissions-contact',
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: school.phone,
    href: `tel:${school.phone}`,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: school.email,
    href: `mailto:${school.email}`,
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
  {
    icon: Clock,
    label: 'School Hours',
    value: school.workingHours,
    href: undefined,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
];

export default function ContactPreview() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Reach Out"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Get In Touch"
            subtitle="We'd love to hear from you. Have a question or want to visit our campus? We're here to help."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className="rounded-3xl p-6 sm:p-7 text-center h-full flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 bg-white"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-2xs"
                  style={{ backgroundColor: card.bg, color: card.color }}
                >
                  <card.icon size={26} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    className="font-semibold text-lg text-[#07194F] mb-2"
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                  >
                    {card.label}
                  </h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm text-gray-600 hover:text-[#FF3F68] hover:underline transition-colors leading-relaxed"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
