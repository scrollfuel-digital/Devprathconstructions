import React, { useState } from "react";
import { Search } from "lucide-react";
import { BLOG_POSTS, CATEGORIES } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen overflow-x-hidden">

      {/* Hero & Header Section */}
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#B9935A] block mb-4 sm:mb-5">
            Journal &amp; Perspectives
          </span>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] tracking-tight leading-[1.08] mb-6 sm:mb-8">
            Insights &amp; <span className="italic font-light text-[#8F6E3B]">Inspirations.</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-[#6D675E] font-light max-w-3xl leading-relaxed mb-10 sm:mb-12">
            Expert guidance on real estate trends, infrastructure developments, market comparisons, and RERA compliance &mdash; curated by the Devprath Constructions team.
          </p>

          {/* Search & Category Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-6 border-t border-[#B9935A]/20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`font-body text-xs uppercase tracking-[0.18em] px-4 py-2 transition-all duration-300 cursor-pointer border ${isActive
                        ? "bg-[#B9935A] text-[#FAF7F2] border-[#B9935A] font-semibold shadow-sm"
                        : "bg-transparent text-[#6D675E] border-[#1F1E1C]/15 hover:border-[#B9935A] hover:text-[#1F1E1C]"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F6E3B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#F2EDE4] border border-[#B9935A]/30 focus:border-[#B9935A] focus:outline-none pl-10 pr-4 py-2 text-sm font-body text-[#1F1E1C] placeholder:text-[#6D675E]/70 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Entries */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {filteredPosts.length > 0 ? (
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 sm:py-28 border border-[#B9935A]/20 bg-[#F2EDE4]/60 p-8 sm:p-12">
              <p className="font-display text-2xl sm:text-3xl text-[#1F1E1C] mb-2">
                No Articles Found
              </p>
              <p className="font-body text-sm text-[#6D675E] font-light">
                Try adjusting your search terms or selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}