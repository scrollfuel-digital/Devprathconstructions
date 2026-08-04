import clubImg from '../assets/Amenities/club.png';
import gymImg from '../assets/Amenities/gym.png';
import chessImg from '../assets/Amenities/chess.jpg';
import poolImg from '../assets/Amenities/pool2.png';
import ttImg from '../assets/Amenities/table-tennis.jpg';
import yogaImg from '../assets/Amenities/yoga.png';
import cardsImg from '../assets/Amenities/cards.jpg';

export const AMENITIES_CATEGORIES = [
  { id: 'all', label: 'All Amenities', image: clubImg, icon: 'apps', description: 'Comprehensive township features' },
  { id: 'special', label: 'Special Features', image: clubImg, icon: 'nightlife', description: 'Exclusive community areas & party lawns' },
  { id: 'health', label: 'Health & Fitness', image: gymImg, icon: 'fitness_center', description: 'Gymnasium, yoga decks & jogging track' },
  { id: 'sports', label: 'Sports', image: poolImg, icon: 'sports_tennis', description: 'Swimming pool, table tennis, chess & carrom' },
  { id: 'entertainment', label: 'Entertainment', image: clubImg, icon: 'child_care', description: 'Kids play area & family recreation' },
];

export const AMENITIES_ITEMS = [
  // Amenities & Special Features
  {
    id: 1,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Open Space with Club House and Garden',
    icon: 'deck',
    image: clubImg,
    description: 'Expansive landscaped greens and private luxury clubhouse.',
  },
  {
    id: 2,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Garden walkways',
    icon: 'directions_walk',
    image: yogaImg,
    description: 'Scenic tree-lined pathways for morning walks and peaceful strolls.',
  },
  {
    id: 3,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Senior Citizens Interactive Area',
    icon: 'elderly',
    image: clubImg,
    description: 'Dedicated quiet seating zones and social spaces for seniors.',
  },
  {
    id: 4,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Water Walls and Fountains',
    icon: 'water_drop',
    image: poolImg,
    description: 'Architectural cascade water features creating a serene ambiance.',
  },
  {
    id: 5,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Party Lawns',
    icon: 'celebration',
    image: clubImg,
    description: 'Manicured lawns equipped for private events and celebrations.',
  },

  // Health and Fitness
  {
    id: 6,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Jogging Track',
    icon: 'directions_run',
    image: gymImg,
    description: 'Dedicated rubberized track for safe running and jogging.',
  },
  {
    id: 7,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Yoga/Meditation Space',
    icon: 'self_improvement',
    image: yogaImg,
    description: 'Peaceful open-air deck for mindfulness and meditation.',
  },
  {
    id: 8,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Gymnasium',
    icon: 'fitness_center',
    image: gymImg,
    description: 'State-of-the-art fitness center with personal training gear.',
  },

  // Sports
  {
    id: 9,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Swimming Pool',
    icon: 'pool',
    image: poolImg,
    description: 'Temperature-controlled swimming pool with splash area.',
  },
  {
    id: 10,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Table Tennis',
    icon: 'sports_tennis',
    image: ttImg,
    description: 'Indoor TT arena with professional tournament tables.',
  },
  {
    id: 11,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Chess',
    icon: 'extension',
    image: chessImg,
    description: 'Dedicated quiet indoor area for strategic chess games.',
  },
  {
    id: 12,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Carom',
    icon: 'sports_esports',
    image: chessImg,
    description: 'Recreational carrom lounge for indoor family entertainment.',
  },
  {
    id: 13,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Cards',
    icon: 'style',
    image: cardsImg,
    description: 'Exclusive club room for card games and leisure socializing.',
  },

  // Entertainment
  {
    id: 14,
    categoryId: 'entertainment',
    categoryName: 'Entertainment',
    title: 'Play area for kids',
    icon: 'child_care',
    image: clubImg,
    description: 'Safe, rubberized outdoor play park with modern swings and slides.',
  },
];
