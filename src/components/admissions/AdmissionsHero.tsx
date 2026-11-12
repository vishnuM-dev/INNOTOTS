'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';
import AnimatedCloud from '@/components/animations/AnimatedCloud';
import AnimatedSchoolBus from '@/components/animations/AnimatedSchoolBus';
import TealMascot from '@/components/animations/TealMascot';

export default function AdmissionsHero() {
  return (
    <section
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28"
      style={{ background: 'linear-gradient(180deg, #F7F0FD 0%, #E6F7F5 100%)' }}
    >
      {/* Decorative Drifting Clouds & Twinkling Stars */}
      <AnimatedCloud size={85} delay={0} duration={20} className="absolute top-6 left-[5%]" />
      <AnimatedCloud size={75} delay={3} duration={18} className="absolute top-14 right-[7%]" />
      <FloatingShape shape="star" color="#FFBA08" size={55} delay={0} className="absolute top-8 right-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#FF3F68" size={75} delay={1} className="absolute bottom-16 left-8 pointer-events-none" opacity={0.15} />
      <TwinklingStar size={26} color="#A75CE2" delay={0.5} className="absolute top-12 left-16 pointer-events-none" />
      <TwinklingStar size={20} color="#08BFC1" delay={1.3} className="absolute bottom-20 right-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated School Bus Illustration Banner */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <AnimatedSchoolBus width={150} driveAcross />
          <div className="pointer-events-auto">
            <TealMascot size={56} />
          </div>
        </div>

        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-white/80 shadow-2xs text-gray-600" aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF3F68] font-bold">Admissions & Contact</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-[#07194F] tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Begin Your Child&apos;s Happy Learning Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          We would love to help you explore the right beginning for your little one.
        </motion.p>
      </div>

      {/* Full-width bottom wave into white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10 md:h-12 block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
