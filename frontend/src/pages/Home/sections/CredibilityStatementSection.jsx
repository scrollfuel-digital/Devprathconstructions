import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Section 2: Credibility / Stats
 * Editorial typography presentation using thin separators on warm ivory background.
 * No rounded cards, no shadows, no icons.
 */
export const CredibilityStatementSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      value: "2018",
      label: "Founded",
      detail: "Established 28 November 2018",
    },
    {
      value: "20+",
      label: "Years of Professional Synergy",
      detail: "Partnership of Hemal Nadiyana & Sunil Patil",
    },
    {
      value: "09",
      label: "Developments",
      detail: "Completed across central Nagpur",
    },
    {
      value: "160+",
      label: "Happy Families",
      detail: "Homeowners across delivered landmarks",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#B9935A]/20">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12"
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-start relative ${
                idx % 2 !== 0 ? "border-l border-[#1F1E1C]/10 pl-5 sm:pl-8 lg:pl-0" : ""
              } ${
                idx !== 0 ? "lg:border-l lg:border-[#1F1E1C]/10 lg:pl-10" : ""
              }`}
            >
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1F1E1C] tracking-tight leading-none mb-3">
                {item.value}
              </span>
              <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B9935A] mb-1.5">
                {item.label}
              </span>
              <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityStatementSection;
