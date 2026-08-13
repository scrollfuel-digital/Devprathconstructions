import React from 'react';
import HeroSection from './sections/HeroSection';
import AmenitiesSection from './sections/SignatureAmenitiesSection';
import PhasesSection from './sections/PhasesOverviewSection';
import LegacySection from './sections/CompletedProjectsMarqueeSection';

/**
 * Main Project Page Component (Mangalmurti Residency)
 * Clean modular architecture assembling page sections.
 * 
 * Sections:
 * 1. HeroSection (#hero)
 * 2. PhasesSection (#phases)
 * 3. AmenitiesSection (#amenities)
 * 4. LegacySection (#legacy)
 */
export default function Project() {
  return (
    <div
      id='ongoing-project'
      className="bg-[#F8F5EF] text-[#1B1C1C] font-body overflow-x-hidden min-h-screen">
      <HeroSection />
      <PhasesSection />
      <AmenitiesSection />
      <section id='completed-project'>
        <LegacySection />
      </section>
    </div>
  );
}
