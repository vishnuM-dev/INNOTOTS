'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

interface PlayfulButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export default function PlayfulButton({ children, className = '', href, onClick, style }: PlayfulButtonProps) {
  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={className} style={style}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick} className={className} style={style}>
      {children}
    </motion.button>
  );
}
