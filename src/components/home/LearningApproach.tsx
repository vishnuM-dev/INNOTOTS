import { Puzzle, Lightbulb, Heart, BookOpen, ArrowUpRight } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const approaches = [
  {
    id: 1,
    title: 'Learning Through Play',
    tag: 'Core Method',
    description: 'Children learn best when they play. Our curriculum integrates hands-on activities, sensory games and guided exploration that make learning natural and joyful.',
    color: '#FFBA08',
    bg: '#FFFBEC',
    icon: Puzzle,
  },
  {
    id: 2,
    title: 'Creativity & Imagination',
    tag: 'Self-Expression',
    description: 'We nurture open-ended creative thinking through painting, storytelling, role-play and music, allowing every child\'s unique spirit and imagination to shine.',
    color: '#FF3F68',
    bg: '#FFF0F3',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Social & Emotional Growth',
    tag: 'Character & Empathy',
    description: 'Building kindness, empathy, sharing and communication skills is at the heart of our daily routines — helping children form lifelong friendship skills.',
    color: '#08BFC1',
    bg: '#F0FAFA',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Early Academic Foundations',
    tag: 'School Readiness',
    description: 'Age-appropriate introduction to phonics, vocabulary, numbers and scientific wonder, delivered through interactive games without any rote pressure.',
    color: '#A75CE2',
    bg: '#F7F0FD',
    icon: BookOpen,
  },
];

export default function LearningApproach() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Our Pedagogy"
            badgeColor="#FF3F68"
            badgeBg="#FFF0F3"
            title="Our Learning Approach"
            subtitle="Everything we do is intentional, joyful and designed with your child's complete developmental journey in mind."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {approaches.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <AnimatedCard
                className="bg-white rounded-3xl p-6 sm:p-7 h-full flex flex-col shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                {/* Top icon and tag */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    <item.icon size={26} />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: item.bg, color: item.color, fontFamily: 'var(--font-nunito)' }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3 text-[#07194F]"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-gray-600 flex-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {item.description}
                </p>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600">
                    Step {item.id}
                  </span>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
