'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
  {
    id: 1,
    question: 'What is the admission procedure?',
    answer: 'The admission process at InnoTots Preschool is simple and welcoming. You can start by filling out our online enquiry form or calling us directly. Our team will guide you through the next steps, including a school visit and registration.',
  },
  {
    id: 2,
    question: 'What are the school timings?',
    answer: 'InnoTots Preschool operates Monday through Saturday from 8:00 AM to 1:00 PM. Please contact us directly for the most up-to-date timing information as schedules may vary by program.',
  },
  {
    id: 3,
    question: 'What age groups do you admit?',
    answer: 'We welcome children from 1.5 to 5.5 years across four programs: Playgroup (1.5–2.5 yrs), Nursery (2.5–3.5 yrs), LKG (3.5–4.5 yrs) and UKG (4.5–5.5 yrs).',
  },
  {
    id: 4,
    question: 'What activities are included in the programs?',
    answer: 'Our programs include a rich variety of activities such as Art & Craft, Music & Movement, Storytelling, Outdoor Play, Science Exploration, Math Games, Dance & Drama and Show & Tell. Each activity is designed to support holistic development.',
  },
  {
    id: 5,
    question: 'How can I schedule a school visit?',
    answer: 'You can schedule a school visit by calling us or by filling in the enquiry form on this page. Our team will arrange a convenient time for you and your child to explore the InnoTots environment.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions from families."
          center
        />

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl overflow-hidden border transition-all duration-200"
              style={{ borderColor: openId === faq.id ? '#FF3F68' : '#eee' }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span
                  className="font-semibold text-sm md:text-base pr-4"
                  style={{ fontFamily: 'var(--font-nunito)', color: '#07194F' }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} style={{ color: '#FF3F68' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
