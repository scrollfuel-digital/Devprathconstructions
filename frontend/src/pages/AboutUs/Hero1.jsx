import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import backgroundImage from "../../assets/home page/background_image.png";
import heroImage from "../../assets/AboutUsImg/mmr7.png";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: custom * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-cream border-b border-[#B9935A]/20 ">

      {/* Blueprint Watermark */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.10]"
      />

      {/* INTRODUCTION */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-4 pt-24 pb-8 text-center sm:px-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:px-12 lg:pt-36 lg:pb-14">

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Est. 2018 · Nagpur, Maharashtra
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-5 w-full"
        >
          <h1 className="mx-auto max-w-[1250px] font-display text-4xl font-black uppercase leading-[1.08] tracking-tight text-gold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
            A Foundation of Trust. A Commitment to Quality.
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-5 max-w-3xl sm:mt-7"
        >
          <p className="font-body text-sm leading-[1.9] text-[#5E5548] sm:text-base md:text-lg">
            Founded in 2018, Devprath Constructions LLP is built on over 15
            years of construction industry experience, delivering residential
            projects rooted in integrity, commitment, and quality.
          </p>
        </motion.div>

      </div>

      {/* SECOND IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto mb-4 mt-2 w-[calc(100%-2rem)] sm:mb-5 sm:mt-3 sm:w-[calc(100%-4rem)] lg:mb-6 lg:mt-4 lg:w-[calc(100%-6rem)]"
      >
        <img
          src={heroImage}
          alt="Premium residential interior"
          className="block aspect-[21/9] w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

    </section>
  );
}














// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";

// const COMMITMENT_IMAGES = [
//   {
//     src: "https://devang-developersllpproject.vercel.app/assets/kirti-bhai-o4cvgKDd.jpeg",
//     alt: "Devprath team member",
//     position: "object-center",
//     offset: "lg:translate-y-0",
//   },
//   {
//     src: "https://devang-developersllpproject.vercel.app/assets/ritesh-mehta-CTS5Yela.jpeg",
//     alt: "Devprath team member",
//     position: "object-center",
//     offset: "lg:translate-y-10",
//   },
//   {
//     src: "https://devang-developersllpproject.vercel.app/assets/jaykrishnan-BFwFDNCU.jpeg",
//     alt: "Devprath team member",
//     position: "object-center",
//     offset: "lg:translate-y-24",
//   },
//   {
//     src: "https://devang-developersllpproject.vercel.app/assets/sandip-oMve2qMR.jpeg",
//     alt: "Devprath team member",
//     position: "object-center",
//     offset: "lg:translate-y-[-8px]",
//   },
// ];

// export default function CommitmentSection() {
//   const shouldReduce = useReducedMotion();

//   return (
//     <section className="relative w-full overflow-hidden bg-[#FAF9F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

//       <div className="mx-auto max-w-[1400px]">

//         {/* Heading */}
//         <motion.div
//           initial={shouldReduce ? false : { opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center"
//         >
//           <h2 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-[#B9935A] sm:text-5xl md:text-6xl lg:text-[76px]">
//             Constantly Committed
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#77716A] sm:text-base">
//             Driven by trust, guided by integrity, and committed to creating
//             spaces that stand the test of time.
//           </p>
//         </motion.div>

//         {/* Staggered Image Gallery */}
//         <div className="mt-14 grid grid-cols-2 items-start gap-x-5 gap-y-8 sm:mt-16 sm:gap-x-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-12">

//           {COMMITMENT_IMAGES.map((item, index) => (
//             <motion.div
//               key={item.src}
//               initial={
//                 shouldReduce
//                   ? false
//                   : { opacity: 0, y: 45 }
//               }
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.12,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className={`relative w-full overflow-hidden rounded-tr-[28px] ${item.offset}`}
//             >
//               <div className="aspect-[3/4] w-full overflow-hidden bg-[#E9E3D9]">
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   loading="lazy"
//                   decoding="async"
//                   className={`h-full w-full object-cover ${item.position} transition-transform duration-700 ease-out hover:scale-105`}
//                 />
//               </div>

//               {/* Subtle Golden Bottom Accent */}
//               <div className="h-[3px] w-full bg-[#B9935A]/70" />
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
















// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SocialLinks } from "../../components/ui/social-links.jsx";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";

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

// export default function Hero() {
//   const shouldReduce = useReducedMotion();

//   const fadeIn = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
//     visible: (custom = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.85,
//         delay: custom * 0.1,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-x-hidden bg-cream pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 border-b border-[#B9935A]/20 select-none">

//       {/* Blueprint Watermark */}
//       <img
//         src={backgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.10]"
//       />

//       <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-4 sm:px-8 lg:px-10 xl:px-12">

//         {/* HEADER: Know Us
//         <div className="w-full">
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="pt-1 sm:pt-2 text-left"
//           >
//             <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[112px] font-black uppercase leading-[0.95] tracking-tight text-gold">
//               Know Us
//             </h1>
//           </motion.div>
//         </div> */}

//         {/* HERO IMAGE */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           className="relative my-3 sm:my-5 lg:my-6 w-full flex-1 flex flex-col justify-center"
//         >
//           {/* Increased Image Dimensions */}
//           <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#B9935A]/35 bg-[#1F1E1C] shadow-2xl shadow-black/15 min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] lg:aspect-[16/9] flex items-end">

//             {/* Background Photograph */}
//             <img
//               src={hero_img}
//               alt="Mangalmurti Residency skyline, Nagpur"
//               className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
//               fetchPriority="high"
//               decoding="async"
//             />

//             {/* Overlay */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent" />

//             {/* Content Over Hero Image */}
//             <div className="relative z-10 w-full px-4 py-6 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
//               <div className="max-w-xl text-left">

//                 {/* Gold Eyebrow */}
//                 <div className="mb-2 sm:mb-3 flex items-center justify-start gap-2 sm:gap-2.5">
//                   <span className="h-0.5 w-6 sm:w-10 bg-gold shadow-sm" />
//                   <span className="font-body text-[11px] sm:text-xs md:text-[13px] font-black uppercase tracking-[0.2em] text-[#FFD780] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
//                     Devprath Constructions LLP
//                   </span>
//                 </div>

//                 {/* Paragraph */}
//                 <p
//                   className="font-sans text-[13px] sm:text-sm md:text-base lg:text-[16px] font-black leading-relaxed !text-[#FFD780] text-left text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
//                   style={{ color: "#FFD780" }}
//                 >
//                   Devprath Construction LLP unites over two decades of engineering and architectural expertise. Headquartered in Nagpur, we design thoughtful living spaces that blend modern aesthetics with lasting structural confidence.
//                 </p>

//                 {/* Button */}
//                 <div className="mt-4 sm:mt-6 w-fit rounded-sm shadow-2xl shadow-black/60 border-2 border-[#FFD780]">
//                   <CTAButton to="/contact" label="ENQUIRE NOW" />
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Precision Crosshair Accents */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-gold/60"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-gold/60"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }










// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SocialLinks } from "../../components/ui/social-links.jsx";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";

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

// export default function Hero() {
//   const shouldReduce = useReducedMotion();

//   const fadeIn = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
//     visible: (custom = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.85,
//         delay: custom * 0.1,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-x-hidden bg-cream pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 border-b border-[#B9935A]/20 select-none">
      
//       {/* Blueprint Watermark */}
//       <img
//         src={backgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.10]"
//       />

//       <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-4 sm:px-8 lg:px-12 xl:px-16">

//         {/* =========================================================================
//             HEADER: "Know Us" (Compact & Fluid Spacing)
//             ========================================================================= */}
//         <div className="w-full">
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="pt-1 sm:pt-2 text-left"
//           >
//             <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[112px] font-black uppercase leading-[0.95] tracking-tight text-gold">
//               Know Us
//             </h1>
//           </motion.div>
//         </div>

//         {/* =========================================================================
//             HERO IMAGE: 100% Responsive Adaptive Height + Dual-Direction Gradient
//             ========================================================================= */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           className="relative my-3 sm:my-5 lg:my-6 w-full flex-1 flex flex-col justify-center"
//         >
//           {/* Adaptive Viewport: min-h on mobile ensures text never spills out; aspect on desktop */}
//           <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#B9935A]/35 bg-[#1F1E1C] shadow-2xl shadow-black/15 min-h-[420px] sm:min-h-[460px] md:min-h-[480px] lg:aspect-[21/9] flex items-end">
            
//             {/* Background Photograph */}
//             <img
//               src={hero_img}
//               alt="Mangalmurti Residency skyline, Nagpur"
//               className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
//               fetchPriority="high"
//               decoding="async"
//             />

//             {/* Adaptive Scrim: Vertical on Mobile for 100% Text Readability, Horizontal on Desktop */}
//             {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/70 to-black/25 sm:bg-gradient-to-r sm:from-black/50 sm:via-black/25 sm:to-transparent" /> */}
//             {/* Lighter, Softer Overlay — Decreased Darkness */}
// <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent" />

//             {/* Content Over Hero Image */}
//             <div className="relative z-10 w-full px-4 py-6 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
//               <div className="max-w-xl text-left">
                
//                 {/* Gold Eyebrow */}
//                 <div className="mb-2 sm:mb-3 flex items-center justify-start gap-2 sm:gap-2.5">
//                   <span className="h-0.5 w-6 sm:w-10 bg-gold shadow-sm" />
//                   <span className="font-body text-[11px] sm:text-xs md:text-[13px] font-black uppercase tracking-[0.2em] text-[#FFD780] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
//                     Devprath Constructions LLP
//                   </span>
//                 </div>

//                 {/* Golden Paragraph: Extra Bold & Fluid Typography */}
//                 <p
//                   className="font-sans text-[13px] sm:text-sm md:text-base lg:text-[16px] font-black leading-relaxed !text-[#FFD780] text-left text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
//                   style={{ color: "#FFD780" }}
//                 >
//                   Devprath Construction LLP unites over two decades of engineering and architectural expertise. Headquartered in Nagpur, we design thoughtful living spaces that blend modern aesthetics with lasting structural confidence.
//                 </p>

//                 {/* Golden Button */}
//                 <div className="mt-4 sm:mt-6 w-fit rounded-sm shadow-2xl shadow-black/60 border-2 border-[#FFD780]">
//                   <CTAButton to="/contact" label="ENQUIRE NOW" />
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Precision Crosshair Accents */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-gold/60"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-gold/60"
//           />
//         </motion.div>
//     </div>
//     </section>
//   );
// }
















// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SocialLinks } from "../../components/ui/social-links.jsx";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";

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

// export default function Hero() {
//   const shouldReduce = useReducedMotion();

//   const fadeIn = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
//     visible: (custom = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.85,
//         delay: custom * 0.1,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-cream pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 border-b border-[#B9935A]/20 select-none">
//       {/* Blueprint Watermark */}
//       <img
//         src={backgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.10]"
//       />

//       <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-5 sm:px-8 lg:px-12 xl:px-16">

//         {/* HEADER */}
//         <div>
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="pt-2 sm:pt-4"
//           >
//             <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[115px] font-black uppercase leading-[0.95] tracking-tight text-gold">
//               Know Us
//             </h1>
//           </motion.div>
//         </div>

//         {/* CENTERPIECE */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           className="relative my-6 sm:my-8 w-full"
//         >
//           <div className="relative aspect-[16/10] sm:aspect-[21/10] lg:aspect-[21/9] w-full overflow-hidden rounded-xl border border-[#B9935A]/40 bg-[#F2EDE4] shadow-2xl shadow-black/8 flex items-center">

//             {/* Background Photograph */}
//             <img
//               src={hero_img}
//               alt="Mangalmurti Residency skyline, Nagpur"
//               className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.03] contrast-[1.05] transition-transform duration-1000 ease-out hover:scale-[1.03]"
//               fetchPriority="high"
//               decoding="async"
//             />

//             {/* Dark Gradient */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />

//             {/* Content Over Hero Image */}
//             <div className="relative z-10 w-full px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
//               <div className="max-w-xl">

//                 {/* Gold Eyebrow */}
//                 <div className="mb-2 sm:mb-3 flex items-center gap-2.5">
//                   <span className="h-1 w-8 bg-gold sm:w-10 shadow-sm" />
//                   <span className="font-body text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-[#FFD780] drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
//                     Devprath Constructions LLP
//                   </span>
//                 </div>

//                {/* Golden Paragraph */}
//               <p
//                 className="font-sans text-xs sm:text-sm md:text-base lg:text-[17px] font-black leading-relaxed !text-[#FFD780] text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
//                 style={{ color: "#FFD780" }}
// >
//                 Devprath Construction LLP unites over two decades of engineering and architectural expertise. Headquartered in Nagpur, we design thoughtful living spaces that blend modern aesthetics with lasting structural confidence.
//             </p>

//                 {/* Golden Button */}
//                 <div className="mt-5 sm:mt-7 w-fit rounded-sm shadow-2xl shadow-black/60 border-2 border-[#FFD780]">
//                   <CTAButton to="/contact" label="ENQUIRE NOW" />
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Architectural Crosshair Accents */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -top-2.5 -left-2.5 h-5 w-5 border-t-2 border-l-2 border-gold/60"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-5 w-5 border-b-2 border-r-2 border-gold/60"
//           />
//         </motion.div>

        

//       </div>
//     </section>
//   );
// }









// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SocialLinks } from "@/components/ui/social-links";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";

// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";
// import launch_img from "../../assets/AboutUsImg/HomePage.jpg";

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

// const PORTALS = [
//   {
//     id: 1,
//     tag: "01 / THE SYNERGY",
//     kicker: "Two Decades of Synergy",
//     title: "Founded on Uncompromising Trust",
//     description:
//       "A partnership between Hemal Nadiyana and Dr. Sunil Patil, combining scientific structural engineering with refined, comfortable architectural design across Nagpur.",
//     statNumber: 20,
//     statSuffix: "+",
//     statLabel: "Years of Synergy",
//     image: backgroundImage,
//     isBlueprint: true,
//   },
//   {
//     id: 2,
//     tag: "02 / THE LANDMARK",
//     kicker: "Central Nagpur Footprint",
//     title: "Mangalmurti Residency & Beyond",
//     description:
//       "Located in central Nagpur, our homes combine modern aesthetics with everyday comfort. Carefully planned spaces engineered to stand the test of time.",
//     statNumber: 9,
//     statPrefix: "0",
//     statLabel: "Developments Completed",
//     image: hero_img,
//     isBlueprint: false,
//   },
//   {
//     id: 3,
//     tag: "03 / THE COMMUNITY",
//     kicker: "Generational Pride",
//     title: "500+ Happy Families Living",
//     description:
//       "Delivering quality residential experiences with ethical business practices, transparent communication, and addresses families are truly proud to call home.",
//     statNumber: 500,
//     statSuffix: "+",
//     statLabel: "Happy Homeowners",
//     image: launch_img,
//     isBlueprint: false,
//   },
// ];

// export default function Hero() {
//   const [activePortal, setActivePortal] = useState(2); // Center portal active by default

//   return (
//     <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-cream pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-10 border-b border-[#B9935A]/20 select-none">
      
//       {/* =========================================================================
//           TOP HEADER: Architectural Eyebrow & Coordinates
//           ========================================================================= */}
//       <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16 mb-4 sm:mb-6">
//         <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B9935A]/25 pb-3">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-gold" />
//             <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold sm:text-sm">
//               Devprath Constructions LLP • Nagpur
//             </span>
//           </div>

//           <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.16em] text-text-light font-sans">
//             <span className="hidden sm:inline">Nagpur, MH • 21.1458° N, 79.0882° E</span>
//             <span>Est. 28 Nov 2018</span>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================================
//           THE INTERACTIVE ARCHITECTURAL TRIPTYCH (3 EXPANDING PORTALS)
//           ========================================================================= */}
//       <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col md:flex-row gap-3 sm:gap-4 px-5 sm:px-8 lg:px-12 xl:px-16 min-h-[480px] sm:min-h-[520px]">
//         {PORTALS.map((portal) => {
//           const isActive = activePortal === portal.id;

//           return (
//             <motion.div
//               key={portal.id}
//               layout
//               onClick={() => setActivePortal(portal.id)}
//               onMouseEnter={() => setActivePortal(portal.id)}
//               transition={{
//                 layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//               }}
//               className={`relative overflow-hidden rounded-xl sm:rounded-2xl border transition-colors cursor-pointer flex flex-col justify-between p-5 sm:p-7 lg:p-8 ${
//                 isActive
//                   ? "flex-[2.2] border-gold/60 shadow-2xl shadow-[#B9935A]/10 bg-[#FAF7F2]"
//                   : "flex-[0.9] border-[#B9935A]/25 hover:border-gold/40 bg-[#F2EDE4]/80 opacity-85 hover:opacity-100"
//               }`}
//             >
//               {/* Background Image / Texture Layer */}
//               <div className="absolute inset-0 -z-10 overflow-hidden">
//                 <img
//                   src={portal.image}
//                   alt={portal.title}
//                   className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${
//                     portal.isBlueprint
//                       ? "opacity-[0.14] object-center"
//                       : isActive
//                       ? "scale-105 filter brightness-[0.85] contrast-[1.08]"
//                       : "scale-100 filter brightness-[0.65] contrast-[1.02]"
//                   }`}
//                 />

//                 {/* Shading Vignette */}
//                 <div
//                   className={`absolute inset-0 transition-opacity duration-500 ${
//                     portal.isBlueprint
//                       ? "bg-gradient-to-t from-cream via-cream/80 to-transparent"
//                       : isActive
//                       ? "bg-gradient-to-t from-black/85 via-black/45 to-black/20"
//                       : "bg-black/60"
//                   }`}
//                 />
//               </div>

//               {/* Top Tag & Number */}
//               <div className="relative z-10 flex items-center justify-between">
//                 <span
//                   className={`font-body text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] transition-colors ${
//                     portal.isBlueprint
//                       ? "text-gold"
//                       : "text-white/90 drop-shadow-sm"
//                   }`}
//                 >
//                   {portal.tag}
//                 </span>

//                 {/* Corner Crosshair Accent when active */}
//                 {isActive && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="h-2 w-2 rounded-full bg-gold"
//                   />
//                 )}
//               </div>

//               {/* Center / Bottom Content */}
//               <div className="relative z-10 mt-auto pt-6">
//                 {/* Kicker Eyebrow */}
//                 <span
//                   className={`block font-body text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-1.5 transition-colors ${
//                     portal.isBlueprint
//                       ? "text-gold"
//                       : "text-gold"
//                   }`}
//                 >
//                   {portal.kicker}
//                 </span>

//                 {/* Title */}
//                 <h3
//                   className={`font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight transition-colors ${
//                     portal.isBlueprint
//                       ? "text-text-dark"
//                       : "text-white drop-shadow-md"
//                   }`}
//                 >
//                   {portal.title}
//                 </h3>

//                 {/* Expandable Narrative & Stat (Shown smoothly when Active) */}
//                 <AnimatePresence mode="wait">
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 8 }}
//                       transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//                       className="mt-4 pt-4 border-t border-white/20 sm:mt-5 sm:pt-5"
//                     >
//                       <p
//                         className={`font-sans text-xs sm:text-sm text-justify font-bold leading-relaxed mb-6 text-pretty ${
//                           portal.isBlueprint
//                             ? "text-text-light"
//                             : "text-white/90 drop-shadow-sm"
//                         }`}
//                       >
//                         {portal.description}
//                       </p>

