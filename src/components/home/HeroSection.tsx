'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import FloatingShape from '@/components/animations/FloatingShape';
import MagicalBackground from '@/components/animations/MagicalBackground';
import MascotPair from '@/components/animations/MascotPair';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-24"
      style={{
        background: 'linear-gradient(180deg, #F0FAFA 0%, #E3F6F4 70%, #FFFFFF 100%)',
      }}
    >
      {/* Global Magical Background System */}
      <MagicalBackground preset="hero" />

      {/* Background floating playful shapes - calibrated to avoid collisions with background balloons & content */}
      <FloatingShape shape="circle" color="#FF3F68" size={60} delay={0} duration={5} className="absolute top-14 left-8 sm:left-12 pointer-events-none" opacity={0.14} />
      <FloatingShape shape="star" color="#FFBA08" size={42} delay={1.5} duration={5.5} className="absolute top-24 left-1/3 pointer-events-none" opacity={0.22} />
      <FloatingShape shape="circle" color="#A75CE2" size={46} delay={0.8} duration={5.2} className="absolute top-32 right-20 sm:right-28 pointer-events-none" opacity={0.14} />
      <FloatingShape shape="triangle" color="#08BFC1" size={38} delay={2} duration={5.8} className="absolute bottom-28 left-8 pointer-events-none" opacity={0.18} />
      <FloatingShape shape="star" color="#FF3F68" size={32} delay={3} duration={6.2} className="absolute bottom-16 right-16 pointer-events-none" opacity={0.22} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Text content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs mb-6 border border-[#FF3F68]/20 bg-white"
              style={{ color: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
            >
              <Sparkles size={16} className="text-[#FFBA08] animate-spin-slow" />
              <span>Welcome to InnoTots Preschool</span>
            </motion.div>

            {/* Staggered Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight mb-6 text-[#07194F]"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              <span>Little Minds, </span>
              <span className="relative inline-block text-[#FF3F68]">
                Big Dreams!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFBA08] opacity-80" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Where every little step leads to a world of discovery, creativity, happiness and learning. Giving your child the perfect foundation for life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Explore Our Programs</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/admissions-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: '#08BFC1', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Enquire for Admission</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-2 border-t border-[#07194F]/10"
            >
              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#08BFC1]/20">
                <div className="text-xl sm:text-2xl font-bold text-[#FF3F68]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  4
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Programs
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">1.5 - 5.5 Years</div>
              </div>

              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#FFBA08]/30">
                <div className="text-xl sm:text-2xl font-bold text-[#FFBA08]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  8+
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Activities
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Art & Music</div>
              </div>

              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#A75CE2]/20">
                <div className="text-xl sm:text-2xl font-bold text-[#572A8D]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  100%
                </div>
                <div className="text-xs font-bold text-[#07194F] mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Play-Based
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Safe & Caring</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Cheerful SVG illustration & Mascot Duo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-center relative"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <svg
                viewBox="0 0 500 480"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-sm overflow-visible"
              >
                {/* Soft glow background */}
                <ellipse cx="250" cy="300" rx="230" ry="160" fill="#DDF3F1" opacity="0.6" />

                {/* Rainbow - united in a dedicated group ensuring all layers remain perfectly aligned */}
                <g id="hero-rainbow">
                  <path d="M60,340 Q250,100 440,340" fill="none" stroke="#FF3F68" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
                  <path d="M75,340 Q250,120 425,340" fill="none" stroke="#FFBA08" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
                  <path d="M90,340 Q250,140 410,340" fill="none" stroke="#08BFC1" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
                  <path d="M105,340 Q250,160 395,340" fill="none" stroke="#A75CE2" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
                </g>

                {/* Ground */}
                <ellipse cx="250" cy="420" rx="200" ry="30" fill="#08BFC1" opacity="0.25" />
                <rect x="50" y="390" width="400" height="30" rx="15" fill="#08BFC1" opacity="0.18" />

                {/* Trees */}
                <rect x="80" y="340" width="12" height="60" fill="#572A8D" opacity="0.4" />
                <ellipse cx="86" cy="330" rx="22" ry="25" fill="#08BFC1" opacity="0.7" />
                <rect x="400" y="345" width="12" height="55" fill="#572A8D" opacity="0.4" />
                <ellipse cx="406" cy="333" rx="22" ry="25" fill="#A75CE2" opacity="0.6" />

                {/* Child silhouette 1 */}
                <circle cx="195" cy="310" r="22" fill="#FFBA08" />
                <ellipse cx="195" cy="315" rx="8" ry="6" fill="#FF3F68" opacity="0.4" />
                <rect x="183" y="332" width="24" height="30" rx="8" fill="#FF3F68" opacity="0.85" />
                <line x1="183" y1="340" x2="170" y2="360" stroke="#FFBA08" strokeWidth="6" strokeLinecap="round" />
                <line x1="207" y1="340" x2="220" y2="360" stroke="#FFBA08" strokeWidth="6" strokeLinecap="round" />
                <line x1="187" y1="362" x2="183" y2="385" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />
                <line x1="203" y1="362" x2="207" y2="385" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />

                {/* Child silhouette 2 */}
                <circle cx="300" cy="308" r="22" fill="#FF3F68" />
                <ellipse cx="300" cy="313" rx="8" ry="6" fill="#FFBA08" opacity="0.4" />
                <rect x="288" y="330" width="24" height="30" rx="8" fill="#A75CE2" opacity="0.85" />
                <line x1="288" y1="338" x2="275" y2="358" stroke="#FF3F68" strokeWidth="6" strokeLinecap="round" />
                <line x1="312" y1="338" x2="325" y2="358" stroke="#FF3F68" strokeWidth="6" strokeLinecap="round" />
                <line x1="292" y1="360" x2="288" y2="383" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />
                <line x1="308" y1="360" x2="312" y2="383" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />

                {/* Book */}
                <rect x="225" y="370" width="50" height="38" rx="4" fill="#572A8D" opacity="0.8" />
                <rect x="225" y="370" width="4" height="38" fill="#07194F" opacity="0.4" />
                <line x1="230" y1="380" x2="270" y2="380" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="230" y1="388" x2="270" y2="388" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="230" y1="396" x2="260" y2="396" stroke="white" strokeWidth="1.5" opacity="0.5" />

                {/* Pencil */}
                <rect x="345" y="355" width="8" height="40" rx="2" fill="#FFBA08" transform="rotate(-25,349,375)" />
                <polygon points="349,355 345,350 353,350" fill="#FF3F68" transform="rotate(-25,349,375) translate(0,-4)" />

                {/* Red/Coral Balloon with attached string - grouped in parent container */}
                <g
                  className="animate-balloon-1"
                  style={{
                    transformOrigin: '145px 260px',
                    transformBox: 'view-box',
                  }}
                >
                  <ellipse cx="140" cy="180" rx="22" ry="26" fill="#FF3F68" />
                  <ellipse cx="134" cy="170" rx="6" ry="8" fill="white" opacity="0.32" />
                  <polygon points="137,208 143,208 140,205" fill="#FF3F68" />
                  <path
                    d="M140,208 C138,225 146,242 145,260"
                    stroke="#FF3F68"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Yellow Balloon with attached string - grouped in parent container */}
                <g
                  className="animate-balloon-2"
                  style={{
                    transformOrigin: '248px 260px',
                    transformBox: 'view-box',
                  }}
                >
                  <ellipse cx="250" cy="155" rx="22" ry="26" fill="#FFBA08" />
                  <ellipse cx="244" cy="145" rx="6" ry="8" fill="white" opacity="0.32" />
                  <polygon points="247,183 253,183 250,180" fill="#FFBA08" />
                  <path
                    d="M250,183 C252,208 247,234 248,260"
                    stroke="#FFBA08"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Purple Balloon with attached string - grouped in parent container */}
                <g
                  className="animate-balloon-3"
                  style={{
                    transformOrigin: '358px 265px',
                    transformBox: 'view-box',
                  }}
                >
                  <ellipse cx="360" cy="175" rx="22" ry="26" fill="#A75CE2" />
                  <ellipse cx="354" cy="165" rx="6" ry="8" fill="white" opacity="0.32" />
                  <polygon points="357,203 363,203 360,200" fill="#A75CE2" />
                  <path
                    d="M360,203 C357,223 362,244 358,265"
                    stroke="#A75CE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Floating Clouds - slow, subtle drifting animation */}
                <g className="animate-drift" style={{ animationDuration: '8s' }}>
                  <ellipse cx="130" cy="90" rx="40" ry="18" fill="white" opacity="0.95" />
                  <ellipse cx="115" cy="80" rx="22" ry="20" fill="white" opacity="0.95" />
                  <ellipse cx="148" cy="78" rx="20" ry="18" fill="white" opacity="0.95" />
                </g>
                <g className="animate-drift" style={{ animationDuration: '10s', animationDelay: '2s' }}>
                  <ellipse cx="380" cy="70" rx="38" ry="16" fill="white" opacity="0.9" />
                  <ellipse cx="367" cy="62" rx="20" ry="18" fill="white" opacity="0.9" />
                  <ellipse cx="395" cy="60" rx="18" ry="16" fill="white" opacity="0.9" />
                </g>

                {/* Twinkling Stars - smooth scaling around center */}
                <polygon
                  points="170,42 173,52 183,52 175,58 178,68 170,62 162,68 165,58 157,52 167,52"
                  fill="#FFBA08"
                  opacity="0.9"
                  className="animate-twinkle"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '2.2s' }}
                />
                <polygon
                  points="330,55 332,62 339,62 333,67 335,74 330,70 325,74 327,67 321,62 328,62"
                  fill="#FF3F68"
                  opacity="0.85"
                  className="animate-twinkle"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '2.5s', animationDelay: '0.6s' }}
                />
                <polygon
                  points="430,120 432,127 439,127 433,132 435,139 430,135 425,139 427,132 421,127 428,127"
                  fill="#08BFC1"
                  opacity="0.85"
                  className="animate-twinkle"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '2.8s', animationDelay: '1.2s' }}
                />
              </svg>

              {/* Floating Interactive Mascot Pair - positioned safely within bounds */}
              <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:right-4 z-20 pointer-events-auto">
                <MascotPair size={58} badgeText="Say Hello!" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
