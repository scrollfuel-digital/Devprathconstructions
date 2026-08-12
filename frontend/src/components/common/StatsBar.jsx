import React from "react";
import { CONTACT_STATS } from "../../constants/contactData";
import AnimatedCounter from "./AnimatedCounter";

/**
 * Reusable StatsBar component for displaying company metrics across Home & Contact pages.
 * Ensures consistent design, responsive grid, typography, and animation with zero code duplication.
 */
export default function StatsBar({ className = "", isSection = false }) {
  const gridContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#B9935A]/20">
      {CONTACT_STATS.map((stat, idx) => (
        <div
          key={stat.label || idx}
          className="flex flex-col items-center justify-center text-center px-6 py-2"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#B9935A] tracking-tight mb-1 font-heading">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[2px] text-[#4E453A]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );

  if (isSection) {
    return (
      <section className={`w-full bg-[#F8F5EF] border-y border-[#B9935A]/20 py-4 md:py-5 relative z-20 ${className}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {gridContent}
        </div>
      </section>
    );
  }

  return <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{gridContent}</div>;
}
