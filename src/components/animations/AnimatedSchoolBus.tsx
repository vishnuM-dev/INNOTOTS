'use client';

import { motion } from 'motion/react';

interface AnimatedSchoolBusProps {
  className?: string;
  width?: number;
  driveAcross?: boolean;
}

export default function AnimatedSchoolBus({
  className = '',
  width = 160,
  driveAcross = false,
}: AnimatedSchoolBusProps) {
  const height = width * 0.58;

  return (
    <motion.div
      initial={driveAcross ? { x: -60, opacity: 0 } : { opacity: 0, scale: 0.9 }}
      whileInView={driveAcross ? { x: 0, opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
        default: { duration: 0.8, ease: 'easeOut' },
      }}
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width, height }}
      aria-hidden="true"
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

        {/* Brand Stripe */}
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

        {/* Wheels */}
        <g>
          {/* Back Wheel */}
          <circle cx="42" cy="66" r="13" fill="#07194F" />
          <circle cx="42" cy="66" r="7" fill="white" />
          <motion.circle
            cx="42"
            cy="66"
            r="3"
            fill="#FF3F68"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Front Wheel */}
          <circle cx="124" cy="66" r="13" fill="#07194F" />
          <circle cx="124" cy="66" r="7" fill="white" />
          <motion.circle
            cx="124"
            cy="66"
            r="3"
            fill="#FF3F68"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </g>

        {/* Speed / Exhilaration Puffs */}
        <motion.circle
          cx="8"
          cy="60"
          r="4"
          fill="#DDF3F1"
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 0.8, 0.3], x: [-2, -8, -2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="4"
          cy="52"
          r="3"
          fill="#DDF3F1"
          animate={{ scale: [0.4, 1.1, 0.4], opacity: [0.2, 0.7, 0.2], x: [0, -6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}

