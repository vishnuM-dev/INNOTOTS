'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface CharacterBubbleProps {
  text: string;
  subtext?: string;
  emoji?: string;
  color?: string;
  visible: boolean;
  position?: 'top' | 'top-right' | 'top-left';
}

function CharacterBubble({
  text,
  subtext,
  emoji = '✨',
  color = '#FF3F68',
  visible,
  position = 'top',
}: CharacterBubbleProps) {
  const positionClasses = {
    top: '-top-14 left-1/2 -translate-x-1/2',
    'top-right': '-top-14 -right-4',
    'top-left': '-top-14 -left-4',
  }[position];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -6 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className={`absolute ${positionClasses} z-40 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2 whitespace-nowrap pointer-events-none`}
        >
          <span className="text-sm select-none">{emoji}</span>
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
          {/* Speech triangle */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Smiling Giraffe Peeking from behind school
 */
export function PeekingGiraffe({
  className = '',
  size = 110,
}: {
  className?: string;
  size?: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <CharacterBubble
        text="Hello little explorer!"
        subtext="Let's reach high!"
        emoji="🦒"
        color="#FFBA08"
        visible={active}
        position="top"
      />
      <motion.div
        animate={{
          y: active ? -12 : [0, -6, 0],
          rotate: active ? [0, 4, -4, 0] : [-1, 2, -1],
        }}
        transition={{
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.12, y: -16 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive(!active)}
        className="cursor-pointer"
        style={{ width: size, height: size * 1.3 }}
        aria-label="Friendly smiling giraffe"
      >
        <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
          {/* Giraffe Neck */}
          <path d="M40,130 C40,80 44,45 52,35 C56,45 60,80 60,130 Z" fill="#FFBA08" />
          {/* Spots on neck */}
          <ellipse cx="48" cy="85" rx="6" ry="8" fill="#E28905" opacity={0.75} />
          <ellipse cx="54" cy="110" rx="5" ry="7" fill="#E28905" opacity={0.75} />
          <ellipse cx="50" cy="55" rx="4" ry="6" fill="#E28905" opacity={0.75} />

          {/* Ossicones (Horns) */}
          <line x1="44" y1="28" x2="38" y2="10" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
          <circle cx="38" cy="9" r="4.5" fill="#E28905" />
          <line x1="60" y1="28" x2="66" y2="10" stroke="#FFBA08" strokeWidth="4" strokeLinecap="round" />
          <circle cx="66" cy="9" r="4.5" fill="#E28905" />

          {/* Ears with subtle wiggle */}
          <motion.ellipse
            cx="32"
            cy="28"
            rx="8"
            ry="4"
            fill="#FFBA08"
            transform="rotate(-25 32 28)"
            animate={{ rotate: [-25, -35, -25] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <motion.ellipse
            cx="72"
            cy="28"
            rx="8"
            ry="4"
            fill="#FFBA08"
            transform="rotate(25 72 28)"
            animate={{ rotate: [25, 35, 25] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
          />

          {/* Head */}
          <ellipse cx="52" cy="32" rx="16" ry="14" fill="#FFBA08" />
          {/* Muzzle */}
          <ellipse cx="52" cy="40" rx="13" ry="10" fill="#FFF2C2" />
          {/* Nostrils */}
          <circle cx="48" cy="40" r="1.5" fill="#C47300" />
          <circle cx="56" cy="40" r="1.5" fill="#C47300" />

          {/* Smiling Mouth */}
          <path d="M46,43 Q52,47 58,43" stroke="#C47300" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Big Cartoon Eyes with Blinking */}
          <g>
            <circle cx="45" cy="27" r="4" fill="#FFFFFF" />
            <motion.ellipse
              cx="45.5"
              cy="27"
              rx="2.5"
              ry="3"
              fill="#07194F"
              animate={{ scaleY: [1, 1, 0.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5 }}
              style={{ transformOrigin: '45.5px 27px' }}
            />
            <circle cx="46.5" cy="26" r="1" fill="#FFFFFF" />

            <circle cx="59" cy="27" r="4" fill="#FFFFFF" />
            <motion.ellipse
              cx="59.5"
              cy="27"
              rx="2.5"
              ry="3"
              fill="#07194F"
              animate={{ scaleY: [1, 1, 0.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5 }}
              style={{ transformOrigin: '59.5px 27px' }}
            />
            <circle cx="60.5" cy="26" r="1" fill="#FFFFFF" />
          </g>

          {/* Rosy Cheeks */}
          <ellipse cx="38" cy="34" rx="3.5" ry="2.5" fill="#FF3F68" opacity={0.5} />
          <ellipse cx="66" cy="34" rx="3.5" ry="2.5" fill="#FF3F68" opacity={0.5} />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Smiling Rabbit in Hot Air Balloon
 */
export function RabbitHotAirBalloon({
  className = '',
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <CharacterBubble
        text="Soaring high in dreams!"
        subtext="Hop aboard with us!"
        emoji="🐰"
        color="#FF3F68"
        visible={active}
        position="top"
      />
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-1.8, 1.8, -1.8],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, y: -24 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive(!active)}
        className="cursor-pointer"
        style={{ width: size, height: size * 1.45 }}
        aria-label="Cute rabbit floating in colorful hot air balloon"
      >
        <svg viewBox="0 0 120 174" className="w-full h-full drop-shadow-md overflow-visible" fill="none">
          {/* Balloon Canopy with InnoTots Palette Stripes */}
          <defs>
            <radialGradient id="balloonGlow" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center Main Balloon Bulb */}
          <path
            d="M60,10 C25,10 10,40 16,80 C20,102 46,116 54,120 L66,120 C74,116 100,102 104,80 C110,40 95,10 60,10 Z"
            fill="#FF3F68"
          />

          {/* Striped colorful segments */}
          {/* Yellow Segment */}
          <path
            d="M60,10 C42,10 32,40 36,80 C38,102 52,116 56,120 L64,120 C68,116 82,102 84,80 C88,40 78,10 60,10 Z"
            fill="#FFBA08"
          />
          {/* Teal Segment */}
          <path
            d="M60,10 C50,10 46,40 48,80 C50,102 56,116 58,120 L62,120 C64,116 70,102 72,80 C74,40 70,10 60,10 Z"
            fill="#08BFC1"
          />
          {/* Soft highlight sheen */}
          <path
            d="M60,10 C25,10 10,40 16,80 C20,102 46,116 54,120 L66,120 C74,116 100,102 104,80 C110,40 95,10 60,10 Z"
            fill="url(#balloonGlow)"
          />

          {/* Rigging Lines */}
          <line x1="38" y1="120" x2="44" y2="142" stroke="#B87333" strokeWidth="1.5" />
          <line x1="50" y1="120" x2="48" y2="142" stroke="#B87333" strokeWidth="1.2" />
          <line x1="70" y1="120" x2="72" y2="142" stroke="#B87333" strokeWidth="1.2" />
          <line x1="82" y1="120" x2="76" y2="142" stroke="#B87333" strokeWidth="1.5" />

          {/* Wicker Basket */}
          <rect x="42" y="142" width="36" height="26" rx="5" fill="#D28C4B" />
          <line x1="42" y1="150" x2="78" y2="150" stroke="#9C5A20" strokeWidth="1.5" />
          <line x1="42" y1="158" x2="78" y2="158" stroke="#9C5A20" strokeWidth="1.5" />
          <line x1="51" y1="142" x2="51" y2="168" stroke="#9C5A20" strokeWidth="1.5" />
          <line x1="60" y1="142" x2="60" y2="168" stroke="#9C5A20" strokeWidth="1.5" />
          <line x1="69" y1="142" x2="69" y2="168" stroke="#9C5A20" strokeWidth="1.5" />

          {/* Adorable Smiling Bunny Peeking from Basket */}
          {/* Bunny Ears */}
          <motion.ellipse
            cx="52"
            cy="128"
            rx="4.5"
            ry="11"
            fill="#FFFFFF"
            transform="rotate(-10 52 128)"
            animate={{ rotate: [-10, -18, -10] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ellipse cx="52" cy="128" rx="2.5" ry="8" fill="#FFCFDE" transform="rotate(-10 52 128)" />

          <motion.ellipse
            cx="66"
            cy="128"
            rx="4.5"
            ry="11"
            fill="#FFFFFF"
            transform="rotate(12 66 128)"
            animate={{ rotate: [12, 22, 12] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <ellipse cx="66" cy="128" rx="2.5" ry="8" fill="#FFCFDE" transform="rotate(12 66 128)" />

          {/* Bunny Head */}
          <circle cx="59" cy="138" r="10" fill="#FFFFFF" />
          {/* Bunny Cheeks */}
          <circle cx="54" cy="140" r="2.5" fill="#FF3F68" opacity={0.45} />
          <circle cx="64" cy="140" r="2.5" fill="#FF3F68" opacity={0.45} />
          {/* Bunny Eyes */}
          <motion.ellipse
            cx="55.5"
            cy="136"
            rx="1.5"
            ry="2.2"
            fill="#07194F"
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            style={{ transformOrigin: '55.5px 136px' }}
          />
          <motion.ellipse
            cx="62.5"
            cy="136"
            rx="1.5"
            ry="2.2"
            fill="#07194F"
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            style={{ transformOrigin: '62.5px 136px' }}
          />
          {/* Nose & Mouth */}
          <polygon points="59,139 57.5,138 60.5,138" fill="#FF3F68" />
          <path d="M57,141 Q59,143 61,141" stroke="#07194F" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Waving Paw on Basket Rim */}
          <motion.ellipse
            cx="48"
            cy="144"
            rx="3"
            ry="2.5"
            fill="#FFFFFF"
            stroke="#E0E0E0"
            strokeWidth="0.8"
            animate={{ y: [0, -4, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '48px 144px' }}
          />
          <ellipse cx="69" cy="144" rx="3" ry="2.5" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.8" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Storybook Children Interactive Touchpoints Overlay
 * Positioned seamlessly on top of the hero illustration meadow!
 */
export function StorybookChildrenInteractiveLayer() {
  const [activeChild, setActiveChild] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none" aria-label="Interactive preschool children">
      {/* 1. Left Boy (Yellow hoodie reading blue book) */}
      <div className="absolute left-[8%] sm:left-[10%] bottom-[12%] sm:bottom-[14%] w-24 sm:w-32 h-24 sm:h-32 pointer-events-auto">
        <CharacterBubble
          text="I love storybooks!"
          subtext="Adventures on every page!"
          emoji="📖"
          color="#08BFC1"
          visible={activeChild === 1}
          position="top"
        />
        <motion.button
          onClick={() => setActiveChild(activeChild === 1 ? null : 1)}
          onHoverStart={() => setActiveChild(1)}
          onHoverEnd={() => setActiveChild(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group"
          aria-label="Boy reading book"
        >
          {/* Subtle playful pulse ring on hover */}
          <div className="absolute inset-2 rounded-full border-2 border-[#08BFC1]/0 group-hover:border-[#08BFC1]/50 group-hover:scale-105 transition-all duration-300" />
          {/* Floating animated sparkles over book */}
          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 left-1/3 text-[#FFBA08]"
          >
            <Sparkles size={16} />
          </motion.div>
        </motion.button>
      </div>

      {/* 2. Center Girl (Pink outfit smiling on grass) */}
      <div className="absolute left-[34%] sm:left-[36%] bottom-[14%] sm:bottom-[16%] w-24 sm:w-32 h-24 sm:h-32 pointer-events-auto">
        <CharacterBubble
          text="InnoTots is super fun!"
          subtext="Come play with me!"
          emoji="💖"
          color="#FF3F68"
          visible={activeChild === 2}
          position="top"
        />
        <motion.button
          onClick={() => setActiveChild(activeChild === 2 ? null : 2)}
          onHoverStart={() => setActiveChild(2)}
          onHoverEnd={() => setActiveChild(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group"
          aria-label="Girl smiling on grass"
        >
          <div className="absolute inset-2 rounded-full border-2 border-[#FF3F68]/0 group-hover:border-[#FF3F68]/50 group-hover:scale-105 transition-all duration-300" />
          <motion.div
            animate={{ y: [0, -8, 0], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#FF3F68]"
          >
            <Heart size={16} fill="#FF3F68" />
          </motion.div>
        </motion.button>
      </div>

      {/* 3. Right Boy (Teal shirt & cap drawing with crayons) */}
      <div className="absolute right-[12%] sm:right-[15%] bottom-[10%] sm:bottom-[12%] w-28 sm:w-36 h-24 sm:h-32 pointer-events-auto">
        <CharacterBubble
          text="Drawing rainbows & dreams!"
          subtext="Look at my art!"
          emoji="🎨"
          color="#FFBA08"
          visible={activeChild === 3}
          position="top"
        />
        <motion.button
          onClick={() => setActiveChild(activeChild === 3 ? null : 3)}
          onHoverStart={() => setActiveChild(3)}
          onHoverEnd={() => setActiveChild(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group"
          aria-label="Boy drawing with crayons"
        >
          <div className="absolute inset-2 rounded-full border-2 border-[#FFBA08]/0 group-hover:border-[#FFBA08]/50 group-hover:scale-105 transition-all duration-300" />
          <motion.div
            animate={{ rotate: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
            className="absolute -top-2 right-1/4 text-[#FFBA08]"
          >
            <Star size={16} fill="#FFBA08" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
