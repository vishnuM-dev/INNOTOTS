'use client';

import React from 'react';
import { motion } from 'motion/react';
import AnimatedCloud from './AnimatedCloud';

interface DriftingCloudsLayerProps {
  className?: string;
  count?: number;
}

export default function DriftingCloudsLayer({
  className = '',
}: DriftingCloudsLayerProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`} aria-hidden="true">
      {/* Cloud 1 - Drifting slowly across top */}
      <motion.div
        initial={{ x: '-15%' }}
        animate={{ x: '115%' }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-4 sm:top-8"
      >
        <AnimatedCloud size={95} opacity={0.85} />
      </motion.div>

      {/* Cloud 2 - Drifting mid-sky */}
      <motion.div
        initial={{ x: '30%' }}
        animate={{ x: '125%' }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: 'linear',
          delay: 0,
        }}
        className="absolute top-16 sm:top-20"
      >
        <AnimatedCloud size={70} opacity={0.7} />
      </motion.div>

      {/* Cloud 3 - Floating slowly across upper right */}
      <motion.div
        initial={{ x: '-30%' }}
        animate={{ x: '110%' }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: 'linear',
          delay: 15,
        }}
        className="absolute top-6 sm:top-10"
      >
        <AnimatedCloud size={80} opacity={0.75} />
      </motion.div>
    </div>
  );
}
