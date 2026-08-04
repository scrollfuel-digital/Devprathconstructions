import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroBgImg from '../../../assets/Project/new-bg.jpeg';
import Button from '../../../components/common/Button';
import { smoothEmergenceVariant } from '../../../utils/animations';

/**
 * HeroSection Component
 * Fullscreen luxury background header displaying the complete architectural elevation of Mangalmurti Residency
 * with responsive layout optimization for mobile and desktop views.
 */
export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className="relative min-h-screen h-screen overflow-hidden bg-[#121614] flex items-center"
      id="hero"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Mangalmurti Residency Architectural Exterior Elevation"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Responsive Gradient Overlay: Top-to-Bottom on Mobile, Right-to-Left on Desktop */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/40
            via-black/50
            to-black/80
            md:bg-gradient-to-l
            md:from-black/85
            md:via-black/55
            md:to-black/30
            z-10
            pointer-events-none
          "
        />
      </div>

      {/* Content Container Overlay */}
      <div
        className="
          relative z-20
          w-full max-w-[1440px]
          mx-auto
          px-5 sm:px-8 md:px-20
          pt-24 md:pt-16
          flex items-end md:items-center
          justify-center md:justify-end
          min-h-screen
          pb-12 md:pb-0
        "
      >
        <div
          className="
            max-w-2xl
            space-y-4 md:space-y-6
            flex flex-col
            items-center md:items-end
            text-center md:text-right
          "
        >
          {/* Tag Badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.1)}
            className="w-full flex justify-center md:justify-end"
          >
            <span className="font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#F0D060] bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B9935A]/50 inline-block mb-1 md:mb-2 shadow-lg">
              Architectural Landmark in Nagpur
            </span>
          </motion.div>

          {/* Main Heading H1 */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.25)}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient-text leading-tight text-center md:text-right w-full drop-shadow-md"
          >
            Mangalmurti Residency
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.4)}
            className="text-white/95 font-body text-sm sm:text-base md:text-lg max-w-lg leading-relaxed text-center md:text-right mx-auto md:ml-auto drop-shadow-sm"
          >
            Discover an architectural masterpiece in Nagpur. A harmonious blend of premium commercial spaces and ultra-luxury residential living designed for the elite.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={smoothEmergenceVariant(shouldReduceMotion, 0.55)}
            className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 pt-2 w-full"
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
