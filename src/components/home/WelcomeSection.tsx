'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PinkMascot from '@/components/animations/PinkMascot';
import { Butterfly } from '@/components/animations/FlyingButterflies';
import { CuteBird } from '@/components/animations/FlyingBirds';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartHandshake, Shield, Sparkles, Heart } from 'lucide-react';

const keyPoints = [
  { text: 'Play-Based Curriculum', icon: Sparkles, color: '#FF3F68', bg: '#FFF0F3' },
  { text: 'Safe & Nurturing Campus', icon: Shield, color: '#08BFC1', bg: '#F0FAFA' },
  { text: 'Loving Early Educators', icon: HeartHandshake, color: '#FFBA08', bg: '#FFFBEC' },
  { text: 'Holistic Child Growth', icon: CheckCircle2, color: '#A75CE2', bg: '#F7F0FD' },
];

export default function WelcomeSection() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-white select-none">
      {/* Organic blob shape in background */}
      <div
        className="absolute -left-28 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ backgroundColor: '#DDF3F1', opacity: 0.45, filter: 'blur(70px)' }}
        aria-hidden="true"
      />

      {/* Floating Little Hearts */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-[12%] text-[#FF3F68] pointer-events-none"
      >
        <Heart size={20} fill="#FF3F68" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-[6%] text-[#08BFC1] pointer-events-none"
      >
        <Heart size={16} fill="#08BFC1" />
      </motion.div>

      {/* Gentle Floating Bird near Section Title */}
      <div className="absolute top-12 right-8 hidden lg:block pointer-events-auto">
        <CuteBird bodyColor="#FFBA08" wingColor="#FF3F68" size={36} duration={14} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 3D Playground & Schoolhouse Illustration Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative group">
                {/* Cheerful Pink Mascot Peeking from top left */}
                <div className="absolute -top-10 -left-2 sm:-left-6 z-20 pointer-events-auto">
                  <PinkMascot size={64} />
                </div>

                {/* Fluttering Teal Butterfly */}
                <div className="absolute -top-4 right-8 z-30 pointer-events-auto">
                  <Butterfly color="#08BFC1" size={24} duration={8} />
                </div>

                {/* 3D Preschool Playground & Building Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gradient-to-b from-[#F0FAFA] to-white transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/preschool-playground-3d.png"
                    alt="InnoTots Preschool 3D Cartoon Playground and Building with Slide, Swings, Giraffe and Bunny"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover select-none pointer-events-none"
                  />
                  {/* Subtle Shimmer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating sticker badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 right-1 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-[#FF3F68]/15 flex items-center gap-3 z-10"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-[#FFF0F3]">
                    🎈
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      Every Day is Fun!
                    </div>
                    <div className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
                      Hands-on exploration
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Content (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <SectionHeading
                badge="Who We Are"
                badgeColor="#08BFC1"
                badgeBg="#F0FAFA"
                title="Welcome to InnoTots Preschool"
                subtitle="A warm, joyful sanctuary where early childhood is celebrated and every little mind is empowered to thrive."
              />

              <p className="text-base text-gray-700 leading-relaxed mb-5" style={{ fontFamily: 'var(--font-nunito)' }}>
                At InnoTots Preschool, we believe that the early years are the most transformative chapter of a child&apos;s life. Our thoughtfully designed spaces encourage children to explore, imagine and grow at their own pace while feeling completely safe, loved and supported.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-nunito)' }}>
                Through guided play, creative expression, music and social activities, we help children build genuine confidence, emotional resilience and an enduring love for learning.
              </p>

              {/* Key Highlights Grid with Hover Lift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {keyPoints.map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-gray-100 shadow-2xs bg-white hover:border-[#FF3F68]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg, color: item.color }}>
                      <item.icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-[#07194F]" style={{ fontFamily: 'var(--font-nunito)' }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: '#572A8D', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
