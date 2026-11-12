'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import type { GalleryItem } from '@/types';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

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
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              fontFamily: 'var(--font-nunito)',
              backgroundColor: activeCategory === cat ? '#FF3F68' : '#fff',
              color: activeCategory === cat ? '#fff' : '#555',
              border: '2px solid',
              borderColor: activeCategory === cat ? '#FF3F68' : '#ddd',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid mb-4 cursor-pointer"
              onClick={() => onItemClick?.(item)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-2xl overflow-hidden shadow-sm"
              >
                <ImagePlaceholder
                  label={item.alt}
                  color={(categoryColors[item.category] || '#DDF3F1') + '25'}
                  height={item.id === 'g1' || item.id === 'g4' || item.id === 'g9' ? 240 : 180}
                  rounded={false}
                  className="w-full"
                />
                <div
                  className="p-2 text-xs font-medium"
                  style={{ backgroundColor: '#fff', color: '#666', fontFamily: 'var(--font-nunito)' }}
                >
                  {item.alt}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16" style={{ color: '#888', fontFamily: 'var(--font-nunito)' }}>
          No items in this category yet.
        </p>
      )}
    </div>
  );
}