//                       <div className="flex flex-wrap items-center justify-between gap-4">
//                         {/* Live Counter */}
//                         <div>
//                           <div
//                             className={`font-display text-2xl sm:text-3xl font-semibold leading-none ${
//                               portal.isBlueprint
//                                 ? "text-text-dark"
//                                 : "text-white"
//                             }`}
//                           >
//                             <CountUpNumber
//                               value={portal.statNumber}
//                               prefix={portal.statPrefix}
//                               suffix={portal.statSuffix}
//                               duration={2200}
//                             />
//                           </div>
//                           <span
//                             className={`mt-1 block font-body text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] ${
//                               portal.isBlueprint
//                                 ? "text-gold"
//                                 : "text-gold"
//                             }`}
//                           >
//                             {portal.statLabel}
//                           </span>
//                         </div>

//                         {/* CTA Button */}
//                         <div className="shrink-0">
//                           <CTAButton to="/contact" label="ENQUIRE" />
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* =========================================================================
//           BOTTOM DOCK: Clean Transparent Social Links
//           ========================================================================= */}
//       <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16 mt-4 sm:mt-6">
//         <div className="flex items-center justify-between border-t border-[#B9935A]/25 pt-3">
//           <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-text-light">
//             Crafting Landmarks Across Central Nagpur
//           </span>

