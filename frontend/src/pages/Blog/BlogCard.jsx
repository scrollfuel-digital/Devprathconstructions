import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "../../components/common/CTAButton";

/**
 * Shared BlogCard Component
 * Implements two distinct display variants:
 * 1. "editorial" (default for listing page)
 * 2. "compact" (for related articles in BlogDetail)
 */
export default function BlogCard({ post, index = 0, variant = "editorial" }) {
  const shouldReduceMotion = useReducedMotion();

  if (!post) return null;

  // 1. COMPACT VARIANT
  if (variant === "compact") {
    return (
      <article className="group flex flex-col justify-between h-full bg-[#FAF7F2] border border-[#B9935A]/25 hover:border-[#B9935A] transition-all duration-300">
        <div>
          {/* Proportional Image Container - Using object-contain to prevent cropping */}
          <div className="relative overflow-hidden w-full aspect-[3/2] bg-[#E8E3D9]">
            <Link to={`/blog/${post.slug}`} className="block w-full h-full flex items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </Link>
            {post.category && (
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#FAF7F2]/95 text-[#8F6E3B] border border-[#B9935A]/30 z-10">
                {post.category}
              </span>
            )}
          </div>

          <div className="p-5 pb-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6D675E] mb-2.5">
              {post.date && <span className="shrink-0">{post.date}</span>}
              {post.date && post.author && (
                <span className="text-[#B9935A]/40 hidden sm:inline">&bull;</span>
              )}
              {post.author && (
                <span className="w-full sm:w-auto text-[11px] sm:text-xs text-pretty">
                  {post.author}
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-serif font-medium leading-snug group-hover:text-[#8F6E3B] transition-colors duration-300 line-clamp-2 mb-3">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            <div className="bg-[#F2EDE4] border border-[#B9935A]/30 border-l-2 border-l-[#B9935A] p-3.5 mb-4">
              <p className="font-body text-xs text-[#1F1E1C]/85 font-light leading-relaxed line-clamp-3 text-justify">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 pt-0">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B9935A] hover:text-[#8F6E3B] transition-colors duration-300"
          >
            <span>Read More</span>
            <span className="font-sans text-sm group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </article>
    );
  }

  // 2. EDITORIAL VARIANT
  const isLeft = index % 2 === 0;

  const fadeUpVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  const excerptVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <article className="relative w-full max-w-5xl mx-auto pb-8 sm:pb-10 lg:pb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="mb-5 sm:mb-6"
      >
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-2.5 text-[11px] sm:text-xs">
          {post.category && (
            <span className="font-body font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B9935A] shrink-0">
              {post.category}
            </span>
          )}
          {post.category && post.date && (
            <span className="text-[#B9935A]/40 select-none shrink-0">&bull;</span>
          )}
          {post.date && (
            <span className="font-body text-[#6D675E] tracking-wider uppercase shrink-0">
              {post.date}
            </span>
          )}
          {(post.category || post.date) && post.author && (
            <span className="text-[#B9935A]/40 select-none shrink-0 hidden sm:inline">&bull;</span>
          )}
          {post.author && (
            <span className="font-body text-[#6D675E] tracking-wide w-full sm:w-auto text-pretty">
              {post.author}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-medium tracking-tight leading-snug transition-colors duration-300 hover:text-[#8F6E3B]">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
      </motion.div>

      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          // Changed to object-contain with a slightly darker neutral background so image bounds are clear
          className="relative w-full aspect-[3/2] overflow-hidden bg-[#E8E3D9]"
        >
          <Link to={`/blog/${post.slug}`} className="block w-full h-full group flex items-center justify-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
          variants={excerptVariant}
          className={`
            mt-4 sm:mt-6 mx-4 sm:mx-6 relative z-20
            lg:mt-0 lg:mx-0 lg:absolute lg:bottom-[-2.5rem] lg:w-[440px] xl:w-[480px]
            ${isLeft ? "lg:left-6 xl:left-8 border-l-4 border-l-[#B9935A]" : "lg:right-6 xl:right-8 border-r-4 border-r-[#B9935A]"}
            bg-[#F2EDE4]/95 backdrop-blur-xs border border-[#B9935A]/30
            p-5 sm:p-7 lg:p-8 shadow-lg
          `}
        >
          <p className="font-body text-xs sm:text-sm text-[#1F1E1C]/85 font-light leading-relaxed mb-5 line-clamp-3 text-justify">
            {post.excerpt}
          </p>

          <div>
            <CTAButton to={`/blog/${post.slug}`} label="Read More" />
          </div>
        </motion.div>
      </div>
    </article>
  );
}