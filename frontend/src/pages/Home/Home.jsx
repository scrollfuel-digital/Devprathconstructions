import React, { useState } from "react";
import HeroSection from "./sections/HeroSection";
import StatsBar from "../../components/common/StatsBar";
import CompanyLegacySection from "./sections/CompanyVisionSection";
import DevprathAdvantageSection from "./sections/CoreAdvantagesSection";
import FeaturedProjectSection from "./sections/FeaturedResidenceSection";
import HubOfExcellenceSection from "../../components/HubOfExcellence";
import ClientVoicesSection from "../../components/ClientVoices";
import ContactSection from "../../components/ContactSection";
import ConsultationModal from "../../components/ConsultationModal";

/**
 * Home Page Component
 * Feature-based architectural view assembling isolated home sections.
 */
export const Home = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#F8F5EF] text-[#172235] font-sans antialiased min-h-screen selection:bg-[#C9A063] selection:text-white">
      <main className="relative">
        {/* Full-Bleed Hero Banner */}
        <HeroSection />

        {/* Metric Statistics Bar */}
        <StatsBar isSection={true} />

        {/* Company Legacy & Vision */}
        <CompanyLegacySection />

        {/* Core Advantages */}
        <DevprathAdvantageSection />

        {/* Featured Residence Showcase */}
        <FeaturedProjectSection onBookConsultation={() => setIsConsultationOpen(true)} />

        {/* Unit Floor Plans & Layout Selector */}
        {/* <FloorPlansSection onBookConsultation={() => setIsConsultationOpen(true)} /> */}

        {/* Location & Connectivity Timeline (Leaflet Map) */}
        <HubOfExcellenceSection />

        {/* Testimonials */}
        <ClientVoicesSection />

        {/* Contact Form & Corporate HQ */}
        {/* <ContactSection /> */}
      </main>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default Home;
