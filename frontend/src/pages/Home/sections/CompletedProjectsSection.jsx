import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
import React, { useEffect, useRef } from "react";
import ScrollReveal from "../../../components/common/ScrollReveal";

const LOOPED_PROJECTS = [...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS];

const CompletedProjectsSection = () => {
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      const setWidth = el.children[9]
        ? el.children[9].offsetLeft - el.children[0].offsetLeft
        : el.scrollWidth / 3;
      el.scrollTo({ left: setWidth, behavior: "instant" });
    }
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const setWidth = el.children[9]
      ? el.children[9].offsetLeft - el.children[0].offsetLeft
      : el.scrollWidth / 3;

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
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
            Our Work
          </span>
          <h2 className=" !font-bold mt-3 text-2xl !sm:text-7xl">Completed Projects</h2>
          <p className="mx-auto !font-bold max-w-5xl text-lg text-[var(--color-muted)] sm:text-base">
            A legacy built one address at a time — homes delivered with
            craftsmanship, trust, and an unwavering eye for detail.
          </p>
        </div>
      </ScrollReveal>

      <ul ref={trackRef} onScroll={handleScroll} className="cp-cards mt-14 md:mt-16">
        {LOOPED_PROJECTS.map((project, i) => (
          <li key={`${project.id}-${i}`} className="cp-card">
            <img src={project.image} alt={project.title} className="cp-card-img" />
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