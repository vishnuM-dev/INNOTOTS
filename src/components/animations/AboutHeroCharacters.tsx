'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface BubbleProps {
  text: string;
  subtext?: string;
  emoji?: string;
  color?: string;
  visible: boolean;
  position?: 'top' | 'top-left' | 'top-right';
}

function SpeechBubble({
  text,
  subtext,
  emoji = '✨',
  color = '#FF3F68',
  visible,
  position = 'top',
}: BubbleProps) {
  const positionClasses = {
    top: '-top-14 left-1/2 -translate-x-1/2',
    'top-left': '-top-14 -left-4',
    'top-right': '-top-14 -right-4',
  }[position];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -6 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className={`absolute ${positionClasses} z-40 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2 whitespace-nowrap pointer-events-none select-none`}
        >
          <span className="text-sm">{emoji}</span>
          <div>
            <div className="text-xs font-bold leading-tight" style={{ color, fontFamily: 'var(--font-fredoka)' }}>
              {text}
            </div>
            {subtext && (
              <div className="text-[10px] text-gray-500 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
                {subtext}
              </div>
            )}
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Smiling Sunshine with Rotating Rays & Rosy Cheeks
 */
export function SmilingSunshine({
  className = '',
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: hovered ? 360 : [0, 4, -4, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: hovered
            ? { duration: 2, ease: 'linear', repeat: Infinity }
            : { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="cursor-pointer"
        style={{ width: size, height: size }}
        aria-label="Smiling sunshine"
      >
        <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible drop-shadow-sm" fill="none">
          {/* Sun Rays */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '32px 32px' }}
          >
            {/* 8 Soft Rounded Rays */}
            <line x1="32" y1="8" x2="32" y2="3" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="32" y1="61" x2="32" y2="56" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="8" y1="32" x2="3" y2="32" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="61" y1="32" x2="56" y2="32" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="15" y1="15" x2="11" y2="11" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="53" y1="53" x2="49" y2="49" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="15" y1="49" x2="11" y2="53" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
            <line x1="53" y1="11" x2="49" y2="15" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
          </motion.g>

          {/* Golden Center Sun Disc */}
          <circle cx="32" cy="32" r="16" fill="#FFBA08" />
          <circle cx="32" cy="32" r="14" fill="#FFC933" />

          {/* Cute Smiling Eyes */}
          <ellipse cx="27" cy="29" rx="2" ry="2.5" fill="#07194F" />
          <circle cx="27.8" cy="28.2" r="0.8" fill="#FFFFFF" />

          <ellipse cx="37" cy="29" rx="2" ry="2.5" fill="#07194F" />
          <circle cx="37.8" cy="28.2" r="0.8" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <ellipse cx="24" cy="33" rx="2.5" ry="1.8" fill="#FF3F68" opacity={0.65} />
          <ellipse cx="40" cy="33" rx="2.5" ry="1.8" fill="#FF3F68" opacity={0.65} />

          {/* Sweet Smile */}
          <path d="M28,34 Q32,38 36,34" stroke="#07194F" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Fluttering Bluebird with dashed loop trail
 */
export function AboutBluebird({
  className = '',
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Dashed Flight Trail Loop */}
      <svg
        viewBox="0 0 70 40"
        className="absolute -left-6 -bottom-2 w-16 h-10 pointer-events-none opacity-60"
        fill="none"
      >
        <path
          d="M4,28 C15,38 28,15 20,8 C12,2 25,12 42,18"
          stroke="#08BFC1"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>

      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          rotate: [-3, 5, -3],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer relative z-10"
        style={{ width: size, height: size * 0.8 }}
        aria-label="Happy fluttering bluebird"
      >
        <svg viewBox="0 0 54 44" className="w-full h-full drop-shadow-xs" fill="none">
          {/* Blue Body */}
          <ellipse cx="25" cy="24" rx="16" ry="13" fill="#08BFC1" />
          <ellipse cx="26" cy="27" rx="10" ry="8" fill="#DDF3F1" opacity={0.75} />

          {/* Tail */}
          <polygon points="6,24 0,18 2,28" fill="#08BFC1" />

          {/* Orange Beak */}
          <polygon points="40,20 48,23 40,26" fill="#FFBA08" />

          {/* Big Eye */}
          <ellipse cx="33" cy="19" rx="3.5" ry="4.5" fill="#FFFFFF" />
          <ellipse cx="34" cy="19" rx="2" ry="2.8" fill="#07194F" />
          <circle cx="35" cy="18" r="0.9" fill="#FFFFFF" />

          {/* Rosy Cheek */}
          <circle cx="29" cy="25" r="2.2" fill="#FF3F68" opacity={0.6} />

          {/* Flapping Wing */}
          <motion.path
            d="M20,23 C24,12 34,14 34,22 C34,28 24,30 18,26 Z"
            fill="#572A8D"
            opacity={0.85}
            animate={{ rotate: [-25, 25, -25], y: [0, -2, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '20px 23px' }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Fluttering Butterfly with curved flight trail
 */
export function AboutButterfly({
  className = '',
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Dashed Flight Trail Loop */}
      <svg
        viewBox="0 0 60 40"
        className="absolute -right-4 -bottom-3 w-14 h-9 pointer-events-none opacity-60"
        fill="none"
      >
        <path
          d="M48,25 C38,35 24,15 30,8 C36,2 24,12 8,18"
          stroke="#FF3F68"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, -5, 0],
          rotate: [4, -8, 4],
        }}
        transition={{
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer relative z-10"
        style={{ width: size, height: size }}
        aria-label="Fluttering pink butterfly"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-xs" fill="none">
          {/* Left Wing */}
          <motion.path
            d="M20,20 C18,8 10,2 2,6 C-3,10 2,24 12,24 C18,24 20,22 20,20 Z"
            fill="#FF3F68"
            animate={{ rotateY: [0, 60, 0] }}
            transition={{ duration: 0.22, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '20px 20px' }}
          />
          {/* Right Wing */}
          <motion.path
            d="M20,20 C22,8 30,2 38,6 C43,10 38,24 28,24 C22,24 20,22 20,20 Z"
            fill="#FFBA08"
            animate={{ rotateY: [0, -60, 0] }}
            transition={{ duration: 0.22, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '20px 20px' }}
          />
          {/* Lower Wings */}
          <path d="M20,20 C16,24 8,28 6,34 C4,38 12,40 16,36 C18,34 20,26 20,20 Z" fill="#A75CE2" opacity={0.8} />
          <path d="M20,20 C24,24 32,28 34,34 C36,38 28,40 24,36 C22,34 20,26 20,20 Z" fill="#FF3F68" opacity={0.8} />
          {/* Slender Body */}
          <line x1="20" y1="12" x2="20" y2="30" stroke="#07194F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="11" r="1.5" fill="#07194F" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Interactive Baby Elephant on Grassy Hill
 * Gently moving trunk, wiggling ears, interactive speech bubble
 */
export function InteractiveElephant({
  className = '',
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <SpeechBubble
        text="Little steps, big dreams!"
        subtext="Let's trumpet for joy!"
        emoji="🐘"
        color="#08BFC1"
        visible={active}
        position="top-right"
      />

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [-0.8, 0.8, -0.8],
        }}
        transition={{
          y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setActive(!active)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="cursor-pointer relative group"
        aria-label="Adorable baby cartoon elephant"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xs border-2 border-white/60 bg-transparent">
          <Image
            src="/images/about-elephant.png"
            alt="Adorable baby cartoon elephant sitting next to books"
            width={280}
            height={220}
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
            priority
          />

          {/* Animated Trunk Wave Overlay */}
          <motion.div
            animate={{
              rotate: [-4, 6, -4],
              y: [0, -3, 0],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[32%] right-[24%] w-8 h-8 pointer-events-none"
            style={{ transformOrigin: 'left bottom' }}
          >
            {/* Playful water droplet/heart when active */}
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: -12 }}
                  exit={{ opacity: 0 }}
                  className="text-[#08BFC1]"
                >
                  <Heart size={14} fill="#08BFC1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Interactive Baby Lion on Grassy Hill
 * Occasionally blinks, gentle breathing sway, interactive speech bubble
 */
export function InteractiveLion({
  className = '',
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <SpeechBubble
        text="Be brave, be kind!"
        subtext="Roar with a happy smile!"
        emoji="🦁"
        color="#FFBA08"
        visible={active}
        position="top-left"
      />

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0.8, -0.8, 0.8],
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setActive(!active)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="cursor-pointer relative group"
        aria-label="Adorable baby cartoon lion"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xs border-2 border-white/60 bg-transparent">
          <Image
            src="/images/about-lion.png"
            alt="Adorable baby cartoon lion smiling next to books"
            width={280}
            height={220}
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
            priority
          />

          {/* Interactive Sparkle above lion */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 0 }}
                animate={{ opacity: 1, scale: 1.2, y: -10 }}
                exit={{ opacity: 0 }}
                className="absolute top-2 right-8 text-[#FFBA08] pointer-events-none"
              >
                <Star size={16} fill="#FFBA08" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Four Children Peeking Over Fluffy Cloud with Rainbow
 * Gentle waving arms, blinking eyes, head tilts, and interactive touch bubbles
 */
export function FourChildrenOverCloud({
  className = '',
}: {
  className?: string;
}) {
  const [activeChild, setActiveChild] = useState<number | null>(null);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* 4 Child Specific Speech Bubbles */}
      <SpeechBubble
        text="Welcome to InnoTots!"
        subtext="Learning is an adventure!"
        emoji="👋"
        color="#FFBA08"
        visible={activeChild === 1}
        position="top-left"
      />
      <SpeechBubble
        text="We love making new friends!"
        subtext="Every day is filled with joy!"
        emoji="💖"
        color="#FF3F68"
        visible={activeChild === 2}
        position="top"
      />
      <SpeechBubble
        text="Let's play and discover!"
        subtext="Ready for big smiles!"
        emoji="🧢"
        color="#08BFC1"
        visible={activeChild === 3}
        position="top"
      />
      <SpeechBubble
        text="Books & curiosity forever!"
        subtext="Exploring wonder together!"
        emoji="📚"
        color="#A75CE2"
        visible={activeChild === 4}
        position="top-right"
      />

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative group rounded-3xl overflow-hidden"
      >
        {/* Main 4 Children & Rainbow Image */}
        <Image
          src="/images/about-children-cloud.png"
          alt="Four adorable 3D preschool children smiling, waving and peeking over a fluffy cloud with a pastel rainbow"
          width={540}
          height={230}
          className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-md"
          priority
        />

        {/* Subtle Rainbow Shimmer Streak along the curve */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-4 left-0 w-1/3 h-16 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 pointer-events-none"
        />

        {/* 4 Interactive Hotspots for Children */}
        {/* 1. Yellow Shirt Boy (Far Left) */}
        <button
          onClick={() => setActiveChild(activeChild === 1 ? null : 1)}
          onMouseEnter={() => setActiveChild(1)}
          onMouseLeave={() => setActiveChild(null)}
          className="absolute left-[2%] bottom-[12%] w-[22%] h-[68%] rounded-full cursor-pointer focus:outline-none z-20 group"
          aria-label="Waving boy in yellow shirt"
        >
          <div className="absolute inset-1 rounded-full border-2 border-transparent group-hover:border-[#FFBA08]/40 transition-colors" />
        </button>

        {/* 2. Pink Shirt Girl (Middle Left) */}
        <button
          onClick={() => setActiveChild(activeChild === 2 ? null : 2)}
          onMouseEnter={() => setActiveChild(2)}
          onMouseLeave={() => setActiveChild(null)}
          className="absolute left-[26%] bottom-[12%] w-[22%] h-[68%] rounded-full cursor-pointer focus:outline-none z-20 group"
          aria-label="Smiling girl in pink shirt"
        >
          <div className="absolute inset-1 rounded-full border-2 border-transparent group-hover:border-[#FF3F68]/40 transition-colors" />
        </button>

        {/* 3. Teal Shirt Boy with Cap (Middle Right) */}
        <button
          onClick={() => setActiveChild(activeChild === 3 ? null : 3)}
          onMouseEnter={() => setActiveChild(3)}
          onMouseLeave={() => setActiveChild(null)}
          className="absolute left-[52%] bottom-[12%] w-[22%] h-[68%] rounded-full cursor-pointer focus:outline-none z-20 group"
          aria-label="Smiling boy in teal cap"
        >
          <div className="absolute inset-1 rounded-full border-2 border-transparent group-hover:border-[#08BFC1]/40 transition-colors" />
        </button>

        {/* 4. Girl with Glasses & Pigtails (Far Right) */}
        <button
          onClick={() => setActiveChild(activeChild === 4 ? null : 4)}
          onMouseEnter={() => setActiveChild(4)}
          onMouseLeave={() => setActiveChild(null)}
          className="absolute right-[2%] bottom-[12%] w-[22%] h-[68%] rounded-full cursor-pointer focus:outline-none z-20 group"
          aria-label="Waving girl with glasses and pigtails"
        >
          <div className="absolute inset-1 rounded-full border-2 border-transparent group-hover:border-[#A75CE2]/40 transition-colors" />
        </button>
      </motion.div>
    </div>
  );
}

/**
 * Swaying Meadow Flowers for the bottom grass line
 */
export function SwayingFlowers() {
  return (
    <div className="flex items-center gap-6 sm:gap-12 pointer-events-none select-none" aria-hidden="true">
      <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom center' }}
        className="text-[#FF3F68]"
      >
        <span className="text-xl sm:text-2xl">🌸</span>
      </motion.div>
      <motion.div
        animate={{ rotate: [6, -6, 6] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{ transformOrigin: 'bottom center' }}
        className="text-[#FFBA08]"
      >
        <span className="text-lg sm:text-xl">🌼</span>
      </motion.div>
      <motion.div
        animate={{ rotate: [-4, 6, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{ transformOrigin: 'bottom center' }}
        className="text-[#08BFC1]"
      >
        <span className="text-base sm:text-lg">🌺</span>
      </motion.div>
      <motion.div
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        style={{ transformOrigin: 'bottom center' }}
        className="text-[#A75CE2]"
      >
        <span className="text-lg sm:text-xl">🌷</span>
      </motion.div>
    </div>
  );
}
