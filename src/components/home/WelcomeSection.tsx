import ScrollReveal from '@/components/animations/ScrollReveal';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import PlayfulButton from '@/components/animations/PlayfulButton';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WelcomeSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
      {/* Organic blob shape */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ backgroundColor: '#DDF3F1', opacity: 0.5, filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <ImagePlaceholder
              label="School entrance / happy children"
              color="#DDF3F1"
              height={420}
              className="shadow-lg"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionHeading
              title="Welcome to InnoTots Preschool"
              subtitle="A place where every child's journey begins with joy, wonder and endless possibilities."
            />
            <p className="text-base leading-relaxed mb-6" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>
              At InnoTots Preschool, we believe that the early years are the most important years of a child's life. Our thoughtfully designed environment encourages children to explore, create and grow at their own pace while feeling safe, loved and supported.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>
              Our play-based learning approach helps children develop confidence, curiosity and a lifelong love for learning — building the foundation for everything that follows.
            </p>
            <PlayfulButton
              href="/about"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: '#572A8D', fontFamily: 'var(--font-nunito)' }}
            >
              Learn More About Us
            </PlayfulButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
