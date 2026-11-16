'use client';

import { motion } from 'motion/react';

interface TealMascotProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  playfulJump?: boolean;
}

export default function TealMascot({
  size = 72,
  className = '',
  interactive = true,
  playfulJump = true,
}: TealMascotProps) {
  const height = size * 1.18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      animate={
        playfulJump
          ? {
              y: [0, -5, 0, 0, -18, 2, 0],
              scaleX: [1, 1, 1, 1.06, 0.92, 1.08, 1],
              scaleY: [1, 1, 1, 0.94, 1.12, 0.92, 1],
              rotate: [0, 2, -2, 0, 3, -1, 0],
            }
          : {
              y: [0, -7, 0],
              rotate: [0, 2, -2, 0],
            }
      }
      transition={{
        y: {
          duration: 5,
          times: [0, 0.3, 0.55, 0.68, 0.8, 0.92, 1],
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        },
        scaleX: {
          duration: 5,
          times: [0, 0.3, 0.55, 0.68, 0.8, 0.92, 1],
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        },
        scaleY: {
          duration: 5,
          times: [0, 0.3, 0.55, 0.68, 0.8, 0.92, 1],
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        opacity: { duration: 0.5, delay: 0.1 },
        scale: { duration: 0.5, delay: 0.1 },
      }}
      whileHover={
        interactive
          ? {
              scale: 1.1,
              y: -10,
              rotate: [0, -4, 4, 0],
              transition: { type: 'spring', stiffness: 350, damping: 15 },
            }
          : undefined
      }
      whileTap={interactive ? { scale: 0.94 } : undefined}
      className={`inline-block select-none ${interactive ? 'cursor-pointer' : 'pointer-events-none'} ${className}`}
      style={{ width: size, height, transformOrigin: 'bottom center' }}
      aria-label="InnoTots Teal Mascot"
    >
      <svg
        viewBox="0 0 100 118"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        {/* Playful Yellow & Purple Sparks above head */}
        <motion.g
          animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <rect x="56" y="5" width="5" height="13" rx="2.5" fill="#FFBA08" transform="rotate(25 58 11)" />
          <rect x="67" y="11" width="5" height="11" rx="2.5" fill="#A75CE2" transform="rotate(45 69 16)" />
        </motion.g>

        {/* Head */}
        <circle cx="50" cy="38" r="22" fill="#08BFC1" />

        {/* Blinking Eyes */}
        <motion.ellipse
          cx="43"
          cy="35"
          rx="2.2"
          ry="3.2"
          fill="#07194F"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.4 }}
          style={{ transformOrigin: '43px 35px' }}
        />
        <motion.ellipse
          cx="57"
          cy="35"
          rx="2.2"
          ry="3.2"
          fill="#07194F"
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.4 }}
          style={{ transformOrigin: '57px 35px' }}
        />

        {/* Happy Open Smile */}
        <path
          d="M42,40 Q50,51 58,40"
          stroke="#07194F"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="white"
        />

        {/* Rosy Cheeks */}
        <circle cx="38" cy="41" r="3" fill="#FFBA08" opacity="0.6" />
        <circle cx="62" cy="41" r="3" fill="#FFBA08" opacity="0.6" />

        {/* Body */}
        <rect x="37" y="60" width="26" height="42" rx="11" fill="#08BFC1" />

        {/* Left Arm */}
        <motion.path
          d="M38,68 C24,66 16,74 18,84"
          stroke="#08BFC1"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '38px 68px' }}
        />

        {/* Animated Waving Right Arm - natural 2s waving sequence */}
        <motion.g
          animate={{
            rotate: [0, 18, -4, 18, -4, 18, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          style={{ transformOrigin: '62px 68px' }}
        >
          <path
            d="M62,68 C76,64 85,50 83,40"
            stroke="#08BFC1"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
