import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroBgImg from '../../../assets/Project/mangalmurti_hero_wide.png';
import Button from '../../../components/common/Button';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * HeroSection Component
 * Fullscreen luxury background header with right-aligned content and staggered emergence animations.
 */
export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="relative h-screen min-h-[750px] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-10" />
        <img
          alt="Mangalmurti Residency Exterior"
          className="w-full h-full object-cover object-top"
          src={heroBgImg}
        />
      </div>

      <div className="relative z-20 px-6 md:px-20 max-w-[1440px] mx-auto w-full pt-16 flex justify-end">
        <div className="max-w-2xl space-y-6 flex flex-col items-end text-right">
          {/* Tag Badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
            className="w-full flex justify-end"
          >
            <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#F0D060] bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-[#B9935A]/40 inline-block mb-4">
              Architectural Landmark in Nagpur
            </span>
          </motion.div>

          {/* Heading H1 */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.25)}
            className="font-heading text-4xl md:text-6xl font-bold gold-gradient-text mb-6 leading-tight text-right w-full"
          >
            Mangalmurti Residency
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
            className="text-white/90 font-body text-base md:text-lg max-w-lg leading-relaxed text-right ml-auto"
          >
            Discover an architectural masterpiece in Nagpur. A harmonious blend of premium commercial spaces and ultra-luxury residential living designed for the elite.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.55)}
            className="flex flex-wrap justify-end gap-4 pt-2 w-full"
          >
            <Button href="#phases" variant="primary">
              Explore Project
            </Button>
            <Button href="/MANGALMURTI-BROCHURE.pdf" download="MANGALMURTI-BROCHURE.pdf" variant="secondary">
              Download Brochure
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
