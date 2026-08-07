import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECT_OVERVIEW, PHASES_DATA } from '../../../constants/phasesData';
import sideViewImg from '../../../assets/Project/side-view.png';
import topSideViewImg from '../../../assets/Project/top-side-view.jpeg';
import topViewImg from '../../../assets/Project/top-view.png';
import { smoothEmergenceVariant } from '../../../utils/animations';
import StaggeredSpringScaleInGrid from '../../../components/common/StaggeredSpringScaleInGrid';

// Helper to compute 3D circular deck transform properties cleanly based on active index
const getDeckTransform = (idx, autoDeckIdx, total) => {
  const diff = (idx - autoDeckIdx + total) % total;
  if (diff === 0) {
    return { zIndex: 30, scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 };
  }
  if (diff === 1) {
    return { zIndex: 20, scale: 0.88, rotate: 10, x: 35, y: -12, opacity: 0.85 };
  }
  return { zIndex: 10, scale: 0.82, rotate: -10, x: -35, y: -20, opacity: 0.7 };
};

/**
 * PhasesSection Component
 * Architectural phase overview featuring independent 3D deck rotation and Township amenity features.
 */
export default function PhasesSection() {
  const [activePhaseId, setActivePhaseId] = useState('phase1'); // Wing A open by default
  const [autoDeckIdx, setAutoDeckIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const deckCards = [
    { id: 'phase1', title: 'Phase 1', subtitle: 'Commercial Outlets Top Side View', image: topSideViewImg },
    { id: 'phase2_3', title: 'Phases 2 & 3', subtitle: 'Luxury 2BHK Homes Top View', image: topViewImg },
    { id: 'default', title: 'Mangalmurti Residency', subtitle: 'Master Micro Township Side View', image: sideViewImg },
  ];

  // Continuous independent 3D circular deck rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoDeckIdx((prev) => (prev + 1) % deckCards.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [deckCards.length]);

  const currentFrontCardId = deckCards[autoDeckIdx].id;

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F5EF] via-[#FCF9F4] to-[#F8F5EF] relative overflow-hidden border-y border-[#B9935A]/20" id="phases">
      <div className="relative z-10 px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
          >
            <span className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1.5 rounded-full border border-[#B9935A]/30 uppercase tracking-[0.2em] inline-block mb-3">
              {PROJECT_OVERVIEW.welcomeTag}
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.2)}
            className="font-heading text-xl sm:text-3xl md:text-5xl font-bold text-[#1B1C1C] leading-tight whitespace-nowrap"
          >
            {PROJECT_OVERVIEW.title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.3)}
            className="text-[#B9935A] font-semibold text-sm md:text-base tracking-wider uppercase mt-1 mb-4"
          >
            {PROJECT_OVERVIEW.subtitle}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
            className="text-[#4E453A] font-body text-base md:text-lg leading-relaxed"
          >
            {PROJECT_OVERVIEW.description}
          </motion.p>
        </div>

        {/* Phase Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Accordion Phase Cards */}
          <div className="lg:col-span-7 space-y-4">
            {PHASES_DATA.map((phase, idx) => {
              const isActive = activePhaseId === phase.id;

              return (
                <motion.div
                  key={phase.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={smoothEmergenceVariant(shouldReduceMotion, 0.3 + idx * 0.15)}
                  onMouseEnter={() => setActivePhaseId(phase.id)}
                  onClick={() => setActivePhaseId(phase.id)}
                  className={`rounded-2xl p-5 md:p-6 transition-colors transition-shadow duration-300 cursor-pointer border overflow-hidden ${isActive
                      ? 'bg-white border-[#B9935A] shadow-[0_12px_30px_rgba(185,147,90,0.15)] ring-1 ring-[#B9935A]/40'
                      : 'bg-white/80 backdrop-blur-md border-[#B9935A]/25 hover:border-[#B9935A]/60 hover:bg-white/95 shadow-sm'
                    }`}
                >
                  {/* Mobile Header View */}
                  <div className="flex sm:hidden flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-[#B9935A] text-white shadow-md' : 'bg-[#B9935A]/15 text-[#B9935A]'}`}>
                        <span className="material-symbols-outlined text-xl block">{phase.icon}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest bg-[#B9935A]/15 text-[#785926] px-2.5 py-0.5 rounded-full border border-[#B9935A]/30 inline-block">
                          {phase.badge}
                        </span>
                        <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 text-lg ${isActive ? 'rotate-180 text-[#B9935A]' : ''}`}>
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-base text-[#1B1C1C] leading-snug">
                      {phase.title}
                    </h4>
                  </div>

                  {/* Desktop Header View */}
                  <div className="hidden sm:flex items-center justify-between gap-6">
                    {/* Left: Logo Icon & Title */}
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-[#B9935A] text-white shadow-md' : 'bg-[#B9935A]/15 text-[#B9935A]'}`}>
                        <span className="material-symbols-outlined text-2xl block">{phase.icon}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base md:text-lg text-[#1B1C1C] leading-snug">
                        {phase.title}
                      </h4>
                    </div>

                    {/* Right: Phase Badge & Chevron Arrow */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-[#B9935A]/15 text-[#785926] px-3 py-1 rounded-full border border-[#B9935A]/30 inline-block">
                        {phase.badge}
                      </span>
                      <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 text-xl shrink-0 ${isActive ? 'rotate-180 text-[#B9935A]' : ''}`}>
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-[#B9935A]/20">
                      <p className="text-[#4E453A] text-sm md:text-base leading-relaxed mb-5">
                        {phase.fullDescription}
                      </p>

                      <h5 className="text-xs font-bold uppercase tracking-widest text-[#B9935A] mb-3">
                        Key Phase Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2.5 bg-[#F8F5EF] p-2.5 rounded-lg border border-[#B9935A]/20">
                            <span className="material-symbols-outlined text-[#B9935A] text-lg shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                              check_circle
                            </span>
                            <span className="text-xs font-medium text-[#1B1C1C] leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Independent 3D Circular Deck */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.45)}
            className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] flex items-center justify-center cursor-pointer select-none"
          >
            {deckCards.map((card, idx) => {
              const isFront = currentFrontCardId === card.id;
              const transform = getDeckTransform(idx, autoDeckIdx, deckCards.length);

              return (
                <motion.div
                  key={card.id}
                  animate={transform}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setAutoDeckIdx((prev) => (idx === prev ? (prev + 1) % deckCards.length : idx))}
                  className={`absolute w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden border transition-shadow duration-500 cursor-pointer ${isFront ? 'border-[#B9935A] shadow-[0_25px_50px_rgba(185,147,90,0.25)] ring-1 ring-[#B9935A]/50' : 'border-[#B9935A]/30 shadow-lg'
                    }`}
                >
                  <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-white z-20 pointer-events-none">
                    <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-[#F0D060] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#B9935A]/40 inline-block mb-2">
                      {card.subtitle}
                    </span>
                    <h4 className="font-heading text-xl md:text-2xl font-bold drop-shadow-md">
                      {card.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Township Features Section using Staggered Spring Scale-In Grid */}
        <div className="mt-20 pt-8 border-t border-[#B9935A]/20">
          <StaggeredSpringScaleInGrid
            title="Township Features & Amenities"
            subtitle="Crafted for luxury, security, and sustainable micro-township living in Nagpur."
          />
        </div>
      </div>
    </section>
  );
}
