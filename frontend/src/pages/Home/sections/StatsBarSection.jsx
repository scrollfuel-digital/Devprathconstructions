import React from "react";
import { STATS_DATA } from "../../../constants/homeData";

export const StatsBarSection = () => {
  return (
    <section className="w-full bg-[#F8F5EF] border-y border-[#B9935A]/20 py-10 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#B9935A]/20">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0"
            >
              <span className="text-3xl sm:text-5xl font-extrabold text-[#B9935A] tracking-tight mb-1 font-heading">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[2px] text-[#172235]/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBarSection;
