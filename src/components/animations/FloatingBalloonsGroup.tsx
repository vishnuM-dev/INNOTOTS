'use client';

import React from 'react';
import { motion } from 'motion/react';
import FloatingBalloon from './FloatingBalloon';

interface FloatingBalloonsGroupProps {
  className?: string;
  variant?: 'hero-left' | 'corner-cluster' | 'scattered';
}

export default function FloatingBalloonsGroup({
  className = '',
  variant = 'hero-left',
}: FloatingBalloonsGroupProps) {
  if (variant === 'hero-left') {
    return (
      <div className={`pointer-events-none select-none z-10 ${className}`} aria-hidden="true">
        {/* Coral/Pink floating balloon on the left margin, matching mockup */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [-2, 2.5, -2],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.15, y: -25 }}
          whileTap={{ scale: 0.9, y: -30 }}
        >
          <FloatingBalloon
            color="#FF3F68"
            size={38}
            swayVariant={1}
            duration={5}
          />
        </motion.div>
      </div>
    );
  }

  if (variant === 'corner-cluster') {
    return (
      <div className={`pointer-events-none select-none flex items-end gap-1 ${className}`} aria-hidden="true">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [-2, 3, -2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.15 }}
        >
          <FloatingBalloon color="#FF3F68" size={32} swayVariant={1} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [2, -3, 2] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="pointer-events-auto cursor-pointer -ml-2 -mb-2"
          whileHover={{ scale: 1.15 }}
        >
          <FloatingBalloon color="#FFBA08" size={36} swayVariant={2} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [-3, 2, -3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-auto cursor-pointer -ml-2"
          whileHover={{ scale: 1.15 }}
        >
          <FloatingBalloon color="#08BFC1" size={30} swayVariant={3} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <FloatingBalloon color="#A75CE2" size={32} swayVariant={1} />
    </div>
  );
}
