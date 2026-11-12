'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { Clock, Info } from 'lucide-react';

const scheduleItems = [
  { time: '08:00 AM', activity: 'Arrival & Warm Welcome', description: 'Children arrive, unpack their little bags, greet teachers and settle into morning free play corners.', color: '#FF3F68' },
  { time: '08:30 AM', activity: 'Circle Time & Rhymes', description: 'Morning gathering with welcome songs, weather wheel, calendar fun and joyful sharing time.', color: '#FFBA08' },
  { time: '09:00 AM', activity: 'Core Learning Activity', description: 'Structured, playful activities focused on phonics, numbers, shapes and sensory exploration.', color: '#08BFC1' },
  { time: '09:45 AM', activity: 'Healthy Snack Break', description: 'Social dining habits, table etiquette and nutritious refreshment shared with classmates.', color: '#A75CE2' },
  { time: '10:15 AM', activity: 'Creative Expression & Art', description: 'Hands-on painting, clay molding, music and sensory building activities.', color: '#572A8D' },
  { time: '11:00 AM', activity: 'Outdoor Physical Play', description: 'Free movement, jungle gym, balance beam and cooperative outdoor playground games.', color: '#FF3F68' },
  { time: '11:45 AM', activity: 'Story Time & Mindfulness', description: 'Calming wind-down circle with picture books, quiet music and gentle reflection.', color: '#FFBA08' },
  { time: '12:30 PM', activity: 'Reflection & Farewell', description: 'Reviewing the day\'s happy moments, pack-up rituals and warm goodbyes with parents.', color: '#08BFC1' },
];

export default function DailySchedule() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Routine & Rhythm"
            badgeColor="#572A8D"
            badgeBg="#F4EFF9"
            title="A Day at InnoTots"
            subtitle="A glimpse into our balanced daily rhythm of joyful play, guided learning and mindful rest."
            center
          />
        </ScrollReveal>

        <div className="mt-2 mb-10 p-4 rounded-2xl bg-[#FFF0F3] border border-[#FF3F68]/20 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#FF3F68] font-bold text-center" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Info size={18} className="flex-shrink-0" />
          <span>Note: Illustrative daily routine; specific timings are gently adapted per program age tier.</span>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-4">
          {/* Connecting Vertical Track */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-2.5 sm:left-3.5 top-6 bottom-6 w-1 rounded-full origin-top"
            style={{
              background: 'linear-gradient(180deg, #FF3F68 0%, #FFBA08 30%, #08BFC1 70%, #A75CE2 100%)',
            }}
          />

          {scheduleItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="relative group">
                {/* Timeline Step Dot Indicator */}
                <div
                  className="absolute -left-6 sm:-left-8 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-xs z-10 transition-transform group-hover:scale-125"
                  style={{ backgroundColor: item.color }}
                />

                <motion.div
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#FF3F68]/20"
                >
                  <div
                    className="flex-shrink-0 w-24 h-11 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-xs group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: item.color, fontFamily: 'var(--font-nunito)' }}
                  >
                    <Clock size={13} className="mr-1.5 opacity-80" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-semibold text-base sm:text-lg text-[#07194F] group-hover:text-[#FF3F68] transition-colors mb-0.5"
                      style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                      {item.activity}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
