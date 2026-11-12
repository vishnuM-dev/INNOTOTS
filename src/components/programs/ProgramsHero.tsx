'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import FloatingShape from '@/components/animations/FloatingShape';
import AlphabetBlocks from '@/components/animations/AlphabetBlocks';
import AnimatedCloud from '@/components/animations/AnimatedCloud';
import TwinklingStar from '@/components/animations/TwinklingStar';
import { programs } from '@/data/programs';

export default function ProgramsHero() {
  return (
    <section
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28"
      style={{ background: 'linear-gradient(180deg, #FFFBEC 0%, #E6F7F5 100%)' }}
    >
      {/* Decorative Drifting Clouds & Twinkling Stars */}
      <AnimatedCloud size={90} delay={0} duration={20} className="absolute top-6 left-[6%]" />
      <AnimatedCloud size={70} delay={3} duration={18} className="absolute top-16 right-[8%]" />
      <TwinklingStar color="#FFBA08" size={24} delay={0.4} className="absolute top-10 left-[22%]" />
      <TwinklingStar color="#FF3F68" size={18} delay={1.2} className="absolute top-14 right-[25%]" />

      <FloatingShape shape="circle" color="#FFBA08" size={80} delay={0} className="absolute top-8 right-8 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="star" color="#FF3F68" size={50} delay={1} className="absolute bottom-16 left-8 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#A75CE2" size={60} delay={0.5} className="absolute top-20 left-16 pointer-events-none" opacity={0.15} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Floating Alphabet Blocks Accent */}
        <div className="mb-4 flex justify-center">
          <AlphabetBlocks size={40} />
        </div>

        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-white/80 shadow-2xs text-gray-600" aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF3F68] font-bold">Programs & Activities</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-[#07194F] tracking-tight"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Programs & Activities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Thoughtfully structured programs for every stage of early childhood, guiding each child from joyful first steps to confident school readiness.
        </motion.p>

        {/* Quick jump pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {programs.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-2xs hover:shadow-md hover:scale-105 active:scale-95 transition-all"
              style={{ backgroundColor: p.color, fontFamily: 'var(--font-nunito)' }}
            >
              <span>{p.name}</span>
              <span className="opacity-80 font-normal">({p.ageRange})</span>
            </a>
          ))}
        </div>
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
