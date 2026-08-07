import React from "react";
import { motion } from "framer-motion";
import GallerySlider from "./GallerySlider";

export default function GallerySection({
  section,
  motionProps,
  onImageClick,
  onSliderImageClick,
}) {
  return (
    <section id={section.id} className="py-12 sm:py-16 bg-[#f8f5ef]">
      <div className="container-custom">
        {/* Section Header with Decorative Dashes */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-2"
            {...motionProps}
          >
            <span className="h-[1.5px] w-8 sm:w-12 bg-[#B9935A]" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A]">
              {section.badge}
            </span>
            <span className="h-[1.5px] w-8 sm:w-12 bg-[#B9935A]" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F1913] leading-tight font-heading"
            {...motionProps}
          >
            {section.title}
          </motion.h2>
        </div>

        {/* Section 1 Auto Slider (Top row as seen in Image 1) */}
        {section.hasSlider && (
          <motion.div className="mb-10" {...motionProps}>
            <GallerySlider onImageClick={onSliderImageClick} />
          </motion.div>
        )}

        {/* Image Grid Layout matching Image 1 structure */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          {...motionProps}
        >
          {section.images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => onImageClick(img, index)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#B9935A]/25 shadow-md hover:shadow-2xl hover:border-[#B9935A] transition-all duration-500 cursor-pointer"
            >
              <div className={`w-full ${img.aspect || "aspect-[4/3]"} overflow-hidden bg-gray-100`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1F1913]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-sm font-semibold text-white tracking-wide font-heading drop-shadow-md">
                  {img.title}
                </p>
                <p className="text-[11px] text-[#B9935A] uppercase tracking-wider font-bold mt-0.5">
                  Click to Expand
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
