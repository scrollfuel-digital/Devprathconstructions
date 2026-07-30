import React from "react";

const STATS_DATA = [
  {
    id: 1,
    number: "12+",
    label: "Years of Construction Excellence",
  },
  {
    id: 2,
    number: "1000+",
    label: "Happy Families",
  },
  {
    id: 3,
    number: "20+",
    label: "Completed Projects",
  },
  {
    id: 4,
    number: "2.1M",
    label: "Sq. Ft. Delivered",
  },
];

export const StatsBar = () => {
  return (
    <section className="w-full bg-[#F8F5EF] border-y border-[#C9A063]/20 py-10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C9A063]/20">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0"
            >
              <span className="text-3xl sm:text-5xl font-extrabold text-[#C9A063] tracking-tight mb-1 font-heading">
                {stat.number}
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

export default StatsBar;
