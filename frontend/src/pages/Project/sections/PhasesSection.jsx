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

/**
 * PhasesSection Component
 * Center-aligned header, 2-column layout (left: hover-expandable accordion phase boxes with Wing A open by default,
 * right: infinite automatic 3D circular arc stacked card deck animation), followed by a clean, static township feature grid
 * featuring interactive hover background image fade-up overlays.
 */
export default function PhasesSection() {
  const [activePhaseId, setActivePhaseId] = useState('phase1'); // Wing A open by default!
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [autoDeckIdx, setAutoDeckIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Full-sized 3D stacked deck images using requested project assets
  const deckCards = [
    {
      id: 'phase1',
      title: 'Phase 1: Wing A',
      subtitle: '64+ Commercial Outlets Top Side View',
      image: topSideViewImg,
    },
    {
      id: 'phase2_3',
      title: 'Phases 2 & 3: Wings B & C',
      subtitle: '168 Luxury 2BHK Homes Top View',
      image: topViewImg,
    },
    {
      id: 'default',
      title: 'Mangalmurti Residency',
      subtitle: 'Master Micro Township Side View',
      image: sideViewImg,
    },
  ];

  // Infinite automatic 3D circular deck cycling when idle
  useEffect(() => {
    if (isHoveringLeft) return;

    const timer = setInterval(() => {
      setAutoDeckIdx((prev) => (prev + 1) % deckCards.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isHoveringLeft, deckCards.length]);

  // Determine active card ID (manual hover on left takes priority over auto deck cycle)
  const currentFrontCardId = isHoveringLeft
    ? activePhaseId
    : deckCards[autoDeckIdx].id;

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F5EF] via-[#FCF9F4] to-[#F8F5EF] relative overflow-hidden border-y border-[#B9935A]/20" id="phases">
      <div className="relative z-10 px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Top Header - Centered */}
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

        {/* Main Grid Layout: Left 2 Accordion Phase Boxes, Right Full-Sized 3D Circular Card Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Hover-Expandable Accordion Phase Boxes (Wing A open by default) */}
          <div
            className="lg:col-span-7 space-y-4"
            onMouseEnter={() => setIsHoveringLeft(true)}
            onMouseLeave={() => {
              setIsHoveringLeft(false);
              setActivePhaseId('phase1');
            }}
          >
            {PHASES_DATA.map((phase, idx) => {
              const isActive = activePhaseId === phase.id;

              return (
                <motion.div
                  key={phase.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={smoothEmergenceVariant(shouldReduceMotion, 0.3 + idx * 0.15)}
                  onMouseEnter={() => {
                    setIsHoveringLeft(true);
                    setActivePhaseId(phase.id);
                  }}
                  onClick={() => {
                    setIsHoveringLeft(true);
                    setActivePhaseId(phase.id);
                  }}
                  className={`rounded-2xl p-5 md:p-6 transition-colors transition-shadow duration-300 cursor-pointer border overflow-hidden ${
                    isActive
                      ? 'bg-white border-[#B9935A] shadow-[0_12px_30px_rgba(185,147,90,0.15)] ring-1 ring-[#B9935A]/40'
                      : 'bg-white/80 backdrop-blur-md border-[#B9935A]/25 hover:border-[#B9935A]/60 hover:bg-white/95 shadow-sm'
                  }`}
                >
                  {/* Card Header (Headline) */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-xl transition-colors duration-300 ${
                          isActive
                            ? 'bg-[#B9935A] text-white shadow-md'
                            : 'bg-[#B9935A]/15 text-[#B9935A]'
                        }`}
                      >
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
                      <span
                        className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-[#B9935A]' : ''
                        }`}
                      >
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  {/* Smooth Animated Body Container */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
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
                          <div
                            key={hIdx}
                            className="flex items-center gap-2.5 bg-[#F8F5EF] p-2.5 rounded-lg border border-[#B9935A]/20"
                          >
                            <span
                              className="material-symbols-outlined text-[#B9935A] text-lg shrink-0"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              check_circle
                            </span>
                            <span className="text-xs font-medium text-[#1B1C1C] leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Infinite 3D Circular Arc Stacked Image Deck Showcase (lg:col-span-5) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.35)}
            className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] flex items-center justify-center"
          >
            {deckCards.map((card, idx) => {
              const isFront = currentFrontCardId === card.id;

              // Calculate visible 3D circular arc transform offset & rotation values
              let zIndex = 10;
              let scale = 0.88;
              let rotate = idx === 0 ? 0 : idx === 1 ? 12 : -12;
              let x = idx === 0 ? 0 : idx === 1 ? 40 : -40;
              let y = idx === 0 ? 0 : idx === 1 ? -15 : -25;
              let opacity = 0.7;

              if (isFront) {
                zIndex = 30;
                scale = 1;
                rotate = 0;
                x = 0;
                y = 0;
                opacity = 1;
              } else {
                if (card.id === 'phase1') {
                  rotate = -12;
                  x = -35;
                  y = -15;
                  zIndex = 20;
                  opacity = 0.8;
                } else if (card.id === 'phase2_3') {
                  rotate = 12;
                  x = 35;
                  y = -15;
                  zIndex = 20;
                  opacity = 0.8;
                } else if (card.id === 'default') {
                  rotate = -6;
                  x = -20;
                  y = -25;
                  zIndex = 10;
                  opacity = 0.65;
                }
              }

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    zIndex,
                    scale,
                    rotate,
                    x,
                    y,
                    opacity,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => {
                    if (card.id !== 'default') {
                      setIsHoveringLeft(true);
                      setActivePhaseId(card.id);
                    }
                  }}
                  className={`absolute w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden border transition-shadow duration-500 cursor-pointer ${
                    isFront
                      ? 'border-[#B9935A] shadow-[0_25px_50px_rgba(185,147,90,0.25)] ring-1 ring-[#B9935A]/50'
                      : 'border-[#B9935A]/30 shadow-lg hover:border-[#B9935A]/70'
                  }`}
                >
                  <img
                    alt={card.title}
                    className="w-full h-full object-cover"
                    src={card.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Card Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <span className="font-label-caps text-[10px] font-bold tracking-widest text-[#F0D060] uppercase mb-1 block">
                      {isFront ? 'Active Phase View' : 'Phase Perspective'}
                    </span>
                    <h4 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs md:text-sm text-white/80 mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 8 Comprehensive Township Amenities Highlights Grid - Clean Static Grid Layout */}
        <div className="mt-16 pt-16 border-t border-[#B9935A]/25">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1 rounded-full border border-[#B9935A]/30 uppercase tracking-widest inline-block">
              Elevated Living Experience
            </span>

            <h3 className="font-heading text-2xl md:text-4xl font-bold text-[#1B1C1C] mt-3">
              Township Features &amp; World-Class Amenities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASE_HIGHLIGHTS.map((item, idx) => {
              const bgImage = HIGHLIGHT_IMAGES[idx];

              return (
                <div
                  key={idx}
                  className="relative group p-5 rounded-2xl border border-[#B9935A]/25 hover:border-[#B9935A] hover:shadow-[0_20px_40px_rgba(185,147,90,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer min-h-[210px]"
                >
                  {/* Layer 1: Base Solid White Background (fades out on hover) */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-md group-hover:opacity-0 transition-opacity duration-500 z-0 pointer-events-none" />

                  {/* Layer 2: Animated Hover Background Image (fades in and zooms on hover) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none overflow-hidden">
                    <img
                      src={bgImage}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/35" />
                  </div>

                  {/* Layer 3: Foreground Content (z-20 on top of image) */}
                  <div className="relative z-20 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#B9935A]/15 text-[#B9935A] flex items-center justify-center mb-4 group-hover:bg-[#B9935A] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-[#1B1C1C] group-hover:text-white transition-colors duration-300 mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#666666] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#B9935A]/20 group-hover:border-white/30 transition-colors duration-300 flex items-center gap-1.5 text-[11px] font-semibold text-[#B9935A] group-hover:text-[#F0D060]">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span>Included in Township</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
