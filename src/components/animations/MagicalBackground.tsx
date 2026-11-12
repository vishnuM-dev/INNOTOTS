'use client';

import { motion } from 'motion/react';
import FloatingBalloon from './FloatingBalloon';
import AnimatedCloud from './AnimatedCloud';
import TwinklingStar from './TwinklingStar';
import FloatingShape from './FloatingShape';

interface MagicalBackgroundProps {
  preset?: 'hero' | 'playful' | 'subtle' | 'stars' | 'minimal';
  className?: string;
}

export default function MagicalBackground({
  preset = 'subtle',
  className = '',
}: MagicalBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Soft Pastel Ambient Bubbles */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[8%] w-32 h-32 rounded-full bg-[#DDF3F1]/40 blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 16, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-[5%] w-48 h-48 rounded-full bg-[#FFF0F3]/50 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-16 left-[20%] w-40 h-40 rounded-full bg-[#FFFBEC]/60 blur-2xl"
      />

      {/* Preset Elements */}
      {preset === 'hero' && (
        <>
          {/* Drifting Clouds */}
          <AnimatedCloud size={100} delay={0} duration={18} className="absolute top-8 left-[4%]" />
          <AnimatedCloud size={80} delay={4} duration={22} className="absolute top-20 right-[8%]" />

          {/* Twinkling Stars */}
          <TwinklingStar color="#FFBA08" size={24} delay={0.2} className="absolute top-16 left-[22%]" />
          <TwinklingStar color="#FF3F68" size={18} delay={1.4} className="absolute top-28 right-[24%]" />
          <TwinklingStar color="#08BFC1" size={20} delay={2.1} className="absolute top-44 left-[12%]" />

          {/* Floating Balloons */}
          <FloatingBalloon color="#FF3F68" size={42} delay={0.5} duration={5} className="absolute top-36 left-[3%]" />
          <FloatingBalloon color="#FFBA08" size={38} delay={1.8} duration={6} className="absolute top-24 right-[4%]" />

          {/* Geometric Accents */}
          <FloatingShape shape="circle" color="#A75CE2" size={30} delay={1} className="absolute bottom-20 left-[6%]" opacity={0.18} />
          <FloatingShape shape="triangle" color="#08BFC1" size={26} delay={2} className="absolute bottom-28 right-[10%]" opacity={0.2} />
        </>
      )}

      {preset === 'playful' && (
        <>
          <TwinklingStar color="#FFBA08" size={22} delay={0.4} className="absolute top-10 left-[6%]" />
          <TwinklingStar color="#FF3F68" size={16} delay={1.6} className="absolute top-12 right-[8%]" />
          <FloatingBalloon color="#08BFC1" size={36} delay={1} duration={5.5} className="absolute top-24 right-[5%]" />
          <FloatingShape shape="circle" color="#FFBA08" size={36} delay={0.8} className="absolute bottom-12 left-[8%]" opacity={0.2} />
          <FloatingShape shape="star" color="#A75CE2" size={30} delay={2} className="absolute top-36 left-[14%]" opacity={0.22} />
        </>
      )}

      {preset === 'stars' && (
        <>
          <TwinklingStar color="#FFBA08" size={20} delay={0.3} className="absolute top-8 left-[10%]" />
          <TwinklingStar color="#FF3F68" size={18} delay={1.2} className="absolute top-16 right-[12%]" />
          <TwinklingStar color="#08BFC1" size={16} delay={2.2} className="absolute bottom-12 left-[15%]" />
          <TwinklingStar color="#A75CE2" size={18} delay={1.8} className="absolute bottom-16 right-[18%]" />
        </>
      )}

      {preset === 'subtle' && (
        <>
          <TwinklingStar color="#FFBA08" size={16} delay={0.5} className="absolute top-10 right-[10%]" />
          <FloatingShape shape="circle" color="#08BFC1" size={32} delay={1.5} className="absolute bottom-10 left-[7%]" opacity={0.14} />
          <FloatingShape shape="star" color="#FF3F68" size={24} delay={2.5} className="absolute top-24 left-[5%]" opacity={0.16} />
        </>
      )}
    </div>
  );
}

