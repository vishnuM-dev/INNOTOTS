'use client';

import { motion } from 'motion/react';
import { Heart, Palette, Compass, Star, Users, Smile } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const values = [
  {
    title: 'Kindness',
    description: 'We teach and model empathy and gentle kindness in every interaction, creating an emotionally safe culture of warmth.',
    color: '#FF3F68',
    bg: '#FFF0F3',
    icon: Heart,
    anim: { scale: [1, 1.22, 1] },
    transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    title: 'Creativity',
    description: 'We celebrate diverse imaginations and encourage children to experiment, paint, sing and express themselves freely.',
    color: '#A75CE2',
    bg: '#F7F0FD',
    icon: Palette,
    anim: { rotate: [-8, 8, -8] },
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    title: 'Curiosity',
    description: 'Questions are welcomed and wonder is cultivated as the vital engine that powers all lifelong learning.',
    color: '#FFBA08',
    bg: '#FFFBEC',
    icon: Compass,
    anim: { y: [0, -6, 0] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    title: 'Confidence',
    description: 'We foster courageous self-belief by recognizing every child\'s earnest attempts, strengths and personal milestones.',
    color: '#08BFC1',
    bg: '#F0FAFA',
    icon: Star,
    anim: { scale: [1, 1.18, 1], rotate: [0, 20, 0] },
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    title: 'Respect',
    description: 'We treat every child, parent and staff member with deep dignity, attentive listening and mutual respect.',
    color: '#07194F',
    bg: '#EEF0F8',
    icon: Users,
    anim: { x: [-3, 3, -3] },
    transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    title: 'Joyful Learning',
    description: 'Preschool should be the most fun chapter of a young child\'s life — at InnoTots, joyful memories come first.',
    color: '#572A8D',
    bg: '#F4EFF9',
    icon: Smile,
    anim: { rotate: [0, 12, -12, 0], scale: [1, 1.15, 1] },
    transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' as const },
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4FAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="What Guides Us"
            badgeColor="#FF3F68"
            badgeBg="#FFF0F3"
            title="Our Core Values"
            subtitle="The heartfelt principles that guide our educators, children and school community every single day."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <AnimatedCard
                className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#FF3F68]/20 group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs flex-shrink-0"
                      style={{ backgroundColor: value.bg, color: value.color }}
                    >
                      <motion.div animate={value.anim} transition={value.transition}>
                        <value.icon size={26} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#07194F] group-hover:text-[#FF3F68] transition-colors" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {value.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: value.color }} />
                  <span className="text-[11px] font-bold text-gray-400">Value 0{i + 1}</span>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
