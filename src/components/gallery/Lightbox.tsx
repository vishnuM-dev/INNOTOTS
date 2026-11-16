'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/types';

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
          style={{ backgroundColor: 'rgba(11, 32, 84, 0.88)' }}
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
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Category & Close */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFE1E9] text-[#FF2465]"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {currentItem.category}
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-[#0B2054] hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image viewport */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[16/10] max-h-[65vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover w-full h-full"
                priority
              />

              {/* Navigation Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                    }}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 shadow-md text-[#0B2054] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                    }}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 shadow-md text-[#0B2054] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Footer Caption */}
            <div className="mt-4 flex items-center justify-between">
              <p
                className="text-base sm:text-lg font-semibold text-[#0B2054]"
                style={{ fontFamily: 'var(--font-fredoka)' }}
              >
                {currentItem.alt}
              </p>
              {currentIndex !== null && (
                <span
                  className="text-xs font-bold text-gray-500"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {currentIndex + 1} of {items.length}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
