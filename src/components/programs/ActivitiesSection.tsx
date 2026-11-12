import { Paintbrush, Music, BookOpen, TreePine, FlaskConical, Hash, Drama, Mic } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const activities = [
  { title: 'Art & Craft', description: 'Children explore colors, textures and materials through hands-on creative projects.', icon: Paintbrush, color: '#FF3F68', bg: '#FFF0F3' },
  { title: 'Music & Movement', description: 'Songs, rhythms and movement activities develop coordination, listening and expression.', icon: Music, color: '#FFBA08', bg: '#FFFBEC' },
  { title: 'Storytelling', description: 'Stories build vocabulary, imagination, comprehension and a lifelong love of reading.', icon: BookOpen, color: '#08BFC1', bg: '#F0FAFA' },
  { title: 'Outdoor Play', description: 'Fresh air, nature and physical activity support health, motor skills and social development.', icon: TreePine, color: '#572A8D', bg: '#F4EFF9' },
  { title: 'Science Exploration', description: 'Simple experiments and observations spark curiosity and scientific thinking.', icon: FlaskConical, color: '#A75CE2', bg: '#F7F0FD' },
  { title: 'Math Games', description: 'Fun, play-based math activities develop number sense, patterns and problem solving.', icon: Hash, color: '#07194F', bg: '#EEF0F8' },
  { title: 'Dance & Drama', description: 'Creative expression through movement and drama builds confidence and communication.', icon: Drama, color: '#FF3F68', bg: '#FFF0F3' },
  { title: 'Show & Tell', description: 'Children share their world, building public speaking confidence and social connections.', icon: Mic, color: '#08BFC1', bg: '#F0FAFA' },
];

export default function ActivitiesSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#DDF3F1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Activities"
            subtitle="A rich variety of activities designed to engage, delight and develop every child."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {activities.map((activity, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <AnimatedCard
                className="rounded-2xl p-5 h-full"
                style={{ backgroundColor: activity.bg }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: activity.color + '20' }}
                >
                  <activity.icon size={22} style={{ color: activity.color }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                  {activity.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                  {activity.description}
                </p>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
