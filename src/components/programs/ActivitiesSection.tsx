import { Paintbrush, Music, BookOpen, TreePine, Gamepad2, Lightbulb, Users, PartyPopper } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const activities = [
  {
    title: 'Art and Craft',
    description: 'Children explore colors, textures and tactile materials through hands-on creative crafts and finger painting.',
    icon: Paintbrush,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    title: 'Music and Dance',
    description: 'Joyful rhythms, nursery songs and creative movement activities develop rhythm, physical coordination and expression.',
    icon: Music,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
  {
    title: 'Storytelling',
    description: 'Enchanting picture-book sessions expand vocabulary, spark imagination and cultivate an enduring love for books.',
    icon: BookOpen,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    title: 'Outdoor Play',
    description: 'Fresh air, lawn games and playground obstacles develop balance, gross motor skills and active physical confidence.',
    icon: TreePine,
    color: '#572A8D',
    bg: '#F4EFF9',
  },
  {
    title: 'Educational Games',
    description: 'Age-appropriate puzzles, shape matching, counting blocks and memory games build foundational logic without pressure.',
    icon: Gamepad2,
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
  {
    title: 'Creative Learning',
    description: 'Open-ended sensory play, building blocks and pretend-play stations let children invent and explore their own ideas.',
    icon: Lightbulb,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    title: 'Group Activities',
    description: 'Collaborative play, circle conversations and sharing exercises help little ones build strong empathy and teamwork.',
    icon: Users,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    title: 'Celebration Activities',
    description: 'Festivals, cultural days, color days and themed events celebrate diversity and bring joyful memories to early childhood.',
    icon: PartyPopper,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F4FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Holistic Enrichment"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Our Activities"
            subtitle="A rich variety of hands-on activities designed to engage, delight and develop every dimension of your child."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {activities.map((activity, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <AnimatedCard
                className="bg-white rounded-3xl p-5 sm:p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-xs"
                    style={{ backgroundColor: activity.bg, color: activity.color }}
                  >
                    <activity.icon size={24} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#07194F] mb-2"
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-gray-600"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {activity.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: activity.color }} />
                  <span className="text-[11px] font-bold text-gray-400">Activity {i + 1}</span>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
