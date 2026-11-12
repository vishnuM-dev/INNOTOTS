import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const environments = [
  { label: 'Bright & Airy Classrooms', category: 'Learning Spaces', color: '#DDF3F1' },
  { label: 'Creative Art & Craft Studio', category: 'Creative Corners', color: '#FFF0F3' },
  { label: 'Sensory & Play Zones', category: 'Play Areas', color: '#FFFBEC' },
  { label: 'Story & Reading Nook', category: 'Library & Quiet Time', color: '#F7F0FD' },
  { label: 'Safe Outdoor Play Area', category: 'Physical Activities', color: '#F0FAFA' },
  { label: 'Celebration & Event Stage', category: 'Performances', color: '#FFF0F3' },
];

export default function SchoolEnvironment() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <SectionHeading
              badge="Our Campus"
              badgeColor="#FF3F68"
              badgeBg="#FFF0F3"
              title="Our School Environment"
              subtitle="Safe, inspiring and vibrant spaces designed to awaken wonder and celebrate early childhood."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: '#572A8D', fontFamily: 'var(--font-nunito)' }}
            >
              <span>Explore Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>

        {/* Clean 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="group rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    label={item.label}
                    category={item.category}
                    color={item.color}
                    height={220}
                    rounded={false}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <h3
                      className="text-base font-semibold text-[#07194F] group-hover:text-[#FF3F68] transition-colors"
                      style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'var(--font-nunito)' }}>
                      {item.category}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#FFF0F3] group-hover:text-[#FF3F68] transition-colors">
                    <Sparkles size={14} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
