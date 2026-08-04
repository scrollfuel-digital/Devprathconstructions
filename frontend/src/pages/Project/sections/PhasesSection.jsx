import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECT_OVERVIEW, PHASES_DATA, PHASE_HIGHLIGHTS } from '../../../constants/phasesData';
import heroImg from '../../../assets/AboutUsImg/firstimg.png';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * PhasesSection Component
 * Center-aligned header, 2-column layout (left: hover-expandable accordion phase boxes, right: clean architectural image showcase),
 * followed by township feature highlights.
 */
export default function PhasesSection() {
  const [activePhaseId, setActivePhaseId] = useState('phase2_3');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F5EF] via-[#FCF9F4] to-[#F8F5EF] relative overflow-hidden border-y border-[#B9935A]/20" id="phases">
      <div className="relative z-10 px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Top Header - Centered */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
          >
            <span className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1.5 rounded-full border border-[#B9935A]/30 uppercase tracking-[0.2em] inline-block mb-3">
              {PROJECT_OVERVIEW.welcomeTag}
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.2)}
            className="font-heading text-3xl md:text-5xl font-bold text-[#1B1C1C] leading-tight"
          >
            {PROJECT_OVERVIEW.title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.3)}
            className="text-[#B9935A] font-semibold text-sm md:text-base tracking-wider uppercase mt-1 mb-4"
          >
            {PROJECT_OVERVIEW.subtitle}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
            className="text-[#4E453A] font-body text-base md:text-lg leading-relaxed"
          >
            {PROJECT_OVERVIEW.description}
          </motion.p>
        </div>

        {/* Main Grid Layout: Left 2 Accordion Phase Boxes, Right Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Hover-Expandable Accordion Phase Boxes */}
          <div className="lg:col-span-7 space-y-4">
            {PHASES_DATA.map((phase, idx) => {
              const isActive = activePhaseId === phase.id;

              return (
                <motion.div
                  key={phase.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={smoothEmergenceVariant(shouldReduceMotion, 0.3 + idx * 0.15)}
                  onMouseEnter={() => setActivePhaseId(phase.id)}
                  onClick={() => setActivePhaseId(phase.id)}
                  className={`rounded-2xl p-5 md:p-6 transition-colors transition-shadow duration-300 cursor-pointer border overflow-hidden ${
                    isActive
                      ? 'bg-white border-[#B9935A] shadow-[0_12px_30px_rgba(185,147,90,0.15)] ring-1 ring-[#B9935A]/40'
                      : 'bg-white/80 backdrop-blur-md border-[#B9935A]/25 hover:border-[#B9935A]/60 hover:bg-white/95 shadow-sm'
                  }`}
                >
                  {/* Card Header (Headline) */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-xl transition-colors duration-300 ${
                          isActive
                            ? 'bg-[#B9935A] text-white shadow-md'
                            : 'bg-[#B9935A]/15 text-[#B9935A]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-xl md:text-2xl">{phase.icon}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B9935A]/15 text-[#785926] px-2.5 py-0.5 rounded-full border border-[#B9935A]/30 inline-block mb-1">
                          {phase.badge}
                        </span>
                        <h4 className="font-heading font-bold text-base md:text-lg text-[#1B1C1C] leading-snug">
                          {phase.title}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex items-center gap-3">
                      <div>
                        <span className="font-heading font-bold text-xl md:text-2xl text-[#B9935A] block leading-none">
                          {phase.stat}
                        </span>
                        <span className="font-label-caps text-[9px] uppercase tracking-wider text-[#666666]">
                          {phase.statLabel}
                        </span>
                      </div>
                      <span
                        className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-[#B9935A]' : ''
                        }`}
                      >
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  {/* Smooth Animated Body Container */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-[#B9935A]/20">
                      <p className="text-[#4E453A] text-sm md:text-base leading-relaxed mb-5">
                        {phase.fullDescription}
                      </p>

                      <h5 className="text-xs font-bold uppercase tracking-widest text-[#B9935A] mb-3">
                        Key Phase Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2.5 bg-[#F8F5EF] p-2.5 rounded-lg border border-[#B9935A]/20"
                          >
                            <span
                              className="material-symbols-outlined text-[#B9935A] text-lg shrink-0"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              check_circle
                            </span>
                            <span className="text-xs font-medium text-[#1B1C1C] leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Clean Architectural Showcase Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.35)}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(185,147,90,0.15)] border border-[#B9935A]/30">
              <img
                alt="Mangalmurti Residency Phase Architecture"
                className="w-full h-[450px] md:h-[500px] object-cover"
                src={heroImg}
              />
            </div>
          </motion.div>
        </div>

        {/* 8 Comprehensive Township Amenities Highlights Grid */}
        <div className="mt-16 pt-16 border-t border-[#B9935A]/25">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
              className="font-label-caps text-xs font-semibold text-[#785926] bg-[#B9935A]/10 px-3.5 py-1 rounded-full border border-[#B9935A]/30 uppercase tracking-widest inline-block"
            >
              Elevated Living Experience
            </motion.span>

            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={smoothEmergenceVariant(shouldReduceMotion, 0.2)}
              className="font-heading text-2xl md:text-4xl font-bold text-[#1B1C1C] mt-3"
            >
              Township Features &amp; World-Class Amenities
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASE_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={smoothEmergenceVariant(shouldReduceMotion, 0.1 * idx)}
                className="p-5 rounded-xl bg-white/90 backdrop-blur-md border border-[#B9935A]/25 hover:border-[#B9935A] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#B9935A]/15 text-[#B9935A] flex items-center justify-center mb-4 group-hover:bg-[#B9935A] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#1B1C1C] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#B9935A]/20 flex items-center gap-1.5 text-[11px] font-semibold text-[#B9935A]">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span>Included in Township</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
