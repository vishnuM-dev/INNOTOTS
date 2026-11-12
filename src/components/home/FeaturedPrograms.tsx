'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { programs } from '@/data/programs';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function FeaturedPrograms() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Age-Tailored Learning"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Our Programs"
            subtitle="Thoughtfully structured, age-appropriate programs crafted to give every child a joyful head start."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.08}>
              <AnimatedCard className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#FF3F68]/20 group">
                {/* Header Image with Card-Specific Playful Micro-Animation */}
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    label={program.name}
                    category="Curriculum"
                    color={program.color + '18'}
                    height={190}
                    rounded={false}
                  />

                  {/* Card-specific themed floating badge */}
                  {program.id === 'playgroup' && (
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#FF3F68] flex items-center gap-1.5"
                    >
                      <span>🧸</span>
                      <span>Toy Play</span>
                    </motion.div>
                  )}

                  {program.id === 'nursery' && (
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [4, -4, 4] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#FFBA08] flex items-center gap-1.5"
                    >
                      <span>🖍️</span>
                      <span>Art & Colors</span>
                    </motion.div>
                  )}

                  {program.id === 'lkg' && (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#08BFC1] flex items-center gap-1.5"
                    >
                      <span>🔤</span>
                      <span>ABC Phonics</span>
                    </motion.div>
                  )}

                  {program.id === 'ukg' && (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#A75CE2] flex items-center gap-1.5"
                    >
                      <span>🔢</span>
                      <span>123 Logic</span>
                    </motion.div>
                  )}

                  <div className="absolute top-3.5 right-3.5">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs"
                      style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
                    >
                      {program.ageRange}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    <h3 className="text-2xl font-semibold text-[#07194F] group-hover:text-[#FF3F68] transition-colors" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {program.name}
                    </h3>
                    <p className="text-xs font-bold tracking-wide mt-1" style={{ color: program.color, fontFamily: 'var(--font-nunito)' }}>
                      {program.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 mb-5 flex-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {program.description}
                  </p>

                  {/* Program Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {program.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs font-medium text-gray-700" style={{ fontFamily: 'var(--font-nunito)' }}>
                        <CheckCircle2 size={14} style={{ color: program.color }} className="flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button pinned to bottom */}
                  <Link
                    href="/programs"
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-white text-sm font-bold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                    style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
                  >
                    <span>View Curriculum</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
