'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import MascotPair from '@/components/animations/MascotPair';
import { Butterfly } from '@/components/animations/FlyingButterflies';
import { CuteBird } from '@/components/animations/FlyingBirds';
import { Heart, Sparkles, Smile, Sun, BookOpen, School } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden select-none">
      {/* Decorative Bird in the sky */}
      <div className="absolute top-10 right-8 hidden lg:block pointer-events-auto">
        <CuteBird bodyColor="#08BFC1" wingColor="#FFBA08" size={34} duration={13} />
      </div>

      {/* Fluffy background glow */}
      <div
        className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-[#DDF3F1]/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Storybook Ribbon / Badge with Mascot Pair (matching reference mockup) */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 relative">
          <div className="flex items-center gap-3">
            {/* Mascot Duo on left with floating heart */}
            <div className="pointer-events-auto">
              <MascotPair size={48} showHearts />
            </div>

            {/* "OUR STORY" Badge with Yellow Doodle Rays */}
            <div className="flex items-center gap-2">
              <span className="text-[#FFBA08] font-bold text-lg select-none">‹‹</span>
              <div
                className="px-6 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-2xs border border-[#FF3F68]/20 bg-[#FFF0F3] text-[#FF3F68] tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                Our Story
              </div>
              <span className="text-[#FFBA08] font-bold text-lg select-none">››</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Illustrated Storybook Layout (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative group">
                {/* Floating Coral Butterfly */}
                <div className="absolute -top-6 right-6 z-30 pointer-events-auto">
                  <Butterfly color="#FF3F68" size={26} duration={9} />
                </div>

                {/* Storybook Page Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-b from-[#F0FAFA] via-[#E8F8F6] to-white group-hover:scale-[1.01] transition-transform duration-500"
                >
                  {/* 3D Children Reading in Cozy Corner Illustration */}
                  <Image
                    src="/images/about-community-3d.png"
                    alt="InnoTots Nurturing Community - Teacher and Happy Preschool Children Reading Together"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover select-none pointer-events-none"
                    priority
                  />

                  {/* Storybook Spine / Page Corner Fold Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/80 via-white/20 to-transparent pointer-events-none" />

                  {/* Cartoon Schoolhouse Floating Badge on Top Left */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-sm border border-[#08BFC1]/20 flex items-center gap-1.5 z-20"
                  >
                    <School size={16} className="text-[#08BFC1]" />
                    <span className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      InnoTots School
                    </span>
                  </motion.div>
                </motion.div>

                {/* Floating "Every Child Matters" Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-5 right-2 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-[#FF3F68]/15 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#FF3F68] flex items-center justify-center flex-shrink-0">
                    <Heart size={20} fill="#FF3F68" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      Every Child Matters
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
                      Personal care & guidance
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Intro Text (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <SectionHeading
                badge="Who We Are"
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
