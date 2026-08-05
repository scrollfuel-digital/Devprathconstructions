import clubPoolImg from '../assets/Township Features/club and poolarea.png';
import gymNewImg from '../assets/Township Features/gymnasium.png';
import poolNewImg from '../assets/Township Features/swmmingpool.png';
import ttNewImg from '../assets/Township Features/table tennis.png';
import chessNewImg from '../assets/Township Features/chess.png';
import yogaNewImg from '../assets/Township Features/yogaarea.png';
import joggingNewImg from '../assets/Township Features/jogging.png';
import lawnNewImg from '../assets/Township Features/lawn.png';
import waterfallNewImg from '../assets/Township Features/waterfall.png';
import openSpaceNewImg from '../assets/Township Features/openspace.png';
import kidsPlayNewImg from '../assets/Township Features/children playarea.png';
import gardenSeniorsImg from '../assets/Amenities/garden-seniors.png';

export const AMENITIES_CATEGORIES = [
  { id: 'all', label: 'All Amenities', image: clubPoolImg, icon: 'apps', description: 'Comprehensive township features' },
  { id: 'special', label: 'Special Features', image: openSpaceNewImg, icon: 'nightlife', description: 'Exclusive community areas, party lawns & senior zones' },
  { id: 'health', label: 'Health & Fitness', image: gymNewImg, icon: 'fitness_center', description: 'Gymnasium, yoga decks & jogging track' },
  { id: 'sports', label: 'Sports', image: poolNewImg, icon: 'sports_tennis', description: 'Swimming pool, table tennis & indoor games lounge' },
  { id: 'entertainment', label: 'Entertainment', image: kidsPlayNewImg, icon: 'child_care', description: 'Kids play area & family recreation' },
];

export const AMENITIES_ITEMS = [
  // Special Features
  {
    id: 1,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Open Space with Club House and Garden',
    icon: 'deck',
    image: openSpaceNewImg,
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
    image: waterfallNewImg,
    description: 'Architectural cascade water features creating a serene ambiance.',
  },
  {
    id: 5,
    categoryId: 'special',
    categoryName: 'Special Features',
    title: 'Party Lawns',
    icon: 'celebration',
    image: lawnNewImg,
    description: 'Manicured lawns equipped for private events and celebrations.',
  },

  // Health & Fitness
  {
    id: 6,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Jogging Track',
    icon: 'directions_run',
    image: joggingNewImg,
    description: 'Dedicated rubberized track for safe running and jogging.',
  },
  {
    id: 7,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Yoga/Meditation Space',
    icon: 'self_improvement',
    image: yogaNewImg,
    description: 'Peaceful open-air deck for mindfulness and meditation.',
  },
  {
    id: 8,
    categoryId: 'health',
    categoryName: 'Health & Fitness',
    title: 'Gymnasium',
    icon: 'fitness_center',
    image: gymNewImg,
    description: 'State-of-the-art fitness center with personal training gear.',
  },

  // Sports
  {
    id: 9,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Swimming Pool',
    icon: 'pool',
    image: poolNewImg,
    description: 'Temperature-controlled swimming pool with splash area.',
  },
  {
    id: 10,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Table Tennis',
    icon: 'sports_tennis',
    image: ttNewImg,
    description: 'Indoor TT arena with professional tournament tables.',
  },
  {
    id: 11,
    categoryId: 'sports',
    categoryName: 'Sports',
    title: 'Chess, Carrom & Cards',
    icon: 'extension',
    image: chessNewImg,
    description: 'Exclusive indoor games lounge featuring chess, carrom, and card gaming tables.',
  },

  // Entertainment
  {
    id: 14,
    categoryId: 'entertainment',
    categoryName: 'Entertainment',
    title: 'Play area for kids',
    icon: 'child_care',
    image: kidsPlayNewImg,
    description: 'Safe, rubberized outdoor play park with modern swings and slides.',
  },
];
