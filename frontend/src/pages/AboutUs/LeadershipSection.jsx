import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import leaderSunil from "../../assets/AboutUsImg/sunil.jpeg";
import leaderHemal from "../../assets/AboutUsImg/hemal.jpg";
import { magicalBehindVariant } from "../../constants/magicalBehindVariant";

const LEADERS = [
   {
    id: "hemal-nadiyana",
    name: "Mr. Hemal H. Nadiyana",
    role: "DIRECTOR & CO-FOUNDER",
    image: leaderHemal,
    quote: "We don't just build apartments; we craft spaces where families thrive.",
    bio: "Fostering architectural creativity, customer-first service, and modern living space design across all our premier residential developments."
    },
     {
    id: "sunil-patil",
    name: "Dr. Sunil N. Patil",
    role: "DIRECTOR & CO-FOUNDER",
    image: leaderSunil,
    quote: "Excellence is never an accident; it is always the result of high intention.",
    bio: "Championing superior structural strength, high material standards, and strategic growth. Committed to consistently delivering quality homes that stand the test of time"
    },
];

export default function LeadershipSection() {
  const shouldReduceMotion = useReducedMotion();
  const variants = magicalBehindVariant(shouldReduceMotion);
  const [expandedLeader, setExpandedLeader] = useState(null);

  const toggleLeader = (id) => {
    setExpandedLeader((prev) => (prev === id ? null : id));
  };

  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.15 },
    variants,
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-[#B9935A]/20">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* =========================================================================
            TOP SPLIT HEADER (Left Title, Middle Space, Right Editorial Body)
            ========================================================================= */}
        <motion.div {...motionProps} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          {/* Left Title */}
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal leading-[1.15] text-[#1F1E1C] tracking-tight">
              Two Founders. One Vision.
              <span className="block text-gold font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal mt-1">
                Endless Possibilities.
              </span>
            </h2>
          </div>

          {/* Right Narrative */}
          <div className="max-w-md lg:text-left">
            <p
              className="font-sans text-xs sm:text-sm font-bold leading-relaxed !text-[#6D675E] text-pretty"
              style={{ color: "#6D675E" }}
            >
                Meet the two visionaries whose shared passion, leadership, and dedication continue to shape our company's success.
            </p>
          </div>
        </motion.div>

        {/* Clean Divider Line */}
        <div className="w-full h-px bg-[#B9935A]/25 mt-8 sm:mt-10 mb-14 sm:mb-20 lg:mb-24" />

        {/* =========================================================================
            LEADER 1: Left Image (with Right & Bottom Grey Strip) | Right Info
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-20 sm:mb-28 lg:mb-32">
          
          {/* Image on Left with Right & Bottom Accent Strip */}
          <motion.div {...motionProps} className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]">
              {/* Backing Grey/Sand Strip (Projecting to the Right & Bottom) */}
              <div
                className="absolute top-4 -right-4 -bottom-4 left-4 sm:top-6 sm:-right-6 sm:-bottom-6 sm:left-6 bg-[#EBE5DC] border border-[#B9935A]/25 -z-0"
                aria-hidden="true"
              />

              {/* Foreground Image */}
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2] shadow-sm">
                <img
                  src={LEADERS[0].image}
                  alt={LEADERS[0].name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Info on Right */}
          <motion.div {...motionProps} className="lg:col-span-6 flex flex-col justify-center">
            {/* Role Eyebrow */}
            <span className="font-body text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
              {LEADERS[0].role}
            </span>

            {/* Subtle Divider */}
            <div className="w-16 h-px bg-[#B9935A]/40 mb-4 sm:mb-5" />

            {/* Founder Name */}
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#1F1E1C] font-normal tracking-tight mb-5 leading-tight">
              {LEADERS[0].name}
            </h3>

            {/* Direct Quote */}
            <blockquote className="mb-5 sm:mb-6">
              <p
                className="font-serif italic text-base sm:text-lg lg:text-xl leading-relaxed !text-[#1F1E1C]/90 text-pretty"
                style={{ color: "#1F1E1C" }}
              >
                &ldquo;{LEADERS[0].quote}&rdquo;
              </p>
            </blockquote>

            {/* Bio Paragraph */}
            <p
              className="font-sans text-sm text-justify font-bold leading-relaxed !text-[#6D675E] text-pretty mb-6"
              style={{ color: "#6D675E" }}
            >
              {LEADERS[0].bio}
            </p>

            {/* Expandable Authentic Milestones
            {expandedLeader === LEADERS[0].id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="font-sans text-xs sm:text-sm font-semibold leading-relaxed border-l-2 border-[#B9935A]/40 pl-4 py-1 mb-6 text-justify !text-[#6D675E]"
                style={{ color: "#6D675E" }}
              >
                {LEADERS[0].extendedDetails}
              </motion.p>
            )}

            {/* Read More Link / Button */}
            {/* <div>
              <button
                type="button"
                onClick={() => toggleLeader(LEADERS[0].id)}
                className="group inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-bold tracking-wider text-[#1F1E1C] hover:text-gold transition-colors cursor-pointer"
              >
                <span>{expandedLeader === LEADERS[0].id ? "Show Less" : "Read More"}</span>
                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1.5 text-gold">
                  &rarr;
                </span>
              </button>
            </div> */}
          </motion.div>
        </div>

        {/* =========================================================================
            LEADER 2: Left Info | Right Image (with Left & Bottom Grey Strip - Vice Versa)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Info on Left (order-last lg:order-first on desktop) */}
          <motion.div {...motionProps} className="order-last lg:order-first lg:col-span-6 flex flex-col justify-center">
            {/* Role Eyebrow */}
            <span className="font-body text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
              {LEADERS[1].role}
            </span>

            {/* Subtle Divider */}
            <div className="w-16 h-px bg-[#B9935A]/40 mb-4 sm:mb-5" />

            {/* Founder Name */}
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#1F1E1C] font-normal tracking-tight mb-5 leading-tight">
              {LEADERS[1].name}
            </h3>

            {/* Direct Quote */}
            <blockquote className="mb-5 sm:mb-6">
              <p
                className="font-serif italic text-base sm:text-lg lg:text-xl leading-relaxed !text-[#1F1E1C]/90 text-pretty"
                style={{ color: "#1F1E1C" }}
              >
                &ldquo;{LEADERS[1].quote}&rdquo;
              </p>
            </blockquote>

            {/* Bio Paragraph */}
            <p
              className="font-sans text-sm text-justify font-bold leading-relaxed !text-[#6D675E] text-pretty mb-6"
              style={{ color: "#6D675E" }}
            >
              {LEADERS[1].bio}
            </p>

            {/* Expandable Authentic Milestones */}
            {/* {expandedLeader === LEADERS[1].id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="font-sans text-xs sm:text-sm font-semibold leading-relaxed border-l-2 border-[#B9935A]/40 pl-4 py-1 mb-6 text-justify !text-[#6D675E]"
                style={{ color: "#6D675E" }}
              >
                {LEADERS[1].extendedDetails}
              </motion.p>
            )} */}

            {/* Read More Link / Button */}
            {/* <div>
              <button
                type="button"
                onClick={() => toggleLeader(LEADERS[1].id)}
                className="group inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-bold tracking-wider text-[#1F1E1C] hover:text-gold transition-colors cursor-pointer"
              >
                <span>{expandedLeader === LEADERS[1].id ? "Show Less" : "Read More"}</span>
                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1.5 text-gold">
                  &rarr;
                </span>
              </button>
            </div> */}
          </motion.div>

          {/* Image on Right with Left & Bottom Accent Strip (Vice Versa) */}
          <motion.div {...motionProps} className="order-first lg:order-last lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]">
              {/* Backing Grey/Sand Strip (Projecting to the Left & Bottom) */}
              <div
                className="absolute top-4 -left-4 -bottom-4 right-4 sm:top-6 sm:-left-6 sm:-bottom-6 sm:right-6 bg-[#EBE5DC] border border-[#B9935A]/25 -z-0"
                aria-hidden="true"
              />

              {/* Foreground Image */}
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2] shadow-sm">
                <img
                  src={LEADERS[1].image}
                  alt={LEADERS[1].name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}