//           <div className="bg-transparent opacity-80 hover:opacity-100 transition-opacity">
//             <SocialLinks links={ABOUT_SOCIAL_LINKS} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SocialLinks } from "@/components/ui/social-links";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";

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

// export default function Hero() {
//   const shouldReduce = useReducedMotion();

//   const fadeIn = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
//     visible: (custom = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.85,
//         delay: custom * 0.1,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-cream pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 border-b border-[#B9935A]/20 select-none">
//       {/* Blueprint Watermark */}
//       <img
//         src={backgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.10]"
//       />

//       <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        
//         {/* =========================================================================
//             HEADER: Architectural Masthead & Eyebrow Coordinates
//             ========================================================================= */}
//         <div>
//           {/* Coordinates Bar */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B9935A]/25 pb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold"
//           >
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
//               Nagpur, MH • 21.1458° N, 79.0882° E
//             </span>
//             <span className="text-text-light font-sans font-semibold">
//               Established 2018 • LLP No. AAN-9208
//             </span>
//           </motion.div>

//           {/* Grand Architectural Masthead Title */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="pt-4 sm:pt-6"
//           >
//             <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-text-dark text-balance">
//               Building Beyond Structures.
//               <span className="block font-bold text-gold">
//                 Crafting Enduring Landmarks.
//               </span>
//             </h1>
//           </motion.div>
//         </div>

