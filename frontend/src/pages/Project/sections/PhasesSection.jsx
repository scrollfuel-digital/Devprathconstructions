import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECT_OVERVIEW, PHASES_DATA, PHASE_HIGHLIGHTS } from '../../../constants/phasesData';
import sideViewImg from '../../../assets/Project/side-view.png';
import topSideViewImg from '../../../assets/Project/top-side-view.jpeg';
import topViewImg from '../../../assets/Project/top-view.png';
import { smoothEmergenceVariant } from '../../../utils/animations';

// 8 Unique High-Res Online Unsplash Images Mapped to Township Features
const HIGHLIGHT_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // 0: Grand Entrance Lobby
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', // 1: Guest Rooms & Drivers Dormitory
  'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80', // 2: Eco-Friendly Facilities
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80', // 3: Green Gym & Children's Play Area
  'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80', // 4: Beautifully Landscaped Vicinity
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80', // 5: Advanced Security
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', // 6: Reliable Power Backup
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', // 7: Clubhouse & Swimming Pool
];

// Helper to compute 3D circular deck transform properties cleanly
const getDeckTransform = (isFront, cardId, idx) => {
  if (isFront) {
    return { zIndex: 30, scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 };
  }
  const offsets = {
    phase1: { rotate: -12, x: -35, y: -15, zIndex: 20, opacity: 0.8 },
    phase2_3: { rotate: 12, x: 35, y: -15, zIndex: 20, opacity: 0.8 },
    default: { rotate: -6, x: -20, y: -25, zIndex: 10, opacity: 0.65 },
  };
  return {
    scale: 0.88,
    ...(offsets[cardId] || { rotate: idx === 1 ? 12 : -12, x: idx === 1 ? 40 : -40, y: -20, zIndex: 10, opacity: 0.7 }),
  };
};

/**
 * TownshipFeatureCard Sub-Component
 * Fully isolated per-element hover/tap state rendering interactive image emergence and smooth card growth.
 */
function TownshipFeatureCard({ highlight, bgImageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className={`relative bg-white p-6 rounded-2xl border transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[220px] flex flex-col justify-between cursor-pointer overflow-hidden ${
        isHovered
          ? 'scale-[1.08] -translate-y-3 shadow-[0_30px_60px_rgba(185,147,90,0.35)] border-[#B9935A] ring-2 ring-[#B9935A]/30 z-30'
          : 'border-[#B9935A]/25 shadow-md z-10'
      }`}
    >
      {/* Layer 0: White Background Base */}
      <div
        className={`absolute inset-0 bg-white z-0 transition-opacity duration-600 pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Layer 1: Image Overlay Container */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-600 overflow-hidden pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={bgImageUrl}
          alt={highlight.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isHovered ? 'scale-100' : 'scale-115'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Layer 2: Text & Icon Content */}
      <div className="relative z-20 flex flex-col justify-between h-full pointer-events-none">
        <div>
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 mb-4 shadow-sm ${
              isHovered
                ? 'bg-[#B9935A] text-white scale-115 shadow-[0_8px_20px_rgba(185,147,90,0.4)]'
                : 'bg-[#B9935A]/15 text-[#B9935A]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl">{highlight.icon}</span>
          </div>

          <h4
            className={`font-heading text-lg font-bold transition-colors duration-500 mb-1.5 leading-snug ${
              isHovered ? 'text-white' : 'text-[#1B1C1C]'
            }`}
          >
            {highlight.title}
          </h4>
        </div>

        <p
          className={`text-xs transition-colors duration-500 leading-relaxed font-light mt-2 ${
            isHovered ? 'text-gray-200' : 'text-[#4E453A]'
          }`}
        >
          {highlight.description}
        </p>
      </div>
    </div>
  );
}

/**
 * PhasesSection Component
 * Architectural phase overview featuring independent 3D deck rotation and Township amenity features.
 */
export default function PhasesSection() {
  const [activePhaseId, setActivePhaseId] = useState('phase1'); // Wing A open by default
  const [autoDeckIdx, setAutoDeckIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const deckCards = [
    { id: 'phase1', title: 'Phase 1: Wing A', subtitle: '64+ Commercial Outlets Top Side View', image: topSideViewImg },
    { id: 'phase2_3', title: 'Phases 2 & 3: Wings B & C', subtitle: '168 Luxury 2BHK Homes Top View', image: topViewImg },
    { id: 'default', title: 'Mangalmurti Residency', subtitle: 'Master Micro Township Side View', image: sideViewImg },
  ];

  // Continuous independent 3D circular deck rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoDeckIdx((prev) => (prev + 1) % deckCards.length);
    }, 3500);

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
            className="font-heading text-3xl md:text-5xl font-bold text-[#1B1C1C] leading-tight"
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
                  className={`rounded-2xl p-5 md:p-6 transition-colors transition-shadow duration-300 cursor-pointer border overflow-hidden ${
                    isActive
                      ? 'bg-white border-[#B9935A] shadow-[0_12px_30px_rgba(185,147,90,0.15)] ring-1 ring-[#B9935A]/40'
                      : 'bg-white/80 backdrop-blur-md border-[#B9935A]/25 hover:border-[#B9935A]/60 hover:bg-white/95 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-[#B9935A] text-white shadow-md' : 'bg-[#B9935A]/15 text-[#B9935A]'}`}>
                        <span className="material-symbols-outlined text-xl md:text-2xl">{phase.icon}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B9935A]/15 text-[#785926] px-2.5 py-0.5 rounded-full border border-[#B9935A]/30 inline-block mb-1">
                          {phase.badge}
                        </span>
                        <h4 className="font-heading font-bold text-base md:text-lg text-[#1B1C1C] leading-snug">
                          {phase.title}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex items-center gap-3">
                      <div>
                        <span className="font-heading font-bold text-xl md:text-2xl text-[#B9935A] block leading-none">
                          {phase.stat}
                        </span>
                        <span className="font-label-caps text-[9px] uppercase tracking-wider text-[#666666]">
                          {phase.statLabel}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#B9935A]' : ''}`}>
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
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.35)}
            className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] flex items-center justify-center"
          >
            {deckCards.map((card, idx) => {
              const isFront = currentFrontCardId === card.id;
              const transform = getDeckTransform(isFront, card.id, idx);

              return (
                <motion.div
                  key={card.id}
                  animate={transform}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden border transition-shadow duration-500 ${
                    isFront ? 'border-[#B9935A] shadow-[0_25px_50px_rgba(185,147,90,0.25)] ring-1 ring-[#B9935A]/50' : 'border-[#B9935A]/30 shadow-lg'
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

        {/* Township Features Section */}
        <div className="mt-20 pt-16 border-t border-[#B9935A]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] block mb-2">
              World-Class Experience
            </span>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-[#1B1C1C]">
              Township Features &amp; Amenities
            </h3>
            <p className="text-xs sm:text-sm text-[#4E453A] mt-2 font-light">
              Crafted for luxury, security, and sustainable micro-township living in Nagpur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASE_HIGHLIGHTS.map((highlight, idx) => (
              <TownshipFeatureCard
                key={highlight.id}
                highlight={highlight}
                bgImageUrl={HIGHLIGHT_IMAGES[idx % HIGHLIGHT_IMAGES.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
