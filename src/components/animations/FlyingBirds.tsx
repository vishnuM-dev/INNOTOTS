'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';

interface FlyingBirdProps {
  initialX?: string | number;
  initialY?: string | number;
  bodyColor?: string;
  wingColor?: string;
  size?: number;
  duration?: number;
  delay?: number;
  direction?: 'left-to-right' | 'right-to-left' | 'hover-drift';
  className?: string;
}

export function CuteBird({
  bodyColor = '#FFBA08',
  wingColor = '#08BFC1',
  size = 38,
  initialX = 0,
  initialY = 0,
  duration = 16,
  delay = 0,
  direction = 'hover-drift',
  className = '',
}: FlyingBirdProps) {
  const [chirping, setChirping] = useState(false);

  const transitionConfig: Transition =
    direction === 'left-to-right' || direction === 'right-to-left'
      ? {
          x: { duration, repeat: Infinity, ease: 'linear', delay },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }
      : {
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        };

  const initialProps =
    direction === 'left-to-right'
      ? { x: '-10vw', y: initialY }
      : direction === 'right-to-left'
      ? { x: '110vw', y: initialY }
      : { x: initialX, y: initialY };

  const animateProps =
    direction === 'left-to-right'
      ? { x: '110vw', y: [0, -20, 10, -25, 5, 0] }
      : direction === 'right-to-left'
      ? { x: '-10vw', y: [0, -25, 8, -20, 0] }
      : {
          x: [0, 45, -20, 30, 0],
          y: [0, -18, 8, -24, 0],
          rotate: [0, 5, -4, 6, 0],
        };

  return (
    <motion.div
      initial={initialProps}
      animate={animateProps}
      transition={transitionConfig}
      whileHover={{ scale: 1.25, rotate: 10 }}
      whileTap={{ scale: 0.9, y: -20 }}
      onClick={() => {
        setChirping(true);
        setTimeout(() => setChirping(false), 2000);
      }}
      className={`absolute cursor-pointer select-none z-20 ${className}`}
      style={{ width: size, height: size * 0.8 }}
      aria-label="Happy little cartoon bird"
    >
      <div className="relative w-full h-full">
        {/* Chirp speech bubble / music note when clicked */}
        <AnimatePresence>
          {chirping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -22 }}
              exit={{ opacity: 0, scale: 0.6, y: -30 }}
              className="absolute -top-6 -right-2 bg-white px-2 py-0.5 rounded-full shadow-xs text-[10px] font-bold text-[#FF3F68] border border-[#FFBA08]/50 flex items-center gap-1 z-30 pointer-events-none whitespace-nowrap"
            >
              <span>🎶 Tweet!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <svg viewBox="0 0 60 48" className="w-full h-full drop-shadow-xs overflow-visible" fill="none">
          {/* Tail feathers */}
          <path
            d="M8,26 L0,20 Q4,26 0,32 Z"
            fill={wingColor}
          />
          <path
            d="M6,27 L-2,28"
            stroke={wingColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Chubby Bird Body */}
          <ellipse cx="28" cy="27" rx="18" ry="15" fill={bodyColor} />
          {/* Cute belly highlight */}
          <ellipse cx="29" cy="31" rx="12" ry="9" fill="#FFFBE8" opacity={0.65} />

          {/* Beak */}
          <polygon points="44,23 54,26 44,30" fill="#FF5E1E" />

          {/* Big Cartoon Eye */}
          <ellipse cx="37" cy="21" rx="4.5" ry="5.5" fill="#FFFFFF" />
          <ellipse cx="38" cy="21" rx="2.5" ry="3.5" fill="#07194F" />
          <circle cx="39.5" cy="19.5" r="1.2" fill="#FFFFFF" />
          {/* Sweet Rosy Cheek */}
          <ellipse cx="33" cy="28" rx="3.2" ry="2.2" fill="#FF3F68" opacity={0.6} />

          {/* Flapping Wing */}
          <motion.g
            animate={{
              rotate: [-20, 35, -20],
              y: [0, -3, 0],
            }}
            transition={{
              duration: chirping ? 0.15 : 0.28,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '22px 26px' }}
          >
            <path
              d="M22,25 C26,14 38,16 38,24 C38,32 26,34 20,29 Z"
              fill={wingColor}
            />
            {/* Wing feather streak */}
            <path
              d="M26,24 Q32,22 34,26"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.6}
            />
          </motion.g>

          {/* Cute Little Feet */}
          <line x1="24" y1="40" x2="22" y2="46" stroke="#FF5E1E" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="46" x2="19" y2="46" stroke="#FF5E1E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="31" y1="40" x2="30" y2="46" stroke="#FF5E1E" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="46" x2="27" y2="46" stroke="#FF5E1E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function FlyingBirds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10" aria-hidden="true">
      {/* Primary yellow-and-blue bird floating near hot air balloon */}
      <CuteBird
        bodyColor="#FFBA08"
        wingColor="#08BFC1"
        size={46}
        initialX="68%"
        initialY="12%"
        duration={12}
        delay={0.2}
        className="pointer-events-auto"
      />

      {/* Gentle background bird gliding high across */}
      <CuteBird
        bodyColor="#08BFC1"
        wingColor="#FF3F68"
        size={34}
        initialX="25%"
        initialY="8%"
        duration={15}
        delay={2}
        className="pointer-events-auto hidden sm:block"
      />

      {/* Playful small bird fluttering above playground */}
      <CuteBird
        bodyColor="#FF3F68"
        wingColor="#FFBA08"
        size={30}
        initialX="86%"
        initialY="30%"
        duration={10}
        delay={1.2}
        className="pointer-events-auto hidden md:block"
      />
    </div>
  );
}
