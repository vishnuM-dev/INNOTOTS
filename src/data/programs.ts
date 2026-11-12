import type { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    tagline: 'First steps into a world of wonder',
    ageRange: '1.5 – 2.5 years',
    description:
      'Our Playgroup program nurtures the youngest learners through sensory play, music, and gentle social interaction in a warm and welcoming environment.',
    highlights: [
      'Early social interaction',
      'Sensory play experiences',
      'Music and movement',
      'Learning through play',
      'Caring and safe environment',
    ],
    color: '#FF3F68',
    imagePath: '/images/programs/playgroup.jpg',
  },
  {
    id: 'nursery',
    name: 'Nursery',
    tagline: 'Curious minds, creative hearts',
    ageRange: '2.5 – 3.5 years',
    description:
      'Nursery focuses on early communication, storytelling, colors and shapes, creative activities and motor development through joyful exploration.',
    highlights: [
      'Early communication skills',
      'Storytelling & imagination',
      'Colors, shapes & textures',
      'Creative art activities',
      'Fine motor development',
    ],
    color: '#FFBA08',
    imagePath: '/images/programs/nursery.jpg',
  },
  {
    id: 'lkg',
    name: 'LKG',
    tagline: 'Building foundations for lifelong learning',
    ageRange: '3.5 – 4.5 years',
    description:
      'Lower Kindergarten builds foundational literacy, number awareness and creative expression through structured yet playful learning activities.',
    highlights: [
      'Foundational literacy',
      'Number awareness',
      'Creative expression',
      'Team activities',
      'Problem solving',
    ],
    color: '#08BFC1',
    imagePath: '/images/programs/lkg.jpg',
  },
  {
    id: 'ukg',
    name: 'UKG',
    tagline: 'Ready, set, grow!',
    ageRange: '4.5 – 5.5 years',
    description:
      'Upper Kindergarten prepares children for primary school with early reading, writing, mathematics and strong social skills built through collaborative play.',
    highlights: [
      'Early reading & writing',
      'Basic mathematics',
      'Science exploration',
      'Leadership activities',
      'School readiness',
    ],
    color: '#A75CE2',
    imagePath: '/images/programs/ukg.jpg',
  },
];
