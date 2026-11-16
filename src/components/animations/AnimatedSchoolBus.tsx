'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface AnimatedSchoolBusProps {
  className?: string;
  width?: number;
  entrance?: boolean;
  driveAcross?: boolean; // backwards compatibility
}

export default function AnimatedSchoolBus({
  className = '',
  width = 160,
  entrance = true,
  driveAcross = false,
}: AnimatedSchoolBusProps) {
  const height = width * 0.58;
  const isEntering = entrance || driveAcross;

  return (
    <motion.div
      initial={isEntering ? { x: -240, opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={
        isEntering
          ? {
              x: 0,
              opacity: 1,
            }
          : { opacity: 1, scale: 1 }
      }
      transition={{
        x: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 },
      }}
      className={`relative inline-block select-none pointer-events-auto cursor-pointer group ${className}`}
      style={{ width, height }}
      whileHover={{
        scale: 1.03,
        y: -3,
        transition: { type: 'spring', stiffness: 350, damping: 18 },
      }}
      whileTap={{ scale: 0.96 }}
      aria-label="InnoTots School Bus"
    >
      {/* Soft Ground Shadow tracking bus arrival */}
      <motion.div
        initial={isEntering ? { scaleX: 0.4, opacity: 0 } : { scaleX: 1, opacity: 0.2 }}
        animate={{ scaleX: 1, opacity: 0.22 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-1 left-2 right-2 h-3 rounded-full bg-[#07194F]/20 blur-[3px] pointer-events-none"
      />

      {/* Playful Floating Sparkles above Bus Hood */}
      <motion.div
        animate={{
          scale: [0.8, 1.15, 0.8],
          opacity: [0.4, 0.95, 0.4],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 right-4 text-[#FFBA08] pointer-events-none drop-shadow-xs"
      >
        <Sparkles size={14} />
      </motion.div>

      {/* Main Bus Chassis with gentle deceleration bounce & stationary idle hum */}
      <motion.div
        animate={{
          y: [0, -1.5, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.85,
        }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 160 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm overflow-visible"
        >
          {/* Bus Main Body */}
          <rect x="15" y="18" width="130" height="48" rx="10" fill="#FFBA08" />
          <path d="M125 18 H142 C146 18 150 22 150 26 V66 H125 V18 Z" fill="#FFBA08" />

          {/* Bus Hood */}
          <path d="M140 38 H152 C155 38 157 40 157 43 V64 C157 65 156 66 155 66 H140 V38 Z" fill="#FFBA08" />
          <rect x="153" y="48" width="4" height="8" rx="2" fill="#FF3F68" /> {/* Headlight */}

          {/* Brand Stripes */}
          <rect x="15" y="44" width="138" height="6" fill="#07194F" />
          <rect x="15" y="52" width="138" height="3" fill="#FF3F68" />

          {/* Windows */}
          <rect x="25" y="24" width="18" height="16" rx="3" fill="#DDF3F1" />
          <rect x="48" y="24" width="18" height="16" rx="3" fill="#DDF3F1" />
          <rect x="71" y="24" width="18" height="16" rx="3" fill="#DDF3F1" />
          <rect x="94" y="24" width="18" height="16" rx="3" fill="#DDF3F1" />
          {/* Front Windshield */}
          <path d="M118 24 H138 C141 24 144 26 144 29 V38 H118 V24 Z" fill="#DDF3F1" />

          {/* Little Smiling Kids in Windows */}
          {/* Kid 1 - Pink */}
          <circle cx="34" cy="33" r="5" fill="#FF3F68" />
          {/* Kid 2 - Teal */}
          <circle cx="57" cy="32" r="5" fill="#08BFC1" />
          {/* Kid 3 - Purple */}
          <circle cx="80" cy="33" r="5" fill="#A75CE2" />

          {/* Wheels - rotate realistically during entrance then stop */}
          <g>
            {/* Back Wheel Tire */}
            <circle cx="42" cy="66" r="13" fill="#07194F" />
            {/* Back Wheel Rim with Spokes */}
            <motion.g
              animate={isEntering ? { rotate: [0, 720] } : undefined}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '42px 66px' }}
            >
              <circle cx="42" cy="66" r="7" fill="white" />
              <line x1="36" y1="66" x2="48" y2="66" stroke="#07194F" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="42" y1="60" x2="42" y2="72" stroke="#07194F" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="42" cy="66" r="3.2" fill="#FF3F68" />
            </motion.g>

            {/* Front Wheel Tire */}
            <circle cx="124" cy="66" r="13" fill="#07194F" />
            {/* Front Wheel Rim with Spokes */}
            <motion.g
              animate={isEntering ? { rotate: [0, 720] } : undefined}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '124px 66px' }}
            >
              <circle cx="124" cy="66" r="7" fill="white" />
              <line x1="118" y1="66" x2="130" y2="66" stroke="#07194F" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="124" y1="60" x2="124" y2="72" stroke="#07194F" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="124" cy="66" r="3.2" fill="#FF3F68" />
            </motion.g>
          </g>

          {/* Soft Exhaust Clouds on hover / idle */}
          <motion.circle
            cx="8"
            cy="60"
            r="4"
            fill="#DDF3F1"
            animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 0.75, 0.3], x: [-1, -6, -1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="4"
            cy="52"
            r="3"
            fill="#DDF3F1"
            animate={{ scale: [0.4, 1.1, 0.4], opacity: [0.2, 0.65, 0.2], x: [0, -5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
