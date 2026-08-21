import React from "react";
import heroVideo from "../../../assets/videos/home_page_hero_video.mp4";
import mangalmurtiElevation from "../../../assets/Project/new-bg.jpeg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center pt-12">

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
          Thoughtfully Planned Residences. <br />
          <span className="gold-gradient-text">Crafted for Modern Living.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg text-gray-200 font-light max-w-2xl leading-relaxed mb-10">
          Developing signature residential spaces where architectural precision, superior quality, and modern comfort come together.
        </p>

        {/* Action CTA */}
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="/projects"
            className="rounded-full bg-[#B9935A] px-8 py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent hover:-translate-y-1 hover:shadow-2xl active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Floating Spotlight Card (Bottom Right Overlay) */}
      <div className="hidden lg:flex absolute bottom-10 right-10 z-20 max-w-md bg-white/90 backdrop-blur-xl border border-[#B9935A]/30 p-5 rounded-2xl shadow-2xl items-center gap-5 hover:-translate-y-1 transition-all duration-300">
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
          <img
            src={mangalmurtiElevation}
            alt="Mangalmurti Residency"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-1 left-1 bg-[#B9935A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
            Featured
          </span>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9935A]">
            Featured Residence
          </span>
          <h4 className="text-base font-bold text-[#172235] leading-tight">
            Mangalmurti Residency
          </h4>
          <p className="text-xs text-gray-600 mt-1">
            1 BHK &amp; 2 BHK Modern Apartments • Nagpur
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-semibold text-[#172235]">
              Starting at <strong className="text-[#B9935A]">₹42 Lakh Onwards</strong>
            </span>
            <a
              href="/projects"
              className="text-xs font-semibold text-[#B9935A] hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
