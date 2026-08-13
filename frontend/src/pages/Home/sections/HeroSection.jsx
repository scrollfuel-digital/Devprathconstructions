import React from "react";
import heroVideo from "../../../assets/videos/home_page_hero_video.mp4";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center pt-12">
        {/* Category Tagline */}
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block">
          Devprath Constructions LLP
        </span>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          Build Your Dream. <br />
          <span className="gold-gradient-text">Live Your Legacy.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-gray-200 font-light max-w-2xl leading-relaxed mb-10">
          Where thoughtful planning, quality construction, and modern design come together to create homes that inspire comfortable living.
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
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
            3 BHK &amp; 4 BHK Modern Apartments • Nagpur
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-semibold text-[#172235]">
              Starting at <strong className="text-[#B9935A]">₹1.2 Cr*</strong>
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
