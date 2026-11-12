'use client';

import { motion } from 'motion/react';
import PinkMascot from './PinkMascot';
import TealMascot from './TealMascot';
import { Sparkles, Heart } from 'lucide-react';

interface MascotPairProps {
  size?: number;
  className?: string;
  badgeText?: string;
  showHearts?: boolean;
}

export default function MascotPair({
  size = 64,
  className = '',
  badgeText,
  showHearts = true,
}: MascotPairProps) {
  return (
    <div className={`relative inline-flex items-end justify-center select-none ${className}`}>
      {/* Floating little heart / sparkles between mascots */}
      {showHearts && (
        <motion.div
          animate={{
            y: [-3, -12, -3],
            opacity: [0.6, 1, 0.6],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center text-[#FF3F68]">
            <Heart size={13} fill="#FF3F68" />
          </div>
        </motion.div>
      )}

      {/* Mascots side-by-side */}
      <div className="flex items-end gap-1.5 sm:gap-2">
        <PinkMascot size={size} />
        <TealMascot size={size} />
      </div>

      {/* Optional Speech Bubble / Badge */}
      {badgeText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold bg-white text-[#07194F] shadow-xs border border-[#FFBA08]/40 flex items-center gap-1 z-20"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          <Sparkles size={11} className="text-[#FFBA08]" />
          <span>{badgeText}</span>
        </motion.div>
      )}
    </div>
  );
}

