import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { getBlogBySlug, getRelatedBlogs } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = getBlogBySlug(slug);
  const [slideIndex, setSlideIndex] = useState(0);

  if (!blog) {
    return (
      <div className="bg-[#FAF7F2] min-h-screen flex items-center justify-center pt-32 pb-20 px-6 font-body">
        <div className="text-center max-w-md bg-[#F2EDE4] p-10 border border-[#B9935A]/30 shadow-lg">
          <BookOpen className="w-12 h-12 text-[#B9935A] mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] mb-2">
            Article Not Found
          </h2>
          <p className="font-body text-sm text-[#6D675E] mb-6 font-light">
            The blog article you are looking for does not exist or has been moved.
          </p>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#B9935A] text-[#FAF7F2] hover:bg-[#8F6E3B] transition-colors text-xs font-semibold uppercase tracking-[0.2em] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
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

  const visibleArticles = [];
  if (relatedBlogs.length > 0) {
    const total = relatedBlogs.length;
    const count = Math.min(3, total);
    for (let i = 0; i < count; i++) {
      visibleArticles.push(relatedBlogs[(slideIndex + i) % total]);
    }
  }

  return (
    <article className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen pt-28 sm:pt-36 pb-24 overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => navigate("/blog")}
            aria-label="Back to blogs"
            className="inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#6D675E] hover:text-[#B9935A] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* 1. FULL POST IMAGE (object-contain prevents cropping/stretching) */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="w-full aspect-[3/2] overflow-hidden bg-[#E8E3D9] flex items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* 2. TEXT CONTENT */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A]">
              {blog.category}
            </span>
            {blog.date && (
              <>
                <span className="text-[#B9935A]/50 select-none">&bull;</span>
                <span className="font-body text-xs text-[#6D675E] tracking-wider uppercase">{blog.date}</span>
              </>
            )}
            {blog.author && (
              <>
                <span className="text-[#B9935A]/50 select-none">&bull;</span>
                <span className="font-body text-xs text-[#6D675E] tracking-wider">{blog.author}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="space-y-8 text-base text-[#1F1E1C]/90 leading-relaxed font-body">
            {blog.sections?.map((sec, idx) => {
              if (sec.type === "paragraph") {
                return (
                  <p key={idx} className="text-base sm:text-lg text-[#1F1E1C]/85 leading-relaxed font-light">
                    {sec.text}
                  </p>
                );
              }

              if (sec.type === "heading") {
                return (
                  <div key={idx} className="pt-6">
                    <h2 className="text-2xl sm:text-3xl mb-3 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-[#B9935A] inline-block" />
                      {sec.title}
                    </h2>
                    <p className="text-[#1F1E1C]/80 leading-relaxed font-light">{sec.text}</p>
                  </div>
                );
              }

              if (sec.type === "highlightBox") {
                return (
                  <div key={idx} className="my-8 p-6 sm:p-8 bg-[#F2EDE4] border-l-4 border-[#B9935A] border-y border-r border-[#B9935A]/20 shadow-xs">
                    <p className="font-body text-base sm:text-lg font-light text-[#1F1E1C] leading-relaxed italic">
                      "{sec.text}"
                    </p>
                  </div>
                );
              }

              if (sec.type === "headingWithPoints") {
                return (
                  <div key={idx} className="pt-6 space-y-4">
                    {sec.title && <h2 className="text-2xl sm:text-3xl">{sec.title}</h2>}
                    {sec.intro && <p className="text-[#1F1E1C]/80 leading-relaxed font-light">{sec.intro}</p>}
                    {sec.points && (
                      <ul className="space-y-3 pt-2">
                        {sec.points.map((pt, pIdx) => {
                          const isObject = typeof pt === "object" && pt !== null;
                          const label = isObject ? pt.label : null;
                          const detail = isObject ? (pt.detail || pt.desc || "") : String(pt);
                          return (
                            <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base font-light text-[#1F1E1C]/85">
                              <CheckCircle2 className="w-5 h-5 text-[#B9935A] shrink-0 mt-0.5" />
                              <span>
                                {label && <strong className="font-semibold text-[#1F1E1C]">{label}: </strong>}
                                {detail}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              }

              if (sec.type === "quoteHeading") {
                const quoteText = sec.quote || sec.text || "";
                return (
                  <div key={idx} className="my-8 pl-6 border-l-2 border-[#B9935A] italic text-lg sm:text-xl font-display text-[#1F1E1C]">
                    {sec.title && <h3 className="font-display text-xl not-italic font-normal text-[#1F1E1C] mb-2">{sec.title}</h3>}
                    <p className="mb-2 font-normal">"{quoteText}"</p>
                    {sec.attribution && (
                      <span className="font-body text-xs tracking-wider uppercase text-[#8F6E3B] not-italic block">
                        &mdash; {sec.attribution}
                      </span>
                    )}
                  </div>
                );
              }

              if (sec.type === "conclusion") {
                return (
                  <div key={idx} className="mt-10 p-6 sm:p-8 bg-[#F2EDE4] border border-[#B9935A]/25">
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#1F1E1C] mb-3">
                      {sec.title || "In Summary"}
                    </h3>
                    <p className="text-[#1F1E1C]/80 font-light leading-relaxed">{sec.text}</p>
                  </div>
                );
              }

              return null;
            })}

            {/* References Section */}
            {blog.references?.length > 0 && (
              <div className="pt-8 mt-12 border-t border-[#B9935A]/20 text-xs text-[#6D675E]">
                <h4 className="font-body font-semibold uppercase tracking-[0.2em] text-[#8F6E3B] mb-3 text-[11px]">
                  References &amp; Citations
                </h4>
                <ul className="list-disc list-inside space-y-1.5 font-light">
                  {blog.references.map((ref, rIdx) => <li key={rIdx}>{ref}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 3. RELATED POSTS CAROUSEL */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#B9935A]/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <div>
                <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#B9935A] block mb-2">
                  Continue Reading
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1F1E1C]">
                  Read Our Next <span className="font-bold text-brand-primary">Articles.</span>
                </h2>
              </div>

              {/* Slider Controls - Hidden on mobile where horizontal scroll is natural */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous Articles"
                  className="w-10 h-10 bg-[#FAF7F2] border border-[#B9935A]/30 flex items-center justify-center text-[#1F1E1C] hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next Articles"
                  className="w-10 h-10 bg-[#FAF7F2] border border-[#B9935A]/30 flex items-center justify-center text-[#1F1E1C] hover:bg-[#B9935A] hover:text-white hover:border-[#B9935A] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto pb-4 md:pb-0 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {visibleArticles.map((relPost) => (
                <div key={relPost.id} className="w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink h-full snap-start">
                  <BlogCard post={relPost} variant="compact" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}