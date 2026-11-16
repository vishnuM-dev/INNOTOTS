'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Home, Heart } from 'lucide-react';

export default function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
      style={{ backgroundColor: '#FFF9F2' }}
    >
      {/* Background Decorative Ambient Shapes */}
      <div
        className="absolute top-10 left-[15%] w-64 h-64 rounded-full bg-[#FFE1E9]/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-[15%] w-64 h-64 rounded-full bg-[#DDF5EC]/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Cheerful Boy with Painted Hands & Smiling Sun */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col items-center lg:items-start relative">
            {/* Smiling Sun Doodle */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 sm:-top-14 left-2 sm:left-4 z-20 pointer-events-none"
              aria-hidden="true"
            >
              <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
                {/* Sun Center */}
                <circle cx="30" cy="30" r="14" fill="#FFBE18" />
                {/* Cute Smiling Face */}
                <ellipse cx="25" cy="27" rx="1.8" ry="2.2" fill="#0B2054" />
                <ellipse cx="35" cy="27" rx="1.8" ry="2.2" fill="#0B2054" />
                <path d="M25 33 Q30 38 35 33" stroke="#0B2054" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Rosy Cheeks */}
                <circle cx="22" cy="31" r="1.8" fill="#FF2465" opacity="0.6" />
                <circle cx="38" cy="31" r="1.8" fill="#FF2465" opacity="0.6" />
                {/* Sun Rays */}
                <line x1="30" y1="8" x2="30" y2="3" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="30" y1="57" x2="30" y2="52" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="30" x2="3" y2="30" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="57" y1="30" x2="52" y2="30" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="14" y1="14" x2="10" y2="10" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="50" x2="46" y2="46" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="14" y1="46" x2="10" y2="50" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="14" x2="46" y2="10" stroke="#FFBE18" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Boy Container with Soft Pink Blob & Action Marks */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 sm:w-56 lg:w-64 flex justify-center"
            >
              {/* Pink Hand-Drawn Splash / Action Marks */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 top-10 pointer-events-none"
              >
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path d="M4 8 Q12 10 20 6" stroke="#FF2465" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M2 16 Q10 18 18 16" stroke="#FF2465" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M4 24 Q12 26 20 28" stroke="#FF2465" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Soft Pink Organic Backdrop Blob */}
              <div
                className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[#FFE1E9] -z-10 scale-105"
                aria-hidden="true"
              />

              {/* Smiling Boy with Painted Hands Photo */}
              <Image
                src="/images/gallery/hero-boy.png"
                alt="Cheerful preschool boy with painted hands"
                width={255}
                height={220}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm rounded-3xl"
                priority
              />
            </motion.div>
          </div>

          {/* Center Column: Heading, Subtitle & Description */}
          <div className="order-1 lg:order-2 lg:col-span-6 text-center px-2">
            {/* Breadcrumb Pill */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#0B2054] shadow-xs border border-gray-100 mb-3"
              aria-label="Breadcrumb"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              <Home size={13} className="text-[#0B2054]" />
              <Link href="/" className="hover:text-[#FF2465] transition-colors">Home</Link>
              <span className="text-gray-400 font-normal">&gt;</span>
              <span className="text-[#0B2054]">Gallery</span>
            </motion.nav>

            {/* Sunburst Rays above "Our" */}
            <div className="flex justify-center -mb-2">
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
              >
                <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                  <line x1="8" y1="20" x2="3" y2="4" stroke="#FFBE18" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="18" y1="20" x2="18" y2="2" stroke="#FFBE18" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="28" y1="20" x2="33" y2="4" stroke="#FFBE18" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>

            {/* Main Heading: "Our Gallery" */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              <span className="text-[#0B2054]">Our </span>
              <span className="text-[#FF2465]">Gallery</span>
            </motion.h1>

            {/* Subtitle with Hearts on Soft Pink Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FFE1E9] text-[#FF2465] shadow-2xs mb-4"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              <Heart size={12} fill="#FF2465" className="text-[#FF2465] flex-shrink-0" />
              <span>Moments of Learning, Fun &amp; Growth</span>
              <Heart size={12} fill="#FF2465" className="text-[#FF2465] flex-shrink-0" />
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-base text-gray-600 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              A visual walkthrough of the joyful smiles, creative masterpieces and vibrant campus moments at InnoTots Preschool.
            </motion.p>
          </div>

          {/* Right Column: Cheerful Girl with Paper Airplane & Crown */}
          <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col items-center lg:items-end relative">
            {/* Paper Airplane with Dashed Flight Path */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 4, 0],
                rotate: [0, 3, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 sm:-top-14 right-2 sm:right-6 z-20 pointer-events-none"
              aria-hidden="true"
            >
              <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
                {/* Dashed Flight Loop Path */}
                <path
                  d="M4 35 C18 42, 28 20, 20 12 C14 6, 26 12, 40 18"
                  stroke="#08BFC1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="3.5 3.5"
                  fill="none"
                  opacity="0.8"
                />
                {/* Paper Airplane */}
                <g transform="translate(40, 6) rotate(10)">
                  <polygon points="0,14 26,0 16,22 11,15" fill="#DDF5EC" stroke="#08BFC1" strokeWidth="2" strokeLinejoin="round" />
                  <polygon points="11,15 26,0 16,22" fill="#08BFC1" opacity="0.3" stroke="#08BFC1" strokeWidth="1" strokeLinejoin="round" />
                </g>
              </svg>
            </motion.div>

            {/* Girl Container with Soft Mint Blob & Golden Crown */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 sm:w-56 lg:w-64 flex justify-center"
            >
              {/* Golden Crown above Girl's head */}
              <motion.div
                animate={{
                  rotate: [6, 12, 6],
                  y: [0, -3, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 right-10 sm:right-12 z-20 pointer-events-none"
              >
                <svg width="30" height="24" viewBox="0 0 32 26" fill="none">
                  <path
                    d="M3 22 L7 7 L16 15 L25 5 L29 22 Z"
                    fill="#FFBE18"
                    stroke="#FFBE18"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="7" cy="6" r="2" fill="#FF2465" />
                  <circle cx="16" cy="14" r="2" fill="#08BFC1" />
                  <circle cx="25" cy="4" r="2" fill="#FF2465" />
                </svg>
              </motion.div>

              {/* Soft Mint Organic Backdrop Blob */}
              <div
                className="absolute inset-0 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-[#DDF5EC] -z-10 scale-105"
                aria-hidden="true"
              />

              {/* Smiling Girl Photo */}
              <Image
                src="/images/gallery/hero-girl.png"
                alt="Smiling preschool girl"
                width={230}
                height={220}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm rounded-3xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
