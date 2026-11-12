import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import SectionHeading from '@/components/ui/SectionHeading';
import PlayfulButton from '@/components/animations/PlayfulButton';
import ScrollReveal from '@/components/animations/ScrollReveal';

const environments = [
  { label: 'Bright Classrooms', color: '#DDF3F1' },
  { label: 'Activity Areas', color: '#FFF0F3' },
  { label: 'Creative Corner', color: '#FFFBEC' },
  { label: 'Reading Nook', color: '#F7F0FD' },
  { label: 'Outdoor Play', color: '#F0FAFA' },
  { label: 'Celebrations', color: '#FFF0F3' },
];

export default function SchoolEnvironment() {
  return (
    <section className="py-20" style={{ backgroundColor: '#DDF3F1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <ScrollReveal>
            <SectionHeading
              title="Our School Environment"
              subtitle="Spaces designed to inspire, explore and celebrate childhood."
            />
          </ScrollReveal>
          <ScrollReveal>
            <PlayfulButton
              href="/gallery"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: '#572A8D', fontFamily: 'var(--font-nunito)' }}
            >
              View Gallery
            </PlayfulButton>
          </ScrollReveal>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {environments.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={`rounded-2xl overflow-hidden shadow-sm ${i === 0 || i === 5 ? 'row-span-2' : ''}`}>
                <ImagePlaceholder
                  label={item.label}
                  color={item.color}
                  height={i === 0 || i === 5 ? 300 : 180}
                  rounded={false}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
