'use client';

import { motion } from 'motion/react';

interface BouncingCharacterProps {
  color?: string;
  size?: number;
  variant?: 'pink' | 'teal';
  className?: string;
}

export default function BouncingCharacter({
  color,
  size = 64,
  variant = 'pink',
  className = '',
}: BouncingCharacterProps) {
  const isPink = variant === 'pink';
  const charColor = color || (isPink ? '#FF3F68' : '#08BFC1');

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: isPink ? [0, 2, -2, 0] : [0, -2, 2, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 1.15 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 115"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Sparks above head */}
        {isPink ? (
          <g>
            <rect x="36" y="6" width="4" height="12" rx="2" fill="#FFBA08" transform="rotate(-25 38 12)" />
            <rect x="52" y="4" width="4" height="12" rx="2" fill="#FFBA08" />
          </g>
        ) : (
          <g>
            <rect x="56" y="6" width="4" height="12" rx="2" fill="#FFBA08" transform="rotate(25 58 12)" />
            <rect x="66" y="12" width="4" height="10" rx="2" fill="#A75CE2" transform="rotate(45 68 17)" />
          </g>
        )}

        {/* Head */}
        <circle cx="50" cy="38" r="22" fill={charColor} />

        {/* Smiling Face */}
        <ellipse cx="43" cy="35" rx="2" ry="3" fill="#07194F" />
        <ellipse cx="57" cy="35" rx="2" ry="3" fill="#07194F" />
        <path d="M43,41 Q50,49 57,41" stroke="#07194F" strokeWidth="2.5" strokeLinecap="round" fill="white" />

        {/* Rosy cheeks */}
        <circle cx="39" cy="40" r="2.5" fill="#FFBA08" opacity="0.6" />
        <circle cx="61" cy="40" r="2.5" fill="#FFBA08" opacity="0.6" />

        {/* Body */}
        <rect x="38" y="60" width="24" height="42" rx="10" fill={charColor} />

        {/* Arms */}
        {isPink ? (
          // Left child waving left hand
          <g>
            <path d="M38,68 C22,64 16,48 20,40" stroke={charColor} strokeWidth="11" strokeLinecap="round" fill="none" />
            <path d="M62,68 C72,74 76,82 74,90" stroke={charColor} strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        ) : (
          // Right child with open arms
          <g>
            <path d="M38,68 C24,66 16,74 18,84" stroke={charColor} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M62,68 C76,66 84,74 82,84" stroke={charColor} strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        )}
      </svg>
    </motion.div>
  );
}

