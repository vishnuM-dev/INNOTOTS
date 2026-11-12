'use client';

import { motion } from 'motion/react';

interface AlphabetBlocksProps {
  className?: string;
  size?: number;
}

export default function AlphabetBlocks({ className = '', size = 44 }: AlphabetBlocksProps) {
  const blocks = [
    { letter: 'A', bg: '#FF3F68', border: '#D9234B', delay: 0, rot: -8 },
    { letter: 'B', bg: '#FFBA08', border: '#D99B00', delay: 0.2, rot: 6 },
    { letter: 'C', bg: '#08BFC1', border: '#059A9C', delay: 0.4, rot: -4 },
  ];

  return (
    <div className={`inline-flex items-center gap-2 select-none pointer-events-none ${className}`}>
      {blocks.map((b, i) => (
        <motion.div
          key={b.letter}
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -6, 0],
            rotate: [b.rot, b.rot + (i % 2 === 0 ? 3 : -3), b.rot],
          }}
          transition={{
            y: {
              duration: 2.8 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: b.delay,
            },
            rotate: {
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: b.delay,
            },
          }}
          className="rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
          style={{
            width: size,
            height: size,
            backgroundColor: b.bg,
            borderBottom: `4px solid ${b.border}`,
            borderRight: `2px solid ${b.border}`,
            fontFamily: 'var(--font-fredoka)',
            fontSize: size * 0.52,
          }}
        >
          {b.letter}
        </motion.div>
      ))}
    </div>
  );
}

