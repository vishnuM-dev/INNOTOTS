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
      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
