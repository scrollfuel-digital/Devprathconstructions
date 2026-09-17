import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
import ScrollReveal from "../../../components/common/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const CompletedProjectsSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getScrollAmount = () => {
        return Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${getScrollAmount()}`,

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#080808]
        text-white
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
              items-end
              justify-between
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

          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP HORIZONTAL GALLERY
      ===================================================== */}

      <div
        className="
          hidden
          w-full
          overflow-hidden
          pb-24

          md:block
        "
      >
        <div
          ref={trackRef}
          className="
            flex
            w-max
            gap-5

            pl-[6vw]
            pr-[6vw]

            will-change-transform
          "
        >
          {COMPLETED_PROJECTS.map((project, index) => (
            <article
              key={project.id || index}
              className="
                group
                relative

                flex
                h-[440px]
                w-[29vw]
                max-w-[420px]
                min-w-[280px]
                shrink-0
                flex-col

                overflow-hidden

                bg-[#111111]

                transition-transform
                duration-700

                hover:-translate-y-1
              "
            >
              {/* =================================================
                  IMAGE AREA
              ================================================= */}

              <div
                className="
                  relative
                  flex-1

                  overflow-hidden

                  bg-[#151515]
                "
              >
                {/* FULL IMAGE */}

                <img
                  src={project.image}
                  alt={project.title}
                  loading={
                    index < 3
                      ? "eager"
                      : "lazy"
                  }
                  className="
                    h-full
                    w-full

                    object-contain

                    p-3

                    transition-transform
                    duration-1000
                    ease-out

                    group-hover:scale-[1.025]
                  "
                />

                {/* Subtle image gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />

                {/* Border */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    border
                    border-white/10

                    transition-colors
                    duration-500

                    group-hover:border-[#C9A874]/40
                  "
                />

                {/* =================================================
                    PROJECT NUMBER
                ================================================= */}

                <span
                  className="
                    absolute
                    left-5
                    top-5

                    font-sans
                    text-[9px]
                    font-medium
                    tracking-[0.25em]

                    text-white/60
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* =================================================
                    ARROW
                ================================================= */}

                <div
                  className="
                    absolute
                    right-5
                    top-5

                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full

                    border
                    border-white/30

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
                    strokeWidth={1.3}
                  />
                </div>
              </div>

              {/* =================================================
                  PROJECT INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between

                  border-t
                  border-white/10

                  bg-[#0d0d0d]

                  px-5
                  py-5
                "
              >
                <div>
                  <h3
                    className="
                      font-display
                      text-[22px]
                      font-medium
                      leading-none

                      text-[#F7F3EC]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      font-sans
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      text-[#C9A874]
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

                    text-white/30
                  "
                >
                  Project
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div
        className="
          block
          w-full
          overflow-hidden
          pl-5

          md:hidden
        "
      >
        <div
          className="
            flex
            w-max
            gap-4

            overflow-x-auto
            pr-8

            [scrollbar-width:none]
            [-ms-overflow-style:none]

            [&::-webkit-scrollbar]:hidden
          "
        >
          {COMPLETED_PROJECTS.map((project, index) => (
            <article
              key={project.id || index}
              className="
                relative
                w-[72vw]
                max-w-[310px]
                shrink-0

                overflow-hidden

                bg-[#111111]
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

                  bg-[#151515]
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

                {/* Number */}

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
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* INFORMATION */}

              <div
                className="
                  border-t
                  border-white/10

                  bg-[#0d0d0d]

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

                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2

                    font-sans
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    text-[#C9A874]
                  "
                >
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE VIEW ALL
      ===================================================== */}

      <div
        className="
          px-6
          pb-16
          pt-10

          md:hidden
        "
      >
        <button
          type="button"
          className="
            flex
            w-full
            items-center
            justify-between

            border-0
            border-b
            border-white/15

            bg-transparent

            py-4

            font-sans
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.25em]

            text-white/70
          "
        >
          <span>
            View All Projects
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.3}
            className="text-[#C9A874]"
          />
        </button>
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