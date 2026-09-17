// import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";
// import React, { useEffect, useRef } from "react";
// import ScrollReveal from "../../../components/common/ScrollReveal";

// const LOOPED_PROJECTS = [...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS, ...COMPLETED_PROJECTS];

// const CompletedProjectsSection = () => {
//   const trackRef = useRef(null);
//   const timerRef = useRef(null);
//   const setWidthRef = useRef(0);

//   useEffect(() => {
//     const el = trackRef.current;
//     if (el) {
//       const setWidth = el.children[9]
//         ? el.children[9].offsetLeft - el.children[0].offsetLeft
//         : el.scrollWidth / 3;
//       setWidthRef.current = setWidth;
//       el.scrollTo({ left: setWidth, behavior: "instant" });
//     }

//     const handleResize = () => {
//       const el = trackRef.current;
//       if (el && el.children[9]) {
//         setWidthRef.current = el.children[9].offsetLeft - el.children[0].offsetLeft;
//       }
//     };

//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => {
//       clearTimeout(timerRef.current);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleScroll = () => {
//     const el = trackRef.current;
//     if (!el) return;
//     const setWidth = setWidthRef.current || (el.scrollWidth / 3);

//     // Safety edge wrap during continuous swipe
//     if (el.scrollLeft >= setWidth * 2.2) {
//       el.scrollTo({ left: el.scrollLeft - setWidth, behavior: "instant" });
//     } else if (el.scrollLeft <= setWidth * 0.1) {
//       el.scrollTo({ left: el.scrollLeft + setWidth, behavior: "instant" });
//     }

//     // When scrolling pauses, silently return the scroller to center without moving the active image
//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       if (el.scrollLeft >= setWidth * 1.5) {
//         el.scrollTo({ left: el.scrollLeft - setWidth, behavior: "instant" });
//       } else if (el.scrollLeft < setWidth * 0.5) {
//         el.scrollTo({ left: el.scrollLeft + setWidth, behavior: "instant" });
//       }
//     }, 120);
//   };

//   return (
//     <section className="relative w-full overflow-hidden py-20 md:py-28">
//       <ScrollReveal distance={80}>
//         <div className="mx-auto max-w-3xl px-4 text-center">
//           <span className="arch-eyebrow text-center">
//             Our Work
//           </span>
//           <h2 className="mt-3 text-2xl sm:text-7xl">Completed Projects</h2>
//           <p className="lead-body mx-auto max-w-5xl text-lg sm:text-base">
//             A legacy built one address at a time — homes delivered with
//             craftsmanship, trust, and an unwavering eye for detail.
//           </p>
//         </div>
//       </ScrollReveal>

//       <ul ref={trackRef} onScroll={handleScroll} className="cp-cards mt-14 md:mt-16">
//         {LOOPED_PROJECTS.map((project, i) => (
//           <li key={`${project.id}-${i}`} className="cp-card">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="cp-card-img"
//               loading="lazy"
//               decoding="async"
//             />
//             <div className="cp-card-caption">
//               <h4 className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xs">{project.title}</h4>
//               <p className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xl">
//                 {project.location}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default CompletedProjectsSection;


"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "../../../components/common/ScrollReveal";
import { COMPLETED_PROJECTS } from "../../../constants/completedProjects";

// --- GSAP SVG Animated Image Component ---
function GalleryImage({ url, title, open, inPlace, id, onInPlace, total }) {
  const [firstLoad, setLoaded] = useState(true);
  const clip = useRef(null);

  // Animation Constants
  const gap = 10;
  const circleRadius = 7;
  const defaults = { transformOrigin: "center center" };
  const duration = 0.4;
  const width = 400;
  const height = 400;
  const scale = 700;

  const bigSize = circleRadius * scale;
  const overlap = 0;

  // Position Calculation Functions
  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 30,
    r: circleRadius,
  });
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  });
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 });
  const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize });
  const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize });

  // Animation Logic using GSAP
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    setLoaded(false);
    if (clip.current) {
      const flipDuration = firstLoad ? 0 : duration;
      const upDuration = firstLoad ? 0 : 0.2;
      const bounceDuration = firstLoad ? 0.01 : 1;
      const delay = firstLoad ? 0 : flipDuration + upDuration;

      if (open) {
        gsap
          .timeline()
          .set(clip.current, { ...defaults, ...getPosSmall() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            duration: upDuration,
            ease: "power3.inOut",
          })
          .to(clip.current, {
            ...defaults,
            ...getPosEnd(),
            duration: flipDuration,
            ease: "power4.in",
            onComplete: () => onInPlace(id),
          });
      } else {
        gsap
          .timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            delay: delay,
            duration: flipDuration,
            ease: "power4.out",
          })
          .to(clip.current, {
            ...defaults,
            motionPath: {
              path: [getPosSmallAbove(), getPosSmall()],
              curviness: 1,
            },
            duration: bounceDuration,
            ease: "bounce.out",
          });
      }
    }
  }, [open, firstLoad, id, total, onInPlace]); // added dependencies

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={`${id}_circleClip`}>
          <circle className="clip" cx="0" cy="0" r={circleRadius} ref={clip}></circle>
        </clipPath>
        <clipPath id={`${id}_squareClip`}>
          <rect className="clip" width={width} height={height}></rect>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
        <image width={width} height={height} href={url} className="pointer-events-none"></image>
      </g>
    </svg>
  );
}

