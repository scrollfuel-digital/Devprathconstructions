import React from "react";
import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
import Button from "../../../components/common/Button";

/**
 * Section 8: Our Legacy
 * Refined "Invisible" Sticky Stack:
 * - Matching background (--bg-ivory #FAF7F2) without harsh box borders
 * - Expansive scaled-up architectural imagery (max-w-6xl / 1150px)
 * - Subtle, slow 1.2s image hover zoom (scale-103)
 * - Soft top shadow creating layered depth
 */
export const LegacyShowcaseSection = () => {
  const teaserProjects = [
    COMPLETED_PROJECTS[0], // 01: Vakratund Heights — Shivaji Nagar
    COMPLETED_PROJECTS[1], // 02: Vignaharta Enclave — Laxmi Nagar
    COMPLETED_PROJECTS[2], // 03: Manomay Plaza — Ramdaspeth
    COMPLETED_PROJECTS[3], // 04: Shreyas Apartment — Ramdaspeth
  ];

  return (
    <section
      id="legacy"
      className="relative py-24 sm:py-36 bg-[#FAF7F2] border-t border-[#B9935A]/20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
              Delivered Landmarks
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] tracking-tight leading-tight">
              Our <span className="italic font-light text-[#8F6E3B]">Legacy.</span>
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="font-body text-xs sm:text-sm text-[#1F1E1C] font-semibold tracking-wider uppercase block">
              Architectural Track Record
            </span>
            <span className="text-xs text-[#6D675E] font-light block">
              09 Delivered Landmarks Across Prime Nagpur
            </span>
            <div className="pt-2">
              <Button to="/project#completed-project" variant="ghost">
                View Full Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* =====================================================================
            REFINED STICKY STACK CONTAINER
            - Card background matches section (#FAF7F2) without harsh box borders
            - Scaled-up imagery (max-w-6xl / 1150px)
            - 1.2s smooth image zoom hover
            ===================================================================== */}
        <div className="relative pb-12 sm:pb-20">
          {teaserProjects.map((proj, idx) => {
            const num = `0${idx + 1}`;
            const isLast = idx === teaserProjects.length - 1;

            return (
              <div
                key={proj.id || idx}
                className={`sticky top-[8vh] sm:top-[12vh] w-full bg-[#FAF7F2] ${
                isLast ? "mb-12 sm:mb-16" : "mb-28 sm:mb-40"
              } transition-all duration-300`}
            >
              {/* Inner Constrained Content Container */}
              <div className="w-full max-w-[800px] mx-auto px-5 sm:px-8 py-6 sm:py-10">
                {/* Header Line */}
                <div className="flex items-center justify-between border-b border-[#1F1E1C]/15 pb-4 mb-5 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-base sm:text-lg font-light text-[#B9935A]">
                      {num}
                    </span>
                    <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6D675E] font-semibold">
                      Completed Landmark · {proj.type}
                    </span>
                  </div>
                  <span className="font-display text-base sm:text-lg font-light text-[#8F6E3B]">
                    {proj.completionYear}
                  </span>
                </div>

                {/* 5:4 Architectural Photography Frame */}
                <div className="relative overflow-hidden w-full aspect-[5/4] mb-5 sm:mb-6 group cursor-pointer">
                  <img
                    src={proj.image}
                    alt={`${proj.shortTitle || proj.title} in ${proj.location}`}
                    style={{ transition: "transform 1.2s ease" }}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Project Details Decoupled Cleanly Below Image */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1E1C] leading-snug">
                      {proj.shortTitle || proj.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm uppercase tracking-[0.18em] text-[#6D675E] font-light mt-1.5">
                      {proj.location}
                    </p>
                  </div>

                  <div className="shrink-0 pt-2 sm:pt-0">
                    <Button
                      to="/project#completed-project"
                      variant="architectural"
                    >
                      Project Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Closing Portfolio CTA */}
        <div className="pt-8 border-t border-[#1F1E1C]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display text-xl sm:text-2xl text-[#1F1E1C] font-normal">
            Nine delivered communities. A decade of structural discipline.
          </p>
          <Button to="/project#completed-project" variant="ghost">
            View All Completed Landmarks
          </Button>
        </div>

      </div>
    </section>
  );
};

export default LegacyShowcaseSection;
