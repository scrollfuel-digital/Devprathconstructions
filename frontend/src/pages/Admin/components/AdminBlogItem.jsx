import React from 'react';
import { Newspaper, ExternalLink, Edit2, Trash2, Calendar, Clock } from 'lucide-react';

export default function AdminBlogItem({ blog, onEdit, onDelete, isDeleting = false }) {
  if (!blog) return null;

  return (
    <div className="p-3.5 sm:px-4 sm:py-3.5 rounded-xl border border-transparent hover:border-[#E5E0D8] hover:bg-white hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      {/* Thumbnail & Title */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="w-14 h-11 sm:w-16 sm:h-12 shrink-0 rounded-lg overflow-hidden bg-[#FAF7F2] border border-[#E5E0D8] flex items-center justify-center">
          {blog.imageUrl ? (
            <img src={blog.imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <Newspaper className="w-4 h-4 text-[#B9935A]" />
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-0.5">
          {/* Proportional, properly-sized blog heading - not huge */}
          <h3 className="text-xs sm:text-sm font-semibold text-[#1F1E1C] line-clamp-1 sm:line-clamp-2 leading-snug">
            {blog.title || 'Untitled Article'}
          </h3>

          {/* Clean metadata without slug */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-[#6D675E]">
            {blog.author && (
              <span className="font-medium text-[#8F6E3B] truncate max-w-[140px]">
                {blog.author}
              </span>
            )}
            {blog.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-[#948C81]" />
                <span>{blog.readTime}</span>
              </span>
            )}
            {blog.createdAt && (
              <span className="inline-flex items-center gap-1 text-[#948C81]">
                <Calendar className="w-2.5 h-2.5" />
                <span>
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-1.5 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#E5E0D8]/60">
        {blog.slug && (
          <a
            href={`/blog/${encodeURIComponent(blog.slug)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] text-[#6D675E] hover:text-[#1F1E1C] text-xs transition-colors inline-flex items-center gap-1"
            title="View Live Article on Public Website"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#B9935A]" />
            <span className="hidden md:inline text-[11px] font-medium">View</span>
          </a>
        )}

        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(blog)}
            className="px-2.5 py-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#1F1E1C] transition-colors cursor-pointer inline-flex items-center gap-1 shadow-2xs"
            title="Edit Article"
          >
            <Edit2 className="w-3 h-3 text-[#8F6E3B]" />
            <span>Edit</span>
          </button>
        )}

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(blog.id)}
            disabled={isDeleting}
            className="p-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-rose-50 text-[#948C81] hover:text-rose-600 transition-colors cursor-pointer disabled:opacity-50"
            title="Delete Article"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
