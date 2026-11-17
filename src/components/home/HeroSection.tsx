'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import FloatingShape from '@/components/animations/FloatingShape';
import FloatingBalloonsGroup from '@/components/animations/FloatingBalloonsGroup';
import FlyingButterflies from '@/components/animations/FlyingButterflies';
import FlyingBirds from '@/components/animations/FlyingBirds';
import DriftingCloudsLayer from '@/components/animations/DriftingCloudsLayer';
import MascotPair from '@/components/animations/MascotPair';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 select-none"
      style={{
        background: 'linear-gradient(180deg, #F0FAFA 0%, #E3F6F4 70%, #FFFFFF 100%)',
      }}
    >
      {/* Background Drifting Clouds */}
      <DriftingCloudsLayer />

      {/* Background Flying Birds */}
      <FlyingBirds />

      {/* Background Fluttering Butterflies */}
      <FlyingButterflies />

      {/* Floating playful shapes matching original InnoTots palette */}
      <FloatingShape shape="circle" color="#FF3F68" size={60} delay={0} duration={5} className="absolute top-14 left-6 sm:left-12 pointer-events-none" opacity={0.14} />
      <FloatingShape shape="star" color="#FFBA08" size={42} delay={1.5} duration={5.5} className="absolute top-24 left-1/3 pointer-events-none" opacity={0.22} />
      <FloatingShape shape="circle" color="#A75CE2" size={46} delay={0.8} duration={5.2} className="absolute top-32 right-20 sm:right-28 pointer-events-none" opacity={0.14} />
      <FloatingShape shape="triangle" color="#08BFC1" size={38} delay={2} duration={5.8} className="absolute bottom-28 left-8 pointer-events-none" opacity={0.18} />
      <FloatingShape shape="star" color="#FF3F68" size={32} delay={3} duration={6.2} className="absolute bottom-16 right-16 pointer-events-none" opacity={0.22} />

      {/* Floating Coral Balloon on Left Margin (from Mockup) */}
      <div className="absolute top-24 sm:top-28 left-3 sm:left-8 z-20 pointer-events-auto hidden sm:block">
        <FloatingBalloonsGroup variant="hero-left" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Text content (6 cols on lg) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs mb-5 sm:mb-6 border border-[#FF3F68]/20 bg-white"
              style={{ color: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
            >
              <Sparkles size={16} className="text-[#FFBA08] animate-spin-slow" />
              <span>Welcome to InnoTots Preschool</span>
            </motion.div>

            {/* Staggered Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight mb-5 sm:mb-6 text-[#07194F]"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              <span>Little Minds, </span>
              <span className="relative inline-block text-[#FF3F68]">
                Big Dreams!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFBA08] opacity-80" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Where every little step leads to a world of discovery, creativity, happiness and learning. Giving your child the perfect foundation for life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10"
            >
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group"
                style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Explore Our Programs</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/admissions-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: '#08BFC1', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Enquire for Admission</span>
              </Link>
            </motion.div>

            {/* Stats row with playful hover bounce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-2 border-t border-[#07194F]/10"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#08BFC1]/20 cursor-default"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#FF3F68]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  4
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Programs
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">1.5 - 5.5 Years</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#FFBA08]/30 cursor-default"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#FFBA08]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  8+
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Activities
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Art & Music</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#A75CE2]/20 cursor-default"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#572A8D]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  100%
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Play-Based
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Safe & Caring</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D Storybook Scene with Interactive Cartoon Character Overlays (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center items-center relative"
          >
            {/* Clean Storybook Scene Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Main 3D Cartoon Storybook Scene Card */}
              <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-white group">
                <Image
                  src="/images/innotots-hero-clean-scene.png"
                  alt="InnoTots Preschool 3D Cartoon Scene with Happy Children, Schoolhouse and Animals"
                  width={882}
                  height={734}
                  className="w-full h-auto object-contain select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]"
                  priority
                />
              </div>

              {/* Floating Interactive Mascot Pair ("Say Hello!") - Single mascot at Bottom Right */}
              <div className="absolute -bottom-4 sm:-bottom-5 right-2 sm:right-4 z-20 pointer-events-auto">
                <MascotPair size={58} badgeText="Say Hello!" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
