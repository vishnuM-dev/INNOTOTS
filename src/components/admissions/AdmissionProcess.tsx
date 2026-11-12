'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { Compass, MessageSquareText, PhoneCall, CheckCircle2, Info } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Explore Our Programs',
    icon: Compass,
    description: 'Learn about our Playgroup, Nursery, LKG and UKG offerings to choose the best developmental fit for your child.',
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    number: '02',
    title: 'Submit an Enquiry',
    icon: MessageSquareText,
    description: 'Fill out our online form or give us a quick call with your child\'s details and any specific questions you have.',
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
  {
    number: '03',
    title: 'Connect With Our Team',
    icon: PhoneCall,
    description: 'Our friendly admissions coordinator will connect with you to discuss the curriculum and arrange an optional campus walkthrough.',
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    number: '04',
    title: 'Complete Formalities',
    icon: CheckCircle2,
    description: 'Complete registration and receive your welcome kit. Your little one officially joins the loving InnoTots family!',
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Proposed Process"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Admission Process"
            subtitle="Four straightforward steps to embark on your child's joyful preschool journey."
            center
          />
        </ScrollReveal>

        <div className="mt-2 mb-10 max-w-xl mx-auto p-3.5 rounded-2xl bg-[#F0FAFA] border border-[#08BFC1]/20 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#08BFC1] font-semibold text-center" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Info size={16} className="flex-shrink-0" />
          <span>Note: Proposed admission process; specific steps may vary upon school confirmation.</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 relative">
          {/* Animated Connecting Track between Step Centers */}
          <div className="hidden md:block absolute top-10 left-16 right-16 h-1.5 rounded-full pointer-events-none overflow-visible" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-full rounded-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #FF3F68 0%, #FFBA08 35%, #08BFC1 70%, #A75CE2 100%)',
              }}
            />

            {/* Little School Bus Driving Across Once */}
            <motion.div
              initial={{ left: '0%', opacity: 0 }}
              whileInView={{ left: '92%', opacity: [0, 1, 1, 0.8] }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, delay: 0.4, ease: 'easeInOut' }}
              className="absolute -top-4 -translate-y-1/2 text-lg select-none"
            >
              🚌
            </motion.div>
          </div>

          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center relative z-10 group h-full">
                {/* Number/Icon badge */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 text-white"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={26} className="mb-0.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-90" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Step {step.number}
                  </span>
                </motion.div>

                <h3
                  className="text-lg font-semibold mb-2 text-[#07194F] group-hover:text-[#FF3F68] transition-colors"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed text-gray-600"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
