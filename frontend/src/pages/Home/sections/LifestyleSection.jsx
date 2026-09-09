// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import clubhouseImg from "../../../assets/Township Features/Clubhouse_view.jpg";
// import poolDeckImg from "../../../assets/Township Features/Pool_deck (1).jpg";
// import landscapeImg from "../../../assets/Township Features/Landscaped Vicinity.png";
// import Button from "../../../components/common/Button";

// /**
//  * Section 6: Designed Around Life
//  * Visual storytelling section focusing on:
//  * LIGHT · AIR · SPACE · GREENERY · COMMUNITY.
//  * Warm architectural ivory tone with asymmetric photographic mosaic.
//  * CTA: "DISCOVER AMENITIES →"
//  */
export const LifestyleSection = () => {
  return <></>;
}
//   const shouldReduceMotion = useReducedMotion();

//   const lifestylePillars = [
//     "LIGHT",
//     "AIR",
//     "SPACE",
//     "GREENERY",
//     "COMMUNITY",
//   ];

//   return (
//     <section className="py-24 sm:py-32 bg-[#FAF7F2] overflow-hidden border-t border-[#B9935A]/20">
//       <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
//         {/* Header Block */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
//           <div className="max-w-2xl">
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
//               Lifestyle &amp; Living
//             </span>
//             <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] tracking-tight leading-tight">
//               Designed Around <span className="italic font-light text-[#8F6E3B]">Life.</span>
//             </h2>
//             <p className="font-body text-base sm:text-lg text-[#6D675E] font-light mt-4 leading-relaxed">
//               Every square foot is conceived around the natural elements — wide landscaped avenues, sunlit courtyards, and tranquil social sanctuaries.
//             </p>
//           </div>

//           {/* Editorial Pillar Concepts */}
//           <div className="flex flex-wrap items-center gap-3 sm:gap-5 border-t lg:border-t-0 lg:border-l border-[#1F1E1C]/15 pt-4 lg:pt-0 lg:pl-10">
//             {lifestylePillars.map((pillar, pIdx) => (
//               <span
//                 key={pillar}
//                 className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#1F1E1C] flex items-center gap-3"
//               >
//                 {pillar}
//                 {pIdx !== lifestylePillars.length - 1 && (
//                   <span className="text-[#B9935A]">·</span>
//                 )}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Expansive Architectural Photography Mosaic */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-14">
          
//           {/* Main Large Lifestyle Frame (7 cols) */}
//           <motion.div
//             initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
//             className="md:col-span-7 relative group overflow-hidden min-h-[380px] sm:min-h-[480px]"
//           >
//             <img
//               src={clubhouseImg}
//               alt="Clubhouse and Open Space"
//               className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1C]/75 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6 text-white">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D1B481] block mb-1">
//                 Community Sanctuary
//               </span>
//               <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
//                 Clubhouse &amp; Central Landscaped Lawn
//               </h3>
//             </div>
//           </motion.div>

//           {/* Two Stacked Lifestyle Renders (5 cols) */}
//           <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8">
//             <motion.div
//               initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className="relative group overflow-hidden h-[220px] sm:h-[240px]"
//             >
//               <img
//                 src={poolDeckImg}
//                 alt="Swimming Pool and Deck"
//                 className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1C]/70 via-transparent to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D1B481] block">
//                   Health &amp; Wellness
//                 </span>
//                 <h4 className="font-display text-xl font-normal text-white">
//                   Pool Deck &amp; Open Waters
//                 </h4>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//               className="relative group overflow-hidden h-[220px] sm:h-[240px]"
//             >
//               <img
//                 src={landscapeImg}
//                 alt="Landscaped Vicinity"
//                 className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1C]/70 via-transparent to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D1B481] block">
//                   Serenity &amp; Recreation
//                 </span>
//                 <h4 className="font-display text-xl font-normal text-white">
//                   Landscaped Vicinity &amp; Walkways
//                 </h4>
//               </div>
//             </motion.div>
//           </div>

//         </div>

//         {/* Architectural CTA */}
//         <div className="pt-6 border-t border-[#1F1E1C]/15 flex justify-between items-center">
//           <Button to="/project#amenities" variant="ghost">
//             Discover Amenities
//           </Button>
//           <span className="text-xs text-[#6D675E] font-light hidden sm:inline">
//             Swimming Pool · Gymnasium · Children's Play Area · Gated Security
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// };

export default LifestyleSection;
 