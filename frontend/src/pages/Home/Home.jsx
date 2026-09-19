import React, { useState } from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedProjectSection from "./sections/FeaturedResidenceSection";
import HubOfExcellence from "../../components/HubOfExcellence";
import DevprathAbout from "./sections/DevprathAbout";
import CompletedProjectsSection from "./sections/CompletedProjectsSection"
import VideoCard from "./sections/VideoCard";
import FinalCtaSection from "./sections/FinalCtaSection";
/**
 * =============================================================================
 * PAGE MANIFEST: HOME PAGE (Home.jsx) — EDITORIAL LUXURY REDESIGN
 * =============================================================================
 * Route: "/"
 * 
 * Order of Sections:
 * 1. HERO — Fullscreen architectural entrance with video/imagery & minimal CTA
 * 2. BRAND / CREDIBILITY STATEMENT — Editorial typographic statistics & thin dividers
 * 3. WHO WE ARE / DEVPRATH ETHOS — Asymmetric narrative & founder partnership
 * 4. WHAT DEFINES DEVPRATH — Numbered architectural principles (01-04)
 * 5. FEATURED PROJECT — MANGALMURTI RESIDENCY — Asymmetric centerpiece showcase
 * 6. LOCATION & CONNECTIVITY — Editorial numbered schedule with Leaflet map
 * 7. LEGACY ACROSS NAGPUR — Proven track record teaser of 4 landmark projects
 * 8. FINAL CTA — Dark charcoal architectural closing ("Enquire Now")
 * 9. MODALS — Interactive ConsultationModal
 * =============================================================================
 */

export const Home = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body antialiased min-h-screen selection:bg-[#B9935A] selection:text-white">
      <main className="relative">

        {/* 1. HERO */}
        <HeroSection />

        {/* 2. BRAND / CREDIBILITY STATEMENT */}
        <DevprathAbout />

        {/* 5. FEATURED PROJECT — MANGALMURTI RESIDENCY */}
        <FeaturedProjectSection />

        <VideoCard />
        
        <HubOfExcellence />

        <CompletedProjectsSection />

        {/* 6. LOCATION & CONNECTIVITY */}

        {/* 9. FINAL CTA */}
        <FinalCtaSection />

      </main>
    </div>
  );
};

export default Home;
