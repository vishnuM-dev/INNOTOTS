'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Eye, Target, Compass, Sparkles, Star, Telescope, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCard from '@/components/animations/AnimatedCard';

export default function VisionMission() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4FAF9] relative select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Purpose & Direction"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Our Vision & Mission"
            subtitle="Guiding every interaction, lesson and moment of care at InnoTots Preschool."
            center
          />
        </ScrollReveal>

        {/* 3D Storybook Showcase Banner: Children Exploring with Telescope */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 mb-12 max-w-2xl mx-auto relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-gradient-to-b from-[#F0FAFA] to-white group-hover:scale-[1.01] transition-transform duration-500">
              <Image
                src="/images/about-vision-mission-3d.png"
                alt="Two preschool children looking through a brass telescope toward bright stars and rainbow"
                width={700}
                height={350}
                className="w-full h-48 sm:h-64 object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Playful Floating Badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-xs font-bold text-[#08BFC1] flex items-center gap-1.5 z-10"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                <Telescope size={15} />
                <span>Reaching for the Stars</span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <ScrollReveal delay={0.15}>
            <AnimatedCard
              className="rounded-3xl p-6 sm:p-10 h-full flex flex-col justify-between border-2 border-[#08BFC1]/20 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-white"
              style={{ background: 'linear-gradient(135deg, #F0FAFA 0%, #E6F7F5 100%)' }}
            >
              {/* Subtle Glowing Growing Star in Background */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 -bottom-6 text-[#08BFC1] pointer-events-none"
              >
                <Star size={140} fill="#08BFC1" />
              </motion.div>

              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-xs text-[#08BFC1]">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Eye size={28} />
                  </motion.div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'var(--font-nunito)' }}>
                  To nurture confident, curious and compassionate young learners who explore the world with joyful wonder, critical curiosity and an unquenchable enthusiasm for lifelong learning.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#08BFC1]/20 flex items-center gap-2 text-xs font-bold text-[#08BFC1]" style={{ fontFamily: 'var(--font-nunito)' }}>
                <Compass size={16} />
                <span className="uppercase tracking-wider">Inspiring Lifelong Explorers</span>
              </div>
            </AnimatedCard>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal delay={0.25}>
            <AnimatedCard
              className="rounded-3xl p-6 sm:p-10 h-full flex flex-col justify-between border-2 border-[#FF3F68]/20 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-white"
              style={{ background: 'linear-gradient(135deg, #FFF0F3 0%, #FFE5EB 100%)' }}
            >
              {/* Subtle Gentle Open Star in Background */}
              <motion.div
                animate={{ rotate: [-2, 2, -2], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 -bottom-6 text-[#FF3F68] pointer-events-none"
              >
                <Heart size={140} fill="#FF3F68" />
              </motion.div>

              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-xs text-[#FF3F68]">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Target size={28} />
                  </motion.div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'var(--font-nunito)' }}>
                  To provide a deeply loving, secure and stimulating preschool environment where every child thrives through intentional play, creative self-expression and loving guidance — laying the strongest possible foundation for life.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FF3F68]/20 flex items-center gap-2 text-xs font-bold text-[#FF3F68]" style={{ fontFamily: 'var(--font-nunito)' }}>
                <Sparkles size={16} />
                <span className="uppercase tracking-wider">Empowering Every Little Step</span>
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
