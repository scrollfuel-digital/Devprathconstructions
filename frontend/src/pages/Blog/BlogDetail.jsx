import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Tag, User, Quote, CheckCircle2, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { magicalBehindVariant } from "../AboutUs/magicalBehindVariant";
import { getBlogBySlug, getRelatedBlogs } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const animationVariant = magicalBehindVariant(shouldReduceMotion);

  const magicalInViewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.05 },
    variants: animationVariant,
    style: { willChange: "transform, opacity, filter" },
  };

  const blog = getBlogBySlug(slug);
  const [slideIndex, setSlideIndex] = useState(0);

  if (!blog) {
    return (
      <div className="bg-[#f8f5ef] min-h-screen flex items-center justify-center pt-32 pb-20 px-6 font-sans">
        <div className="text-center max-w-md bg-white p-10 rounded-3xl border border-[#c9a063]/30 shadow-xl">
          <BookOpen className="w-12 h-12 text-[#B9935A] mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-heading text-black mb-2">
            Article Not Found
          </h2>
          <p className="text-sm text-gray-600 mb-6 font-light">
            The blog article you are looking for does not exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B9935A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8b6732] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </button>
        </div>
      </div>
    );
  }

  const relatedBlogs = getRelatedBlogs(blog.slug, 4);

  const handlePrevSlide = () => {
    if (relatedBlogs.length === 0) return;
    setSlideIndex((prev) => (prev - 1 + relatedBlogs.length) % relatedBlogs.length);
  };

  const handleNextSlide = () => {
    if (relatedBlogs.length === 0) return;
    setSlideIndex((prev) => (prev + 1) % relatedBlogs.length);
  };

  // Get 3 visible articles for the slider
  const visibleArticles = [];
  if (relatedBlogs.length > 0) {
    const total = relatedBlogs.length;
    const count = Math.min(3, total);
    for (let i = 0; i < count; i++) {
      visibleArticles.push(relatedBlogs[(slideIndex + i) % total]);
    }
  }

  return (
    <article className="bg-[#f8f5ef] text-black selection:bg-[#c9a063] selection:text-white font-sans pt-32 sm:pt-36 lg:pt-40 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-[#B9935A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B9935A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.div className="mb-8 relative z-20" {...magicalInViewProps}>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-white border border-[#c9a063]/30 text-xs font-bold uppercase tracking-[1.5px] text-[#B9935A] hover:text-[#8b6732] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to All Blogs</span>
          </button>
        </motion.div>

        {/* Main Article Content Container */}
        <motion.div className="max-w-4xl mx-auto" {...magicalInViewProps}>
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#c9a063]/15 text-[#8b6732] border border-[#c9a063]/30">
              <Tag className="w-3.5 h-3.5" />
              {blog.category}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-semibold text-black">
              <User className="w-3.5 h-3.5 text-[#c9a063]" />
              {blog.author}
            </span>
          </div>

          {/* Left-Aligned Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight font-heading mb-8">
            {blog.title}
          </h1>

          {/* Full-Width Image directly below title (Object-contain to prevent stretching & cropping) */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm mb-10 bg-white/60 border border-[#c9a063]/20 flex items-center justify-center p-2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-[520px] object-contain rounded-xl mx-auto"
            />
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-base text-black/90 leading-relaxed font-sans">
            {blog.sections &&
              blog.sections.map((sec, idx) => {
                if (sec.type === "paragraph") {
                  return (
                    <p key={idx} className="text-base sm:text-lg text-gray-800 leading-relaxed font-light">
                      {sec.text}
                    </p>
                  );
                }

                if (sec.type === "heading") {
                  return (
                    <div key={idx} className="pt-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-black font-heading mb-3 flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#B9935A] rounded-full inline-block" />
                        {sec.title}
                      </h2>
                      <p className="text-gray-800 leading-relaxed font-light">{sec.text}</p>
                    </div>
                  );
                }

                if (sec.type === "highlightBox") {
                  return (
                    <div
                      key={idx}
                      className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#B9935A]/15 to-[#c9a063]/5 border-l-4 border-[#B9935A] border-y border-r border-[#c9a063]/20 shadow-sm"
                    >
                      <p className="text-sm sm:text-base font-medium text-black leading-relaxed italic">
                        "{sec.text}"
                      </p>
                    </div>
                  );
                }

                if (sec.type === "headingWithPoints") {
                  return (
                    <div key={idx} className="pt-4 space-y-4">
                      {sec.title && (
                        <h2 className="text-xl sm:text-2xl font-bold text-black font-heading mb-3 flex items-center gap-2">
                          <span className="w-2 h-6 bg-[#B9935A] rounded-full inline-block" />
                          {sec.title}
                        </h2>
                      )}
                      {sec.text && <p className="text-gray-800 leading-relaxed font-light">{sec.text}</p>}
                      {sec.points && sec.points.length > 0 && (
                        <div className="space-y-3 pt-2">
                          {sec.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-3 bg-[#f8f5ef]/80 p-4 rounded-xl border border-[#c9a063]/15">
                              <CheckCircle2 className="w-5 h-5 text-[#B9935A] shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-black font-semibold">{pt.label}: </strong>
                                <span className="text-gray-800 font-light">{pt.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (sec.type === "quoteHeading") {
                  return (
                    <div key={idx} className="pt-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-black font-heading mb-3 flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#B9935A] rounded-full inline-block" />
                        {sec.title}
                      </h2>
                      <blockquote className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#B9935A]/10 to-[#c9a063]/5 border-l-4 border-[#B9935A] border-y border-r border-[#c9a063]/20 my-6 shadow-sm">
                        <Quote className="w-8 h-8 text-[#B9935A]/30 absolute top-4 right-4 pointer-events-none" />
                        <p className="text-base sm:text-lg font-normal italic leading-relaxed text-black mb-3 relative z-10">
                          "{sec.quote}"
                        </p>
                        {sec.attribution && (
                          <cite className="block text-xs font-bold uppercase tracking-wider text-[#B9935A] not-italic">
                            — {sec.attribution}
                          </cite>
                        )}
                      </blockquote>
                    </div>
                  );
                }

                if (sec.type === "conclusion") {
                  return (
                    <div
                      key={idx}
                      className="mt-8 pt-8 border-t border-[#c9a063]/30 bg-[#c9a063]/5 p-6 sm:p-8 rounded-2xl border border-[#c9a063]/20"
                    >
                      <h3 className="text-xl font-bold text-black font-heading mb-3">
                        {sec.title || "Conclusion"}
                      </h3>
                      <p className="text-gray-800 leading-relaxed font-light">{sec.text}</p>
                    </div>
                  );
                }

                return null;
              })}

            {/* References Section */}
            {blog.references && blog.references.length > 0 && (
              <div className="pt-6 border-t border-gray-200 text-xs text-gray-500">
                <h4 className="font-semibold text-gray-700 mb-2 uppercase tracking-wider text-[11px]">
                  References
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {blog.references.map((ref, rIdx) => (
                    <li key={rIdx}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Read Our Next Article Section (3-card slider with Prev/Next Controls) */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20 max-w-6xl mx-auto">
            <motion.div
              className="flex items-center justify-between mb-8"
              {...magicalInViewProps}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-heading">
                Read Our Next Article
              </h2>

              {/* Prev / Next Slider Control Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous Articles"
                  className="w-10 h-10 rounded-full bg-white border border-[#c9a063]/30 flex items-center justify-center text-black hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next Articles"
                  className="w-10 h-10 rounded-full bg-white border border-[#c9a063]/30 flex items-center justify-center text-black hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* 3 Larger Suggested Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleArticles.map((relPost) => (
                <div key={relPost.id} className="transition-all duration-500">
                  <BlogCard post={relPost} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
