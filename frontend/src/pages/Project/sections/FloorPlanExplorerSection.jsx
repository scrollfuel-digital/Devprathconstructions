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
              <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#B9935A] block mb-3 sm:mb-4">
                Carefully Planned Micro-Township
              </span>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] tracking-tight leading-[1.08] mb-5 sm:mb-6">
                Phases &amp; <span className="italic font-light text-[#8F6E3B]">Living Spaces.</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-[#6D675E] font-light leading-relaxed">
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
                  className={`font-body text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 pb-4 relative cursor-pointer ${
                    isActive
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
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Wing Identification Line */}
                  <ScrollReveal>
                    <div className="flex items-center justify-between border-b border-[#1F1E1C]/15 pb-4 mb-6">
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B9935A]">
                        {activePhase.wing}
                      </span>
                      <span className="font-body text-xs text-[#6D675E] uppercase tracking-[0.15em]">
                        {activePhase.subtitleTag}
                      </span>
                    </div>
                  </ScrollReveal>

                  {/* Architectural Image View (Curtain Reveal via index.css) */}
                  <div className="relative overflow-clip w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-[#F2EDE4] group">
                    <img
                      src={activePhase.image}
                      alt={activePhase.title}
                      className="revealing-image w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* <div className="absolute top-4 left-4 bg-[#1F1E1C]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#B9935A]/40 text-[#FAF7F2]">
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D1B481]">
                        Architectural Rendering
                      </span>
                    </div> */}
                  </div>

                  {/* Action CTA Buttons directly below the image */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
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
                </div>
              </div>

              {/* Right Column: Verified Metrics, Highlights & Infrastructure Notes (Text Content with ScrollReveal) */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Verified Metric Callout */}
                  <ScrollReveal>
                    <div className="mb-6 pb-6 border-b border-[#1F1E1C]/15">
                      <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6D675E] block mb-2 font-semibold">
                        Verified Phase Scope
                      </span>
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] leading-none">
                          {activePhase.stat}
                        </span>
                        <span className="font-display text-xl sm:text-2xl text-[#8F6E3B] font-light">
                          {activePhase.statLabel}
                        </span>
                      </div>
                      <p className="font-body text-xs text-[#6D675E] mt-2">
                        Typology: <span className="text-[#1F1E1C] font-semibold">{activePhase.subtitleTag}</span>
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Title & Description */}
                  <ScrollReveal>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1E1C] leading-snug mb-3">
                      {activePhase.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#1F1E1C]/80 font-light leading-relaxed mb-6">
                      {activePhase.fullDescription}
                    </p>
                  </ScrollReveal>

                  {/* Verified Highlights List (Unboxed Minimal En-Dash List) */}
                  <ScrollReveal>
                    <div className="mb-8">
                      <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B9935A] mb-4 pb-2 border-b border-[#B9935A]/30">
                        Verified Highlights &amp; Inclusions
                      </h4>
                      <ul className="space-y-3.5">
                        {activePhase.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F1E1C] font-light leading-relaxed font-body">
                            <span className="text-[#B9935A] font-light text-base leading-none select-none">&ndash;</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  {/* Infrastructure / Quality Assurance Note Box */}
                  <ScrollReveal>
                    <div className="p-4 bg-[#F2EDE4] border border-[#B9935A]/25 mb-6">
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#8F6E3B] font-semibold block mb-1">
                        Quality Assurance
                      </span>
                      <p className="font-body text-xs text-[#1F1E1C] font-light leading-relaxed">
                        MahaRERA Approved Project · Continuous Quality Checks. For certified floor plans and exact unit sizes, please ask for the official MahaRERA documents.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Fine Print Note */}
                <ScrollReveal>
                  <p className="text-[11px] text-[#6D675E] italic pt-4 border-t border-[#1F1E1C]/10 font-body">
                    * All building specifications and unit details are followed as per the official MahaRERA registration (P50500045698).
                  </p>
                </ScrollReveal>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}