import type { Program } from '@/types';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  reverse?: boolean;
}

export default function ProgramCard({ program, reverse = false }: ProgramCardProps) {
  return (
    <div id={program.id} className="scroll-mt-24 relative">
      {/* Decorative background shape */}
      <div
        className={`hidden lg:block absolute -z-10 w-72 h-72 rounded-full pointer-events-none opacity-20 blur-2xl ${
          reverse ? '-left-12 -top-8' : '-right-12 -bottom-8'
        }`}
        style={{ backgroundColor: program.color }}
        aria-hidden="true"
      />

      <ScrollReveal>
        <div
          className={`flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100`}
        >
          {/* Large rounded image (5/12 cols) */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xs">
              <ImagePlaceholder
                label={`${program.name} Learning & Play`}
                category={program.name}
                color={program.color + '18'}
                height={330}
                className="w-full"
              />
              <div
                className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-xs"
                style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
              >
                {program.name} · {program.ageRange}
              </div>
            </div>
          </div>

          {/* Content (7/12 cols) */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: program.color + '18', color: program.color, fontFamily: 'var(--font-nunito)' }}
              >
                {program.ageRange}
              </span>
              <Sparkles size={14} style={{ color: program.color }} />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-semibold mb-2 text-[#07194F]"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              {program.name}
            </h2>

            <p
              className="text-sm font-bold mb-4"
              style={{ color: program.color, fontFamily: 'var(--font-nunito)' }}
            >
              {program.tagline}
            </p>

            <p
              className="text-base leading-relaxed text-gray-700 mb-6"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {program.description}
            </p>

            {/* Key Learning Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              {program.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100/80 text-xs sm:text-sm font-semibold text-gray-700"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  <CheckCircle2 size={16} style={{ color: program.color }} className="flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Enquire Now CTA Button */}
            <Link
              href="/admissions-contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
            >
              <span>Enquire Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
