'use client';

import { motion } from 'motion/react';

interface AnimatedRainbowProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function AnimatedRainbow({
  className = '',
  width = 240,
  height = 140,
}: AnimatedRainbowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`inline-block select-none pointer-events-none relative ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="shimmerRainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Coral Pink Arc */}
        <motion.path
          d="M30 130 C30 50, 210 50, 210 130"
          stroke="#FF3F68"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        {/* Sunshine Yellow Arc */}
        <motion.path
          d="M44 130 C44 64, 196 64, 196 130"
          stroke="#FFBA08"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeInOut' }}
        />
        {/* Turquoise Teal Arc */}
        <motion.path
          d="M58 130 C58 78, 182 78, 182 130"
          stroke="#08BFC1"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        />
        {/* Playful Purple Arc */}
        <motion.path
          d="M72 130 C72 92, 168 92, 168 130"
          stroke="#A75CE2"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.45, ease: 'easeInOut' }}
        />

        {/* Shimmer overlay sweep */}
        <motion.path
          d="M30 130 C30 50, 210 50, 210 130"
          stroke="url(#shimmerRainbow)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="60 280"
          animate={{
            strokeDashoffset: [340, -340],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          opacity={0.65}
        />

        {/* Clouds at base */}
        <motion.g
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="32" cy="126" rx="22" ry="12" fill="white" className="drop-shadow-xs" />
          <ellipse cx="24" cy="120" rx="14" ry="12" fill="white" />
          <ellipse cx="42" cy="122" rx="12" ry="10" fill="white" />
        </motion.g>

        <motion.g
          animate={{ x: [2, -2, 2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="208" cy="126" rx="22" ry="12" fill="white" className="drop-shadow-xs" />
          <ellipse cx="200" cy="122" rx="12" ry="10" fill="white" />
          <ellipse cx="218" cy="120" rx="14" ry="12" fill="white" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
