import React from 'react';
import HeroSection from './sections/HeroSection';
import AmenitiesSection from './sections/AmenitiesSection';
import PhasesSection from './sections/PhasesSection';
import LegacySection from './sections/LegacySection';

/**
 * Main Project Page Component (Mangalmurti Residency)
 * Clean modular architecture assembling page sections.
 * 
 * Sections:
 * 1. HeroSection (#hero)
 * 2. AmenitiesSection (#amenities)
 * 3. PhasesSection (#phases)
 * 4. LegacySection (#legacy)
 */
export default function Project() {
  return (
    <div className="bg-[#F8F5EF] text-[#1B1C1C] font-body overflow-x-hidden min-h-screen">
      <HeroSection />
      <PhasesSection />
      <AmenitiesSection />
      <LegacySection />
    </div>
  );
}
