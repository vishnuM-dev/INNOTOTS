'use client';

import { motion } from 'motion/react';
import { ReactNode, CSSProperties } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedCard({ children, className = '', style }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
