import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
import React, { useEffect, useRef } from "react";
import ScrollReveal from "../../../components/common/ScrollReveal";

const LOOPED_PROJECTS = [...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS];

const CompletedProjectsSection = () => {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const setWidthRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      const setWidth = el.children[9]
        ? el.children[9].offsetLeft - el.children[0].offsetLeft
        : el.scrollWidth / 3;
      setWidthRef.current = setWidth;
      el.scrollTo({ left: setWidth, behavior: "instant" });
    }

    const handleResize = () => {
      const el = trackRef.current;
      if (el && el.children[9]) {
        setWidthRef.current = el.children[9].offsetLeft - el.children[0].offsetLeft;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const setWidth = setWidthRef.current || (el.scrollWidth / 3);

    // Safety edge wrap during continuous swipe
    if (el.scrollLeft >= setWidth * 2.2) {
      el.scrollTo({ left: el.scrollLeft - setWidth, behavior: "instant" });
    } else if (el.scrollLeft <= setWidth * 0.1) {
      el.scrollTo({ left: el.scrollLeft + setWidth, behavior: "instant" });
    }

    // When scrolling pauses, silently return the scroller to center without moving the active image
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (el.scrollLeft >= setWidth * 1.5) {
        el.scrollTo({ left: el.scrollLeft - setWidth, behavior: "instant" });
      } else if (el.scrollLeft < setWidth * 0.5) {
        el.scrollTo({ left: el.scrollLeft + setWidth, behavior: "instant" });
      }
    }, 120);
  };

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      <ScrollReveal distance={80}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="arch-eyebrow text-center">
            Our Work
          </span>
          <h2 className="mt-3 text-2xl sm:text-7xl">Completed Projects</h2>
          <p className="lead-body mx-auto max-w-5xl text-lg sm:text-base">
            A legacy built one address at a time — homes delivered with
            craftsmanship, trust, and an unwavering eye for detail.
          </p>
        </div>
      </ScrollReveal>

      <ul ref={trackRef} onScroll={handleScroll} className="cp-cards mt-14 md:mt-16">
        {LOOPED_PROJECTS.map((project, i) => (
          <li key={`${project.id}-${i}`} className="cp-card">
            <img
              src={project.image}
              alt={project.title}
              className="cp-card-img"
              loading="lazy"
              decoding="async"
            />
            <div className="cp-card-caption">
              <h4 className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xs">{project.title}</h4>
              <p className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xl">
                {project.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedProjectsSection;