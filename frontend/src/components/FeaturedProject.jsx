import React from "react";

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Grand Living Lounge",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    size: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Modular Italian Kitchen",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Panoramic Skyline View",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    size: "col-span-1 row-span-1",
  },
];

export const FeaturedProject = ({ onBookConsultation }) => {
  return (
    <section id="projects" className="py-24 bg-[#172235] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#F0D060] mb-3">
              Featured Project
            </span>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight font-heading">
              Mangalmurti <br />
              <span className="gold-gradient-text">Residency</span>
            </h2>

            {/* Tagline */}
            <p className="text-lg text-gray-300 font-light mb-8">
              Where Comfort Meets Contemporary Living
            </p>

            {/* Key Spec Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-md border border-[#C9A063]/40 px-5 py-3 rounded-xl">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#C9A063]">
                  RERA
                </span>
                <span className="text-sm font-semibold text-white">
                  Approved Project
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-[#C9A063]/40 px-5 py-3 rounded-xl">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#C9A063]">
                  80%
                </span>
                <span className="text-sm font-semibold text-white">
                  Open Green Space
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-[#C9A063]/40 px-5 py-3 rounded-xl">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#C9A063]">
                  Possession
                </span>
                <span className="text-sm font-semibold text-white">
                  Dec '25
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onBookConsultation}
                className="rounded-full bg-[#C9A063] px-9 py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-[#B88C4D] hover:shadow-2xl hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center gap-3"
              >
                <span>Explore Project Details</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column - Multi-Photo Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-2xl border border-white/20 group ${img.size}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full min-h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-gray-200">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
