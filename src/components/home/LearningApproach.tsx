import { Puzzle, Lightbulb, Heart, BookOpen } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const approaches = [
  {
    id: 1,
    title: 'Learning Through Play',
    description: 'Children learn best when they play. Our curriculum integrates hands-on activities, games and exploration that make learning natural and joyful.',
    color: '#FFBA08',
    bg: '#FFFBEC',
    icon: Puzzle,
  },
  {
    id: 2,
    title: 'Creativity & Imagination',
    description: 'We nurture creative thinking through art, storytelling, music and open-ended play that lets every child\'s unique imagination shine.',
    color: '#FF3F68',
    bg: '#FFF0F3',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Social & Emotional Growth',
    description: 'Building kindness, empathy and friendship skills is at the heart of everything we do — helping children thrive socially and emotionally.',
    color: '#08BFC1',
    bg: '#F0FAFA',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Early Academic Foundations',
    description: 'Age-appropriate introduction to literacy, numeracy and science concepts delivered through engaging, child-centered activities.',
    color: '#A75CE2',
    bg: '#F7F0FD',
    icon: BookOpen,
  },
];

export default function LearningApproach() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Learning Approach"
            subtitle="Everything we do is intentional, joyful and designed with your child's whole development in mind."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {approaches.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <AnimatedCard className="rounded-2xl p-6 h-full" style={{ backgroundColor: item.bg, border: `2px solid ${item.color}20` }}>
                {/* Accent bar */}
                <div className="h-1 w-10 rounded-full mb-5" style={{ backgroundColor: item.color }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                  {item.description}
                </p>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
