// import React from "react";
// import { SocialLinks } from "@/components/ui/social-links";
// import hero_img from "../../assets/AboutUsImg/about-us-hero.jpeg";

// const ABOUT_SOCIAL_LINKS = [
//   { platform: "facebook", href: "https://www.facebook.com/devprathconstructions/" },
//   { platform: "instagram", href: "https://www.instagram.com/devprathconstructions/" },
//   {
//     platform: "whatsapp",
//     href: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency",
//   },
//   { platform: "mail", href: "mailto:devprathconstructions@gmail.com" },
//   { platform: "phone", href: "tel:+919921277699" },
// ];

// /*
//  * Timeline (ms):
//  *   0    – 3600  cutout text scales up (cinematic ease)
//  *   2400 – 3600  white overlay fades out   -> full image revealed
//  *   2600 – 3600  subtle dark readability shade fades in
//  *   3700+        final two-line heading animates in (only after everything above)
//  *   3900         SVG overlay is removed (already fully transparent, so no flicker)
//  */
// const TEXT_IN_AT_MS = 3700;
// const UNMOUNT_AFTER_MS = 3900;

// const prefersReducedMotion = () =>
//   typeof window !== "undefined" &&
//   !!window.matchMedia &&
//   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// export default function Hero() {
//   // Skip the intro entirely for users who prefer reduced motion.
//   const [revealed, setRevealed] = React.useState(prefersReducedMotion);
//   const [textIn, setTextIn] = React.useState(prefersReducedMotion);
//   const [stage, setStage] = React.useState({ w: 1000, h: 500 });
//   const sectionRef = React.useRef(null);

//   // Measure before first paint so the cutout is sized correctly on every screen.
//   React.useLayoutEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;
//     const { width, height } = el.getBoundingClientRect();
//     if (width && height) setStage({ w: Math.round(width), h: Math.round(height) });
//   }, []);

//   React.useEffect(() => {
//     if (revealed) return undefined;
//     const t1 = setTimeout(() => setTextIn(true), TEXT_IN_AT_MS);
//     const t2 = setTimeout(() => setRevealed(true), UNMOUNT_AFTER_MS);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, [revealed]);

//   // Moderate starting size; final scale is computed so the letters
//   // outgrow all four edges of the screen on any aspect ratio.
//   const { w, h } = stage;
//   const fontSize = Math.min(Math.max(w * 0.12, 44), 150);
//   const endScale = Math.max((h * 1.3) / (fontSize * 0.72), (w * 1.3) / (fontSize * 6.2), 8);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white"
//     >
//       <style>{`
//         .hero-background {
//           animation: hero-image-zoom 4s ease-out both;
//         }

//         .hero-cutout {
//           transform-box: view-box;
//           will-change: transform;
//           animation: cutout-expand 3.6s cubic-bezier(0.6, 0, 0.25, 1) both;
//         }

//         .hero-cutout-text {
//           font-family: Arial, Helvetica, sans-serif;
//           font-weight: 900;
//           letter-spacing: -0.055em;
//         }

//         .hero-overlay {
//           will-change: opacity;
//           animation: overlay-fade 1.2s ease-in-out 2.4s both;
//         }

//         .hero-final-shade {
//           animation: final-text-appear 1s ease-out 2.6s both;
//         }

//         @keyframes cutout-expand {
//           from { transform: scale(1); }
//           to   { transform: scale(var(--end-scale, 12)); }
//         }

//         @keyframes overlay-fade {
//           from { opacity: 1; }
//           to   { opacity: 0; }
//         }

//         @keyframes hero-image-zoom {
//           from { transform: scale(1.06); }
//           to   { transform: scale(1); }
//         }

//         @keyframes final-text-appear {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .hero-background,
//           .hero-cutout,
//           .hero-overlay,
//           .hero-final-shade {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* Full-screen background image */}
//       <div
//         className="hero-background absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url("${hero_img}")` }}
//       />

//       {/* Warm golden evening atmosphere */}
//       <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(105,65,24,0.45),rgba(205,151,76,0.30),rgba(42,29,18,0.48))]" />

//       {/* Subtle dark overlay for text readability (fades in with the final text) */}
//       <div className="hero-final-shade pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.38),rgba(0,0,0,0.20)_70%,rgba(0,0,0,0.32))]" />

//       {/* White overlay with an expanding transparent text cutout */}
//       {!revealed && (
//         <svg
//           className="absolute inset-0 z-10 h-full w-full"
//           viewBox={`0 0 ${w} ${h}`}
//           preserveAspectRatio="xMidYMid slice"
//           style={{ "--end-scale": endScale }}
//           aria-hidden="true"
//         >
//           <defs>
//             <mask
//               id="hero-text-cutout-mask"
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width={w}
//               height={h}
//             >
//               <rect width={w} height={h} fill="white" />
//               <text
//                 x={w / 2}
//                 y={h / 2}
//                 textAnchor="middle"
//                 dominantBaseline="central"
//                 className="hero-cutout-text hero-cutout"
//                 style={{ transformOrigin: `${w / 2}px ${h / 2}px` }}
//                 fontSize={fontSize}
//                 fill="black"
//               >
//                 Devprath.
//               </text>
//             </mask>
//           </defs>

//           <g className="hero-overlay" mask="url(#hero-text-cutout-mask)">
//             <rect width={w} height={h} fill="#ffffff" />
//             {/* Subtle dark tint */}
//             <rect width={w} height={h} fill="rgba(20,15,10,0.06)" />
//           </g>
//         </svg>
//       )}