//         {/* =========================================================================
//             CENTERPIECE: 21:9 Ultra-Wide Cinematic Letterbox Frame
//             ========================================================================= */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           className="relative my-6 sm:my-8 w-full"
//         >
//           {/* 21:9 Aspect Ratio Cinematic Viewport */}
//           <div className="relative aspect-[16/8] sm:aspect-[21/9] lg:aspect-[21/8] w-full overflow-hidden rounded-xl border border-[#B9935A]/35 bg-[#F2EDE4] shadow-2xl shadow-black/8">
//             <img
//               src={hero_img}
//               alt="Mangalmurti Residency skyline, Nagpur"
//               className="h-full w-full object-cover object-center filter brightness-[0.98] contrast-[1.06] transition-transform duration-1000 ease-out hover:scale-[1.03]"
//               fetchPriority="high"
//               decoding="async"
//             />

//             {/* Subtle Gradient Framing */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

//             {/* Viewport Caption Plaque */}
//             <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 rounded-lg border border-[#B9935A]/40 bg-[#FAF7F2]/95 px-3 py-2 sm:px-4 sm:py-2.5 shadow-md backdrop-blur-md">
//               <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
//                 Featured Landmark
//               </span>
//               <span className="block text-xs sm:text-sm font-bold text-text-dark">
//                 Mangalmurti Residency • Central Nagpur
//               </span>
//             </div>

