import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, RefreshCw, Plus, Newspaper, AlertTriangle } from 'lucide-react';
import { fetchAllBlogs, deleteBlog, clearBlogsCache } from '../../utils/adminApi';
import BlogEditorModal from './BlogEditorModal';
import AdminBlogItem from './components/AdminBlogItem';

export default function AdminBlogs({ defaultCreate = false }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editingBlog, setEditingBlog] = useState(defaultCreate ? 'new' : null);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const load = useCallback(async (force = false) => {
    setLoading(true);
    const res = await fetchAllBlogs(force);
    setLoading(false);
    if (res.ok && res.data) {
      setBlogs(Array.isArray(res.data) ? res.data : []);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const confirmDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    const res = await deleteBlog(deletingId);
    setDeleteLoading(false);
    if (res.ok) {
      clearBlogsCache();
      setBlogs((prev) => prev.filter((b) => b.id !== deletingId));
      setDeletingId(null);
    } else {
      alert(res.error || 'Failed to delete blog.');
    }
  };

  const handleSaved = (savedBlog) => {
    clearBlogsCache();
    setBlogs((prev) => {
      const idx = prev.findIndex((b) => b.id === savedBlog.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = savedBlog;
        return next;
      }
      return [savedBlog, ...prev];
    });
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter((b) =>
      [b.title, b.slug, ...(b.keywords || [])].some((v) => (v || '').toLowerCase().includes(q))
    );
  }, [blogs, search]);

  return (
    <div className="space-y-4 font-sans text-sm">
      {/* Action Header */}
      <div className="bg-white border border-[#E5E0D8] rounded-xl p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold text-[#1F1E1C] flex items-center gap-2 text-xs sm:text-sm truncate">
            <Newspaper className="w-4 h-4 text-[#B9935A] shrink-0" />
            <span>Published Articles ({blogs.length})</span>
          </span>

          {/* Quick Actions on Mobile */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => load(true)}
              disabled={loading}
              title="Refresh"
              className="p-2 border border-[#E5E0D8] rounded-lg bg-[#FAF7F2] hover:bg-[#F2EDE4] text-[#8F6E3B] cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              type="button"
              onClick={() => setEditingBlog('new')}
              className="px-3 py-2 bg-[#B9935A] hover:bg-[#8F6E3B] text-white rounded-lg font-medium text-xs cursor-pointer flex items-center gap-1 shadow-xs min-h-[36px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#948C81] absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, keywords..."
              className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E5E0D8] rounded-lg focus:outline-none focus:border-[#B9935A] text-xs sm:text-sm text-[#1F1E1C]"
            />
          </div>

          {/* Actions on Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => load(true)}
              disabled={loading}
              title="Refresh"
              className="p-2 border border-[#E5E0D8] rounded-lg bg-[#FAF7F2] hover:bg-[#F2EDE4] text-[#8F6E3B] cursor-pointer transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setEditingBlog('new')}
              className="px-4 py-2 bg-[#B9935A] hover:bg-[#8F6E3B] text-white rounded-lg font-medium text-xs cursor-pointer transition-colors flex items-center gap-2 shadow-xs shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Create Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Blogs List */}
      <div className="bg-white border border-[#E5E0D8] rounded-xl shadow-xs overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-[#6D675E]">
            <div className="w-5 h-5 border-2 border-[#B9935A]/30 border-t-[#B9935A] rounded-full animate-spin mx-auto mb-2" />
            <p className="text-xs font-medium">Loading articles...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-14 sm:py-16 text-center text-[#6D675E] px-4">
            <Newspaper className="w-8 h-8 text-[#948C81] mx-auto mb-2 opacity-60" />
            <p className="font-semibold text-[#1F1E1C] text-sm">No blog articles found</p>
            <p className="text-xs text-[#948C81] mt-1">Click "Create Article" to compose and publish your first blog.</p>
          </div>
        ) : (
          <div className="p-3 sm:p-4 space-y-2">
            {filtered.map((b) => (
              <AdminBlogItem
                key={b.id}
                blog={b}
                onEdit={setEditingBlog}
                onDelete={setDeletingId}
                isDeleting={deletingId === b.id}
              />
            ))}
          </div>
        )}
      </div>

      {/* Editor Modal */}
      {editingBlog && (
        <BlogEditorModal
          blog={editingBlog === 'new' ? null : editingBlog}
          onClose={() => setEditingBlog(null)}
          onSaved={handleSaved}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white border border-[#E5E0D8] rounded-xl p-5 shadow-xl space-y-3 font-sans">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm sm:text-base">
              <AlertTriangle className="w-4 h-4" />
              <span>Confirm Deletion</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6D675E] leading-relaxed">
              Are you sure you want to permanently delete this article? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                disabled={deleteLoading}
                className="px-3.5 py-1.5 border border-[#E5E0D8] bg-white rounded-lg hover:bg-[#FAF7F2] text-xs sm:text-sm font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleteLoading}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium text-xs sm:text-sm cursor-pointer transition-colors"
              >
                {deleteLoading ? 'Deleting...' : 'Delete Permanently'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
