import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { dynamicBlogs, fetchAllBlogs } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function Blog() {
  const [posts, setPosts] = useState(dynamicBlogs);
  const [loading, setLoading] = useState(dynamicBlogs.length === 0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAllBlogs().then((list) => {
      setPosts(list);
      setLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter((post) => {
    return (
      !searchQuery ||
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="bg-[#FAF7F2] text-[#1F1E1C] font-body min-h-screen overflow-x-hidden">
      {/* Hero & Header Section */}
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[#B9935A]/20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6 sm:mb-8">
            Insights &amp; <span className="font-bold text-brand-primary">Inspirations.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted font-light max-w-3xl leading-relaxed mb-10 sm:mb-12">
            Expert guidance on real estate trends, infrastructure developments, market comparisons, and RERA compliance &mdash; curated by the Devprath Constructions team.
          </p>

          {/* Search & Articles Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#B9935A]/20">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8F6E3B] font-semibold">
              All Articles {!loading && `(${filteredPosts.length})`}
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
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {loading ? (
            <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto py-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse space-y-4">
                  <div className="h-4 bg-[#E8E3D9] w-32 rounded" />
                  <div className="h-8 bg-[#E8E3D9] w-3/4 rounded" />
                  <div className="aspect-[3/2] bg-[#E8E3D9] w-full rounded" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.id || post.slug} post={post} index={idx} />
              ))}
            </div>
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