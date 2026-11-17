'use client';

import React from 'react';
import { motion } from 'motion/react';

interface RainbowShimmerProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  opacity?: number;
}

export default function RainbowShimmer({
  className = '',
  width = '100%',
  height = '100%',
  opacity = 0.85,
}: RainbowShimmerProps) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width, height, opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 280"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Shimmer gradient moving along the arcs */}
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Masks for individual arcs */}
          <linearGradient id="rainbowGradRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3F68" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FF3F68" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF3F68" stopOpacity="0.6" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Glow Arc */}
        <path
          d="M 50,260 A 200,180 0 0,1 450,260"
          fill="none"
          stroke="#FFFBE8"
          strokeWidth="38"
          opacity="0.3"
          filter="url(#softGlow)"
        />

        {/* 1. Coral / Red Arc */}
        <path
          d="M 60,260 A 190,170 0 0,1 440,260"
          fill="none"
          stroke="#FF3F68"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 2. Yellow Arc */}
        <path
          d="M 72,260 A 178,158 0 0,1 428,260"
          fill="none"
          stroke="#FFBA08"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 3. Mint / Teal Arc */}
        <path
          d="M 84,260 A 166,146 0 0,1 416,260"
          fill="none"
          stroke="#08BFC1"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 4. Purple / Lavender Arc */}
        <path
          d="M 96,260 A 154,134 0 0,1 404,260"
          fill="none"
          stroke="#A75CE2"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Shimmer sweep effect */}
        <motion.path
          d="M 60,260 A 190,170 0 0,1 440,260"
          fill="none"
          stroke="url(#shimmerGradient)"
          strokeWidth="42"
          strokeLinecap="round"
          strokeDasharray="120 400"
          animate={{
            strokeDashoffset: [520, -520],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          opacity="0.7"
        />

        {/* Cloud puffs at bases */}
        <g fill="#FFFFFF" opacity="0.95">
          <ellipse cx="60" cy="260" rx="30" ry="18" />
          <ellipse cx="78" cy="254" rx="22" ry="16" />
          <ellipse cx="44" cy="255" rx="20" ry="14" />

          <ellipse cx="440" cy="260" rx="30" ry="18" />
          <ellipse cx="422" cy="254" rx="22" ry="16" />
          <ellipse cx="456" cy="255" rx="20" ry="14" />
        </g>
      </svg>

      {/* Floating Sparkle Stars along rainbow */}
      <motion.div
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-[#FFBA08]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.9, 0.3],
          rotate: [0, -90, -180],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-12 left-1/4 text-[#FF3F68]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          scale: [0.9, 1.3, 0.9],
          opacity: [0.3, 0.95, 0.3],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        className="absolute top-14 right-1/4 text-[#08BFC1]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </motion.div>
    </div>
  );
}
