import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import mangalmurtiImg from '../../../assets/home page/who_are_we.png';


const PILLARS = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "Crafting well-planned residential communities in Nagpur for modern family living.",
    icon: "visibility",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Delivering durable, well-ventilated homes with quality construction and on-time completion.",
    icon: "flag",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Uncompromising customer trust, ethical transparency, and 100% RERA compliance.",
    icon: "verified",
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

export const CompanyLegacySection = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column - High End Image Frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            variants={magicalBehindVariant(shouldReduceMotion)}
            style={{ willChange: "transform, opacity, filter" }}
            className="lg:col-span-6 relative flex flex-col justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#B9935A]/30 group">
              <img
                src={mangalmurtiImg}
                alt="Devprath Architectural Excellence"
                className="w-full h-[460px] sm:h-[530px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#B9935A]/30 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#B9935A]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#B9935A] text-2xl">
                      domain
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#172235]">
                      Precision Structural Engineering
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      Zero compromise on material strength and architectural perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-2.5 inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172235] leading-tight mb-3 font-heading">
                Building Trust Through <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Excellence</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                At Devprath Constructions LLP, we build residential spaces in Nagpur combining quality construction, structural durability, and lasting comfort for families.
              </p>
            </motion.div>

            {/* Key Pillars List */}
            <div className="space-y-3">
              {PILLARS.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.05 }}
                  variants={magicalBehindVariant(shouldReduceMotion)}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/85 border border-[#B9935A]/20 hover:border-[#B9935A]/60 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B9935A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <span className="material-symbols-outlined text-xl">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#172235] font-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-0.5 font-light">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default CompanyLegacySection;
