import Image from 'next/image';
import type { Program } from '@/types';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  reverse?: boolean;
}

const program3dImages: Record<string, string> = {
  playgroup: '/images/programs/playgroup-3d.png',
  nursery: '/images/programs/nursery-3d.png',
  lkg: '/images/programs/lkg-3d.png',
  ukg: '/images/programs/ukg-3d.png',
};

export default function ProgramCard({ program, reverse = false }: ProgramCardProps) {
  const imageSrc = program3dImages[program.id] || '/images/programs/playgroup-3d.png';

  return (
    <div id={program.id} className="scroll-mt-24 relative select-none">
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
          } gap-6 sm:gap-8 lg:gap-12 items-center bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 group`}
        >
          {/* Large rounded 3D Cartoon Illustration (5/12 cols) */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-4 border-white bg-gradient-to-b from-[#F0FAFA] to-white">
              <Image
                src={imageSrc}
                alt={`InnoTots ${program.name} 3D Cartoon Learning & Play`}
                width={600}
                height={450}
                className="w-full h-auto object-cover min-h-[220px] sm:min-h-[280px] lg:min-h-[330px] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Shimmer gradient at base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              <div
                className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-xs z-10"
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
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 text-[#07194F]"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              {program.name}
            </h2>

            <p
              className="text-sm font-bold mb-3 sm:mb-4"
              style={{ color: program.color, fontFamily: 'var(--font-nunito)' }}
            >
              {program.tagline}
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {program.description}
            </p>

            {/* Key Learning Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6 sm:mb-8">
              {program.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100/80 text-xs sm:text-sm font-semibold text-gray-700"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  <CheckCircle2 size={16} style={{ color: program.color }} className="flex-shrink-0" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>

            {/* Enquire Now CTA Button - Full width on mobile, auto on sm+ */}
            <Link
              href="/admissions-contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[44px] rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
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
