'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ButterflyProps {
  color?: string;
  size?: number;
  initialX?: string | number;
  initialY?: string | number;
  path?: { x: number[]; y: number[]; rotate?: number[] };
  duration?: number;
  delay?: number;
  className?: string;
}

export function Butterfly({
  color = '#FF3F68',
  size = 28,
  initialX = 0,
  initialY = 0,
  path = {
    x: [0, 40, 90, 60, 20, 0],
    y: [0, -30, -15, -45, -20, 0],
    rotate: [0, 15, -10, 20, -15, 0],
  },
  duration = 12,
  delay = 0,
  className = '',
}: ButterflyProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ x: initialX, y: initialY }}
      animate={{
        x: path.x,
        y: path.y,
        rotate: path.rotate || [0, 10, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9, rotate: 360 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`absolute cursor-pointer select-none z-20 ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 400,
      }}
      aria-label="Playful fluttering butterfly"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Left Wing */}
        <motion.div
          animate={{
            rotateY: isHovered ? [0, 75, 0] : [0, 65, 0],
          }}
          transition={{
            duration: isHovered ? 0.12 : 0.22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformOrigin: 'right center',
            width: size * 0.48,
            height: size * 0.85,
          }}
          className="absolute right-1/2"
        >
          <svg viewBox="0 0 30 50" className="w-full h-full drop-shadow-xs" fill="none">
            {/* Upper wing */}
            <path
              d="M30,24 C28,12 18,2 6,4 C-2,6 0,22 14,24 C24,25 28,24 30,24 Z"
              fill={color}
              opacity={0.92}
            />
            {/* Wing highlight */}
            <path
              d="M24,20 C22,12 16,6 8,8 C4,10 6,18 16,20 Z"
              fill="#FFFFFF"
              opacity={0.4}
            />
            {/* Lower wing */}
            <path
              d="M30,24 C26,28 14,32 8,40 C2,46 12,50 20,44 C26,38 28,28 30,24 Z"
              fill={color}
              opacity={0.82}
            />
            <circle cx="14" cy="14" r="2.5" fill="#FFBA08" opacity={0.85} />
            <circle cx="16" cy="38" r="1.8" fill="#FFBA08" opacity={0.85} />
          </svg>
        </motion.div>

        {/* Right Wing */}
        <motion.div
          animate={{
            rotateY: isHovered ? [0, -75, 0] : [0, -65, 0],
          }}
          transition={{
            duration: isHovered ? 0.12 : 0.22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformOrigin: 'left center',
            width: size * 0.48,
            height: size * 0.85,
          }}
          className="absolute left-1/2"
        >
          <svg viewBox="0 0 30 50" className="w-full h-full drop-shadow-xs" fill="none">
            {/* Upper wing */}
            <path
              d="M0,24 C2,12 12,2 24,4 C32,6 30,22 16,24 C6,25 2,24 0,24 Z"
              fill={color}
              opacity={0.92}
            />
            {/* Wing highlight */}
            <path
              d="M6,20 C8,12 14,6 22,8 C26,10 24,18 14,20 Z"
              fill="#FFFFFF"
              opacity={0.4}
            />
            {/* Lower wing */}
            <path
              d="M0,24 C4,28 16,32 22,40 C28,46 18,50 10,44 C4,38 2,28 0,24 Z"
              fill={color}
              opacity={0.82}
            />
            <circle cx="16" cy="14" r="2.5" fill="#FFBA08" opacity={0.85} />
            <circle cx="14" cy="38" r="1.8" fill="#FFBA08" opacity={0.85} />
          </svg>
        </motion.div>

        {/* Slender Body & Antennae */}
        <div className="relative z-10 w-[3px] h-[65%] bg-[#07194F] rounded-full">
          {/* Head */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#07194F]" />
          {/* Antennae */}
          <div className="absolute -top-3 -left-2 w-4 h-3 pointer-events-none">
            <svg viewBox="0 0 20 16" fill="none" className="w-full h-full">
              <path d="M10,14 Q6,6 3,4" stroke="#07194F" strokeWidth="1" strokeLinecap="round" />
              <circle cx="3" cy="4" r="0.8" fill="#07194F" />
              <path d="M10,14 Q14,6 17,4" stroke="#07194F" strokeWidth="1" strokeLinecap="round" />
              <circle cx="17" cy="4" r="0.8" fill="#07194F" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlyingButterflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10" aria-hidden="true">
      {/* Butterfly 1: Coral - fluttering near top right */}
      <Butterfly
        color="#FF3F68"
        size={32}
        initialX="78%"
        initialY="18%"
        path={{
          x: [0, 45, 90, 50, 10, 0],
          y: [0, -35, -15, -50, -25, 0],
          rotate: [0, 18, -12, 22, -10, 0],
        }}
        duration={11}
        delay={0.2}
        className="pointer-events-auto"
      />

      {/* Butterfly 2: Teal - fluttering near left hero */}
      <Butterfly
        color="#08BFC1"
        size={26}
        initialX="12%"
        initialY="35%"
        path={{
          x: [0, 55, 30, -35, -10, 0],
          y: [0, -25, -55, -30, -10, 0],
          rotate: [-5, 15, -20, 10, -5, -5],
        }}
        duration={14}
        delay={1.5}
        className="pointer-events-auto hidden sm:block"
      />

      {/* Butterfly 3: Yellow - fluttering over the grass & books */}
      <Butterfly
        color="#FFBA08"
        size={24}
        initialX="62%"
        initialY="65%"
        path={{
          x: [0, 35, 70, 40, -10, 0],
          y: [0, -20, -10, -35, -15, 0],
          rotate: [5, -15, 12, -8, 10, 5],
        }}
        duration={9.5}
        delay={2.8}
        className="pointer-events-auto"
      />

      {/* Butterfly 4: Purple - playful background wanderer */}
      <Butterfly
        color="#A75CE2"
        size={22}
        initialX="88%"
        initialY="55%"
        path={{
          x: [0, -40, -70, -30, 15, 0],
          y: [0, -30, -10, -40, -15, 0],
          rotate: [-10, 12, -15, 10, -8, -10],
        }}
        duration={13}
        delay={3.5}
        className="pointer-events-auto hidden md:block"
      />
    </div>
  );
}
