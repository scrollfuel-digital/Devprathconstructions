import React from 'react';
import HeroSection from './sections/HeroSection';
import FloorPlanExplorerSection from './sections/FloorPlanExplorerSection';
import AmenitiesCarouselSection from './sections/AmenitiesCarouselSection';
import CuratedGallerySection from './sections/CuratedGallerySection';
import { FinalContactSection } from '../../components/common/FinalContactSection';

/**
 * =============================================================================
 * PROJECT PAGE (Project.jsx) — DEVPRATH CONSTRUCTION LLP
 * Deep-dive architectural showcase for Mangalmurti Residency:
 * 1. HeroSection: Fullscreen exterior elevation of Mangalmurti Residency
 * 2. FloorPlanExplorerSection: Interactive tabbed unit configuration switcher
 * 3. AmenitiesCarouselSection: Horizontal-scroll 4:3 architectural carousel
 * 4. CuratedGallerySection: Asymmetrical edge-to-edge gallery with 1.2s hover zoom
 * 5. TechnicalSpecificationsSection: Minimalist 2-column engineering specs grid
 * 6. Direct Advisory Consultation Banner
 * =============================================================================
 */
export default function Project() {
  return (
    <div
      id="ongoing-project"
      className="bg-[#FAF7F2] text-[#1F1E1C] font-body overflow-x-clip min-h-screen"
    >
      {/* 1. FULLSCREEN ARCHITECTURAL HERO */}
      <HeroSection />

      {/* 2. TABBED FLOOR PLAN / UNIT CONFIGURATION EXPLORER */}
      <FloorPlanExplorerSection />

      {/* 3. HORIZONTAL-SCROLL AMENITIES CAROUSEL */}
      <AmenitiesCarouselSection />

      {/* 4. CURATED ARCHITECTURAL GALLERY (ASYMMETRICAL EDGE-TO-EDGE) */}
      <CuratedGallerySection />

      {/* 4. MINIMALIST 2-COLUMN TECHNICAL SPECIFICATIONS GRID */}
      {/* <TechnicalSpecificationsSection /> */}

      {/* 5. SITE VISIT & CONSULTATION BANNER */}
      <FinalContactSection
        headingLead="Plan Your Visit to"
        headingAccent="Mangalmurti Residency."
        headingBreak
        description="Visit the site to explore available 2 & 3 BHK residences, review floor layouts in detail, and experience the construction quality firsthand. Our team is here to assist you."
        buttons={[
          { to: "/contact", label: "BOOK A SITE VISIT" },
          { to: "/contact#location", label: "VISIT NAGPUR OFFICE" },
        ]}
        footer="MahaRERA Registration No. P50500045698 · Devprath Construction LLP"
      />
    </div>
  );
}
