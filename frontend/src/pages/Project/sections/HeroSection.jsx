import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroBgImg from '../../../assets/Project/mangalmurti_hero_wide.png';
import Button from '../../../components/common/Button';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * HeroSection Component
 * Fullscreen luxury background header displaying the complete architectural elevation of Mangalmurti Residency without cropping.
 */
export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#121614]" id="hero">
      {/* Background Image Container with Full Aspect Fitting */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#121614]">
        <img
          alt="Mangalmurti Residency Architectural Exterior Elevation"
          className="w-full h-full object-contain md:object-cover object-center"
          src={heroBgImg}
        />
        {/* Subtle Dark Vignette & Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30 z-10 pointer-events-none" />
      </div>

      {/* Hero Right-Aligned Content Overlay */}
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
            <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#F0D060] bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B9935A]/50 inline-block mb-4 shadow-lg">
              Architectural Landmark in Nagpur
            </span>
          </motion.div>

          {/* Main Heading H1 */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.25)}
            className="font-heading text-4xl md:text-6xl font-bold gold-gradient-text mb-6 leading-tight text-right w-full drop-shadow-md"
          >
            Mangalmurti Residency
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
            className="text-white/95 font-body text-base md:text-lg max-w-lg leading-relaxed text-right ml-auto drop-shadow-sm"
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
