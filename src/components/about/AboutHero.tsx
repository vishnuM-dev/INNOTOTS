'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';
import AnimatedCloud from '@/components/animations/AnimatedCloud';
import TealMascot from '@/components/animations/TealMascot';

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28"
      style={{ background: 'linear-gradient(180deg, #F0FAFA 0%, #E6F7F5 100%)' }}
    >
      {/* Decorative Drifting Clouds & Twinkling Stars */}
      <AnimatedCloud size={85} delay={0} duration={19} className="absolute top-6 left-[6%]" />
      <AnimatedCloud size={70} delay={4} duration={21} className="absolute top-14 right-[8%]" />

      <FloatingShape shape="circle" color="#FF3F68" size={75} delay={0} className="absolute top-8 left-6 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="star" color="#FFBA08" size={50} delay={1} className="absolute bottom-16 right-8 pointer-events-none" opacity={0.2} />
      <TwinklingStar size={26} color="#A75CE2" delay={0.5} className="absolute top-10 right-20 pointer-events-none" />
      <TwinklingStar size={20} color="#08BFC1" delay={1.2} className="absolute bottom-20 left-16 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Teal Mascot Accent */}
        <div className="mb-4 flex justify-center pointer-events-auto">
          <TealMascot size={64} />
        </div>

        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-white/80 shadow-2xs text-gray-600" aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF3F68] font-bold">About Us</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-[#07194F] tracking-tight"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          About InnoTots Preschool
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Discover our story, our values and our commitment to nurturing every little learner with love, curiosity and joyful wonder.
        </motion.p>
      </div>

      {/* Full-width wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10 md:h-12 block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
