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

  const cornerOpacity = useTransform(
    progress,
    cornerInput,
    cornerOutput
  );

  return (
    <div
      className="sticky top-0 flex h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ zIndex: i + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative aspect-square w-full max-w-[92vw] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px]"
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
            className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 sm:px-6 sm:pb-6 sm:pt-20"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.78) 52%, rgba(255,255,255,0.25) 76%, rgba(255,255,255,0) 100%)",
            }}
          >
            <h4
              className="text-sm !font-black uppercase tracking-[0.15em]"
              style={{ color: "#1F1E1C" }}
            >
              {title}
            </h4>

            <p
              className="mt-1 text-xs !font-black uppercase tracking-[0.15em] sm:text-sm"
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
    <section className="relative w-full py-16 sm:py-20 lg:py-10">
      <div
        ref={container}
        className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20"
      >
        {/* Left content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:text-left"
          >
            <span className="arch-eyebrow text-center lg:text-left">
              Our Work
            </span>

            <h2 className="mt-3 text-3xl leading-tight sm:text-5xl lg:text-7xl">
              Completed Projects
            </h2>

            <div className="mx-auto mt-6 max-w-md space-y-4 text-sm sm:text-base text-[#6D675E] leading-relaxed text-justify hyphens-auto lg:mx-0 lg:max-w-lg">
              <p className="!font-semibold">
                Over the years, a portfolio of premium residential developments has taken shape across some of Nagpur’s most established neighbourhoods, including <b>Dharampeth, Ramdaspeth, Laxmi Nagar, Friend Colony, Jaiprakash Nagar ,Shivaji Nagar and Wardha Road</b>. Each project reflects a commitment to thoughtful planning, well-designed layouts, and comfortable living.
              </p>

              <p className="!font-semibold">
                With <b>9 completed developments</b> and over <b>500+</b> families having found their homes, these projects stand as a testament to a consistent commitment to construction excellence, timely handovers, and lasting value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Project stack */}
        <div className="relative mt-10 flex flex-col sm:mt-12 lg:mt-0">
          {projects.map((project, i) => {
            const targetScale = Math.max(
              0.85,
              1 - (total - i - 1) * 0.05
            );

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

export { CompletedProjectsSection, StickyProjectCard };