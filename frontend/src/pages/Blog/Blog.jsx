import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { magicalBehindVariant } from "../AboutUs/magicalBehindVariant";
import { Search } from "lucide-react";
import { BLOG_POSTS, CATEGORIES } from "../../constants/blogData";
import BlogCard from "./BlogCard";

export default function Blog() {
  const shouldReduceMotion = useReducedMotion();
  const animationVariant = magicalBehindVariant(shouldReduceMotion);
  const magicalInViewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.05 },
    variants: animationVariant,
    style: { willChange: "transform, opacity, filter" },
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0]; // First blog as featured
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="bg-[#f8f5ef] text-black selection:bg-[#c9a063] selection:text-white font-sans overflow-hidden pt-20 relative">
      {/* Decorative blurred gold orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#B9935A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#B9935A]/8 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
          SECTION 1 — HERO HEADER
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8f5ef] relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block font-sans"
              {...magicalInViewProps}
            >
              OUR BLOG
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-5 font-heading"
              {...magicalInViewProps}
            >
              Insights & <span className="gold-gradient-text">Inspiration</span>
            </motion.h1>

            <motion.p
              className="text-base text-gray-700 font-light leading-relaxed mb-10"
              {...magicalInViewProps}
            >
              Expert guidance on real estate trends, infrastructure developments, market comparisons, and RERA compliance — curated by the Devprath Constructions team.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-xl mx-auto relative"
              {...magicalInViewProps}
            >
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search real estate articles..."
                  className="w-full bg-white/90 backdrop-blur-md border border-[#c9a063]/20 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/20 rounded-full pl-14 pr-6 py-4 text-sm text-black placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
            {...magicalInViewProps}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[1.5px] transition-all duration-300 border cursor-pointer ${activeCategory === cat
                    ? "bg-[#B9935A] text-white border-[#B9935A] shadow-lg"
                    : "bg-white/80 text-black border-[#c9a063]/25 hover:border-[#c9a063] hover:bg-white hover:shadow-md"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* =========================================================================
              FEATURED POST (Full-width hero card)
             ========================================================================= */}
          {activeCategory === "All" && !searchQuery && featuredPost && (
            <motion.div {...magicalInViewProps} className="mb-16">
              <BlogCard post={featuredPost} isFeatured={true} />
            </motion.div>
          )}

          {/* =========================================================================
              BLOG GRID
             ========================================================================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "All" && !searchQuery
              ? regularPosts
              : filteredPosts
            ).map((post) => (
              <motion.div key={post.id} {...magicalInViewProps}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-20"
              {...magicalInViewProps}
            >
              <div className="w-20 h-20 rounded-full bg-[#c9a063]/10 flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-[#c9a063]" />
              </div>
              <h3 className="text-xl font-bold text-black font-heading mb-2">
                No Articles Found
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Try adjusting your search or category filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
