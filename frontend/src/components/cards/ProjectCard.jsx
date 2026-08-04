import React from 'react';

/**
 * ProjectCard Component
 * Renders an individual project card for the marquee scroll section.
 * Clicking the card opens the ProjectDetailModal popup.
 */
export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[340px] md:w-[380px] flex-shrink-0 group cursor-pointer select-none"
    >
      <div className="h-full rounded-xl bg-white/95 backdrop-blur-md border border-[#B9935A]/25 p-4 shadow-[0_10px_30px_rgba(185,147,90,0.06)] hover:shadow-[0_20px_40px_rgba(185,147,90,0.2)] hover:border-[#B9935A]/70 transition-all duration-500 flex flex-col justify-between">
        {/* Image Container */}
        <div className="relative h-[240px] w-full rounded-lg overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#785926] font-label-caps text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-[#B9935A]/30">
            {project.tag}
          </span>

          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs font-medium drop-shadow-sm">
            <span className="material-symbols-outlined text-[18px] text-[#F0D060]">location_on</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Details Container */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B9935A]">
              Devparth Construction
            </span>
            <h3 className="font-heading font-bold text-lg text-[#1B1C1C] mt-1 group-hover:text-[#B9935A] transition-colors leading-snug">
              {project.shortTitle}
            </h3>
            <p className="font-body text-xs text-[#666666] mt-2 line-clamp-2 leading-relaxed">
              {project.details}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#B9935A]/15 flex items-center justify-between text-xs text-[#4E453A]">
            <span className="font-medium bg-[#B9935A]/10 text-[#785926] px-2.5 py-1 rounded-md">
              {project.type}
            </span>
            <span className="font-label-caps font-semibold text-[#B9935A] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[11px]">
              <span>View Details</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
