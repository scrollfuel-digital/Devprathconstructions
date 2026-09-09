import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { COMPLETED_PROJECTS } from "../../constants/completedProjects";
import Button from "../../components/common/Button";
import SocialConnectBar from "../../components/SocialConnectBar";
import sideViewImg from "../../assets/Project/side-view.png";

/**
 * CompletedProjects Page
 * Features:
 * 1. Full-bleed architectural hero section with dark gradient vignette for text legibility,
 *    integrated header typography, and vertical social media icons.
 * 2. Connected vertical timeline running down the exact center (desktop) and left-aligned (mobile),
 *    with gold dot markers precisely aligned at each entry midpoint between text and image columns.
 * 3. Pure unboxed imagery (no card wrappers, no background fills, no shadows) with natural ratio containment.
 * 4. Cinematic cross-animation: Image and Text enter from opposite sides, crossing paths into their final columns.
 * 5. Authentic confirmed data: project title, real location from constants, and image.
 */
export default function CompletedProjects() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // MatchMedia check for screen size to simplify animation below 768px (tablets & desktop get full crossing)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobile = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  const disableCrossing = shouldReduceMotion || isMobile;

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen overflow-x-hidden">
      {/* =========================================================================
          PART 1: ARCHITECTURAL HERO SECTION WITH TRANSPARENT NAVBAR OVERLAY
          ========================================================================= */}
      <section className="relative min-h-[78vh] sm:min-h-[82vh] lg:min-h-[88vh] flex items-end overflow-hidden pb-16 sm:pb-24 pt-36 sm:pt-44 bg-[#1F1E1C]">
        {/* Full-bleed background architectural photo */}
        <img
          src={sideViewImg}
          alt="Devprath Completed Projects Architecture"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Base dark gradient overlay using existing charcoal token #1F1E1C */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1C]/92 via-[#1F1E1C]/65 to-[#1F1E1C]/35 pointer-events-none" />

        {/* Targeted lower-left quadrant vignette overlay for optimal text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(31, 30, 28, 0.96) 0%, rgba(31, 30, 28, 0.85) 45%, rgba(31, 30, 28, 0.4) 70%, transparent 100%)",
          }}
        />

        {/* Social Media Icons with Vertical Hairline Anchors (Desktop) */}
        <div className="hidden md:flex flex-col items-center gap-4 absolute right-8 sm:right-12 lg:right-16 bottom-16 sm:bottom-20 z-20">
          <div className="w-[1px] h-10 bg-[#B9935A]/40" />
          <SocialConnectBar
            containerClassName="flex flex-col items-center gap-4"
            iconSizeClass="w-5 h-5"
            iconColorClass="text-[#FAF7F2]/80"
          />
          <div className="w-[1px] h-10 bg-[#B9935A]/40" />
        </div>

        {/* Hero Content Overlay: Eyebrow + Large Serif Title */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#B9935A] block mb-4 sm:mb-5">
              OUR LEGACY
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF7F2] tracking-tight leading-[1.08]">
              Completed <span className="italic font-light text-[#D1B481]">Projects.</span>
            </h1>

            {/* Mobile-only social icons anchored cleanly under title */}
            <div className="mt-8 pt-5 border-t border-[#FAF7F2]/20 md:hidden">
              <SocialConnectBar
                containerClassName="flex items-center gap-5"
                iconSizeClass="w-5 h-5"
                iconColorClass="text-[#FAF7F2]/80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          PART 2: CONNECTED TIMELINE WITH ALTERNATING UNBOXED CROSS-ANIMATING ENTRIES
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          
          {/* Continuous vertical timeline line: Exact 50% center on desktop, left-aligned on mobile */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-[#B9935A]/35 z-0 pointer-events-none" />
          <div className="lg:hidden absolute top-6 bottom-6 left-6 sm:left-10 w-[1px] bg-[#B9935A]/35 z-0 pointer-events-none" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-16 relative z-10">
            {COMPLETED_PROJECTS.map((project, index) => {
              // Alternating layout: even index = Image Right / Name Left; odd index = Image Left / Name Right
              const isImageRight = index % 2 === 0;

              // Cross-animation directional logic:
              // - If image ends on RIGHT, it starts from LEFT (negative X) and moves rightward.
              //   Its paired text ends on LEFT, so it starts from RIGHT (positive X) and moves leftward.
              // - If image ends on LEFT, it starts from RIGHT (positive X) and moves leftward.
              //   Its paired text ends on RIGHT, so it starts from LEFT (negative X) and moves rightward.
              const imageStartX = disableCrossing ? 0 : isImageRight ? -140 : 140;
              const textStartX = disableCrossing ? 0 : isImageRight ? 140 : -140;
              const textStartY = disableCrossing ? 24 : 0;

              return (
                <article
                  key={project.id || index}
                  className="relative group"
                >
                  {/* Timeline Node Dot Marker: Centered on the vertical line between columns */}
                  {/* Desktop Center Marker */}
                  <motion.div
                    initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -20% 0px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#B9935A]/50 shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#B9935A]" />
                  </motion.div>

                  {/* Mobile Left Marker */}
                  <motion.div
                    initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -20% 0px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:hidden absolute left-0 top-6 -translate-x-1/2 z-20 flex items-center justify-center w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#B9935A]/50 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B9935A]" />
                  </motion.div>

                  {/* Symmetrical 50/50 Grid Layout */}
                  <div className="pl-6 sm:pl-8 lg:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    
                    {/* Project Name & Location Block (Crossing Animation paired with Image) */}
                    <motion.div
                      initial={{ opacity: 0, x: textStartX, y: textStartY }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.2, margin: "0px 0px -20% 0px" }}
                      transition={{ duration: 1.05, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`${
                        isImageRight
                          ? "order-2 lg:order-1 lg:text-right lg:pr-4"
                          : "order-2 lg:order-2 lg:text-left lg:pl-4"
                      }`}
                    >
                      {/* Serial Index Number */}
                      <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#B9935A]/45 font-light block mb-2 select-none">
                        0{index + 1}
                      </span>

                      {/* Confirmed Project Title */}
                      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F1E1C] tracking-tight leading-tight">
                        {project.title}
                      </h2>

                      {/* Confirmed Location from Constants Data */}
                      {project.location && (
                        <span className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8F6E3B] font-medium block mt-2">
                          {project.location}
                        </span>
                      )}

                      {/* Delicate Accent Rule */}
                      <div
                        className={`w-16 h-[1px] bg-[#B9935A]/40 mt-5 ${
                          isImageRight ? "lg:ml-auto" : ""
                        }`}
                      />
                    </motion.div>

                    {/* Architectural Image Block (Crossing Animation opposite to Text) */}
                    <div
                      className={`${
                        isImageRight
                          ? "order-1 lg:order-2 lg:pl-4"
                          : "order-1 lg:order-1 lg:pr-4"
                      }`}
                    >
                      <div
                        className={`w-full flex items-center overflow-hidden ${
                          isImageRight
                            ? "justify-start lg:justify-start"
                            : "justify-start lg:justify-end"
                        }`}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          initial={{ opacity: 0, x: imageStartX }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2, margin: "0px 0px -20% 0px" }}
                          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                          className="max-w-full max-h-[440px] sm:max-h-[480px] w-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] block"
                          loading="lazy"
                        />
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA SECTION (REUSING ESTABLISHED BUTTON & BRAND PATTERN)
          ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#B9935A] block mb-4">
            Begin Your Journey
          </span>

          <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1E1C] tracking-tight mb-8">
            Looking for Your <span className="italic font-light text-[#8F6E3B]">Dream Home?</span>
          </h3>

          <div className="inline-block">
            <Button to="/contact" variant="primary">
              Enquire Now &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
