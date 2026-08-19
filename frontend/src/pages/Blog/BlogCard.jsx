import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Tag, User } from "lucide-react";

export default function BlogCard({ post, isFeatured = false }) {
  if (!post) return null;

  if (isFeatured) {
    return (
      <div className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border border-[#c9a063]/25 hover:border-[#c9a063] shadow-xl transition-all duration-500">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Featured Image */}
          <div className="lg:col-span-7 relative overflow-hidden h-[280px] sm:h-[360px] lg:h-full min-h-[320px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#c9a063] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
              <span>Featured Article</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c9a063]/15 text-[#8b6732] border border-[#c9a063]/25 w-fit mb-4">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-black leading-tight mb-4 font-heading group-hover:text-[#c9a063] transition-colors duration-300">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="flex items-center gap-2 text-sm sm:text-base font-semibold text-black">
                <User className="w-4 h-4 text-[#c9a063]" />
                {post.author}
              </span>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold uppercase tracking-[1.5px] text-[#c9a063] hover:text-[#8b6732] transition-colors duration-300 group/btn"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-[#c9a063]/20 hover:border-[#c9a063] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Image Container with rounded inner bounds and top-left Category Tag */}
        <div className="relative overflow-hidden h-52 sm:h-56 p-2">
          <div className="w-full h-full rounded-xl overflow-hidden relative bg-gray-50">
            <Link to={`/blog/${post.slug}`} className="block w-full h-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#8b6732] border border-[#c9a063]/30 backdrop-blur-md shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Article Info */}
        <div className="px-5 pt-3 pb-4">
          <h3 className="text-xl sm:text-[22px] font-bold text-black leading-snug mb-2.5 font-heading group-hover:text-[#c9a063] transition-colors duration-300 line-clamp-2">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed font-light line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-5 pb-5 pt-0">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#c9a063] hover:text-[#8b6732] transition-colors duration-300 group/link"
        >
          <span>See more</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
}
