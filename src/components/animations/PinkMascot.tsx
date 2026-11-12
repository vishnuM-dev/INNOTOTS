'use client';

import { motion } from 'motion/react';

interface PinkMascotProps {
  size?: number;
  className?: string;
  interactive?: boolean;
}

export default function PinkMascot({
  size = 72,
  className = '',
  interactive = true,
}: PinkMascotProps) {
  const height = size * 1.18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        y: {
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      whileHover={
        interactive
          ? {
              scale: 1.08,
              y: -10,
              transition: { type: 'spring', stiffness: 350, damping: 15 },
            }
          : undefined
      }
      whileTap={interactive ? { scale: 0.95 } : undefined}
      className={`inline-block select-none ${interactive ? 'cursor-pointer' : 'pointer-events-none'} ${className}`}
      style={{ width: size, height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 118"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        {/* Playful Yellow Sparkles above head */}
        <motion.g
          animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="36" y="5" width="5" height="13" rx="2.5" fill="#FFBA08" transform="rotate(-25 38 11)" />
          <rect x="52" y="3" width="5" height="13" rx="2.5" fill="#FFBA08" />
        </motion.g>

        {/* Head */}
        <circle cx="50" cy="38" r="22" fill="#FF3F68" />

        {/* Blinking Eyes */}
        <motion.ellipse
          cx="43"
          cy="35"
          rx="2.2"
          ry="3.2"
          fill="#07194F"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2 }}
          style={{ transformOrigin: '43px 35px' }}
        />
        <motion.ellipse
          cx="57"
          cy="35"
          rx="2.2"
          ry="3.2"
          fill="#07194F"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2 }}
          style={{ transformOrigin: '57px 35px' }}
        />

        {/* Smiling Mouth */}
        <path
          d="M43,41 Q50,50 57,41"
          stroke="#07194F"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="white"
        />

        {/* Rosy Cheeks */}
        <circle cx="38" cy="41" r="3" fill="#FFBA08" opacity="0.6" />
        <circle cx="62" cy="41" r="3" fill="#FFBA08" opacity="0.6" />

        {/* Body */}
        <rect x="37" y="60" width="26" height="42" rx="11" fill="#FF3F68" />

        {/* Animated Waving Left Arm */}
        <motion.g
          animate={{
            rotate: [0, -18, 0, -18, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 2.2,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '38px 68px' }}
        >
          <path
            d="M38,68 C22,64 15,46 20,38"
            stroke="#FF3F68"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* Right Arm */}
        <path
          d="M62,68 C73,74 77,83 75,91"
          stroke="#FF3F68"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

