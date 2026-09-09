import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Section 4: What Defines Devprath (Core Principles)
 * Asymmetric architectural editorial layout:
 * - Sticky left-hand column locking the heading in place as the user scrolls
 * - Right-hand list with ultra-thin (1px) hairline matte-gold borders
 * - Flat matte gold serif numbers + large faint watermark ghost numerals
 * - Slow, luxurious hover animation: hovered item stays vibrant with arrow translating right,
 *   while non-hovered items gently fade to a lighter taupe (0.4s ease).
 */
export const CoreAdvantagesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const pillars = [
    {
      num: "01",
      title: "Thoughtful Planning",
      description:
        "Every floor plate is designed to maximize natural daylight, cross-ventilation, and privacy, optimizing usable carpet area without awkward corridor loss.",
    },
    {
      num: "02",
      title: "Enduring Quality",
      description:
        "Engineered with premium structural grades, durable reinforcement, and meticulous finishing that ensure lasting comfort and capital appreciation.",
    },
    {
      num: "03",
      title: "Transparent Process",
      description:
        "100% legal compliance with clear land titles, transparent milestone billing, and official MahaRERA registrations for complete peace of mind.",
    },
    {
      num: "04",
      title: "Human-Centred Living",
      description:
        "Master-planned micro-townships that weave dedicated community spaces, secure children's recreation, and senior citizen retreats into daily life.",
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FAF7F2] border-t border-[#B9935A]/20 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =====================================================================
              LEFT COLUMN: STICKY EDITORIAL HEADING & NARRATIVE
              Locks into place on scroll as the right list scrolls past it
              ===================================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
                Core Principles
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#1F1E1C] leading-[1.1] tracking-tight">
                What Defines <br />
                <span className="italic font-light text-[#8F6E3B]">Devprath.</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-[#6D675E] font-light mt-5 leading-relaxed max-w-md">
                Our approach is guided by non-negotiable architectural standards — ensuring every residence stands as an enduring benchmark of craftsmanship and structural integrity.
              </p>

              {/* Minimal Architectural Detail Line */}
              <div className="pt-6 hidden lg:flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-[#B9935A]/80">
                <span className="w-8 h-[1px] bg-[#B9935A]/40" />
                <span>Architectural Discipline</span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: EDITORIAL LIST OF PRINCIPLES
              Hairline 1px borders, ghost watermark numerals, luxurious focus hover
              ===================================================================== */}
          <div
            className="lg:col-span-7 border-t border-[#B9935A]/25"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {pillars.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const hasHover = hoveredIdx !== null;
              const isDimmed = hasHover && !isHovered;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`group relative py-10 sm:py-12 border-b border-[#B9935A]/25 cursor-pointer transition-all duration-500 ease-out ${
                    isDimmed ? "opacity-35" : "opacity-100"
                  }`}
                >
                  {/* Large Faint Watermark Ghost Number (Behind Content) */}
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-7xl sm:text-8xl lg:text-9xl font-light text-[#B9935A]/10 select-none pointer-events-none transition-all duration-500 ease-out group-hover:text-[#B9935A]/20 group-hover:scale-105"
                  >
                    {item.num}
                  </span>

                  {/* Main Row Content */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8 pr-8 sm:pr-12">
                    
                    {/* Left: Serif Number Accent & Title */}
                    <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 sm:w-1/2 shrink-0">
                      <span className="font-display text-2xl sm:text-3xl text-[#B9935A] font-light shrink-0">
                        {item.num}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] leading-snug transition-colors duration-400 ease-out group-hover:text-[#B9935A]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Right: Concise Architectural Description */}
                    <div className="sm:w-1/2">
                      <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Architectural Right Arrow with Smooth Slide on Hover */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-end">
                      <span
                        className={`font-sans text-lg sm:text-xl transition-all duration-500 ease-out ${
                          isHovered
                            ? "text-[#B9935A] translate-x-2 opacity-100"
                            : "text-[#B9935A]/40 translate-x-0 opacity-60"
                        }`}
                      >
                        &rarr;
                      </span>
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
};

export default CoreAdvantagesSection;
