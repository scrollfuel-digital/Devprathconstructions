import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Grand Living Lounge",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    size: "col-span-2 h-[320px] sm:h-[380px]",
  },
  {
    id: 2,
    title: "Modular Italian Kitchen",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 h-[180px] sm:h-[220px]",
  },
  {
    id: 3,
    title: "Panoramic Skyline View",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 h-[180px] sm:h-[220px]",
  },
];

const BADGES = [
  { id: 1, label: "RERA", value: "Approved Project" },
  { id: 2, label: "80%", value: "Open Green Space" },
  { id: 3, label: "Possession", value: "Dec '25" },
];

// Magical Depth-Blur Motion Variant (Emerging from Background, Zero Delay, Slow Pace)
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

export const FeaturedProject = memo(({ onBookConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[#EBE6DF] text-[#172235] relative overflow-hidden border-t border-[#B9935A]/20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Details (Magical Emergence) */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full my-auto space-y-6">
            {/* Tagline & Title Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block">
                Featured Project
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172235] tracking-tight mb-4 leading-tight font-heading">
                Mangalmurti <br />
                <span className="gold-gradient-text">Residency</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-light max-w-xl">
                Where Comfort Meets Contemporary Living
              </p>
            </motion.div>

            {/* Key Spec Badges */}
            <div className="flex flex-wrap items-center gap-4 py-2">
              {BADGES.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  variants={magicalBehindVariant(shouldReduceMotion)}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="bg-white/80 backdrop-blur-md border border-[#B9935A]/30 shadow-md px-5 py-3 rounded-xl"
                >
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#B9935A]">
                    {badge.label}
                  </span>
                  <span className="text-sm font-semibold text-[#172235]">
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
            >
              <motion.button
                onClick={onBookConsultation}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.03, transition: { duration: 0.2 } }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.97, transition: { duration: 0.1 } }
                }
                className="rounded-full bg-[#B9935A] px-9 py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent hover:shadow-2xl cursor-pointer flex items-center gap-3 w-fit shadow-md"
              >
                <span>Explore Project Details</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Multi-Photo Showcase Grid (Independent Per-Image Motion Viewport) */}
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

export default FeaturedProject;
