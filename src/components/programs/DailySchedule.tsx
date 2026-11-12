import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const scheduleItems = [
  { time: '8:00 AM', activity: 'Arrival & Welcome', description: 'Children arrive and settle in with free play and morning greetings.', color: '#FF3F68' },
  { time: '8:30 AM', activity: 'Circle Time', description: 'Group time for songs, stories, calendar and sharing.', color: '#FFBA08' },
  { time: '9:00 AM', activity: 'Learning Activity', description: 'Structured age-appropriate learning activity — literacy, numeracy or science.', color: '#08BFC1' },
  { time: '9:45 AM', activity: 'Snack Break', description: 'Healthy snack time encouraging good habits and social interaction.', color: '#A75CE2' },
  { time: '10:15 AM', activity: 'Creative Play', description: 'Art, craft, building, pretend play and sensory activities.', color: '#572A8D' },
  { time: '11:00 AM', activity: 'Outdoor Time', description: 'Physical play, games and exploration in the outdoor area.', color: '#FF3F68' },
  { time: '11:40 AM', activity: 'Story Time', description: 'Relaxing wind-down with stories, music and quiet activities.', color: '#FFBA08' },
  { time: '12:30 PM', activity: 'Farewell', description: 'Goodbye rituals, packing up and a happy send-off for the day.', color: '#08BFC1' },
];

export default function DailySchedule() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="A Day at InnoTots"
            subtitle="A glimpse into a typical day of joyful learning and discovery."
            center
          />
        </ScrollReveal>

        <div
          className="mt-4 mb-8 px-4 py-3 rounded-xl text-sm text-center"
          style={{ backgroundColor: '#FFF0F3', color: '#FF3F68', fontFamily: 'var(--font-nunito)', border: '1px solid #FF3F6830' }}
        >
          📋 This is an illustrative schedule; actual timings may vary based on program and term.
        </div>

        <div className="space-y-4">
          {scheduleItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                <div
                  className="flex-shrink-0 w-20 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: item.color, fontFamily: 'var(--font-nunito)' }}
                >
                  {item.time}
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F', fontSize: '1rem' }}>
                    {item.activity}
                  </h4>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#666' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
