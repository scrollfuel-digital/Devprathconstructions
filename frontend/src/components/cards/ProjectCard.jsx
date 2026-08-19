import React from 'react';

/**
 * ProjectCard Component
 * Renders an individual project card for the marquee scroll section.
 * Displays project image, title, location, description, and a centered 'View Details' button.
 */
export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[320px] md:w-[360px] flex-shrink-0 group cursor-pointer select-none"
    >
      <div className="h-full rounded-2xl bg-white/95 backdrop-blur-md border border-[#c9a063]/30 p-4 sm:p-5 shadow-[0_8px_24px_rgba(23,34,53,0.06)] hover:shadow-[0_16px_36px_rgba(201,160,99,0.2)] hover:border-[#c9a063] transition-all duration-400 flex flex-col justify-between">
        {/* Project Image */}
        <div className="relative h-[210px] w-full rounded-xl overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.shortTitle || project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        </div>

        {/* Project Name, Location & Description */}
        <div className="text-center px-1 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-bold text-lg text-[#172235] group-hover:text-[#c9a063] transition-colors leading-snug">
              {project.shortTitle || project.title}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 font-medium mt-1.5 mb-2.5">
              <span className="material-symbols-outlined text-[17px] text-[#c9a063]">location_on</span>
              <span>{project.location}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-light line-clamp-2">
              {project.details}
            </p>
          </div>
        </div>

        {/* Centered View Details Action */}
        <div className="mt-4 pt-3 border-t border-[#c9a063]/15 flex items-center justify-center">
          <div className="w-full py-2.5 px-4 rounded-xl gold-btn-gradient text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md transition-all duration-300">
            <span>View Details</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
}
