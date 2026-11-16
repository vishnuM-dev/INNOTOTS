'use client';

import { useState } from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import Lightbox from '@/components/gallery/Lightbox';
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
      {/* Warm Ivory Compact Hero matching Reference Design */}
      <GalleryHero />

      {/* Main Gallery Section with Floating Category Filters & 3-Column Grid */}
      <section className="pb-24 lg:pb-32 bg-white relative overflow-hidden">
        {/* Decorative Botanical Leaf Accents in Bottom Corners */}
        <div
          className="absolute -bottom-8 -left-8 w-44 h-44 pointer-events-none opacity-80 z-0"
          aria-hidden="true"
        >
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
            <path
              d="M10 160 C10 100 50 60 110 50 C110 90 80 140 10 160 Z"
              fill="#DDF5EC"
              stroke="#08BFC1"
              strokeWidth="2.5"
            />
            <path
              d="M0 160 C30 110 80 100 130 110 C110 140 60 160 0 160 Z"
              fill="#22C55E"
              opacity="0.35"
            />
            <path
              d="M40 160 C35 120 70 80 100 70"
              stroke="#08BFC1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          className="absolute -bottom-8 -right-8 w-44 h-44 pointer-events-none opacity-80 z-0 scale-x-[-1]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
            <path
              d="M10 160 C10 100 50 60 110 50 C110 90 80 140 10 160 Z"
              fill="#DDF5EC"
              stroke="#08BFC1"
              strokeWidth="2.5"
            />
            <path
              d="M0 160 C30 110 80 100 130 110 C110 140 60 160 0 160 Z"
              fill="#22C55E"
              opacity="0.35"
            />
            <path
              d="M40 160 C35 120 70 80 100 70"
              stroke="#08BFC1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GalleryFilter onItemClick={handleItemClick} />
        </div>
      </section>

      {/* Transition to Admission CTA */}
      <WaveDivider color="#572A8D" bgColor="#ffffff" />
      <AdmissionCTA />
      <WaveDivider color="#DDF3F1" bgColor="#572A8D" />

      {/* Lightbox Modal */}
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
