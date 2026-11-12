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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 rounded-full text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <ImagePlaceholder
                label={currentItem.alt}
                color="#DDF3F1"
                height={450}
                rounded={false}
                className="w-full"
              />
            </div>

            {/* Caption */}
            <p className="mt-3 text-center text-sm text-white opacity-80" style={{ fontFamily: 'var(--font-nunito)' }}>
              {currentItem.alt}
            </p>

            {/* Navigation */}
            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-3 rounded-full text-white"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-3 rounded-full text-white"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Counter */}
            {currentIndex !== null && (
              <p className="mt-2 text-center text-xs text-white opacity-50" style={{ fontFamily: 'var(--font-nunito)' }}>
                {currentIndex + 1} / {items.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
