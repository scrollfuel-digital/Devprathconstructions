import React from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedProjectSection from "./sections/FeaturedResidenceSection";
import HubOfExcellence from "../../components/HubOfExcellence";
import DevprathAbout from "./sections/DevprathAbout";
import VideoCard from "./sections/VideoCard";
import FinalCtaSection from "./sections/FinalCtaSection";


export const Home = () => {
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

        {/* 6. LOCATION & CONNECTIVITY */}

        {/* 9. FINAL CTA */}
        <FinalCtaSection />

      </main>
    </div>
  );
};

export default Home;
