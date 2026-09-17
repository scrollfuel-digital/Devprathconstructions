
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
import ScrollReveal from "../../../components/common/ScrollReveal";

const CompletedProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
    ---------------------------------------------------------
    SHOW 3 PROJECTS AT A TIME
    ---------------------------------------------------------
  */
  const visibleProjects = 3;

  const maxIndex = Math.max(
    0,
    COMPLETED_PROJECTS.length - visibleProjects
  );

  /*
    ---------------------------------------------------------
    NEXT
    ---------------------------------------------------------
  */
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  /*
    ---------------------------------------------------------
    PREVIOUS
    ---------------------------------------------------------
  */
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  /*
    ---------------------------------------------------------
    KEYBOARD SUPPORT
    ---------------------------------------------------------
  */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [maxIndex]);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        text-black
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          px-6
          pb-12
          pt-24

          sm:px-8

          md:px-12
          md:pb-14
          md:pt-28

          lg:px-16
          lg:pt-32
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            {/* =================================================
                HEADING
            ================================================= */}

            <ScrollReveal distance={60}>
              <div>
                <span
                  className="
                    block
                    font-sans
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#C9A874]
                  "
                >
                  Our Work
                </span>

                <h2
                  className="
                    mt-4
                    font-display
                    text-[44px]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.02em]
                    text-[#F7F3EC]

                    sm:text-[52px]
                    md:text-[64px]
                    lg:text-[72px]
                  "
                >
                  Completed
                  <br />
                  Projects
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[520px]
                    font-sans
                    text-[13px]
                    leading-[1.8]
                    text-white/50

                    sm:text-sm
                  "
                >
                  A legacy built one address at a time — homes
                  delivered with craftsmanship, trust, and an
                  unwavering eye for detail.
                </p>
              </div>
            </ScrollReveal>

            {/* =================================================
                DESKTOP CONTROLS
            ================================================= */}

            <div
              className="
                hidden
                items-center
                gap-3

                md:flex
              "
            >
              {/* COUNTER */}

              <div
                className="
                  mr-5
                  flex
                  items-baseline
                  gap-1
                  font-sans
                "
              >
                <span
                  className="
                    text-sm
                    font-medium
                    text-[#C9A874]
                  "
                >
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[10px]
                    text-white/25
                  "
                >
                  /
                </span>

                <span
                  className="
                    text-[10px]
                    text-white/30
                  "
                >
                  {String(
                    Math.max(
                      1,
                      COMPLETED_PROJECTS.length - 2
                    )
                  ).padStart(2, "0")}
                </span>
              </div>

              {/* PREV */}

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous projects"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/15

                  bg-transparent
                  text-white/60

                  transition-all
                  duration-500

                  hover:border-[#C9A874]
                  hover:bg-[#C9A874]
                  hover:text-[#151412]

                  active:scale-95
                "
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-500
                    group-hover:-translate-x-0.5
                  "
                />
              </button>

              {/* NEXT */}

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next projects"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C9A874]/50

                  bg-[#C9A874]
                  text-[#151412]

                  transition-all
                  duration-500

                  hover:bg-[#D8BE8E]
                  hover:border-[#D8BE8E]

                  active:scale-95
                "
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP 3 COLUMN CAROUSEL
      ===================================================== */}

      <div
        className="
          hidden
          px-6
          pb-24

          md:block

          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
            overflow-hidden
          "
        >
          <div
            className="
              grid
              grid-cols-3
              gap-5
            "
          >
            {COMPLETED_PROJECTS
              .slice(
                currentIndex,
                currentIndex + visibleProjects
              )
              .map((project, visibleIndex) => {
                const actualIndex =
                  currentIndex + visibleIndex;

                return (
                  <article
                    key={project.id || actualIndex}
                    className="
                      group
                      relative
                      flex
                      min-w-0
                      flex-col
                      overflow-hidden

                      bg-[#F7F3EC]

                      transition-all
                      duration-700

                      hover:-translate-y-1
                    "
                  >
                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        h-[390px]
                        w-full

                        overflow-hidden

                        bg-cream
                      "
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={
                          actualIndex < 3
                            ? "eager"
                            : "lazy"
                        }
                        className="
                          h-full
                          w-full

                          object-contain

                          p-4

                          transition-transform
                          duration-1000
                          ease-out

                          group-hover:scale-[1.025]
                        "
                      />

                      {/* IMAGE BORDER */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0

                          border
                          border-white/10

                          transition-colors
                          duration-500

                          group-hover:border-[#C9A874]/50
                        "
                      />

                      {/* NUMBER */}

                      <span
                        className="
                          absolute
                          left-5
                          top-5

                          font-sans
                          text-[9px]
                          font-medium
                          tracking-[0.25em]

                          text-white/55
                        "
                      >
                        {String(
                          actualIndex + 1
                        ).padStart(2, "0")}
                      </span>

                      {/* ARROW */}

                      <div
                        className="
                          absolute
                          right-5
                          top-5

                          flex
                          h-10
                          w-10
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-white/25

                          text-white

                          opacity-0

                          translate-x-2
                          -translate-y-2

                          transition-all
                          duration-500

                          group-hover:translate-x-0
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.2}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        PROJECT INFO
                    ================================================= */}

                    <div
                      className="
                        flex
                        min-h-[105px]
                        items-center
                        justify-between

                        border-t
                        border-black/10

                        bg-[#F7F3EC]

                        px-6
                        py-5
                      "
                    >
                      <div>
                        <h3
                          className="
                            font-display
                            text-[25px]
                            font-medium
                            leading-none

                            text-[#1F1E1C]
                          "
                        >
                          {project.title}
                        </h3>

                        <p
                          className="
                            mt-3

                            font-sans
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]

                            text-[#A17B45]
                          "
                        >
                          {project.location}
                        </p>
                      </div>

                      <span
                        className="
                          font-sans
                          text-[8px]
                          uppercase
                          tracking-[0.2em]

                          text-black/25
                        "
                      >
                        Project
                      </span>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE CAROUSEL
      ===================================================== */}

      <div
        className="
          block
          w-full
          px-5
          pb-16

          md:hidden
        "
      >
        <div
          className="
            relative
            overflow-hidden
          "
        >
          <div
            className="
              flex
              gap-4
            "
          >
            {COMPLETED_PROJECTS.map(
              (project, index) => (
                <article
                  key={project.id || index}
                  className="
                    w-[82vw]
                    max-w-[340px]
                    shrink-0
                    overflow-hidden

                    bg-[#F7F3EC]
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      flex
                      h-[390px]
                      w-full

                      items-center
                      justify-center

                      overflow-hidden

                      bg-[#1C1B19]
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={
                        index < 2
                          ? "eager"
                          : "lazy"
                      }
                      className="
                        h-full
                        w-full

                        object-contain

                        p-3
                      "
                    />

                    <span
                      className="
                        absolute
                        left-4
                        top-4

                        font-sans
                        text-[8px]
                        tracking-[0.25em]

                        text-white/60
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  {/* INFO */}

                  <div
                    className="
                      border-t
                      border-black/10

                      bg-[#F7F3EC]

                      px-5
                      py-5
                    "
                  >
                    <h3
                      className="
                        font-display
                        text-[23px]
                        font-medium
                        leading-none

                        text-[#1F1E1C]
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        font-sans
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]

                        text-[#A17B45]
                      "
                    >
                      {project.location}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        {/* MOBILE CONTROLS */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-sans
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            {String(currentIndex + 1).padStart(
              2,
              "0"
            )}{" "}
            /{" "}
            {String(
              COMPLETED_PROJECTS.length
            ).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous projects"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-white/15

                text-white/70

                transition-all
                duration-300

                active:scale-95
              "
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.2}
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next projects"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                bg-[#C9A874]

                text-[#151412]

                transition-all
                duration-300

                active:scale-95
              "
            >
              <ArrowRight
                size={16}
                strokeWidth={1.2}
              />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ===================================================== */}

      <div
        className="
          pb-8
          text-center
        "
      >
        <span
          className="
            font-sans
            text-[8px]
            font-medium
            uppercase
            tracking-[0.4em]

            text-white/25
          "
        >
          Crafted for generations
        </span>
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
