'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';
import DriftingCloudsLayer from '@/components/animations/DriftingCloudsLayer';
import {
  SmilingSunshine,
  AboutBluebird,
  AboutButterfly,
  InteractiveElephant,
  InteractiveLion,
  FourChildrenOverCloud,
  SwayingFlowers,
} from '@/components/animations/AboutHeroCharacters';

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 select-none"
      style={{
        background: 'linear-gradient(180deg, #EBF8F7 0%, #E0F4F2 55%, #F4FAF9 85%, #FFFFFF 100%)',
      }}
    >
      {/* Background Drifting Clouds */}
      <DriftingCloudsLayer />

      {/* Decorative Twinkling Stars */}
      <TwinklingStar size={24} color="#FFBA08" delay={0.2} duration={3} className="absolute top-10 left-[18%] pointer-events-none" />
      <TwinklingStar size={20} color="#FF3F68" delay={1.4} duration={3.4} className="absolute top-28 left-[8%] pointer-events-none" />
      <TwinklingStar size={26} color="#A75CE2" delay={0.8} duration={3.8} className="absolute top-12 right-[18%] pointer-events-none" />
      <TwinklingStar size={18} color="#08BFC1" delay={2.1} duration={4.2} className="absolute top-32 right-[10%] pointer-events-none" />

      {/* Floating Background Shapes */}
      <FloatingShape shape="circle" color="#FF3F68" size={60} delay={0} className="absolute top-8 left-4 pointer-events-none" opacity={0.12} />
      <FloatingShape shape="star" color="#FFBA08" size={42} delay={1} className="absolute top-20 right-8 pointer-events-none" opacity={0.18} />

      {/* Top Left: Cute Bluebird with curved flight loop trail */}
      <div className="absolute top-8 sm:top-12 left-4 sm:left-12 lg:left-24 z-20 pointer-events-auto">
        <AboutBluebird size={46} />
      </div>

      {/* Top Right: Smiling Sunshine and Fluttering Butterfly */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-16 lg:right-28 z-20 pointer-events-auto flex items-center gap-2 sm:gap-4">
        <AboutButterfly size={38} />
        <SmilingSunshine size={64} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Center: 4 Adorable Children Peeking over Fluffy Cloud with Rainbow */}
        <div className="flex justify-center mb-1 sm:mb-2 pointer-events-auto">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <FourChildrenOverCloud />
          </div>
        </div>

        {/* Center: Breadcrumb, Main Heading & Subtitle (Clear, readable, unblocked) */}
        <div className="max-w-3xl mx-auto text-center px-4 relative z-20">
          {/* Breadcrumb Navigation Pill */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 bg-white/90 shadow-2xs text-gray-600 border border-gray-100"
            aria-label="Breadcrumb"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#FF3F68] font-bold">About Us</span>
          </motion.nav>

          {/* Heading with Yellow Doodle Rays */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-3"
          >
            {/* Left Doodle Rays */}
            <div className="hidden sm:block text-[#FFBA08]">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <line x1="20" y1="10" x2="4" y2="4" stroke="#FFBA08" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="12" x2="6" y2="16" stroke="#FFBA08" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#07194F] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              About InnoTots Preschool
            </h1>

            {/* Right Doodle Rays */}
            <div className="hidden sm:block text-[#FFBA08]">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <line x1="4" y1="10" x2="20" y2="4" stroke="#FFBA08" strokeWidth="3" strokeLinecap="round" />
                <line x1="4" y1="12" x2="18" y2="16" stroke="#FFBA08" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Discover our story, our values and our commitment to nurturing every little learner with love, curiosity and joyful wonder.
          </motion.p>
        </div>

        {/* Lower Flanking Characters & Grassy Meadow Line */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative z-20">
          {/* Left: Baby Elephant on Grassy Hill with Books (4 cols) */}
          <div className="md:col-span-4 flex justify-center md:justify-start pointer-events-auto">
            <InteractiveElephant />
          </div>

          {/* Center: Swaying Flowers in the Meadow (4 cols) */}
          <div className="md:col-span-4 flex justify-center pb-2 sm:pb-4 pointer-events-none">
            <SwayingFlowers />
          </div>

          {/* Right: Baby Lion on Grassy Hill with Books (4 cols) */}
          <div className="md:col-span-4 flex justify-center md:justify-end pointer-events-auto">
            <InteractiveLion />
          </div>
        </div>
      </div>

      {/* Smooth Wave Divider Leading into Our Story */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 md:h-14 block">
          <path d="M0,25 C360,50 720,0 1080,25 C1260,38 1380,18 1440,25 L1440,50 L0,50 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
