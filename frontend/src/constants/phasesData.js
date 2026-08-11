// Strategic Phases Data & Comprehensive Project Highlights for Mangalmurti Residency
import entranceLobbyImg from '../assets/Township Features/Grand Entrance Lobby.png';
import ecoFriendlyImg from '../assets/Township Features/Eco-friendly.png';
import securityImg from '../assets/Township Features/security.png';
import backupImg from '../assets/Township Features/Backup.png';

export const PROJECT_OVERVIEW = {
  welcomeTag: 'Your Dream Home Awaits',
  title: 'Mangalmurti Residency',
  subtitle: 'Parsodi, Wardha Road, Nagpur',
  description:
    'Nestled in the tranquil surroundings of Parsodi, Wardha Road, Nagpur, Mangalmurti Residency is a meticulously planned micro township designed to elevate your lifestyle. With three distinct phases, it promises a perfect blend of commercial vibrancy and residential luxury.',
  familyPromiseTagline:
    "Where Your Family's Dreams Flourish — modern comforts and natural serenity come together to create a haven for cherished family moments. Your dream home, crafted with love and care, awaits.",
};

export const PHASES_DATA = [
  {
    id: 'phase1',
    wing: 'Wing A',
    subtitleTag: 'A Commercial Hub',
    title: 'Wing A – Commercial Hub',
    icon: 'storefront',
    stat: '64+',
    statLabel: 'Commercial Outlets',
    shortDescription:
      'Home to 64 commercial outlets, Wing A offers an ideal space for businesses to thrive, ensuring a vibrant community atmosphere.',
    fullDescription:
      'Wing A is thoughtfully designed to empower boutique retail, professional suites, and dining outlets. Situated with prime access, it establishes a bustling commercial ecosystem for your everyday convenience.',
    highlights: [
      '64 Commercial Outlets',
      'High-Visibility Road Frontage',
      'Ideal for Boutique Retail & Offices',
      'Vibrant Integrated Community Hub',
    ],
    accentColor: '#B9935A',
  },
  {
    id: 'phase2_3',
    wing: 'Wings B & C',
    subtitleTag: 'Small Family Living',
    title: 'Wings B & C – Small Family Living',
    icon: 'apartment',
    stat: '168',
    statLabel: 'Modern 2BHKs',
    shortDescription:
      'Discover 168 2BHK apartments in Wings B and C, thoughtfully designed for small families with a touch of elegance and upgraded living experience.',
    fullDescription:
      'Wings B and C redefine modern residential architecture with 2BHK apartments crafted for small families. Each home offers serene nature views with breath trees, upgraded living experience, and thoughtful layouts crafted with care.',
    highlights: [
      '168 Thoughtfully Crafted 2BHK Homes',
      'Affordable Living & Elegant Finishes',
      'Serene Nature Views & Breath Trees',
      'Upgraded Small Family Living',
    ],
    accentColor: '#B9935A',
  },
];

export const PHASE_HIGHLIGHTS = [
  {
    icon: 'door_front',
    title: 'Grand Entrance Lobby',
    description: 'Impress your guests with a stylish and welcoming entrance.',
    image: entranceLobbyImg,
  },
  {
    icon: 'eco',
    title: 'Eco-Friendly Facilities',
    description: 'Sewage Treatment Plant (STP) & Rainwater Harvesting System for sustainable living.',
    image: ecoFriendlyImg,
  },
  {
    icon: 'security',
    title: 'Advanced Security',
    description: 'Stay secure with boom barriers and 24/7 surveillance.',
    image: securityImg,
  },
  {
    icon: 'power',
    title: 'Reliable Power Backup',
    description: 'Uninterrupted power supply for lifts and common areas.',
    image: backupImg,
  },
];
