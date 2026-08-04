import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { magicalBehindVariant } from "../AboutUs/magicalBehindVariant";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  ChevronRight,
  User,
  Tag,
  TrendingUp,
  Bookmark,
} from "lucide-react";

/* ── Blog Image Imports ────────────────────────────────────────────── */
import heroImg1 from "../../assets/Hero/heroimg1.png";
import heroImg2 from "../../assets/Hero/heroimg2.png";
import heroImg3 from "../../assets/Hero/heroimg3.png";
import heroImg4 from "../../assets/Hero/heroimg4.png";
import heroImg5 from "../../assets/Hero/heroimg5.png";
import heroImg6 from "../../assets/Hero/heroimg6.png";
import heroImg8 from "../../assets/Hero/heroimg8.png";
import heroImg9 from "../../assets/Hero/heroimg9.png";
import galleryLiving from "../../assets/Gallery/livingroom.png";
import galleryPool from "../../assets/Gallery/pool.png";
import galleryBalconi from "../../assets/Gallery/balconi.png";
import galleryDining from "../../assets/Gallery/dining.png";

/* ── Blog Post Data ─────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Nagpur Is Emerging as Central India's Premier Real Estate Destination",
    excerpt:
      "Discover how Nagpur's rapid infrastructure growth, metro connectivity, and strategic location are making it one of the most sought-after real estate markets in India.",
    category: "Market Trends",
    date: "July 28, 2026",
    readTime: "8 min read",
    author: "Devprath Editorial",
    image: heroImg1,
    featured: true,
  },
  {
    id: 2,
    title: "10 Essential Tips for First-Time Home Buyers in 2026",
    excerpt:
      "Navigate the home buying journey with confidence. From RERA verification to loan pre-approval, here's everything a first-time buyer needs to know.",
    category: "Home Buying",
    date: "July 22, 2026",
    readTime: "6 min read",
    author: "Devprath Editorial",
    image: null,
  },
  {
    id: 3,
    title: "The Art of Vastu-Compliant Modern Architecture",
    excerpt:
      "How Devprath Constructions harmonizes ancient Vastu principles with contemporary design to create homes that feel naturally balanced and inviting.",
    category: "Architecture",
    date: "July 15, 2026",
    readTime: "5 min read",
    author: "Devprath Editorial",
    image: galleryLiving,
  },
  {
    id: 4,
    title: "Understanding RERA: Your Complete Guide to Protected Property Investment",
    excerpt:
      "Learn how RERA safeguards your investment, what to verify before booking, and how 100% compliance benefits every homeowner.",
    category: "Legal & Finance",
    date: "July 10, 2026",
    readTime: "7 min read",
    author: "Devprath Editorial",
    image: heroImg3,
  },
  {
    id: 5,
    title: "Premium Amenities That Define Luxury Living in Modern Residences",
    excerpt:
      "From infinity pools to co-working spaces, explore the world-class amenities that transform residential projects into premium lifestyle communities.",
    category: "Lifestyle",
    date: "July 5, 2026",
    readTime: "4 min read",
    author: "Devprath Editorial",
    image: galleryPool,
  },
  {
    id: 6,
    title: "Sustainable Construction: Building Homes That Respect the Environment",
    excerpt:
      "Discover how green building practices, energy-efficient designs, and eco-friendly materials are shaping the future of residential construction.",
    category: "Architecture",
    date: "June 28, 2026",
    readTime: "6 min read",
    author: "Devprath Editorial",
    image: heroImg4,
  },
  {
    id: 7,
    title: "Real Estate Investment: Comparing Residential vs. Commercial Properties",
    excerpt:
      "A deep-dive analysis into the pros, cons, and ROI expectations of residential versus commercial real estate investment in today's market.",
    category: "Market Trends",
    date: "June 20, 2026",
    readTime: "9 min read",
    author: "Devprath Editorial",
    image: heroImg5,
  },
  {
    id: 8,
    title: "Interior Design Trends Shaping Luxury Homes in 2026",
    excerpt:
      "From biophilic design to minimalist luxury, explore the top interior trends that are defining premium residential spaces this year.",
    category: "Lifestyle",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: "Devprath Editorial",
    image: galleryDining,
  },
  {
    id: 9,
    title: "How Smart Home Technology Is Revolutionizing Modern Living",
    excerpt:
      "Explore how IoT-enabled homes with automated lighting, climate control, and security systems are becoming the new standard in luxury residences.",
    category: "Architecture",
    date: "June 8, 2026",
    readTime: "6 min read",
    author: "Devprath Editorial",
    image: heroImg6,
  },
  {
    id: 10,
    title: "Home Loan Guide: Interest Rates, EMI Planning & Tax Benefits Explained",
    excerpt:
      "Everything you need to know about securing the best home loan — from comparing interest rates to maximizing Section 80C and 24(b) tax deductions.",
    category: "Legal & Finance",
    date: "June 1, 2026",
    readTime: "8 min read",
    author: "Devprath Editorial",
    image: heroImg8,
  },
  {
    id: 11,
    title: "Choosing the Right Floor Plan: A Buyer's Complete Checklist",
    excerpt:
      "Space planning matters. Learn how to evaluate floor plans for functionality, natural light, ventilation, and long-term livability before you invest.",
    category: "Home Buying",
    date: "May 25, 2026",
    readTime: "5 min read",
    author: "Devprath Editorial",
    image: heroImg9,
  },
  {
    id: 12,
    title: "The Rise of Balcony Living: Why Outdoor Spaces Matter More Than Ever",
    excerpt:
      "Post-pandemic living has redefined what homebuyers want. Spacious balconies and terraces have become non-negotiable in premium residences.",
    category: "Lifestyle",
    date: "May 18, 2026",
    readTime: "4 min read",
    author: "Devprath Editorial",
    image: galleryBalconi,
  },
];

const CATEGORIES = [
  "All",
  "Market Trends",
  "Home Buying",
  "Architecture",
  "Lifestyle",
  "Legal & Finance",
];

/* ── Category Colors (subtle gold-tinted tags) ──────────────────── */
const CATEGORY_COLORS = {
  "Market Trends": "bg-[#c9a063]/10 text-[#8b6732] border-[#c9a063]/25",
  "Home Buying": "bg-[#c9a063]/10 text-[#8b6732] border-[#c9a063]/25",
  Architecture: "bg-[#c9a063]/10 text-[#8b6732] border-[#c9a063]/25",
  Lifestyle: "bg-[#c9a063]/10 text-[#8b6732] border-[#c9a063]/25",
  "Legal & Finance": "bg-[#c9a063]/10 text-[#8b6732] border-[#c9a063]/25",
};

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

  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <div className="bg-[#f8f5ef] text-[#172235] selection:bg-[#c9a063] selection:text-white font-sans overflow-hidden pt-20 relative">

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
              className="text-xs font-bold uppercase tracking-[3px] text-[#c9a063] mb-3 block"
              {...magicalInViewProps}
            >
              OUR BLOG
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] leading-tight mb-5 font-heading"
              {...magicalInViewProps}
            >
              Insights & <span className="gold-gradient-text">Inspiration</span>
            </motion.h1>

            <motion.p
              className="text-base text-gray-600 font-light leading-relaxed mb-10"
              {...magicalInViewProps}
            >
              Expert guidance on real estate trends, home buying tips, architectural innovation, and luxury living — curated by the Devprath Constructions team.
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
                  placeholder="Search articles..."
                  className="w-full bg-white/90 backdrop-blur-md border border-[#c9a063]/20 focus:border-[#B9935A] focus:ring-2 focus:ring-[#B9935A]/20 rounded-full pl-14 pr-6 py-4 text-sm text-[#172235] placeholder:text-gray-400 focus:outline-none transition-all duration-300 shadow-lg"
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
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[1.5px] transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#B9935A] text-white border-[#B9935A] shadow-lg"
                    : "bg-white/80 text-[#172235] border-[#c9a063]/25 hover:border-[#c9a063] hover:bg-white hover:shadow-md"
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
              <div className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-[#c9a063]/25 hover:border-[#c9a063] shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-0">

                  {/* Featured Image */}
                  <div className="lg:col-span-7 relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#172235]/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#f8f5ef]/30" />

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#B9935A] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border w-fit mb-5 ${CATEGORY_COLORS[featuredPost.category]}`}>
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172235] leading-tight mb-4 font-heading group-hover:text-[#B9935A] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c9a063]" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#c9a063]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#B9935A] hover:text-[#8b6732] transition-colors duration-300 group/btn">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
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
              <motion.article
                key={post.id}
                className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-[#c9a063]/25 hover:border-[#c9a063] shadow-[0_10px_25px_rgba(23,34,53,0.05)] hover:shadow-[0_20px_40px_rgba(185,147,90,0.18)] hover:-translate-y-2 transition-all duration-500"
                {...magicalInViewProps}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172235]/30 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${CATEGORY_COLORS[post.category]}`}>
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>

                  {/* Bookmark Icon */}
                  <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#172235] hover:text-[#B9935A] hover:bg-white transition-all duration-300 shadow-sm">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#c9a063]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#c9a063]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#172235] leading-snug mb-3 font-heading group-hover:text-[#B9935A] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-2 text-[11px] font-semibold text-[#172235]">
                      <User className="w-3.5 h-3.5 text-[#c9a063]" />
                      {post.author}
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B9935A] hover:text-[#8b6732] transition-colors duration-300 group/link">
                      <span>Read</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.article>
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
              <h3 className="text-xl font-bold text-[#172235] font-heading mb-2">
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
