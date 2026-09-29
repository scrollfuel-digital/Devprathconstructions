import React, { useState, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import {
  X, Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, Quote, Link as LinkIcon, Table as TableIcon,
  Upload, Eye, Edit3, AlertCircle, Trash2, Columns, Rows
} from 'lucide-react';
import { createBlog, updateBlog } from '../../utils/adminApi';
import { cleanHtmlContent } from '../../constants/blogData';

export default function BlogEditorModal({ blog, onClose, onSaved }) {
  const isEditing = Boolean(blog?.id);
  const initialContent = cleanHtmlContent(blog?.content || '');
  const [title, setTitle] = useState(blog?.title || '');
  const [slug, setSlug] = useState(blog?.slug || '');
  const [keywords, setKeywords] = useState((blog?.keywords || []).join(', '));
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(blog?.imageUrl || '');
  const [activeTab, setActiveTab] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 1024 ? 'edit' : 'both'));
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [editorHtml, setEditorHtml] = useState(initialContent);
  const modalRef = useRef(null);

  // Stop wheel/touch event propagation to prevent window smooth-scroll interception
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const stopProp = (e) => e.stopPropagation();
    el.addEventListener('wheel', stopProp, { passive: true });
    el.addEventListener('touchmove', stopProp, { passive: true });
    return () => {
      el.removeEventListener('wheel', stopProp);
      el.removeEventListener('touchmove', stopProp);
    };
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent,
    onUpdate: ({ editor: currentEditor }) => {
      setEditorHtml(cleanHtmlContent(currentEditor.getHTML()));
    },
  });

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!isEditing && (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 100));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: null }));
    }
  };

  const insertLink = () => {
    if (!editor) return;
    const url = window.prompt('Enter link URL (e.g. https://...):', editor.getAttributes('link').href || 'https://');
    if (url === null) return;
    if (url === '') editor.chain().focus().extendMarkRange('link').unsetLink().run();
    else editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const getActiveHeading = () => {
    if (!editor) return 'p';
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive('heading', { level: i })) return String(i);
    }
    return 'p';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError('');

    const t = title.trim();
    const s = slug.trim();
    const html = cleanHtmlContent(editor?.getHTML() || '');
    const plainText = editor?.getText().trim() || '';

    const errs = {};
    if (!t) errs.title = 'Title should not be empty!';
    else if (t.length > 300) errs.title = 'Title cannot exceed 300 characters';
    if (s.length > 100) errs.slug = 'Slug cannot exceed 100 characters';
    if (!plainText && !html.includes('<img') && !html.includes('<table')) errs.content = 'Content is required';
    if (!isEditing && !imageFile) errs.image = 'Cover image is required for new blogs';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    const blogDto = {
      title: t,
      slug: s || undefined,
      content: html,
      keywords: keywords ? keywords.split(',').map((k) => k.trim()).filter(Boolean) : [],
    };

    const formData = new FormData();
    formData.append('blog', new Blob([JSON.stringify(blogDto)], { type: 'application/json' }));
    if (imageFile) formData.append('image', imageFile);

    const res = isEditing ? await updateBlog(blog.id, formData) : await createBlog(formData);
    setSubmitting(false);

    if (res.ok && res.data) {
      onSaved(res.data);
      onClose();
    } else {
      setServerError(res.error || 'Failed to save blog. Please verify inputs.');
    }
  };

  const toolbarActions = [
    { id: 'bold', icon: Bold, title: 'Bold', run: () => editor?.chain().focus().toggleBold().run(), active: () => editor?.isActive('bold') },
    { id: 'italic', icon: Italic, title: 'Italic', run: () => editor?.chain().focus().toggleItalic().run(), active: () => editor?.isActive('italic') },
    { id: 'underline', icon: UnderlineIcon, title: 'Underline', run: () => editor?.chain().focus().toggleUnderline().run(), active: () => editor?.isActive('underline') },
    { id: 'strike', icon: Strikethrough, title: 'Strike', run: () => editor?.chain().focus().toggleStrike().run(), active: () => editor?.isActive('strike') },
    { id: 'bulletList', icon: List, title: 'Bullet List', run: () => editor?.chain().focus().toggleBulletList().run(), active: () => editor?.isActive('bulletList') },
    { id: 'orderedList', icon: ListOrdered, title: 'Numbered List', run: () => editor?.chain().focus().toggleOrderedList().run(), active: () => editor?.isActive('orderedList') },
    { id: 'blockquote', icon: Quote, title: 'Quote', run: () => editor?.chain().focus().toggleBlockquote().run(), active: () => editor?.isActive('blockquote') },
  ];

  return (
    <div
      ref={modalRef}
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-xs font-sans text-sm overflow-y-auto"
    >
      <style>{`
        .blog-editor-content .ProseMirror { min-height: 200px; outline: none; padding: 0.75rem sm:p-3.5; font-size: 0.9375rem; line-height: 1.65; color: #1F1E1C; }
        .blog-editor-content, .blog-editor-preview { overflow-x: auto; word-break: break-word; }
        .blog-editor-content table, .blog-editor-preview table { width: 100%; border-collapse: collapse; margin: 1rem 0; border: 1px solid #E5E0D8; }
        .blog-editor-content th, .blog-editor-content td, .blog-editor-preview th, .blog-editor-preview td { border: 1px solid #E5E0D8; padding: 0.5rem 0.75rem; text-align: left; }
        .blog-editor-content th, .blog-editor-preview th { background: #FAF7F2; font-weight: 600; }
        .blog-editor-content ul, .blog-editor-preview ul { list-style: disc outside !important; padding-left: 1.5rem !important; margin: 0.75rem 0 !important; }
        .blog-editor-content ol, .blog-editor-preview ol { list-style: decimal outside !important; padding-left: 1.5rem !important; margin: 0.75rem 0 !important; }
        .blog-editor-content li, .blog-editor-preview li { margin: 0.25rem 0 !important; }
        .blog-editor-content li p, .blog-editor-content td p, .blog-editor-content th p, .blog-editor-preview li p, .blog-editor-preview td p, .blog-editor-preview th p { display: inline !important; margin: 0 !important; }
        .blog-editor-content blockquote, .blog-editor-preview blockquote { border-left: 4px solid #B9935A; background: #F2EDE4; padding: 0.5rem 1rem; margin: 1rem 0; font-style: italic; border-radius: 0 0.5rem 0.5rem 0; }
        .blog-editor-content a, .blog-editor-preview a { color: #B9935A; text-decoration: underline; }
        .blog-editor-content h1, .blog-editor-preview h1 { font-family: var(--font-serif); font-size: 1.6rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .blog-editor-content h2, .blog-editor-preview h2 { font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; margin: 1rem 0 0.5rem; border-left: 4px solid #B9935A; padding-left: 0.5rem; }
        .blog-editor-content h3, .blog-editor-preview h3 { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600; margin: 0.75rem 0 0.4rem; }
      `}</style>
      <div
        data-lenis-prevent="true"
        className="w-full max-w-6xl h-full sm:h-[92vh] max-h-none sm:max-h-[92vh] bg-white border-0 sm:border border-[#E5E0D8] rounded-none sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-[#E5E0D8] bg-[#FAF7F2] flex items-center justify-between shrink-0 gap-2">
          <div className="min-w-0">
            <h2 className="text-sm sm:text-lg font-serif font-bold text-[#1F1E1C] truncate">
              {isEditing ? 'Update Blog Article' : 'Compose Blog Article'}
            </h2>
            <p className="hidden sm:block text-xs text-[#6D675E] mt-0.5">Author articles with rich HTML and view live parallel preview.</p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="lg:hidden flex items-center bg-[#E5E0D8]/60 p-0.5 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${activeTab !== 'preview' ? 'bg-white text-[#1F1E1C] shadow-xs font-semibold' : 'text-[#6D675E]'}`}
              >
                <Edit3 className="w-3.5 h-3.5 inline mr-1" /> Edit
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${activeTab === 'preview' ? 'bg-white text-[#1F1E1C] shadow-xs font-semibold' : 'text-[#6D675E]'}`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" /> Preview
              </button>
            </div>
            <button type="button" onClick={onClose} className="p-1 sm:p-1.5 text-[#6D675E] hover:text-[#1F1E1C] rounded-lg hover:bg-white cursor-pointer transition-colors">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {serverError && (
          <div className="mx-5 mt-3 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2 shrink-0">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        {/* Main Body */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E0D8] overflow-hidden">
          {/* Left: Editor Form */}
          <form
            id="blog-editor-form"
            onSubmit={handleSubmit}
            data-lenis-prevent="true"
            className={`h-full overflow-y-auto p-3.5 sm:p-5 space-y-3.5 sm:space-y-4 ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1F1E1C]">
                  Article Title <span className="text-rose-500">*</span>
                </label>
                <span className={`text-xs ${title.length > 300 ? 'text-rose-600 font-bold' : 'text-[#948C81]'}`}>{title.length}/300</span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Architectural Excellence in Residential Design"
                className={`w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border rounded-lg focus:outline-none ${errors.title ? 'border-rose-400' : 'border-[#E5E0D8] focus:border-[#B9935A]'}`}
              />
              {errors.title && <p className="text-xs text-rose-600 mt-1">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#1F1E1C]">URL Slug</label>
                  <span className={`text-xs ${slug.length > 100 ? 'text-rose-600 font-bold' : 'text-[#948C81]'}`}>{slug.length}/100</span>
                </div>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, '-'))}
                  placeholder="e.g. architectural-excellence"
                  className={`w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border rounded-lg focus:outline-none ${errors.slug ? 'border-rose-400' : 'border-[#E5E0D8] focus:border-[#B9935A]'}`}
                />
                {errors.slug && <p className="text-xs text-rose-600 mt-1">{errors.slug}</p>}
              </div>

              <div>
                <label className="text-xs sm:text-sm font-semibold text-[#1F1E1C] block mb-1.5">Keywords (Comma separated)</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Architecture, Luxury, RERA"
                  className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border border-[#E5E0D8] rounded-lg focus:outline-none focus:border-[#B9935A]"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1F1E1C]">
                  Cover Image {isEditing ? <span className="text-[#948C81] font-normal">(Optional on update)</span> : <span className="text-rose-500">*</span>}
                </label>
                <span className="text-[11px] sm:text-xs font-semibold text-[#8F6E3B] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Recommended aspect ratio 3:2
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <label className="flex-1 min-w-0 border border-dashed border-[#B9935A]/50 bg-[#FAF7F2] hover:bg-[#F2EDE4] p-2.5 sm:p-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-[#8F6E3B] shrink-0" />
                  <span className="text-[#6D675E] text-xs sm:text-sm font-medium truncate">
                    {imageFile ? imageFile.name : isEditing ? 'Change cover image (optional)' : 'Choose cover image (PNG, JPG, WEBP)'}
                  </span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                {imagePreview && (
                  <div className="w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-lg overflow-hidden border border-[#E5E0D8] bg-stone-100">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              {errors.image && <p className="text-xs text-rose-600 mt-1">{errors.image}</p>}
            </div>

            <div>
              <label className="text-xs sm:text-sm font-semibold text-[#1F1E1C] block mb-1.5">
                Article Body Content <span className="text-rose-500">*</span>
              </label>

              <div className="border border-[#E5E0D8] rounded-xl overflow-hidden bg-white shadow-xs">
                {/* Toolbar */}
                <div className="bg-[#FAF7F2] p-1.5 sm:p-2 border-b border-[#E5E0D8] flex flex-wrap items-center gap-1 sm:gap-1.5">
                  <select
                    value={getActiveHeading()}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === 'p') editor?.chain().focus().setParagraph().run();
                      else editor?.chain().focus().toggleHeading({ level: Number(v) }).run();
                    }}
                    className="bg-white border border-[#E5E0D8] rounded-lg px-2 py-1 text-xs font-medium text-[#1F1E1C] cursor-pointer focus:outline-none"
                  >
                    <option value="p">Paragraph</option>
                    <option value="1">H1</option>
                    <option value="2">H2</option>
                    <option value="3">H3</option>
                    <option value="4">H4</option>
                    <option value="5">H5</option>
                    <option value="6">H6</option>
                  </select>

                  <div className="w-px h-5 bg-[#E5E0D8] mx-0.5" />

                  {toolbarActions.map((btn) => {
                    const Icon = btn.icon;
                    const isActive = btn.active();
                    return (
                      <button
                        key={btn.id}
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={btn.run}
                        className={`p-1.5 rounded-md cursor-pointer transition-colors ${isActive ? 'bg-[#1F1E1C] text-white' : 'hover:bg-white text-[#6D675E]'}`}
                        title={btn.title}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={insertLink}
                    className={`p-1.5 rounded-md cursor-pointer transition-colors ${editor?.isActive('link') ? 'bg-[#1F1E1C] text-white' : 'hover:bg-white text-[#6D675E]'}`}
                    title="Insert Link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>

                  <div className="w-px h-5 bg-[#E5E0D8] mx-0.5" />

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                    className="p-1.5 rounded-md hover:bg-white text-[#6D675E] cursor-pointer flex items-center gap-1 text-xs font-medium"
                    title="Insert 3×3 Table"
                  >
                    <TableIcon className="w-4 h-4" />
                    <span>Table</span>
                  </button>

                  {editor?.isActive('table') && (
                    <div className="inline-flex items-center gap-1 pl-1 border-l border-[#E5E0D8]">
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => editor?.chain().focus().addRowAfter().run()}
                        className="px-1.5 py-0.5 text-[11px] rounded bg-white hover:bg-stone-50 border border-[#E5E0D8] text-[#1F1E1C] flex items-center gap-0.5 cursor-pointer"
                        title="Add row below"
                      >
                        <Rows className="w-3 h-3" /> +Row
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => editor?.chain().focus().addColumnAfter().run()}
                        className="px-1.5 py-0.5 text-[11px] rounded bg-white hover:bg-stone-50 border border-[#E5E0D8] text-[#1F1E1C] flex items-center gap-0.5 cursor-pointer"
                        title="Add column right"
                      >
                        <Columns className="w-3 h-3" /> +Col
                      </button>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => editor?.chain().focus().deleteTable().run()}
                        className="p-1 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                        title="Delete entire table"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="tiptap-content-box overflow-x-auto">
                  <EditorContent editor={editor} className="blog-editor-content" />
                </div>
              </div>
              {errors.content && <p className="text-xs text-rose-600 mt-1">{errors.content}</p>}
            </div>
          </form>

          {/* Right: Live Preview */}
          <div
            data-lenis-prevent="true"
            className={`h-full overflow-y-auto p-3 sm:p-6 bg-[#FAF7F2]/50 ${activeTab !== 'preview' ? 'hidden lg:block' : 'block'}`}
          >
            <div className="flex items-center justify-between pb-3 mb-3.5 sm:mb-4 border-b border-[#E5E0D8]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6E3B] flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#B9935A]" /> Live Parallel Preview
              </span>
              <span className="text-xs text-[#948C81] hidden sm:inline">Exact Public Blog Presentation</span>
            </div>

            <div className="bg-white border border-[#E5E0D8] rounded-xl p-3.5 sm:p-7 shadow-xs space-y-4 sm:space-y-5">
              <div className="aspect-[3/2] w-full rounded-lg overflow-hidden bg-stone-100 border border-[#E5E0D8]">
                {imagePreview ? (
                  <img src={imagePreview} alt={title || 'Preview'} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#948C81] text-xs sm:text-sm">
                    <Upload className="w-7 h-7 mb-1.5 opacity-40" />
                    <span>3:2 Aspect Cover Image Preview</span>
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs font-semibold text-[#8F6E3B] uppercase tracking-widest block mb-1">
                  {slug ? `/blog/${slug}` : 'ARTICLE PREVIEW'}
                </span>
                <h1 className="text-xl sm:text-3xl font-serif font-bold text-[#1F1E1C] leading-snug">
                  {title || 'Article Title Will Appear Here'}
                </h1>
              </div>

              <div
                className="blog-editor-preview text-sm sm:text-base text-[#1F1E1C]/90 font-body"
                dangerouslySetInnerHTML={{
                  __html: cleanHtmlContent(editorHtml) || '<p class="text-stone-400 italic">Start typing in the editor on the left to see live content appear here...</p>',
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-t border-[#E5E0D8] bg-[#FAF7F2] flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="px-3.5 py-2 sm:px-4 sm:py-2 border border-[#E5E0D8] bg-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#FAF7F2] cursor-pointer transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            form="blog-editor-form"
            disabled={submitting}
            className="px-4 py-2 sm:px-6 sm:py-2 bg-[#B9935A] hover:bg-[#8F6E3B] text-white rounded-lg text-xs sm:text-sm font-medium cursor-pointer transition-colors shadow-xs disabled:opacity-50 flex items-center gap-1.5 sm:gap-2"
          >
            {submitting ? 'Publishing...' : isEditing ? 'Save Changes' : 'Publish Blog'}
          </button>
        </div>
      </div>
    </div>
  );
}
