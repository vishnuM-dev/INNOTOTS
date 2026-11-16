'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import type { GalleryItem } from '@/types';
import {
  LayoutGrid,
  Building2,
  GraduationCap,
  Sparkles,
  Calendar,
  Gift,
  Sprout,
  Maximize2,
  Eye,
} from 'lucide-react';

const categoryConfig: Record<
  string,
  { icon: React.ComponentType<{ size?: number; className?: string }>; color: string }
> = {
  All: { icon: LayoutGrid, color: '#FF2465' },
  Infrastructure: { icon: Building2, color: '#FFBE18' },
  Classrooms: { icon: GraduationCap, color: '#FF2465' },
  Activities: { icon: Sparkles, color: '#FFBE18' },
  Events: { icon: Calendar, color: '#A75CE2' },
  Celebrations: { icon: Gift, color: '#FF2465' },
  'Learning Moments': { icon: Sprout, color: '#08BFC1' },
};

interface GalleryFilterProps {
  onItemClick?: (item: GalleryItem) => void;
}

export default function GalleryFilter({ onItemClick }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative">
      {/* Floating Category Filter Pill Bar */}
      <div className="-mt-8 sm:-mt-10 mb-12 sm:mb-16 relative z-20 px-2">
        <div className="max-w-5xl mx-auto flex items-center justify-start lg:justify-center gap-2 p-2 bg-white rounded-full shadow-sm border border-gray-100 overflow-x-auto scrollbar-none">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const config = categoryConfig[cat] || { icon: Sparkles, color: '#FF2465' };
            const Icon = config.icon;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-[#FF2465] text-white shadow-xs scale-102'
                    : 'bg-white text-gray-700 hover:text-[#FF2465] hover:bg-[#FFE1E9]/30 border border-gray-200/80 shadow-2xs'
                }`}
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                <span className="flex items-center" style={{ color: isActive ? '#ffffff' : config.color }}>
                  <Icon size={15} />
                </span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Image Grid on Desktop, 2 on Tablet, 1 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => {
            const config = categoryConfig[item.category] || { icon: Sparkles, color: '#08BFC1' };
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group cursor-pointer"
                onClick={() => onItemClick?.(item)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B2054]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white text-[#0B2054] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye size={20} className="text-[#FF2465]" />
                      </div>
                    </div>
                  </div>

                  {/* Caption & Category */}
                  <div className="p-4 sm:p-5 flex items-center justify-between mt-auto">
                    <div className="min-w-0 flex-1">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider block mb-1"
                        style={{ color: config.color, fontFamily: 'var(--font-nunito)' }}
                      >
                        {item.category}
                      </span>
                      <h3
                        className="text-sm sm:text-base font-semibold text-[#0B2054] group-hover:text-[#FF2465] transition-colors line-clamp-1"
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                      >
                        {item.alt}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#FFE1E9] group-hover:text-[#FF2465] transition-colors flex-shrink-0 ml-3">
                      <Maximize2 size={14} />
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
