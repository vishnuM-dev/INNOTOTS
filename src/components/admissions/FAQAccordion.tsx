'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const faqs = [
  {
    id: 1,
    question: 'Which programs are available at InnoTots?',
    answer: 'We offer four age-appropriate learning programs: Playgroup (typically 1.5–2.5 years), Nursery (typically 2.5–3.5 years), Lower Kindergarten / LKG (typically 3.5–4.5 years), and Upper Kindergarten / UKG (typically 4.5–5.5 years). Each program is carefully tailored to support every child\'s stage of early development.',
  },
  {
    id: 2,
    question: 'How can parents enquire about admissions?',
    answer: 'Parents can easily enquire by completing our online Enquiry Form on this page or by calling our school office directly. Our admissions coordinator will get in touch with you to answer questions and walk you through the proposed admission steps.',
  },
  {
    id: 3,
    question: 'Can parents visit the school campus?',
    answer: 'Yes, we warmly welcome parents to visit our school, explore our bright classrooms, and experience the InnoTots environment firsthand. You can schedule a visit by calling our front desk or noting your preferred date in your enquiry.',
  },
  {
    id: 4,
    question: 'How can parents contact the school?',
    answer: 'You can contact InnoTots Preschool by phone, email, or in person during office hours (Monday through Saturday, 8:00 AM to 1:00 PM). Complete contact numbers, email address and Google Maps directions are available on this page.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Common Inquiries"
            badgeColor="#FF3F68"
            badgeBg="#FFF0F3"
            title="Frequently Asked Questions"
            subtitle="Clear answers to common questions prospective families ask about InnoTots Preschool."
            center
          />
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-[#FF3F68]/30 bg-[#FFF0F3]/20 shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base sm:text-lg text-[#07194F]"
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#FF3F68] text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-gray-700 border-t border-gray-100/60 pt-3" style={{ fontFamily: 'var(--font-nunito)' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
