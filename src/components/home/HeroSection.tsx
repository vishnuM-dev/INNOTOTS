'use client';

import { motion } from 'motion/react';
import PlayfulButton from '@/components/animations/PlayfulButton';
import FloatingShape from '@/components/animations/FloatingShape';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #DDF3F1 60%, #ffffff 100%)',
        minHeight: '90vh',
      }}
    >
      {/* Background floating shapes */}
      <FloatingShape shape="circle" color="#FF3F68" size={80} delay={0} className="absolute top-10 left-4 pointer-events-none" opacity={0.1} />
      <FloatingShape shape="star" color="#FFBA08" size={50} delay={1.5} className="absolute top-20 left-1/4 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#A75CE2" size={60} delay={0.8} className="absolute top-32 right-10 pointer-events-none" opacity={0.1} />
      <FloatingShape shape="triangle" color="#08BFC1" size={40} delay={2} className="absolute bottom-32 left-10 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="star" color="#FF3F68" size={35} delay={3} className="absolute bottom-20 right-20 pointer-events-none" opacity={0.2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: '#FFF0F3', color: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              >
                🌟 Welcome to InnoTots Preschool
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}
            >
              Little Minds,{' '}
              <span style={{ color: '#FF3F68' }}>Big Dreams!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}
            >
              Where every little step leads to a world of discovery, creativity, happiness and learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <PlayfulButton
                href="/programs"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold text-base"
                style={{ backgroundColor: '#FF3F68', fontFamily: 'var(--font-nunito)' }}
              >
                Explore Our Programs
              </PlayfulButton>
              <PlayfulButton
                href="/admissions-contact"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold text-base"
                style={{ backgroundColor: '#08BFC1', fontFamily: 'var(--font-nunito)' }}
              >
                Enquire for Admission
              </PlayfulButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                { label: 'Happy Children', value: '🌟', text: 'Joyful learning' },
                { label: 'Programs', value: '4', text: 'Age-appropriate' },
                { label: 'Activities', value: '8+', text: 'Creative & fun' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#572A8D', fontFamily: 'var(--font-fredoka)' }}>{s.value}</div>
                  <div className="text-xs font-semibold" style={{ color: '#07194F', fontFamily: 'var(--font-nunito)' }}>{s.label}</div>
                  <div className="text-xs" style={{ color: '#888', fontFamily: 'var(--font-nunito)' }}>{s.text}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Inline SVG illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
            aria-hidden="true"
          >
            <svg viewBox="0 0 500 480" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
              {/* Sky background */}
              <ellipse cx="250" cy="300" rx="230" ry="160" fill="#DDF3F1" opacity="0.6" />

              {/* Rainbow */}
              <path d="M60,340 Q250,100 440,340" fill="none" stroke="#FF3F68" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
              <path d="M75,340 Q250,120 425,340" fill="none" stroke="#FFBA08" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
              <path d="M90,340 Q250,140 410,340" fill="none" stroke="#08BFC1" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
              <path d="M105,340 Q250,160 395,340" fill="none" stroke="#A75CE2" strokeWidth="8" strokeLinecap="round" opacity="0.7" />

              {/* Ground */}
              <ellipse cx="250" cy="420" rx="200" ry="30" fill="#08BFC1" opacity="0.2" />
              <rect x="50" y="390" width="400" height="30" rx="15" fill="#08BFC1" opacity="0.15" />

              {/* Trees */}
              <rect x="80" y="340" width="12" height="60" fill="#572A8D" opacity="0.4" />
              <ellipse cx="86" cy="330" rx="22" ry="25" fill="#08BFC1" opacity="0.6" />
              <rect x="400" y="345" width="12" height="55" fill="#572A8D" opacity="0.4" />
              <ellipse cx="406" cy="333" rx="22" ry="25" fill="#A75CE2" opacity="0.5" />

              {/* Child silhouette 1 */}
              <circle cx="195" cy="310" r="22" fill="#FFBA08" />
              <ellipse cx="195" cy="315" rx="8" ry="6" fill="#FF3F68" opacity="0.4" />
              <rect x="183" y="332" width="24" height="30" rx="8" fill="#FF3F68" opacity="0.8" />
              <line x1="183" y1="340" x2="170" y2="360" stroke="#FFBA08" strokeWidth="6" strokeLinecap="round" />
              <line x1="207" y1="340" x2="220" y2="360" stroke="#FFBA08" strokeWidth="6" strokeLinecap="round" />
              <line x1="187" y1="362" x2="183" y2="385" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />
              <line x1="203" y1="362" x2="207" y2="385" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />

              {/* Child silhouette 2 */}
              <circle cx="300" cy="308" r="22" fill="#FF3F68" />
              <ellipse cx="300" cy="313" rx="8" ry="6" fill="#FFBA08" opacity="0.4" />
              <rect x="288" y="330" width="24" height="30" rx="8" fill="#A75CE2" opacity="0.8" />
              <line x1="288" y1="338" x2="275" y2="358" stroke="#FF3F68" strokeWidth="6" strokeLinecap="round" />
              <line x1="312" y1="338" x2="325" y2="358" stroke="#FF3F68" strokeWidth="6" strokeLinecap="round" />
              <line x1="292" y1="360" x2="288" y2="383" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />
              <line x1="308" y1="360" x2="312" y2="383" stroke="#07194F" strokeWidth="6" strokeLinecap="round" />

              {/* Book */}
              <rect x="225" y="370" width="50" height="38" rx="4" fill="#572A8D" opacity="0.7" />
              <rect x="225" y="370" width="4" height="38" fill="#07194F" opacity="0.3" />
              <line x1="230" y1="380" x2="270" y2="380" stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1="230" y1="388" x2="270" y2="388" stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1="230" y1="396" x2="260" y2="396" stroke="white" strokeWidth="1.5" opacity="0.4" />

              {/* Pencil */}
              <rect x="345" y="355" width="8" height="40" rx="2" fill="#FFBA08" transform="rotate(-25,349,375)" />
              <polygon points="349,355 345,350 353,350" fill="#FF3F68" transform="rotate(-25,349,375) translate(0,-4)" />

              {/* Balloons */}
              {/* Red balloon */}
              <ellipse cx="140" cy="180" rx="22" ry="26" fill="#FF3F68" style={{ animation: 'float 4s ease-in-out infinite' }} />
              <ellipse cx="134" cy="170" rx="6" ry="8" fill="white" opacity="0.25" />
              <line x1="140" y1="206" x2="145" y2="260" stroke="#FF3F68" strokeWidth="1.5" />

              {/* Yellow balloon */}
              <ellipse cx="250" cy="155" rx="22" ry="26" fill="#FFBA08" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.8s' }} />
              <ellipse cx="244" cy="145" rx="6" ry="8" fill="white" opacity="0.25" />
              <line x1="250" y1="181" x2="248" y2="260" stroke="#FFBA08" strokeWidth="1.5" />

              {/* Purple balloon */}
              <ellipse cx="360" cy="175" rx="22" ry="26" fill="#A75CE2" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1.6s' }} />
              <ellipse cx="354" cy="165" rx="6" ry="8" fill="white" opacity="0.25" />
              <line x1="360" y1="201" x2="358" y2="265" stroke="#A75CE2" strokeWidth="1.5" />

              {/* Clouds */}
              <g style={{ animation: 'drift 7s ease-in-out infinite' }}>
                <ellipse cx="130" cy="90" rx="40" ry="18" fill="white" opacity="0.9" />
                <ellipse cx="115" cy="80" rx="22" ry="20" fill="white" opacity="0.9" />
                <ellipse cx="148" cy="78" rx="20" ry="18" fill="white" opacity="0.9" />
              </g>
              <g style={{ animation: 'drift 9s ease-in-out infinite', animationDelay: '2s' }}>
                <ellipse cx="380" cy="70" rx="38" ry="16" fill="white" opacity="0.85" />
                <ellipse cx="367" cy="62" rx="20" ry="18" fill="white" opacity="0.85" />
                <ellipse cx="395" cy="60" rx="18" ry="16" fill="white" opacity="0.85" />
              </g>

              {/* Stars */}
              <polygon points="170,42 173,52 183,52 175,58 178,68 170,62 162,68 165,58 157,52 167,52" fill="#FFBA08" opacity="0.9" style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
              <polygon points="330,55 332,62 339,62 333,67 335,74 330,70 325,74 327,67 321,62 328,62" fill="#FF3F68" opacity="0.8" style={{ animation: 'twinkle 2s ease-in-out infinite', animationDelay: '0.6s' }} />
              <polygon points="430,120 432,127 439,127 433,132 435,139 430,135 425,139 427,132 421,127 428,127" fill="#08BFC1" opacity="0.8" style={{ animation: 'twinkle 2.4s ease-in-out infinite', animationDelay: '1.2s' }} />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
