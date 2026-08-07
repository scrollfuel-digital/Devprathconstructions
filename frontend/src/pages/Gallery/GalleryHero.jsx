import React from "react";
import { motion } from "framer-motion";

export default function GalleryHero({ motionProps }) {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-[#f8f5ef] relative overflow-hidden">
      {/* Decorative Subtle Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B9935A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Subheading / Badge matching About Us style (Image 2) */}
          <motion.span
            className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block"
            {...motionProps}
          >
            DEVPRATH CONSTRUCTIONS GALLERY
          </motion.span>

          {/* Main Title with Gold Accent Gradient */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1913] leading-tight mb-5 font-heading"
            {...motionProps}
          >
            Capturing Moments &{" "}
            <span className="gold-gradient-text">Architectural Milestones</span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
            {...motionProps}
          >
            Step inside the visual world of Devprath Constructions — exploring sample flat unveilings, auspicious site ceremonies, and our team celebrations in Nagpur.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
