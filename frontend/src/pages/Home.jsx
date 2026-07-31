import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import CompanyLegacy from "../components/CompanyLegacy";
import DevprathAdvantage from "../components/DevprathAdvantage";
import FeaturedProject from "../components/FeaturedProject";
import FloorPlans from "../components/FloorPlans";
import LuxuryAmenities from "../components/LuxuryAmenities";
import HubOfExcellence from "../components/HubOfExcellence";
import ClientVoices from   "../components/ClientVoices";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";


export const Home = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-[#F8F5EF] text-[#172235] font-sans antialiased min-h-screen selection:bg-[#C9A063] selection:text-white">
      {/* Fixed Luxury Navigation Header */}
      <Navbar onBookConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Page Layout */}
      <main className="relative">
        {/* Full-Bleed Hero Banner */}
        <Hero
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Metric Statistics Bar */}
        <StatsBar />

        {/* Company Legacy & Vision ("Building Trust Through Excellence") */}
        <CompanyLegacy />

        {/* Core Advantages ("Defining the Gold Standard") */}
        <DevprathAdvantage />

        {/* Featured Residence Banner ("Mangalmurti Residency") */}
        <FeaturedProject
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Unit Floor Plans & Layout Selector ("Choice of Living") */}
        <FloorPlans
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Resort Style Amenities */}
        <LuxuryAmenities />

        {/* Location & Connectivity Timeline ("Everything Within Reach") */}
        <HubOfExcellence />

        {/* Testimonials ("Voices of Our Community") */}
        <ClientVoices />

        {/* Contact Form & Corporate HQ */}
        <ContactSection />
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