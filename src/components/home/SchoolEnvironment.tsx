import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const environments = [
  { label: 'Bright & Airy Classrooms', category: 'Learning Spaces', color: '#DDF3F1', image: '/images/gallery/item2.jpg' },
  { label: 'Creative Art & Craft Studio', category: 'Creative Corners', color: '#FFF0F3', image: '/images/gallery/item3.jpg' },
  { label: 'Sensory & Play Zones', category: 'Play Areas', color: '#FFFBEC', image: '/images/gallery/item5.jpg' },
  { label: 'Story & Reading Nook', category: 'Library & Quiet Time', color: '#F7F0FD', image: '/images/gallery/item7.jpg' },
  { label: 'Safe Outdoor Play Area', category: 'Physical Activities', color: '#F0FAFA', image: '/images/gallery/item6.jpg' },
  { label: 'Celebration & Event Stage', category: 'Performances', color: '#FFF0F3', image: '/images/gallery/item4.jpg' },
];

export default function SchoolEnvironment() {
  return (
    <section className="py-20 lg:py-24 bg-white relative select-none">
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

        {/* Clean 3-column grid with real campus life photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="group rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
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
