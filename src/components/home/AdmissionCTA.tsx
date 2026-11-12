'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import FloatingShape from '@/components/animations/FloatingShape';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AnimatedRainbow from '@/components/animations/AnimatedRainbow';
import PinkMascot from '@/components/animations/PinkMascot';
import TealMascot from '@/components/animations/TealMascot';

export default function AdmissionCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: '#572A8D' }}
    >
      {/* Soft Animated Rainbow in the Background */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
        <AnimatedRainbow width={320} height={180} />
      </div>

      {/* Decorative floating shapes */}
      <FloatingShape shape="circle" color="#FFBA08" size={90} delay={0} className="absolute -top-10 -left-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="star" color="#FF3F68" size={60} delay={1} className="absolute top-10 right-16 pointer-events-none" opacity={0.25} />
      <FloatingShape shape="circle" color="#08BFC1" size={110} delay={0.5} className="absolute -bottom-10 right-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="triangle" color="#DDF3F1" size={50} delay={2} className="absolute bottom-10 left-1/4 pointer-events-none" opacity={0.2} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-sm border border-white/20"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFBA08', fontFamily: 'var(--font-nunito)' }}
          >
            <Sparkles size={16} className="animate-spin-slow" />
            <span>Admissions Open for Academic Year</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-5"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            A Happy Beginning Starts Here!
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Discover a joyful learning journey for your little one. Limited seats available — take the first step towards a bright future today.
          </p>

          {/* CTAs with Mascots flanking */}
          <div className="relative inline-flex items-center justify-center">
            {/* Pink Mascot Waving on Left */}
            <div className="hidden md:block absolute -left-24 bottom-0 z-10 pointer-events-auto">
              <PinkMascot size={64} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: '#FFBA08', color: '#07194F', fontFamily: 'var(--font-nunito)' }}
              >
                <span>Enquire for Admission</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/admissions-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base border-2 border-white/80 text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                <Calendar size={18} />
                <span>Book a Campus Tour</span>
              </Link>
            </div>

            {/* Teal Mascot Waving on Right */}
            <div className="hidden md:block absolute -right-24 bottom-0 z-10 pointer-events-auto">
              <TealMascot size={64} />
            </div>
          </div>

          {/* Quick contact reassurance */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-nunito)' }}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#08BFC1]" />
              Ages 1.5 to 5.5 Years
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFBA08]" />
              Playgroup · Nursery · LKG · UKG
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3F68]" />
              Safe & Caring Campus
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
