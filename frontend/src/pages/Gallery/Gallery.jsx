import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import GalleryHero from "./GalleryHero";
import GallerySection from "./GallerySection";
import GalleryLightbox from "./GalleryLightbox";
import {
  gallerySections,
  firstSliderImages,
  allGalleryImages,
} from "../../constants/galleryData";
import { magicalBehindVariant } from "../AboutUs/magicalBehindVariant";

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();
  const animationVariant = magicalBehindVariant(shouldReduceMotion);

  // Framer motion scroll-in-view props (two-way scroll reveal)
  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.1 },
    variants: animationVariant,
    style: { willChange: "transform, opacity, filter" },
  };

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Open lightbox from regular section image
  const handleOpenImage = (img) => {
    const globalIdx = allGalleryImages.findIndex((item) => item.id === img.id || item.src === img.src);
    setActiveImageIndex(globalIdx !== -1 ? globalIdx : 0);
    setLightboxOpen(true);
  };

  // Open lightbox from top slider image
  const handleOpenSliderImage = (img, index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? allGalleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === allGalleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f8f5ef] text-[#1F1913] font-sans min-h-screen overflow-hidden selection:bg-[#B9935A] selection:text-white">
      {/* Hero Header */}
      <GalleryHero motionProps={motionProps} />

      {/* Gallery Sections following Image 1 architecture */}
      <div className="space-y-4 pb-20">
        {gallerySections.map((section) => (
          <GallerySection
            key={section.id}
            section={section}
            motionProps={motionProps}
            onImageClick={handleOpenImage}
            onSliderImageClick={handleOpenSliderImage}
          />
        ))}
      </div>

      {/* Full-Screen Lightbox Modal Popup */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentImage={allGalleryImages[activeImageIndex]}
        currentIndex={activeImageIndex}
        totalCount={allGalleryImages.length}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}
