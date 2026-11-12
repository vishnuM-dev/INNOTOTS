'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import Lightbox from '@/components/gallery/Lightbox';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';
import AnimatedCloud from '@/components/animations/AnimatedCloud';
import PinkMascot from '@/components/animations/PinkMascot';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';
import { galleryItems } from '@/data/gallery';
import type { GalleryItem } from '@/types';

export default function GalleryView() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleItemClick = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((g) => g.id === item.id);
    setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28"
        style={{ background: 'linear-gradient(180deg, #FFF0F3 0%, #E6F7F5 100%)' }}
      >
        {/* Subtle clouds and twinkling stars */}
        <AnimatedCloud size={80} delay={0} duration={19} className="absolute top-6 left-[6%]" />
        <AnimatedCloud size={65} delay={3} duration={17} className="absolute top-12 right-[8%]" />
        <TwinklingStar color="#FFBA08" size={22} delay={0.4} className="absolute top-10 left-[24%]" />
        <TwinklingStar color="#FF3F68" size={18} delay={1.4} className="absolute top-16 right-[26%]" />

        <FloatingShape shape="circle" color="#FF3F68" size={70} delay={0} className="absolute top-8 left-6 pointer-events-none" opacity={0.15} />
        <FloatingShape shape="star" color="#FFBA08" size={50} delay={1} className="absolute bottom-16 right-8 pointer-events-none" opacity={0.2} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-4 flex justify-center pointer-events-auto">
            <PinkMascot size={64} />
          </div>

          <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-white/80 shadow-2xs text-gray-600" aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-nunito)' }}>
            <Link href="/" className="hover:text-[#FF3F68] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#FF3F68] font-bold">Gallery</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-[#07194F] tracking-tight"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            A visual walkthrough of the joyful smiles, creative masterpieces and vibrant campus moments at InnoTots Preschool.
          </motion.p>
        </div>

        {/* Full-width bottom wave into white */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10 md:h-12 block">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Gallery content */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilter onItemClick={handleItemClick} />
        </div>
      </section>

      {/* Transition to AdmissionCTA */}
      <WaveDivider color="#572A8D" bgColor="#ffffff" />
      <AdmissionCTA />
      <WaveDivider color="#DDF3F1" bgColor="#572A8D" />

      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}