//             {/* Right Badge */}
//             <div className="hidden sm:block absolute bottom-5 right-5 rounded-lg border border-white/20 bg-black/40 px-3.5 py-2 backdrop-blur-md text-white text-right">
//               <span className="block text-[10px] uppercase tracking-[0.16em] text-gold font-bold">
//                 Partnership
//               </span>
//               <span className="block text-xs font-semibold">
//                 Hemal Nadiyana &amp; Dr. Sunil Patil
//               </span>
//             </div>
//           </div>

//           {/* Precision Architectural Crosshair Accents */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -top-2.5 -left-2.5 h-5 w-5 border-t-2 border-l-2 border-gold/60"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-5 w-5 border-b-2 border-r-2 border-gold/60"
//           />
//         </motion.div>

//         {/* =========================================================================
//             LOWER BAR: 3-Part Editorial Grid (Narrative, Stats, CTA & Social)
//             ========================================================================= */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={3}
//           className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center border-t border-[#B9935A]/25 pt-4 sm:pt-6"
//         >
//           {/* Narrative (5 Cols) */}
//           <div className="lg:col-span-5">
//             <p className="font-sans text-xs sm:text-sm text-justify font-bold leading-relaxed text-text-light text-pretty">
//               Devprath Construction LLP unites over two decades of engineering and architectural expertise. Headquartered in Nagpur, we design thoughtful living spaces that blend modern aesthetics with lasting structural confidence.
//             </p>
//           </div>

