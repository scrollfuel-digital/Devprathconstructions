"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";

const StickyProjectCard = ({
  i,
  total,
  title,
  location,
  image,
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const start = i / total;
  const end = i === total - 1 ? 1 : (i + 1) / total;
  const fade = Math.min(0.01, (end - start) / 4);

  const cornerInput =
    i === 0
      ? [start, end - fade, end]
      : i === total - 1
        ? [start - fade, start, end]
        : [start - fade, start, end - fade, end];

  const cornerOutput =
    i === 0
      ? [1, 1, 0]
      : i === total - 1
        ? [0, 1, 1]
        : [0, 1, 1, 0];

  const cornerOpacity = useTransform(progress, cornerInput, cornerOutput);

  return (
    <div
      className="sticky top-0 flex h-screen w-full flex-col justify-end items-center px-4 pb-4 sm:pb-6 lg:justify-center lg:pb-0 lg:px-8"
      style={{ zIndex: i + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative h-[44vh] max-h-[320px] sm:max-h-[380px] aspect-square w-auto max-w-[88vw] sm:max-w-[380px] md:max-w-[440px] lg:h-auto lg:max-h-none lg:w-full lg:max-w-[500px]"
      >
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="block h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          {/* Bottom information overlay */}
          <div
            className="absolute inset-x-0 bottom-0 px-4 py-2.5 sm:px-6 sm:pb-5 sm:pt-16"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.7) 65%, rgba(255,255,255,0) 100%)",
            }}
          >
            <h4
              className="text-xs sm:text-sm font-black uppercase tracking-[0.15em] leading-snug"
              style={{ color: "#1F1E1C" }}
            >
              {title}
            </h4>

            <p
              className="mt-0.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]"
              style={{ color: "#B9935A" }}
            >
              {location}
            </p>
          </div>
        </div>

        {/* Art Deco corners */}
        <motion.div
          style={{ opacity: cornerOpacity }}
          className="art-deco-corners"
        >
          <div className="corner top left" />
          <div className="corner top right" />
          <div className="corner bottom left" />
          <div className="corner bottom right" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const CompletedProjectsSection = () => {
  const container = useRef(null);

  const projects = COMPLETED_PROJECTS;
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative w-full pt-4 pb-8 sm:py-12 lg:py-0 bg-[#FAF7F2]">
      {/* Mobile-only Heading (scrolls naturally with page, does not stick) */}
      <div className="w-full bg-[#FAF7F2] px-4 pt-4 pb-1 sm:px-6 text-center lg:hidden">
        <span className="arch-eyebrow text-center text-xs sm:text-sm">
          Our Work
        </span>

        <h2 className="mt-1 sm:mt-2 text-2xl sm:text-3xl leading-tight font-display uppercase tracking-tight text-[#1F1E1C]">
          Completed Projects
        </h2>
      </div>

      {/* 
        Grid Layout:
        - Desktop: 1 row, 2 columns (1*2) -> lg:grid-cols-2
        - Mobile:  2 rows, 1 column (2*1) -> grid-cols-1
      */}
      <div
        ref={container}
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20"
      >
        {/* Row 1 on Mobile (Sticky Description only) / Column 1 on Desktop (Sticky Heading + Description) */}
        <div className="sticky top-16 sm:top-18 z-20 w-full bg-[#FAF7F2] px-4 pt-2 pb-3 sm:px-6 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:bg-transparent lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Desktop-only Heading */}
            <div className="hidden lg:block">
              <span className="arch-eyebrow text-left text-xs sm:text-sm">
                Our Work
              </span>

              <h2 className="mt-1 sm:mt-2 text-5xl lg:text-7xl leading-tight font-display uppercase tracking-tight text-[#1F1E1C]">
                Completed Projects
              </h2>
            </div>

            {/* Description (Sticky on mobile and desktop) */}
            <div className="mx-auto mt-0 lg:mt-6 max-w-md lg:max-w-lg text-xs sm:text-sm lg:text-base text-[#6D675E] leading-relaxed text-justify hyphens-auto lg:mx-0 space-y-2 sm:space-y-3">
              <p
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
                className="!font-semibold break-words"
              >
                Over the years, a portfolio of premium residential developments has taken shape across some of Nagpur’s most established neighbourhoods, including <b>Dharampeth, Ramdaspeth, Laxmi Nagar, Friend Colony, Jaiprakash Nagar, Shivaji Nagar and Wardha Road</b>. Each project reflects a commitment to thoughtful planning, well-designed layouts, and comfortable living.
              </p>

              <p
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
                className="!font-semibold break-words"
              >
                With <b>9 completed developments</b> and over <b>500+</b> families having found their homes, these projects stand as a testament to a consistent commitment to construction excellence, timely handovers, and lasting value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2 on Mobile / Column 2 on Desktop: Sticky Image Stack */}
        <div className="relative flex flex-col lg:mt-0">
          {projects.map((project, i) => {
            const targetScale = Math.max(0.85, 1 - (total - i - 1) * 0.05);

            return (
              <StickyProjectCard
                key={project.id ?? `${project.title}-${i}`}
                i={i}
                total={total}
                title={project.title}
                location={project.location}
                image={project.image}
                progress={scrollYProgress}
                range={[i / total, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
export { StickyProjectCard };