//       {/* Final text: stays on screen once it has animated in */}
//       <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 text-center sm:px-8">
//         <h1
//           className="font-display font-serif tracking-tight text-white"
//           style={{
//             fontSize: "clamp(1.05rem, 0.9rem + 1.6vw, 2.25rem)",
//             lineHeight: 1.2,
//             textWrap: "balance",
//           }}
//         >
//           <span className="block overflow-hidden px-[0.1em] pb-[0.15em]">
//             <span
//               className="block font-black italic tracking-wide"
//               style={{
//                 transform: textIn ? "none" : "translateY(115%)",
//                 transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
//               }}
//             >
//               Before a location becomes expensive,
//             </span>
//           </span>
//           <span className="block overflow-hidden px-[0.1em] pb-[0.15em]">
//             <span
//               className="block font-black tracking-wide"
//               style={{
//                 transform: textIn ? "none" : "translateX(-110%)",
//                 transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
//               }}
//             >
//               it becomes CONNECTED.
//             </span>
//           </span>
//         </h1>
//       </div>

//       <SocialLinks links={ABOUT_SOCIAL_LINKS} />
//     </section>
//   );
// }

import React from "react";
import { SocialLinks } from "@/components/ui/social-links";
import hero_img from "../../assets/AboutUsImg/mmr.jpeg";

const ABOUT_SOCIAL_LINKS = [
  { platform: "facebook", href: "https://www.facebook.com/devprathconstructions/" },
  { platform: "instagram", href: "https://www.instagram.com/devprathconstructions/" },
  {
    platform: "whatsapp",
    href: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency",
  },
  { platform: "mail", href: "mailto:devprathconstructions@gmail.com" },
  { platform: "phone", href: "tel:+919921277699" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-black text-white">

      {/* Full-screen background image */}
      <img
        src={hero_img}
        alt="skyline MMR"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchpriority="high"
        decoding="async"
      />

      {/* Very subtle transparent overlay across the whole image */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/[0.03]" />

      {/* Accessible page heading */}
      <h1 className="sr-only">About Us</h1>

      {/* Social links */}
      <SocialLinks links={ABOUT_SOCIAL_LINKS} />

    </section>
  );
}

// import React from "react";
// import { SocialLinks } from "@/components/ui/social-links";
// import hero_img from "../../assets/AboutUsImg/about-us-hero.jpeg";

// const ABOUT_SOCIAL_LINKS = [
//   { platform: "facebook", href: "https://www.facebook.com/devprathconstructions/" },
//   { platform: "instagram", href: "https://www.instagram.com/devprathconstructions/" },
//   {
//     platform: "whatsapp",
//     href: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency",
//   },
//   { platform: "mail", href: "mailto:devprathconstructions@gmail.com" },
//   { platform: "phone", href: "tel:+919921277699"},
// ];

// export default function Hero() {
//   return (
//     <section className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF7F2] text-[#1F1E1C] selection:bg-[#B9935A] selection:text-white">

//       {/* Full background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url("${hero_img}")` }}
//       />

//       {/* Continuous soft architectural overlay */}
//        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,247,242,0.15)_0%,rgba(250,247,242,0.25)_30%,rgba(242,237,228,0.52)_60%,rgba(185,147,90,0.48)_100%)]" />
//       {/* Increased second-half overlay for high-contrast visibility */}
//       {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,247,242,0.2)_0%,rgba(250,247,242,0.35)_35%,rgba(242,237,228,0.85)_65%,rgba(185,147,90,0.82)_100%)]" /> */}
//       {/* Subtle architectural hairline dividers */}
//       <div className="pointer-events-none absolute inset-x-6 top-5 z-20 h-px bg-gradient-to-r from-transparent via-[#B9935A]/40 to-transparent sm:inset-x-10 sm:top-7" />
//       <div className="pointer-events-none absolute inset-x-6 bottom-5 z-20 h-px bg-gradient-to-r from-transparent via-[#B9935A]/30 to-transparent sm:inset-x-10 sm:bottom-7" />

//       <SocialLinks links={ABOUT_SOCIAL_LINKS} />

//       {/* Hero Typography Container (Strictly fits inside 100dvh) */}
//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1700px] flex-col items-center justify-center px-4 py-16 sm:px-8 sm:py-20 text-center">

//         {/* First Half Text: Solid Black (Bypasses p { color: var(--color-muted) }) */}
//         <div className="flex w-full flex-col items-center justify-center mb-4 sm:mb-6">
//           <div
//             className="max-w-full font-sans font-extrabold uppercase tracking-[0.12em]"
//             style={{
//               fontSize: "clamp(0.95rem, 2.3vw, 2.3rem)",
//               lineHeight: 1.25,
//               color: "#000000",
//               textWrap: "balance",
//             }}
//           >
//             Before a location becomes expensive,
//           </div>

//           <div
//             className="mt-2 sm:mt-3 font-display italic font-normal tracking-wider"
//             style={{
//               fontSize: "clamp(1.15rem, 2.8vw, 2.5rem)",
//               lineHeight: 1.2,
//               color: "#000000",
//             }}
//           >
//             it becomes
//           </div>
//         </div>

//         {/* Second Half: "CONNECTED." with 1px light black text outline (No box border) */}
//         <div className="flex w-full items-center justify-center">
//           <h1
//             className="w-full font-display font-black uppercase text-transparent select-none text-center"
//             style={{
//               fontSize: "clamp(2.7rem, 15.5vw, 16.5rem)",
//               lineHeight: 0.85,
//               letterSpacing: "-0.05em",
//               backgroundImage: `url("${hero_img}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               WebkitTextStroke: "1.8px rgba(0, 0, 0, 0.45)", // Crisp light black letter outline
//             }}
//           >
//             CONNECTED.
//           </h1>
//         </div>

//       </div>
//     </section>
//   );
// }
