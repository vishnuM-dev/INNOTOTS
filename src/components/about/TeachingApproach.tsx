import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  { step: 1, title: 'Observe', description: 'We watch, listen and understand each child\'s unique interests, strengths and learning style.', color: '#FF3F68' },
  { step: 2, title: 'Explore', description: 'Children are given time and resources to investigate topics that spark their curiosity.', color: '#FFBA08' },
  { step: 3, title: 'Create', description: 'Through art, building, storytelling and play, children express and deepen their understanding.', color: '#08BFC1' },
  { step: 4, title: 'Reflect', description: 'Guided conversations help children think about what they\'ve learned and experienced.', color: '#A75CE2' },
  { step: 5, title: 'Celebrate', description: 'Every achievement, big or small, is celebrated — building confidence and a love of learning.', color: '#572A8D' },
];

export default function TeachingApproach() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Teaching Approach"
            subtitle="A thoughtful cycle that guides every learning experience at InnoTots."
            center
          />
        </ScrollReveal>

        <div className="relative mt-12">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-10 left-0 right-0 h-0.5"
            style={{ backgroundColor: '#DDF3F1', zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4 shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-xs text-white opacity-80 font-semibold" style={{ fontFamily: 'var(--font-nunito)' }}>Step {step.step}</span>
                    <span className="text-lg text-white font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>{step.title}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
