import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { getBlogBySlug, getRelatedBlogs, fetchAllBlogs, cleanHtmlContent } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(() => getBlogBySlug(slug));
  const [loading, setLoading] = useState(!blog);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const current = getBlogBySlug(slug);
    if (current) {
      setBlog(current);
      setLoading(false);
    } else {
      fetchAllBlogs(true).then(() => {
        setBlog(getBlogBySlug(slug));
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#FAF7F2] min-h-screen flex items-center justify-center pt-32 pb-20 px-6 font-body">
        <div className="text-center max-w-md animate-pulse space-y-4">
          <div className="h-8 bg-[#E8E3D9] w-48 mx-auto rounded" />
          <div className="h-4 bg-[#E8E3D9] w-64 mx-auto rounded" />
        </div>
      </div>
    );
  }

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
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 text-[11px] sm:text-xs">
            {blog.category && (
              <span className="font-body font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B9935A] shrink-0">
                {blog.category}
              </span>
            )}
            {blog.category && blog.date && (
              <span className="text-[#B9935A]/50 select-none shrink-0">&bull;</span>
            )}
            {blog.date && (
              <span className="font-body text-[#6D675E] tracking-wider uppercase shrink-0">
                {blog.date}
              </span>
            )}
            {(blog.category || blog.date) && blog.author && (
              <span className="text-[#B9935A]/50 select-none shrink-0 hidden sm:inline">&bull;</span>
            )}
            {blog.author && (
              <span className="font-body text-[#6D675E] tracking-wide w-full sm:w-auto text-pretty">
                {blog.author}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="blog-content font-body text-base sm:text-lg text-[#1F1E1C]/90">
            <style>{`
              .blog-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; border: 1px solid #E5E0D8; }
              .blog-content th, .blog-content td { border: 1px solid #E5E0D8; padding: 0.6rem 0.85rem; text-align: left; }
              .blog-content th { background: #FAF7F2; font-weight: 600; }
              .blog-content ul { list-style: disc outside; padding-left: 1.5rem; margin: 1rem 0; }
              .blog-content ol { list-style: decimal outside; padding-left: 1.5rem; margin: 1rem 0; }
              .blog-content li { margin: 0.35rem 0; }
              .blog-content li p, .blog-content td p, .blog-content th p { display: inline; margin: 0; }
              .blog-content blockquote { border-left: 4px solid #B9935A; background: #F2EDE4; padding: 0.75rem 1.25rem; margin: 1.5rem 0; font-style: italic; }
              .blog-content a { color: #B9935A; text-decoration: underline; }
              .blog-content h1 { font-family: var(--font-serif); font-size: 2rem; font-weight: 700; margin: 1.75rem 0 0.75rem; }
              .blog-content h2 { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; margin: 1.5rem 0 0.75rem; border-left: 4px solid #B9935A; padding-left: 0.75rem; }
              .blog-content h3 { font-family: var(--font-serif); font-size: 1.25rem; font-weight: 600; margin: 1.25rem 0 0.5rem; }
              .blog-content p { margin-bottom: 1rem; line-height: 1.75; }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent(blog.content) }} />
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