// --- Interactive SVG Thumbnail Tabs ---
function Tabs({ projects, onSelect }) {
  const gap = 10;
  const circleRadius = 7;
  const width = 400;
  const height = 400;

  const getPosX = (i) =>
    width / 2 - (projects.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap);
  const getPosY = () => height - 30;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {projects.map((project, i) => (
        <g key={project.id || i} className="pointer-events-auto">
          <defs>
            <clipPath id={`tab_${i}_clip`}>
              <circle cx={getPosX(i)} cy={getPosY()} r={circleRadius} />
            </clipPath>
          </defs>
          <image
            x={getPosX(i) - circleRadius}
            y={getPosY() - circleRadius}
            width={circleRadius * 2}
            height={circleRadius * 2}
            href={project.image}
            clipPath={`url(#tab_${i}_clip)`}
            className="pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle
            onClick={() => onSelect(i)}
            className="cursor-pointer fill-transparent stroke-white/70 hover:stroke-white transition-all"
            strokeWidth="2"
            cx={getPosX(i)}
            cy={getPosY()}
            r={circleRadius + 2}
          />
        </g>
      ))}
    </svg>
  );
}

// --- Main Layout Component ---
const CompletedProjectsSection = () => {
  const [opened, setOpened] = useState(0);
  const [inPlace, setInPlace] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const autoplayTimer = useRef(null);

  // Load GSAP dynamically
  useEffect(() => {
    const loadScripts = () => {
      if (window.gsap && window.MotionPathPlugin) {
        window.gsap.registerPlugin(window.MotionPathPlugin);
        setGsapReady(true);
        return;
      }

      const gsapScript = document.createElement("script");
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      gsapScript.onload = () => {
        const motionPathScript = document.createElement("script");
        motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js";
        motionPathScript.onload = () => {
          if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(window.MotionPathPlugin);
            setGsapReady(true);
          }
        };
        document.body.appendChild(motionPathScript);
      };
      document.body.appendChild(gsapScript);
    };

    loadScripts();
  }, []);

  const onClick = (index) => {
    if (!disabled) setOpened(index);
  };

  const onInPlace = (index) => setInPlace(index);

  const next = useCallback(() => {
    setOpened((currentOpened) => {
      let nextIndex = currentOpened + 1;
      if (nextIndex >= COMPLETED_PROJECTS.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  const prev = useCallback(() => {
    setOpened((currentOpened) => {
      let prevIndex = currentOpened - 1;
      if (prevIndex < 0) prevIndex = COMPLETED_PROJECTS.length - 1;
      return prevIndex;
    });
  }, []);

  // Disable clicks during animation transitions
  useEffect(() => setDisabled(true), [opened]);
  useEffect(() => setDisabled(false), [inPlace]);

  // Autoplay functionality
  useEffect(() => {
    if (!gsapReady) return;

    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    autoplayTimer.current = window.setInterval(next, 4500);

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [opened, gsapReady, next]);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 font-sans">
      <ScrollReveal distance={80}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="arch-eyebrow text-center">Our Work</span>
          <h2 className="mt-3 text-2xl sm:text-7xl">Completed Projects</h2>
          <p className="lead-body mx-auto max-w-5xl text-lg sm:text-base">
            A legacy built one address at a time — homes delivered with
            craftsmanship, trust, and an unwavering eye for detail.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 md:mt-16 w-full flex flex-col items-center justify-center relative">
        <div className="relative w-full flex items-center justify-center">
          {/* Main GSAP Animated Gallery Container */}
          <div className="relative h-[80vmin] w-[80vmin] max-h-[600px] max-w-[600px] overflow-hidden rounded-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.02),0_6.7px_5.3px_rgba(0,0,0,0.028),0_12.5px_10px_rgba(0,0,0,0.035),0_22.3px_17.9px_rgba(0,0,0,0.042),0_41.8px_33.4px_rgba(0,0,0,0.05),0_100px_80px_rgba(0,0,0,0.07)] bg-primary">
            {gsapReady &&
              COMPLETED_PROJECTS.map((project, i) => (
                <div
                  key={`${project.id || i}-${project.image}`}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{ zIndex: inPlace === i ? i : COMPLETED_PROJECTS.length + 1 }}
                >
                  <GalleryImage
                    total={COMPLETED_PROJECTS.length}
                    id={i}
                    url={project.image}
                    title={project.title}
                    open={opened === i}
                    inPlace={inPlace === i}
                    onInPlace={onInPlace}
                  />
                </div>
              ))}
            <div className="absolute left-0 top-0 z-[100] h-full w-full pointer-events-none">
              <Tabs projects={COMPLETED_PROJECTS} onSelect={onClick} />
            </div>
          </div>

          {/* Previous Button */}
          <button
            className="absolute left-[calc(50%-40vmin-40px)] sm:left-[calc(50%-300px-50px)] top-1/2 z-[101] flex h-14 w-14 sm:h-16 sm:w-16 -translate-y-1/2 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:border-white/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] active:scale-95 focus-visible:ring-4 focus-visible:ring-white/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={prev}
            disabled={disabled}
            aria-label="Previous Image"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800 transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-[calc(50%-40vmin-40px)] sm:right-[calc(50%-300px-50px)] top-1/2 z-[101] flex h-14 w-14 sm:h-16 sm:w-16 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:border-white/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] active:scale-95 focus-visible:ring-4 focus-visible:ring-white/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={next}
            disabled={disabled}
            aria-label="Next Image"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dynamic Project Caption Overlay */}
        {COMPLETED_PROJECTS[opened] && (
          <div className="mt-8 text-center cp-card-caption">
            <h4 className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xs">
              {COMPLETED_PROJECTS[opened].title}
            </h4>
            <p className="mt-1 text-sm !font-bold uppercase tracking-[0.15em] text-gold !sm:text-xl">
              {COMPLETED_PROJECTS[opened].location}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompletedProjectsSection;