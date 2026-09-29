import React, { useState, useEffect, useMemo, useRef } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  old_blogs,
  parseBlog,
  getStoredBlogs,
  loadBlogsWithCacheSync,
  chunkBlogsIntoPages,
} from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function Blog() {
  const [apiBlogs, setApiBlogs] = useState(() => getStoredBlogs());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const articlesTopRef = useRef(null);

  // Background fetch actual API without blocking UI (Page 1 old_blogs renders immediately)
  useEffect(() => {
    loadBlogsWithCacheSync((fresh) => {
      setApiBlogs(fresh);
    }).then((initial) => {
      if (initial?.length) setApiBlogs(initial);
    });
  }, []);

  const parsedOldBlogs = useMemo(() => old_blogs.map(parseBlog), []);

  // Filter if search query exists
  const { filteredOld, filteredApi } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { filteredOld: parsedOldBlogs, filteredApi: apiBlogs };
    const match = (b) =>
      b.title?.toLowerCase().includes(q) || b.excerpt?.toLowerCase().includes(q);
    return {
      filteredOld: parsedOldBlogs.filter(match),
      filteredApi: apiBlogs.filter(match),
    };
  }, [parsedOldBlogs, apiBlogs, searchQuery]);

  // Reset to page 0 on search
  useEffect(() => setCurrentPage(0), [searchQuery]);

  // 2D Pages: Page 1 = old_blogs (5 items), Page 2+ = apiBlogs (chunked by 5)
  const pages = useMemo(() => {
    if (searchQuery.trim()) {
      return chunkBlogsIntoPages([...filteredOld, ...filteredApi], 5);
    }
    const apiPages = chunkBlogsIntoPages(filteredApi, 5);
    return [filteredOld, ...apiPages].filter((p) => p.length > 0);
  }, [filteredOld, filteredApi, searchQuery]);

  const totalPages = pages.length;
  const currentPosts = pages[currentPage] || [];
  const totalCount = filteredOld.length + filteredApi.length;

  const handlePageChange = (newIndex) => {
    if (newIndex < 0 || newIndex >= totalPages) return;
    setCurrentPage(newIndex);
    articlesTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen overflow-x-hidden">
      {/* Hero & Header Section */}
      <section className="pt-28 sm:pt-36 pb-5 sm:pb-6 border-b border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-3 sm:mb-4">
            Insights &amp; <span className="font-bold text-brand-primary">Inspirations.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted font-light max-w-3xl leading-relaxed mb-5 sm:mb-6">
            Expert guidance on real estate trends, infrastructure developments, market comparisons, and RERA compliance &mdash; curated by the Devprath Constructions team.
          </p>

          {/* Search & Articles Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#B9935A]/20">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8F6E3B] font-semibold">
              All Articles ({totalCount})
            </p>

            <div className="relative w-full sm:w-72 lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F6E3B] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#F2EDE4] border border-[#B9935A]/30 focus:border-[#B9935A] focus:outline-none pl-10 pr-4 py-2 text-xs sm:text-sm font-body text-[#1F1E1C] placeholder:text-[#6D675E]/70 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Entries */}
      <section ref={articlesTopRef} className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {currentPosts.length > 0 ? (
            <>
              <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                {currentPosts.map((post, idx) => (
                  <BlogCard key={post.id || post.slug} post={post} index={currentPage * 5 + idx} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[#B9935A]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8F6E3B] font-medium order-2 sm:order-1">
                    Page {currentPage + 1} of {totalPages}
                  </p>

                  <div className="flex items-center gap-2 order-1 sm:order-2 flex-wrap justify-center">
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 0}
                      aria-label="Previous page"
                      className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 border border-[#B9935A]/30 bg-[#FAF7F2] hover:bg-[#F2EDE4] hover:border-[#B9935A] text-[#1F1E1C] text-xs font-semibold uppercase tracking-[0.15em] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-[#8F6E3B]" />
                      <span>Prev</span>
                    </button>

                    <div className="flex items-center gap-1">
                      {pages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handlePageChange(i)}
                          aria-label={`Go to page ${i + 1}`}
                          aria-current={currentPage === i ? "page" : undefined}
                          className={`w-8 h-8 sm:w-9 sm:h-9 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                            currentPage === i
                              ? "bg-[#B9935A] text-[#FAF7F2] shadow-xs"
                              : "bg-[#F2EDE4] text-[#1F1E1C] hover:bg-[#E8E3D9]"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage >= totalPages - 1}
                      aria-label="Next page"
                      className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 border border-[#B9935A]/30 bg-[#FAF7F2] hover:bg-[#F2EDE4] hover:border-[#B9935A] text-[#1F1E1C] text-xs font-semibold uppercase tracking-[0.15em] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8F6E3B]" />
                    </button>
                  </div>
                </nav>
              )}
            </>
          ) : (
            <div className="text-center py-20 sm:py-28 border border-[#B9935A]/20 bg-[#F2EDE4]/60 p-8 sm:p-12">
              <p className="font-display text-2xl sm:text-3xl text-[#1F1E1C] mb-2">
                No Articles Found
              </p>
              <p className="font-body text-sm text-[#6D675E] font-light">
                {searchQuery
                  ? "Try adjusting your search terms."
                  : "Check back later for new publications."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}