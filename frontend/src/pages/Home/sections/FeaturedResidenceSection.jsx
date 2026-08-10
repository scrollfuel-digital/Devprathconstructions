import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURED_PROJECT_BADGES } from "../../../constants/homeData";
import ketchen from "../../../assets/home page/kitchen.png";
import grandLivingLounge from "../../../assets/home page/grand_living_lounge.png";
import panoramicSkylineView from "../../../assets/home page/panoramic_skyline_view.png";

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Grand Living Lounge",
    src: grandLivingLounge,
    size: "col-span-2 h-[320px] sm:h-[380px]",
  },
  {
    id: 2,
    title: "Modular Italian Kitchen",
    src: ketchen,
    size: "col-span-1 h-[180px] sm:h-[220px]",
  },
  {
    id: 3,
    title: "Panoramic Skyline View",
    src: panoramicSkylineView,
    size: "col-span-1 h-[180px] sm:h-[220px]",
  },
];

const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.88,
    y: shouldReduceMotion ? 0 : 35,
    filter: shouldReduceMotion ? "none" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      delay: 0,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

export const FeaturedProjectSection = memo(({ onBookConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[#EBE6DF] text-black relative overflow-hidden border-t border-[#B9935A]/20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Details */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full my-auto space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-2 block font-sans">
                Featured Project
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-3 leading-tight font-heading">
                Mangalmurti <br />
                <span className="gold-gradient-text">Residency</span>
              </h2>
              <p className="text-sm sm:text-base text-[#785926] font-semibold uppercase tracking-wider mb-4">
                Where Comfort Meets Contemporary Living
              </p>
              <p className="text-sm sm:text-base text-gray-800 font-light leading-relaxed max-w-xl">
                Mangalmurti Residency is a premium residential project by Devprath Constructions LLP offering thoughtfully designed homes for modern families. Crafted with contemporary architecture and efficient layouts, every apartment provides spacious living areas, excellent natural light, ventilation, and premium finishes.
              </p>
            </motion.div>

            {/* Key Spec Badges — Clean Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 sm:flex sm:flex-wrap items-stretch sm:items-center py-2 w-full">
              {FEATURED_PROJECT_BADGES.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  variants={magicalBehindVariant(shouldReduceMotion)}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="bg-white/90 backdrop-blur-md border border-[#B9935A]/30 shadow-md p-2.5 sm:px-5 sm:py-3.5 rounded-xl text-center sm:text-left flex flex-col justify-center transition-all duration-300 hover:border-[#B9935A]"
                >
                  <span className="block text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#B9935A] leading-tight mb-1">
                    {badge.label}
                  </span>
                  <span className="text-[11px] sm:text-sm font-bold text-black leading-snug">
                    {badge.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Gold CTA Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="pt-2"
            >
              <a
                href="/projects"
                className="rounded-full bg-[#B9935A] px-7 sm:px-9 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent hover:shadow-2xl cursor-pointer flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 w-full sm:w-fit shadow-md active:scale-95"
              >
                <span>Explore Project Details</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Multi-Photo Showcase Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-center">
            {GALLERY_IMAGES.map((img) => (
              <motion.div
                key={img.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={magicalBehindVariant(shouldReduceMotion)}
                style={{ willChange: "transform, opacity, filter" }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.03, transition: { duration: 0.3 } }
                }
                className={`relative overflow-hidden rounded-2xl border border-[#B9935A]/20 shadow-xl group cursor-pointer ${img.size}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-gray-200">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
});

export default FeaturedProjectSection;


