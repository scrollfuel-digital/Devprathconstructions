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
            <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#FAF7F2]/95 text-[#8F6E3B] border border-[#B9935A]/30 z-10">
              {post.category}
            </span>
          </div>

          <div className="p-5 pb-3">
            <div className="flex items-center gap-2 text-xs text-[#6D675E] mb-2.5">
              {post.date && <span>{post.date}</span>}
              {post.date && post.author && <span className="text-[#B9935A]/40">&bull;</span>}
              {post.author && <span>{post.author}</span>}
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-normal text-[#1F1E1C] leading-snug group-hover:text-[#8F6E3B] transition-colors duration-300 line-clamp-2 mb-4">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            <div className="bg-[#F2EDE4] border border-[#B9935A]/30 border-l-2 border-l-[#B9935A] p-3.5 mb-4">
              <p className="font-body text-xs text-[#1F1E1C]/85 font-light leading-relaxed line-clamp-3">
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
  const isRight = index % 2 === 0;

  const fadeUpVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  const excerptVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <article className="relative w-full max-w-5xl mx-auto pb-20 sm:pb-28 lg:pb-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="mb-5 sm:mb-6"
      >
        <div className="flex items-center gap-3 mb-2.5">
          <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A]">
            {post.category}
          </span>
          {post.date && (
            <>
              <span className="text-[#B9935A]/40 select-none">&bull;</span>
              <span className="font-body text-xs text-[#6D675E] tracking-wider uppercase">{post.date}</span>
            </>
          )}
          {post.author && (
            <>
              <span className="text-[#B9935A]/40 select-none">&bull;</span>
              <span className="font-body text-xs text-[#6D675E] tracking-wider">{post.author}</span>
            </>
          )}
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1E1C] tracking-tight leading-snug transition-colors duration-300 hover:text-[#8F6E3B]">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
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
            lg:mt-0 lg:mx-0 lg:absolute lg:top-[calc(100%-2.5rem)] lg:w-[440px] xl:w-[480px]
            ${isRight ? "lg:right-6 xl:right-8" : "lg:left-6 xl:left-8"}
            bg-[#F2EDE4] border border-[#B9935A]/30 border-l-4 border-l-[#B9935A]
            p-5 sm:p-7 lg:p-8 shadow-md
          `}
        >
          <p className="font-body text-xs sm:text-sm text-[#1F1E1C]/85 font-light leading-relaxed mb-5">
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