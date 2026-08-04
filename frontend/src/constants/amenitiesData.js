import clubImg from '../assets/Amenities/club.png';
import gymImg from '../assets/Amenities/gym.png';
import poolImg from '../assets/Amenities/pool2.png';
import ttImg from '../assets/Amenities/table-tennis.jpg';
import yogaImg from '../assets/Amenities/yoga.png';
import gardenSeniorsImg from '../assets/Amenities/garden-seniors.png';
import indoorGamesImg from '../assets/Amenities/indoor-games.png';
import kidsPlayImg from '../assets/Amenities/kids-play.png';

export const AMENITIES_CATEGORIES = [
  { id: 'all', label: 'All Amenities', image: clubImg, icon: 'apps', description: 'Comprehensive township features' },
  { id: 'special', label: 'Special Features', image: gardenSeniorsImg, icon: 'nightlife', description: 'Exclusive community areas, party lawns & senior zones' },
  { id: 'health', label: 'Health & Fitness', image: gymImg, icon: 'fitness_center', description: 'Gymnasium, yoga decks & jogging track' },
  { id: 'sports', label: 'Sports', image: indoorGamesImg, icon: 'sports_tennis', description: 'Swimming pool, table tennis & indoor games lounge' },
  { id: 'entertainment', label: 'Entertainment', image: kidsPlayImg, icon: 'child_care', description: 'Kids play area & family recreation' },
];

export const AMENITIES_ITEMS = [
  // Special Features
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
    title: 'Garden Walkways & Senior Citizens Interactive Area',
    icon: 'elderly',
    image: gardenSeniorsImg,
    description: 'Scenic tree-lined pathways with dedicated quiet seating and interactive zones for seniors.',
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

  // Health & Fitness
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
    title: 'Chess, Carrom & Cards',
    icon: 'extension',
    image: indoorGamesImg,
    description: 'Exclusive indoor games lounge featuring chess, carrom, and card gaming tables.',
  },

  // Entertainment
  {
    id: 14,
    categoryId: 'entertainment',
    categoryName: 'Entertainment',
    title: 'Play area for kids',
    icon: 'child_care',
    image: kidsPlayImg,
    description: 'Safe, rubberized outdoor play park with modern swings and slides.',
  },
];
