'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

const COLORS = ['#FF3F68', '#FFBA08', '#08BFC1', '#A75CE2'];

export default function SparkleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices without reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPointer = window.matchMedia('(pointer: fine)').matches;

    if (!prefersReduced && isPointer) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle sparkle creation (every 120ms)
      const now = Date.now();
      if (now - lastTime < 120) return;
      lastTime = now;

      // Check if cursor is over form, input, button or navbar
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, form, nav, button, a')) {
        return;
      }

      const newParticle: Particle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.floor(Math.random() * 6) + 4,
      };

      setParticles((prev) => [...prev.slice(-10), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.9, scale: 1, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 0.2,
              y: p.y + 16,
              x: p.x + (Math.random() * 12 - 6),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((item) => item.id !== p.id));
            }}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