//           {/* Key Metrics (4 Cols) */}
//           <div className="flex items-center gap-6 sm:gap-8 lg:col-span-4 lg:justify-center">
//             <div>
//               <div className="font-display text-2xl sm:text-3xl font-semibold leading-none text-text-dark">
//                 <CountUpNumber value={20} suffix="+" duration={2400} />
//               </div>
//               <span className="mt-1 block font-body text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gold">
//                 Years of Synergy
//               </span>
//             </div>

//             <div className="h-8 w-px bg-[#B9935A]/30" />

//             <div>
//               <div className="font-display text-2xl sm:text-3xl font-semibold leading-none text-text-dark">
//                 <CountUpNumber value={9} prefix="0" duration={2400} />
//               </div>
//               <span className="mt-1 block font-body text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gold">
//                 Developments
//               </span>
//             </div>

//             <div className="h-8 w-px bg-[#B9935A]/30" />

//             <div>
//               <div className="font-display text-2xl sm:text-3xl font-semibold leading-none text-text-dark">
//                 <CountUpNumber value={500} suffix="+" duration={2400} />
//               </div>
//               <span className="mt-1 block font-body text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gold">
//                 Happy Families
//               </span>
//             </div>
//           </div>

//           {/* Action & Social (3 Cols) */}
//           <div className="flex items-center justify-between sm:justify-end gap-4 lg:col-span-3">
//             <div className="opacity-80 hover:opacity-100 transition-opacity">
//               <SocialLinks links={ABOUT_SOCIAL_LINKS} />
//             </div>
//             <CTAButton to="/contact" label="ENQUIRE" />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { SocialLinks } from "@/components/ui/social-links";
// import CTAButton from "../../components/common/CTAButton.jsx";
// import { CountUpNumber } from "../../components/common/CountUpNumber.jsx";
// import backgroundImage from "../../assets/home page/background_image.png";
// import hero_img from "../../assets/AboutUsImg/mmr3.png";

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

