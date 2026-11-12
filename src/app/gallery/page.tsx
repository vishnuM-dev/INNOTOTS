'use client';

import { useState } from 'react';
import Link from 'next/link';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import Lightbox from '@/components/gallery/Lightbox';
import FloatingShape from '@/components/animations/FloatingShape';
import { galleryItems } from '@/data/gallery';
import type { GalleryItem } from '@/types';

export default function GalleryPage() {
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
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: 'linear-gradient(135deg, #FFF0F3 0%, #DDF3F1 100%)' }}
      >
        <FloatingShape shape="circle" color="#FF3F68" size={70} delay={0} className="absolute top-8 left-6 pointer-events-none" opacity={0.15} />
        <FloatingShape shape="star" color="#FFBA08" size={50} delay={1} className="absolute bottom-8 right-8 pointer-events-none" opacity={0.2} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#666' }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li style={{ color: '#FF3F68' }}>Gallery</li>
            </ol>
          </nav>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}
          >
            Our Gallery
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}
          >
            A visual journey through the joyful moments, creative activities and vibrant spaces of InnoTots Preschool.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery content */}
      <section className="py-16" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilter onItemClick={handleItemClick} />
        </div>
      </section>

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
