'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import SectionHeading from '@/components/ui/SectionHeading';
import MascotPair from '@/components/animations/MascotPair';
import { Heart, Sparkles, Smile, Sun } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image & Mascots (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative group">
                {/* Cheerful Mascots Peeking from top */}
                <div className="absolute -top-12 left-0 sm:-left-4 z-20 pointer-events-auto">
                  <MascotPair size={58} badgeText="Welcome!" />
                </div>

                <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                  <ImagePlaceholder
                    label="InnoTots Nurturing Community"
                    category="Early Childhood"
                    color="#DDF3F1"
                    height={400}
                    className="shadow-sm border-4 border-white"
                  />
                </div>

                <div className="absolute -bottom-4 right-1 sm:right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-[#FF3F68]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#FF3F68] flex items-center justify-center">
                    <Heart size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      Every Child Matters
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
                      Personal care & guidance
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Intro Text (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <SectionHeading
                badge="Our Story"
                badgeColor="#FF3F68"
                badgeBg="#FFF0F3"
                title="Introduction to InnoTots"
                subtitle="A joyful preschool where every little mind is nurtured with love, creativity and the magic of play."
              />

              <p className="text-base text-gray-700 leading-relaxed mb-5" style={{ fontFamily: 'var(--font-nunito)' }}>
                InnoTots Preschool was established to provide young children with the happiest, safest and most enriching start in life. We believe deeply that the preschool years are not merely a preparation for primary school, but a precious phase of wonder, self-discovery and joyful innocence.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-nunito)' }}>
                Within our welcoming walls, certified early educators partner with families to create an atmosphere where children feel genuinely seen, heard and celebrated for who they are.
              </p>

              {/* Highlights row with hover lift */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F0FAFA] text-[#08BFC1]">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-nunito)' }}>Play-First Focus</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF0F3] text-[#FF3F68]">
                  <Smile size={16} />
                  <span className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-nunito)' }}>Joyful Memories</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04, y: -2 }} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFBEC] text-[#FFBA08] col-span-2 sm:col-span-1">
                  <Sun size={16} />
                  <span className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-nunito)' }}>Warm Sanctuary</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