// export default function Hero() {
//   const shouldReduce = useReducedMotion();

//   // Restrained, executive-tier easing (no bounces or gimmicks)
//   const fadeUp = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
//     visible: (custom = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: custom * 0.12,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative isolate flex min-h-[92svh] lg:min-h-screen w-full flex-col justify-between overflow-hidden bg-cream pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#B9935A]/20 select-none">
//       {/* =========================================================================
//           BACKGROUND: Architectural Blueprint Watermark & Ambient Diffusion
//           ========================================================================= */}
//       <img
//         src={backgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.12]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#B9935A]/8 blur-3xl"
//       />

//       {/* =========================================================================
//           MAIN CONTAINER: 2-Column Architectural Monograph Layout
//           ========================================================================= */}
//       <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">

//           {/* LEFT COLUMN (7 Cols): Editorial Statement & Master Typography */}
//           <div className="flex flex-col lg:col-span-7">
//             {/* Architectural Eyebrow Kicker */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={0}
//               className="mb-4 flex items-center gap-3 sm:mb-5"
//             >
//               <span className="h-px w-8 bg-gold sm:w-12" />
//               <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold sm:text-sm">
//                 Devprath Constructions LLP • Nagpur
//               </span>
//             </motion.div>

//             {/* Main Title (Locked to Devprath Benchmark H2 Structure) */}
//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={1}
//               className="mb-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text-dark sm:text-5xl lg:text-[54px] xl:text-6xl"
//             >
//               We Don&apos;t Just Build Residences.
//               <span className="block font-bold text-gold mt-1.5 sm:mt-2">
//                 We Shape Legacies.
//               </span>
//             </motion.h1>

//             {/* Benchmark Body Paragraph */}
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={2}
//               className="max-w-2xl font-sans text-sm text-justify font-bold leading-relaxed text-text-light text-pretty"
//             >
//               Born from over two decades of synergy between visionary founders Hemal Nadiyana and Dr. Sunil Patil, Devprath Constructions combines thoughtful modern architecture with structural longevity. Located in central Nagpur, every landmark we deliver is crafted with uncompromising material standards to provide a home where families truly thrive.
//             </motion.p>

//             {/* Architectural Hairline Divider */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={3}
//               className="my-6 sm:my-8 h-px w-full max-w-2xl bg-[#B9935A]/25"
//             />

//             {/* Stat Callouts & CTA (Reusing CountUpNumber and CTAButton) */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={4}
//               className="flex flex-wrap items-center gap-6 sm:gap-10"
//             >
//               {/* Stat 1 */}
//               <div>
//                 <div className="font-display text-3xl font-semibold leading-none tracking-tight text-text-dark sm:text-4xl">
//                   <CountUpNumber value={20} suffix="+" duration={2200} />
//                 </div>
//                 <span className="mt-1.5 block font-body text-[11px] font-bold uppercase tracking-[0.16em] text-gold sm:text-xs">
//                   Years of Synergy
//                 </span>
//               </div>

//               <div className="h-10 w-px bg-[#B9935A]/25" />

