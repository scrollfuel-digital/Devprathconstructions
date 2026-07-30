import React from "react";

const PILLARS = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "Creating iconic architectural landmarks that harmonize ultra-luxury living with sustainable structural design.",
    icon: "visibility",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Delivering high-performance spaces built with cutting-edge engineering, premium materials, and absolute transparency.",
    icon: "flag",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Unwavering commitment to client trust, timely project execution, and 100% RERA compliant legal clarity.",
    icon: "verified",
  },
];

export const CompanyLegacy = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - High End Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A063]/30 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Devprath Architectural Excellence"
                className="w-full h-[450px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#C9A063]/30 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A063]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#C9A063] text-2xl">
                      domain
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#172235]">
                      Precision Structural Engineering
                    </h4>
                    <p className="text-xs text-gray-600">
                      Zero compromise on material strength and architectural perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-3">
              Who We Are
            </span>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] leading-tight mb-6">
              Building Trust Through <br />
              <span className="gold-gradient-text">Excellence</span>
            </h2>

            {/* Narrative Body Text */}
            <p className="text-base text-gray-700 leading-relaxed font-light mb-8">
              At Devprath Constructions LLP, we build spaces that combine luxury, innovation, and enduring strength. Our philosophy bridges the gap between ambitious architectural vision and meticulous engineering precision, crafting homes that stand as legacies for generations.
            </p>

            {/* Key Pillars List */}
            <div className="space-y-6">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#C9A063]/20 hover:border-[#C9A063]/60 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A063] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#172235]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLegacy;
