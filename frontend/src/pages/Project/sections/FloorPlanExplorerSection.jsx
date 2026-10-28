import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import CTAButton from '../../../components/common/CTAButton';
import ScrollReveal from '../../../components/common/ScrollReveal';
import { PROJECT_OVERVIEW, PHASES_DATA } from '../../../constants/phasesData';
import sideViewImg from '../../../assets/Project/mangalmurti_2.png';
import topViewImg from "../../../assets/home page/who_are_we.jpg";

const PHASE_IMAGES = {
  phase1: sideViewImg,
  phase2_3: topViewImg,
};

const ENRICHED_PHASES = PHASES_DATA.map((phase) => {
  const labelSuffix = phase.statLabel.includes('2BHK') ? '2BHKs' : 'Units';
  return {
    ...phase,
    image: PHASE_IMAGES[phase.id] || sideViewImg,
    tabLabel: `${phase.wing} (${phase.stat} ${labelSuffix})`,
  };
});

export default function FloorPlanExplorerSection() {
  const [activePhaseId, setActivePhaseId] = useState(ENRICHED_PHASES[0]?.id || 'phase1');
  const shouldReduceMotion = useReducedMotion();

  const activePhase =
    ENRICHED_PHASES.find((p) => p.id === activePhaseId) || ENRICHED_PHASES[0];

  return (
    <section
      id="living-spaces"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#B9935A]/20 relative"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* =========================================================================
            SECTION HEADER (EDITORIAL VERTICAL RHYTHM & DISTINCT META ROW)
            ========================================================================= */}
        <div className="mb-8 sm:mb-10">
          {/* Distinct Project Meta Row with Hairline Divider */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#B9935A]/25 mb-4 sm:mb-6">
              <span className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#1F1E1C] uppercase">
                {PROJECT_OVERVIEW.title}
              </span>
              <span className="font-body text-xs sm:text-sm text-[#6D675E] font-light">
                {PROJECT_OVERVIEW.subtitle} · MahaRERA Reg: P50500045698
              </span>
            </div>
          </ScrollReveal>

          {/* Editorial Opener Block with Balanced Vertical Rhythm */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="arch-eyebrow mb-3 sm:mb-4">
                Carefully Planned Micro-Township
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-5 sm:mb-6">
                Phases &amp; <span className="font-bold text-brand-primary">Living Spaces.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
                {PROJECT_OVERVIEW.description}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Editorial Tab Bar */}
        <div className="mb-8 sm:mb-10 flex justify-center border-b border-[#B9935A]/20">
          <div className="inline-flex items-center justify-center gap-8 sm:gap-14">
            {ENRICHED_PHASES.map((phase) => {
              const isActive = activePhase.id === phase.id;

              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseId(phase.id)}
                  className={`font-body text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 pb-4 relative cursor-pointer ${isActive
                    ? 'text-[#1F1E1C] font-semibold'
                    : 'text-[#6D675E] font-normal hover:text-[#1F1E1C]'
                    }`}
                >
                  {phase.tabLabel}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B9935A]"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Detail Panel (Unboxed / Sitting directly on page background) */}
        <div className="pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left Column: Visual Perspective Frame & Action Buttons */}
              {/* Left Column: Architectural Image View */}
              <div className="lg:col-span-6">
                <div className="relative overflow-clip w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-[#F2EDE4] group">
                  <img
                    src={activePhase.image}
                    alt={activePhase.title}
                    className="revealing-image w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Highlights & Infrastructure Notes (Text Content with ScrollReveal) */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Title & Description */}
                  <ScrollReveal>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1E1C] leading-snug mb-3">
                      {activePhase.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#1F1E1C]/80 font-light leading-relaxed mb-6">
                      {activePhase.fullDescription}
                    </p>
                  </ScrollReveal>

                  {/* Highlights List (Unboxed Minimal En-Dash List) */}
                  <ScrollReveal>
                    <div className="pt-6 sm:pt-6 mb-8">
                      <ul className="space-y-3.5">
                        {activePhase.highlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-3 font-body text-sm sm:text-base text-[#1F1E1C]/80 font-normal leading-relaxed"
                          >
                            <span className="shrink-0 text-[#B9935A] font-light text-base leading-none select-none mt-1">
                              &ndash;
                            </span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  {/* Action CTA Buttons (Moved below Highlights) */}
                  <ScrollReveal>
                    <div className="mb-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <CTAButton
                        to="/contact"
                        label="BOOK SITE WALKTHROUGH"
                        className="font-body text-xs uppercase tracking-[0.18em]"
                      />
                      <CTAButton
                        href="/MANGALMURTI-BROCHURE.pdf"
                        download="MANGALMURTI-BROCHURE.pdf"
                        label="DOWNLOAD BROCHURE"
                        className="font-body text-xs uppercase tracking-[0.18em]"
                      />
                    </div>
                  </ScrollReveal>

                  {/* Fine Print Note (Directly below buttons) */}
                  <ScrollReveal>
                    <p className="text-[11px] text-[#6D675E] pt-4 border-t border-[#1F1E1C]/10 font-body">
                      * All building specifications and unit details are followed as per the official MahaRERA registration (P50500045698).
                    </p>
                  </ScrollReveal>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}