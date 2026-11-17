'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';
import AnimatedCloud from '@/components/animations/AnimatedCloud';
import FloatingBalloon from '@/components/animations/FloatingBalloon';
import TealMascot from '@/components/animations/TealMascot';
import PinkMascot from '@/components/animations/PinkMascot';
import { Butterfly } from '@/components/animations/FlyingButterflies';
import { CuteBird } from '@/components/animations/FlyingBirds';

export default function AdmissionsHero() {
  return (
    <section
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 select-none"
      style={{ background: 'linear-gradient(180deg, #F7F0FD 0%, #E6F7F5 100%)' }}
    >
      {/* Subtle Animated Pastel Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 left-1/4 w-72 h-72 rounded-full bg-[#E6F7F5] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#F7F0FD] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Decorative Drifting Clouds */}
      <AnimatedCloud size={90} delay={0} duration={22} className="absolute top-6 left-[5%]" />
      <AnimatedCloud size={75} delay={3} duration={18} className="absolute top-14 right-[7%]" />

      {/* Fluttering Butterflies & Birds */}
      <div className="absolute top-8 left-12 pointer-events-auto">
        <Butterfly color="#FF3F68" size={26} duration={11} />
      </div>
      <div className="absolute top-16 right-16 pointer-events-auto hidden sm:block">
        <CuteBird bodyColor="#FFBA08" wingColor="#08BFC1" size={36} duration={14} />
      </div>

      {/* Twinkling Stars */}
      <TwinklingStar size={26} color="#A75CE2" delay={0.5} duration={3.2} className="absolute top-12 left-16 pointer-events-none" />
      <TwinklingStar size={20} color="#08BFC1" delay={1.3} duration={3.8} className="absolute bottom-20 right-20 pointer-events-none" />
      <TwinklingStar size={22} color="#FFBA08" delay={2.1} duration={4.2} className="absolute top-8 right-28 pointer-events-none" />

      {/* Subtle Background Floating Shapes */}
      <FloatingShape shape="star" color="#FFBA08" size={55} delay={0} duration={6} className="absolute top-8 right-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#FF3F68" size={75} delay={1} duration={5.5} className="absolute bottom-16 left-8 pointer-events-none" opacity={0.15} />

      {/* 4 Pastel Floating Balloons near outer hero edges */}
      <FloatingBalloon
        color="#FF3F68"
        size={36}
        delay={0.4}
        duration={5.6}
        swayVariant={1}
        className="absolute top-20 left-[3%] sm:left-[5%]"
      />
      <FloatingBalloon
        color="#FFBA08"
        size={32}
        delay={1.8}
        duration={6.2}
        swayVariant={2}
        className="absolute top-44 left-[7%] sm:left-[9%]"
      />
      <FloatingBalloon
        color="#08BFC1"
        size={34}
        delay={1.0}
        duration={5.8}
        swayVariant={3}
        className="absolute top-16 right-[3%] sm:right-[5%]"
      />
      <FloatingBalloon
        color="#A75CE2"
        size={30}
        delay={2.4}
        duration={6.6}
        swayVariant={1}
        className="absolute top-40 right-[7%] sm:right-[9%]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Mascots Pair */}
        <div className="mb-4 flex items-end justify-center gap-3 relative pointer-events-auto">
          <PinkMascot size={52} />
          <TealMascot size={58} playfulJump />
        </div>

        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 bg-white/80 shadow-2xs text-gray-600"
          aria-label="Breadcrumb"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#FF3F68] font-bold">Admissions & Contact</span>
        </motion.nav>

        {/* Staggered Heading Entrance Animation */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-[#07194F] tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            Begin Your Child&apos;s{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block text-[#FF3F68]"
          >
            Happy Learning Journey
          </motion.span>
        </h1>

        {/* Smooth Subtitle Entrance */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed mb-8"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          We would love to help you explore the right beginning for your little one.
        </motion.p>

        {/* High Quality 3D Welcoming Cartoon School Bus Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl mx-auto relative group"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-b from-[#F0FAFA] to-white transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/images/admissions-bus-3d.png"
              alt="InnoTots Welcoming Preschool Bus with Cheerful Children and Animal Mascots"
              width={700}
              height={420}
              className="w-full h-auto object-cover select-none pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Full-width bottom wave into white with gentle wave sway motion */}
      <motion.div
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 -left-4 -right-4 overflow-hidden leading-none pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10 md:h-12 block">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
        </svg>
      </motion.div>
    </section>
  );
}
