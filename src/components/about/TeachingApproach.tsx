import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { Eye, Search, Sparkles, Brain, PartyPopper } from 'lucide-react';

const steps = [
  { step: '01', title: 'Observe', icon: Eye, description: 'We listen, observe and understand each child\'s unique curiosity, emotional rhythms and strengths.', color: '#FF3F68', bg: '#FFF0F3' },
  { step: '02', title: 'Explore', icon: Search, description: 'Children are provided rich open-ended materials and time to investigate questions that spark their interest.', color: '#FFBA08', bg: '#FFFBEC' },
  { step: '03', title: 'Create', icon: Sparkles, description: 'Through hands-on art, building, storytelling and pretend play, children give tangible shape to their ideas.', color: '#08BFC1', bg: '#F0FAFA' },
  { step: '04', title: 'Reflect', icon: Brain, description: 'Gentle, guided conversations help children process what they noticed, tried and learned together.', color: '#A75CE2', bg: '#F7F0FD' },
  { step: '05', title: 'Celebrate', icon: PartyPopper, description: 'Every milestone, creative discovery and effort is warmly celebrated — building lasting self-belief.', color: '#572A8D', bg: '#F4EFF9' },
];

export default function TeachingApproach() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4FAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="The Learning Cycle"
            badgeColor="#FF3F68"
            badgeBg="#FFF0F3"
            title="Our Teaching Approach"
            subtitle="A thoughtful, five-step cyclical framework that guides every learning journey at InnoTots."
            center
          />
        </ScrollReveal>

        <div className="relative mt-14">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-9 left-16 right-16 h-1 rounded-full pointer-events-none"
            style={{ backgroundColor: '#DDF3F1', zIndex: 0 }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.09}>
                <div className="flex flex-col items-center text-center group">
                  {/* Step Circle with Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={24} className="text-white mb-0.5" />
                    <span className="text-[10px] font-bold text-white/90 tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Title outside circle */}
                  <h3
                    className="text-lg font-semibold text-[#07194F] mb-2"
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-sm leading-relaxed text-gray-600"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
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
