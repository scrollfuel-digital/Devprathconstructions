import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ADVANTAGES = [
  {
    id: 1,
    icon: "schedule",
    title: "Timely Delivery",
    description:
      "Committing to strict schedules and completing milestone deliveries on or ahead of time without compromising quality.",
  },
  {
    id: 2,
    icon: "workspace_premium",
    title: "Premium Quality",
    description:
      "Sourcing top-tier construction materials and employing cutting-edge structural engineering techniques.",
  },
  {
    id: 3,
    icon: "near_me",
    title: "Strategic Locations",
    description:
      "Handpicking prime land parcels that offer excellent connectivity, high capital appreciation, and tranquil surroundings.",
  },
  {
    id: 4,
    icon: "gavel",
    title: "Clear Title & RERA",
    description:
      "100% legal compliance, transparent documentation, and official RERA certification for total peace of mind.",
  },
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

export const DevprathAdvantage = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[#F8F5EF] border-t border-[#B9935A]/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Block (Magical Emergence) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -30px 0px" }}
          variants={magicalBehindVariant(shouldReduceMotion)}
          style={{ willChange: "transform, opacity, filter" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-4 font-heading">
            Defining the <span className="gold-gradient-text">Gold Standard</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Every Devprath project embodies four non-negotiable pillars of architectural and operational excellence.
          </p>
        </motion.div>

        {/* 4 Card Responsive Grid (Strict Independent Per-Card Viewport Observer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25, margin: "0px 0px -40px 0px" }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.2 } }
              }
              className="bg-white p-8 rounded-2xl border border-[#B9935A]/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5EF] border border-[#B9935A]/30 flex items-center justify-center text-[#B9935A] mb-6 group-hover:bg-[#B9935A] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#172235] mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default DevprathAdvantage;
