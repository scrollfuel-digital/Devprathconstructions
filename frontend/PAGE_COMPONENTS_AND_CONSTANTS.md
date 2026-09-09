# Devprath Constructions — Current Components & Constants Master Inventory

This document provides a complete, exhaustive catalog of all **currently present (old)** components, sections, constants, datasets, assets, and state hooks across every page in the project.

Use this reference when designing or upgrading new sections so you can seamlessly keep, swap, or roll back to the original components at any time.

---

## Quick Navigation

- [1. Home Page (`/`)](#1-home-page)
- [2. About Us Page (`/about-us`)](#2-about-us-page)
- [3. Projects Page (`/projects`)](#3-projects-page)
- [4. Contact Page (`/contact`)](#4-contact-page)
- [5. Blog Archive Page (`/blog`)](#5-blog-archive-page)
- [6. Blog Detail Page (`/blog/:slug`)](#6-blog-detail-page)
- [7. Gallery Page (`/gallery`)](#7-gallery-page)
- [8. Shared Global Components & Constants](#8-shared-global-components--constants)

---

## 1. Home Page

- **Main File**: [`src/pages/Home/Home.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/Home.jsx)
- **Routes**: `/`
- **Active State**: `isConsultationOpen` (boolean)

### Currently Present Components & Sections

| Section # | Component Name | Source File | Description | Key Assets / Constants / Sub-components |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1** | `HeroSection` | [`src/pages/Home/sections/HeroSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/sections/HeroSection.jsx) | Full-bleed architectural background video with headline, CTA & floating spotlight card | • `heroVideo` (`src/assets/videos/home_page_hero_video.mp4`)<br>• `mangalmurtiElevation` (`src/assets/Project/new-bg.jpeg`) |
| **Section 2** | `StatsBar` | [`src/components/common/StatsBar.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/common/StatsBar.jsx) | Counter statistics ribbon (250+ Families, 100% On-time) | • `CONTACT_STATS` (`src/constants/contactData.js`)<br>• `AnimatedCounter` (`src/components/common/AnimatedCounter.jsx`) |
| **Section 3** | `CompanyLegacySection` | [`src/pages/Home/sections/CompanyVisionSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/sections/CompanyVisionSection.jsx) | "Who We Are" story narrative with master-planned township badge | • `mangalmurtiImg` (`src/assets/home page/who_are_we.png`)<br>• `magicalBehindVariant` (`src/constants/magicalBehindVariant.js`) |
| **Section 4** | `DevprathAdvantageSection` | [`src/pages/Home/sections/CoreAdvantagesSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/sections/CoreAdvantagesSection.jsx) | 3-column core advantage cards (Timely Delivery, Superior Quality, Clear Title) | • `ADVANTAGES` (in-file array)<br>• `ADVANTAGES_DATA` (`src/constants/homeData.js`) |
| **Section 5** | `FeaturedProjectSection` | [`src/pages/Home/sections/FeaturedResidenceSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/sections/FeaturedResidenceSection.jsx) | Mangalmurti Residency showcase with key badges and 3-photo mosaic | • `FEATURED_PROJECT_BADGES` (`src/constants/homeData.js`)<br>• `GALLERY_IMAGES` (in-file)<br>• Photos: `ketchen`, `grandLivingLounge`, `panoramicSkylineView` |
| **Section 6** | `FloorPlansSection` *(Inactive)* | [`src/pages/Home/sections/FloorPlansSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Home/sections/FloorPlansSection.jsx) | Unit floor plans tab selector (Imperial 4 BHK, Royal 3 BHK) | • `UNITS_DATA`, `TABS` (in-file)<br>• `FLOOR_PLANS_DATA` (`src/constants/homeData.js`) |
| **Section 7** | `HubOfExcellenceSection` | [`src/components/HubOfExcellence.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/HubOfExcellence.jsx) | Interactive Leaflet map with Nagpur landmarks & transit connectivity | • `MANGALMURTI_LOCATION`<br>• `LOCATIONS_DATA` (Khapri Metro, AIIMS, GCOEN, VCA Stadium, Airport) |
| **Section 8** | `ClientVoicesSection` | [`src/components/ClientVoices.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/ClientVoices.jsx) | Video testimonials + client reviews carousel | • `CLIENT_VIDEOS`, `CLIENT_REVIEWS` (`src/constants/clientVoicesData.js`) |
| **Section 9** | `ContactSection` *(Inactive)* | [`src/components/ContactSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/ContactSection.jsx) | Embedded contact inquiry form & HQ details | • `HQ_INFO_ITEMS`, `PROJECT_OPTIONS`<br>• `SocialConnectBar` (`src/components/SocialConnectBar.jsx`) |
| **Modal** | `ConsultationModal` | [`src/components/ConsultationModal.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/ConsultationModal.jsx) | Consultation booking popup modal | • Controlled by `isConsultationOpen` |

---

## 2. About Us Page

- **Main File**: [`src/pages/AboutUs/AboutUs.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/AboutUs/AboutUs.jsx)
- **Routes**: `/about-us`, `/aboutus`

### Currently Present Components & Sections

| Section # | Section Title | Description | Key Assets / Constants / Icons |
| :--- | :--- | :--- | :--- |
| **Section 1** | **Our Story & Philosophy** (`#our-story`) | Two-column architectural philosophy story with 2-image stack and side-by-side Vision & Mission cards | • `aboutus1` (`src/assets/AboutUsImg/img1.png`)<br>• `aboutus2` (`src/assets/AboutUsImg/secimg.png`)<br>• `brandPillars` (in-file array: "OUR VISION" and "OUR MISSION")<br>• Icons: `Building2`, `Eye`, `Target`, `CheckCircle2` |
| **Section 2** | **Leadership & Vision Spotlight** | Executive profile showcase for Mr. Hemal H. Nadiyana and Dr. Sunil N. Patil with bios & quotes | • `leaderHemal` (`src/assets/AboutUsImg/hemal.png`)<br>• `leaderSunil` (`src/assets/AboutUsImg/sunil.png`) |
| **Section 3** | **Our Core Values** | 5 luxury cards highlighting foundational values | • `coreValues` (5 items: Quality, Integrity, Innovation, Commitment, Excellence)<br>• Icons: `Award`, `ShieldCheck`, `Lightbulb`, `HeartHandshake`, `Star` |

---

## 3. Projects Page

- **Main File**: [`src/pages/Project/Project.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Project/Project.jsx)
- **Routes**: `/project`, `/projects`

### Currently Present Components & Sections

| Section # | Component Name | Source File | Description | Key Assets / Constants / Sub-components |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1** | `HeroSection` | [`src/pages/Project/sections/HeroSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Project/sections/HeroSection.jsx) | Fullscreen architectural exterior elevation of Mangalmurti Residency with responsive gradients | • `heroBgImg` (`src/assets/Project/new-bg.jpeg`)<br>• `Button` (`src/components/common/Button.jsx`)<br>• `smoothEmergenceVariant` (`src/utils/animations.js`) |
| **Section 2** | `PhasesSection` | [`src/pages/Project/sections/PhasesOverviewSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Project/sections/PhasesOverviewSection.jsx) | Multi-phase breakdown (Wing A commercial, Wings B & C residential) with 3D auto-rotating deck | • `PROJECT_OVERVIEW`, `PHASES_DATA` (`src/constants/phasesData.js`)<br>• `sideViewImg`, `topSideViewImg`, `topViewImg` (`src/assets/Project/`)<br>• `StaggeredSpringScaleInGrid` (`src/components/common/StaggeredSpringScaleInGrid.jsx`) |
| **Section 3** | `AmenitiesSection` | [`src/pages/Project/sections/SignatureAmenitiesSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Project/sections/SignatureAmenitiesSection.jsx) | Master lifestyle amenities with category tabs & 60fps auto-scrolling column | • `AMENITIES_CATEGORIES`, `AMENITIES_ITEMS` (`src/constants/amenitiesData.js`) |
| **Section 4** | `LegacySection` | [`src/pages/Project/sections/CompletedProjectsMarqueeSection.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Project/sections/CompletedProjectsMarqueeSection.jsx) | Continuous infinite marquee scroll for completed projects | • `COMPLETED_PROJECTS` (`src/constants/completedProjects.js`)<br>• `ProjectCard` (`src/components/cards/ProjectCard.jsx`)<br>• `ProjectDetailModal` (`src/components/modals/ProjectDetailModal.jsx`) |

---

## 4. Contact Page

- **Main File**: [`src/pages/Contact/Contact.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Contact/Contact.jsx)
- **Routes**: `/contact`
- **Active State**: `activeOffice` ("operations" | "registered")

### Currently Present Components & Sections

| Section # | Section Title | Description | Key Assets / Constants / Sub-components |
| :--- | :--- | :--- | :--- |
| **Section 1** | **Hero Header & StatsBar** | Page title header ("We Build For You") and company metric statistics bar | • `StatsBar` (`src/components/common/StatsBar.jsx`)<br>• `CONTACT_STATS` (`src/constants/contactData.js`) |
| **Section 2** | **Quick Contact Cards** | 3 floating cards for Email, Primary Phone, and Official Working Hours | • `quickContactCards` (in-file array)<br>• `CONTACT_CHANNELS` (`src/constants/contactData.js`) |
| **Section 3** | **Inquiries Form & Office Info** | Lead capture form with Registered & Operations office cards, Social channels, and WhatsApp instant CTA | • `ContactForm` (`src/pages/Contact/components/ContactForm.jsx`)<br>• `SocialConnectBar` (`src/components/SocialConnectBar.jsx`)<br>• `OFFICES`, `CONTACT_CHANNELS`<br>• `officeCards` (in-file array) |
| **Section 4** | **Interactive Satellite Map** | Interactive Leaflet satellite map displaying pins for both offices | • `ContactMap` (`src/pages/Contact/components/ContactMap.jsx`) |

---

## 5. Blog Archive Page

- **Main File**: [`src/pages/Blog/Blog.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Blog/Blog.jsx)
- **Routes**: `/blog`
- **Active State**: `activeCategory` (string), `searchQuery` (string)

### Currently Present Components & Sections

| Section # | Section Title | Description | Key Constants / Sub-components |
| :--- | :--- | :--- | :--- |
| **Section 1** | **Hero Header, Search & Filter** | Intro header with real-time text search and category filter pills | • `CATEGORIES` (`src/constants/blogData.js`)<br>• `Search` icon (`lucide-react`) |
| **Section 2** | **Featured Post** | Full-width spotlight card displaying the primary featured blog post | • `BlogCard` (`src/pages/Blog/BlogCard.jsx` with `isFeatured={true}`)<br>• `BLOG_POSTS[0]` (`src/constants/blogData.js`) |
| **Section 3** | **Blog Grid** | Multi-column grid of matching regular blog articles | • `BlogCard` (`src/pages/Blog/BlogCard.jsx`)<br>• `BLOG_POSTS` (`src/constants/blogData.js`) |
| **Section 4** | **Empty Search State** | Graceful fallback when search or category yields no results | • Fallback card with search reset hints |

---

## 6. Blog Detail Page

- **Main File**: [`src/pages/Blog/BlogDetail.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Blog/BlogDetail.jsx)
- **Routes**: `/blog/:slug`, and root slug fallback `/:slug`
- **Active State**: `slideIndex` (for related articles slider)

### Currently Present Components & Sections

| Section # | Section Title | Description | Key Constants / Helpers / Sub-components |
| :--- | :--- | :--- | :--- |
| **Section 1** | **Article Header & Title** | Back button to `/blog`, category tag, author attribution, and main heading | • Icons: `ArrowLeft`, `Tag`, `User` |
| **Section 2** | **Hero Featured Image** | Full-width responsive article cover image | • `blog.image` |
| **Section 3** | **Dynamic Content Renderer** | Modular parser rendering paragraphs, headings, highlight boxes, bullet points, quotes, and conclusions | • Supports: `paragraph`, `heading`, `highlightBox`, `headingWithPoints`, `quoteHeading`, `conclusion` |
| **Section 4** | **Citations & References** | Bulleted list of source references | • `blog.references` |
| **Section 5** | **"Read Our Next Article"** | 3-card sliding carousel of related articles with Next/Prev buttons | • `BlogCard` (`src/pages/Blog/BlogCard.jsx`)<br>• `getRelatedBlogs(slug, 4)` |
| **404 State** | **Article Not Found** | Error card with "Back to All Articles" button when slug is invalid | • `BookOpen` icon |

---

## 7. Gallery Page

- **Main File**: [`src/pages/Gallery/Gallery.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/pages/Gallery/Gallery.jsx)
- **Routes**: `/gallery` (ready for router activation)
- **Active State**: `spotlightIdx` (number), `lightboxOpen` (boolean), `lightboxIdx` (number), `lightboxImages` (array)

### Currently Present Components & Sections

| Section # | Section Title | Description | Key Constants / Sub-components |
| :--- | :--- | :--- | :--- |
| **Section 1** | `GalleryHero` | Visual header with title and gold accents | • `GalleryHero` (`src/pages/Gallery/GalleryHero.jsx`) |
| **Section 2** | **Spotlight Stage & Filmstrip** | Interactive large spotlight image with Prev/Next buttons and auto-scrolling thumbnail track | • `firstSliderImages` (19 renders from `src/constants/galleryData.js`) |
| **Section 3** | **Event Showcase** | 3-column event photo sections (Bhoomi Pujan, Customer Meet, Milestones) | • `galleryEventSections` (`src/constants/galleryData.js`) |
| **Modal** | `GalleryLightbox` | Fullscreen photo viewer modal with keyboard navigation | • `GalleryLightbox` (`src/pages/Gallery/GalleryLightbox.jsx`) |

---

## 8. Shared Global Components & Constants

| Component / Utility | File Path | Usage & Description |
| :--- | :--- | :--- |
| **Navbar** | [`src/components/Navbar.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/Navbar.jsx) | Global fixed navigation bar with logo, page links, and Mobile drawer |
| **Footer** | [`src/components/Footer.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/Footer.jsx) | Global footer with quick links, legal disclaimers, RERA numbers, and copyright |
| **StatsBar** | [`src/components/common/StatsBar.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/common/StatsBar.jsx) | Reusable 2-metric statistics counter bar (Home & Contact pages) |
| **SocialConnectBar** | [`src/components/SocialConnectBar.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/SocialConnectBar.jsx) | Social media icons ribbon (Facebook, Instagram, LinkedIn, YouTube) |
| **ConsultationModal** | [`src/components/ConsultationModal.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/ConsultationModal.jsx) | Lead generation booking modal |
| **AnimatedCounter** | [`src/components/common/AnimatedCounter.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/common/AnimatedCounter.jsx) | Smooth ease-out numeric increment counter |
| **Button** | [`src/components/common/Button.jsx`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/components/common/Button.jsx) | Reusable luxury CTA button |
| **Navigation Data** | [`src/constants/navigationData.js`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/constants/navigationData.js) | Primary nav link routes and labels |
| **Motion Variants** | [`src/constants/magicalBehindVariant.js`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/constants/magicalBehindVariant.js), [`src/utils/animations.js`](file:///e:/ScrollFuel/Devprath_%20new/Devprathconstructions/frontend/src/utils/animations.js) | Consistent smooth emergence and fade-in animations |
