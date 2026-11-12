'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/types';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ items, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen && currentIndex !== null ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(7, 25, 79, 0.88)' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Category & Close */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F3] text-[#FF3F68]" style={{ fontFamily: 'var(--font-nunito)' }}>
                {currentItem.category}
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-[#07194F] hover:bg-gray-100 transition-colors"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image viewport */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-50">
              <ImagePlaceholder
                label={currentItem.alt}
                category={currentItem.category}
                color="#DDF3F1"
                height={380}
                rounded={false}
                className="w-full"
              />

              {/* Navigation Arrows inside preview container on mobile / edge */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md text-[#07194F] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md text-[#07194F] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Footer with caption and index */}
            <div className="mt-4 pt-3 flex items-center justify-between text-xs sm:text-sm text-gray-600 border-t border-gray-100" style={{ fontFamily: 'var(--font-nunito)' }}>
              <p className="font-semibold text-[#07194F] line-clamp-1">{currentItem.alt}</p>
              <span className="font-bold text-gray-400 flex-shrink-0 ml-4">
                {(currentIndex ?? 0) + 1} of {items.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
