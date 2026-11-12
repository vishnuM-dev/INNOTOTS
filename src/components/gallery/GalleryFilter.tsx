'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import type { GalleryItem } from '@/types';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { Maximize2, Sparkles } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Infrastructure: '#572A8D',
  Classrooms: '#08BFC1',
  Activities: '#FF3F68',
  Events: '#FFBA08',
  Celebrations: '#A75CE2',
  'Learning Moments': '#07194F',
};

interface GalleryFilterProps {
  onItemClick?: (item: GalleryItem) => void;
}

export default function GalleryFilter({ onItemClick }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                isActive
                  ? 'bg-[#FF3F68] text-white shadow-sm scale-105'
                  : 'bg-white text-gray-700 hover:text-[#FF3F68] hover:bg-[#FFF0F3] border border-gray-200'
              }`}
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const catColor = categoryColors[item.category] || '#08BFC1';
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group cursor-pointer"
                onClick={() => onItemClick?.(item)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      label={item.alt}
                      category={item.category}
                      color={catColor + '18'}
                      height={200}
                      rounded={false}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover view overlay */}
                    <div className="absolute inset-0 bg-[#07194F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 text-[#07194F] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4 flex items-center justify-between mt-auto">
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider block mb-0.5"
                        style={{ color: catColor, fontFamily: 'var(--font-nunito)' }}
                      >
                        {item.category}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#07194F] line-clamp-1" style={{ fontFamily: 'var(--font-fredoka)' }}>
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-gray-500 font-semibold" style={{ fontFamily: 'var(--font-nunito)' }}>
            No photos found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
