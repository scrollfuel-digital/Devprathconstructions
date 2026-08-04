# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

<hr>

```
frontend/src/
├── constants/                            # Shared Datasets & Configurations
│   ├── completedProjects.js              # 9 Completed Devparth projects dataset
│   ├── phasesData.js                     # Strategic Phases dataset
│   ├── amenitiesData.js                  # Bento Grid Signature Amenities dataset
│   └── homeData.js                       # Home Page metrics, advantages, floor plans dataset
│
├── components/                           # Global Reusable UI Elements
│   ├── common/                           # Generic Shared UI Elements
│   │   ├── Button.jsx                    # Reusable Gold & White Pill Buttons
│   │   ├── ConsultationModal.jsx         # Private Appointment Modal
│   │   └── Modal.jsx                     # Generic Modal Container Wrapper
│   └── cards/                            # Feature Card Components
│       └── ProjectCard.jsx               # Marquee project card component
│
├── pages/                                # Feature-Based Route Views
│   ├── Home/                             # Home Feature Module
│   │   ├── Home.jsx                      # Main Home page assembler (~30 lines)
│   │   └── sections/                     # Isolated Home Section Subcomponents
│   │       ├── HeroSection.jsx           # Full-bleed home hero banner
│   │       ├── StatsBarSection.jsx       # Metric statistics bar
│   │       ├── CompanyLegacySection.jsx  # Company legacy & vision section
│   │       ├── DevprathAdvantageSection.jsx # Core advantages grid
│   │       ├── FeaturedProjectSection.jsx # Featured residence showcase
│   │       ├── FloorPlansSection.jsx     # Unit floor plans & layout selector
│   │       └── LuxuryAmenitiesSection.jsx # Resort style amenities section
│   │
│   ├── Project/                          # Mangalmurti Residency Feature Module
│   │   ├── Project.jsx                   # Main project page assembler (~25 lines)
│   │   └── sections/                     # Isolated Project Section Subcomponents
│   │       ├── HeroSection.jsx           # Panoramic wide hero section
│   │       ├── AmenitiesSection.jsx      # Bento grid amenities section (228px equal height cards)
│   │       ├── PhasesSection.jsx         # Master planned architecture section
│   │       └── LegacySection.jsx         # Infinite marquee scroll section
│   │
│   ├── AboutUs/                          # About Us Feature Module
│   ├── Blog/                             # Blog Feature Module
│   ├── Contact/                          # Contact Feature Module
│   └── Gallery/                          # Gallery Feature Module
│
├── routes/                               # Central Router
│   └── AppRoutes.jsx                     # react-router-dom definitions
```
