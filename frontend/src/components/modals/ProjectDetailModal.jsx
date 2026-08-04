import React, { useEffect } from 'react';

/**
 * ProjectDetailModal Component
 * Renders a vertical rectangular popup card (matching the exact shape and layout of the scrolling marquee cards).
 * Includes top-right 'X' close button, backdrop overlay, ESC key listener, and full project description.
 */
export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Vertical Rectangular Card Popup */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[360px] sm:w-[420px] bg-white/98 rounded-xl border border-[#B9935A]/35 p-4 sm:p-5 shadow-[0_20px_50px_rgba(185,147,90,0.25)] flex flex-col justify-between max-h-[90vh] overflow-y-auto"
      >
        {/* Image Container (Matching Card Proportions) */}
        <div className="relative h-[240px] sm:h-[260px] w-full rounded-lg overflow-hidden mb-4 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75" />

          {/* Top-Left Tag Badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#785926] font-label-caps text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-[#B9935A]/30 shadow-sm">
            {project.tag}
          </span>

          {/* Top-Right 'X' Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#B9935A] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95 border border-white/20"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {/* Bottom Location Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs font-medium drop-shadow-sm">
            <span className="material-symbols-outlined text-[18px] text-[#F0D060]">location_on</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Details Container */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B9935A]">
              Devparth Construction
            </span>
            <h3 className="font-heading font-bold text-xl text-[#1B1C1C] mt-1 leading-snug">
              {project.shortTitle}
            </h3>
            <p className="font-body text-xs text-[#4E453A] mt-2 leading-relaxed">
              {project.details}
            </p>
          </div>

          <div className="pt-3 border-t border-[#B9935A]/20 flex items-center justify-between text-xs">
            <span className="font-medium bg-[#B9935A]/10 text-[#785926] px-3 py-1 rounded-md border border-[#B9935A]/20">
              {project.type}
            </span>
            <button
              onClick={onClose}
              className="rounded-full bg-[#B9935A] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
