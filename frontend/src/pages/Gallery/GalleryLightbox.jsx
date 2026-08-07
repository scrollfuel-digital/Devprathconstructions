import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({
  isOpen,
  currentImage,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}) {
  // Lock body scroll and add keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white text-xs sm:text-sm font-medium tracking-wide">
          <span className="text-[#B9935A] font-bold">Image {currentIndex + 1}</span> of {totalCount}
        </div>
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B9935A] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#B9935A] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#B9935A] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image Container - Zero cropping or stretching */}
      <div className="relative z-10 max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center">
        <img
          src={currentImage.src}
          alt={currentImage.alt || currentImage.title}
          className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {/* Caption */}
        {currentImage.title && (
          <div className="mt-4 text-center">
            <p className="text-white text-sm sm:text-base font-medium tracking-wide">
              {currentImage.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