//               {/* Stat 2 */}
//               <div>
//                 <div className="font-display text-3xl font-semibold leading-none tracking-tight text-text-dark sm:text-4xl">
//                   <CountUpNumber value={9} prefix="0" duration={2200} />
//                 </div>
//                 <span className="mt-1.5 block font-body text-[11px] font-bold uppercase tracking-[0.16em] text-gold sm:text-xs">
//                   Landmarks Delivered
//                 </span>
//               </div>

//               <div className="sm:ml-auto w-full sm:w-auto">
//                 <CTAButton to="/contact" label="ENQUIRE WITH US" />
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN (5 Cols): Tactile Architectural Perspective Frame */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             className="relative lg:col-span-5"
//           >
//             {/* The Main Architectural Frame */}
//             <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#B9935A]/30 bg-[#F2EDE4] shadow-2xl shadow-black/8">
//               <img
//                 src={hero_img}
//                 alt="Devprath Architectural Skyline"
//                 className="h-full w-full object-cover object-center filter brightness-[0.98] contrast-[1.05] transition-transform duration-1000 ease-out hover:scale-105"
//                 fetchPriority="high"
//                 decoding="async"
//               />

//               {/* Subtle Natural Daylight Vignette */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

//               {/* Light Glassmorphic Landmark Plaque (Locked to Devprath Style) */}
//               <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 rounded-lg border border-[#B9935A]/35 bg-[#FAF7F2]/95 px-4 py-3 shadow-md backdrop-blur-md">
//                 <span className="block font-body text-[11px] font-bold uppercase tracking-[0.18em] text-gold sm:text-xs">
//                   Flagship Development
//                 </span>
//                 <span className="block font-sans text-xs sm:text-sm font-bold text-text-dark mt-0.5">
//                   Mangalmurti Residency • Central Nagpur
//                 </span>
//               </div>
//             </div>

//             {/* Architectural Framing Crosshair Marks */}
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-gold/45"
//             />
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-gold/45"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* =========================================================================
//           FOOTER BAR: Clean Architectural Social Links Dock
//           ========================================================================= */}
//       <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16 pt-6">
//         <div className="flex items-center justify-between border-t border-[#B9935A]/20 pt-4">
//           <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-text-light">
//             Founded 28 November 2018 • Central Nagpur
//           </span>

//           <div className="bg-transparent opacity-85 hover:opacity-100 transition-opacity">
//             <SocialLinks links={ABOUT_SOCIAL_LINKS} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













// import React from "react";
// import { SocialLinks } from "@/components/ui/social-links";
// import hero_img from "../../assets/AboutUsImg/mmr5.png";

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

// export default function Hero() {
//   return (
//     <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-[var(--text-charcoal)]">

//       {/* Full-screen background image */}
//       <img
//         src={hero_img}
//         alt="skyline MMR"
//         className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
//         fetchpriority="high"
//         decoding="async"
//       />

//       {/* Warm charcoal wash across the whole image (no blue/navy) */}
//       {/* <div className="pointer-events-none absolute inset-0 -z-20 bg-[var(--text-charcoal)]/35" /> */}

//       {/* Stronger charcoal gradient at the bottom for text legibility */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[var(--text-charcoal)]/85 via-[var(--text-charcoal)]/30 to-transparent" />

//       {/* Content: centered horizontally and vertically */}
//       <div className="container-custom relative flex w-full items-center justify-left text-center">
//         <div className="flex max-w-3xl flex-col items-center">
//           {/* Gold rule */}
//           <div className="mb-1 h-px  w-36 bg-[var(--color-accent)]" />

//           <h1
//             style={{
//               color: "var(--color-bg)",
//               fontSize: "clamp(2.75rem, 7vw + 0.5rem, 6rem)",
//               lineHeight: 1.05,
//               fontWeight: 700,
//               letterSpacing: "-0.02em",
//             }}
//           >
//             About Us
//           </h1>

//           <p
//             className="mt-5 max-w-xl text-center"
//             style={{ color: "var(--color-accent-light)", fontWeight: 500 }}
//           >
//             Devprath Constructions LLP, Nagpur
//           </p>
//         </div>

//         {/* Social links, bottom-left on larger screens */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:bottom-20 sm:left-10 sm:translate-x-0">
//           <SocialLinks links={ABOUT_SOCIAL_LINKS} />
//         </div>
//       </div>
//     </section>
//   );
// }