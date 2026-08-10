import React from "react";

export default function GalleryHero() {
  return (
    <div className="pt-28 pb-4 sm:pt-36 sm:pb-6 bg-[#f8f5ef] relative overflow-hidden">
      {/* Decorative Subtle Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B9935A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B9935A]" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] block font-sans">
              FEATURED HIGHLIGHTS
            </span>
            <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B9935A]" />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1913] font-heading tracking-wide">
            Sample Flat &amp; <span className="gold-gradient-text">Interior Showcase</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
