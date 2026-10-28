import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import mangalmurtiElevation from "../../../assets/home page/who_are_we.jpg";
import grandLivingLounge from "../../../assets/home page/grand_living_lounge.jpg";
import ketchen from "../../../assets/home page/kitchen.JPG";
import CTAButton from "../../../components/common/CTAButton";
import ScrollReveal from "@/components/common/ScrollReveal";

/**
 * Section 5: Featured Project — Mangalmurti Residency
 * Asymmetric centerpiece on soft cream background with cinematic exterior
 * render, modular vignettes, typography metadata, and EXPLORE PROJECT CTA.
 */
export const FeaturedProjectSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const projectSpecs = [
    { label: "Location", value: "Parsodi, Wardha Road, Nagpur" },
    { label: "Type", value: "Residential & 2BHK Micro-Township" },
    { label: "MahaRERA No.", value: "P50500045698" },
    { label: "Building Layout", value: "Wing A, Wings B & C" },
  ];

  return (
    <section id="projects" className="pt-12 pb-10 sm:pt-16  !bg-cream !text-black ">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-black/15 pb-8">
          <ScrollReveal>
            <span className="arch-eyebrow mb-2">
              Featured Development
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl">
              Mangalmurti{" "}
              <span className="font-bold text-brand-maroon">
                Residency
              </span>
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center border border-brand-maroon/30 bg-brand-maroon/5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-brand-maroon">
                Recently Handed Over
              </span>

              <span className="inline-flex items-center border border-green-700/25 bg-green-700/5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-green-800">
                OC Received
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-left md:text-right">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold block">
                RERA P50500045698
              </span>
              <span className="font-body text-xs sm:text-sm text-black font-medium block mt-1">
                PARSODI,WARDHA ROAD,NAGPUR
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Large Cinematic Hero Elevation (7 cols) */}
          <div className="lg:col-span-7 relative group overflow-clip">
            <ScrollReveal>
              <div className="w-full h-[380px] sm:h-[500px] lg:h-[600px] overflow-clip">
                <img
                  src={mangalmurtiElevation}
                  alt="Mangalmurti Residency Exterior Elevation"
                  className=" w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-2 text-[#1F1E1C] border-l-2 border-[#B9935A]">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                  Exterior Architectural Elevation
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mt-3 border-l-2 border-[#B9935A] bg-[#FAF7F2] px-4 py-3">
                <h6 className="font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-brand-maroon mb-1">
                  Make It Your Dream Home
                </h6>

                <span className="font-body text-[11px] sm:text-sm !font-semibold leading-relaxed text-text-light">
                  Every home offers a personal canvas to create a space
                  that reflects your unique style and vision. The interior
                  photographs shown are of actual customer homes, shared
                  for inspiration and reference. Interior design, furnishing,
                  and execution are not part of the services offered by
                  Devprath Constructions LLP.
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Vignette Grid + Project Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            {/* Narrative */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C]">
                Where residential comfort meets commercial opportunity.
              </h3> */}
              <ScrollReveal>
                <p className="font-body text-sm text-justify !text-text-light !font-semibold leading-relaxed">
                  Mangalmurti Residency is a residential project by Devprath Constructions LLP offering thoughtfully designed homes for modern families. Crafted with contemporary architecture and efficient layouts, every apartment provides spacious living areas, excellent natural light, ventilation, and premium finishes.
                </p>
              </ScrollReveal>
            </motion.div>

            {/* Two Modular Vignette Renders with Decoupled Below Captions */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <ScrollReveal>
                  <div className="relative group overflow-clip h-[160px] sm:h-[200px] mb-2.5 bg-[#FAF7F2]">
                    <img
                      src={grandLivingLounge}
                      alt="Mangalmurti Living Space"
                      className="revealing-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1F1E1C]/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[2px] text-[#1F1E1C] font-semibold block">
                    Grand Living Lounge
                  </span>
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal>
                  <div className="relative group overflow-clip h-[160px] sm:h-[200px] mb-2.5 bg-[#FAF7F2]">
                    <img
                      src={ketchen}
                      alt="Modular Kitchen"
                      className="revealing-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1F1E1C]/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[2px] text-[#1F1E1C] font-semibold block">
                    Modular Kitchen
                  </span>
                </ScrollReveal>
              </div>
            </div>

            {/* Editorial Metadata List */}
            <ScrollReveal>
              <div className="space-y-2.5 pt-2 border-t border-black/15">
                {projectSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-baseline text-xs">
                    <span className="font-bold uppercase tracking-[0.15em] text-brand-maroon">
                      {spec.label}
                    </span>
                    <span className="text-black/50 font-bold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Secondary Ghost Button */}
            <ScrollReveal>
              <div className="pt-2 flex  justify-center">
                <CTAButton to="/projects" label="EXPLORE PROJECT" className="text-nowrap" />
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div >
    </section >
  );
};

export default FeaturedProjectSection;