import React, { useState, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  Newspaper,
  Clock,
  ArrowRight,
  Plus,
  Inbox,
} from 'lucide-react';
import { fetchAllContacts, fetchAllBlogs, updateContactViewed, updateCachedContactViewed } from '../../utils/adminApi';
import AdminContactItem from './components/AdminContactItem';
import AdminBlogItem from './components/AdminBlogItem';
import ContactDetailModal from './components/ContactDetailModal';

export default function AdminDashboard({ onNavigate }) {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [contactsRes, blogsRes] = await Promise.all([
        fetchAllContacts({ page: 0, size: 10, sortBy: 'isViewed', ascending: true }),
        fetchAllBlogs(),
      ]);

      if (contactsRes.ok && contactsRes.data) {
        const items = contactsRes.data.content || contactsRes.data || [];
        setContacts(Array.isArray(items) ? items : []);
        setTotalContacts(contactsRes.data.totalElements || (Array.isArray(items) ? items.length : 0));
      }

      if (blogsRes.ok && blogsRes.data) {
        setBlogs(Array.isArray(blogsRes.data) ? blogsRes.data : []);
      }
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const unseenCount = contacts.filter((c) => !c.viewed).length;

  const handleOpenContact = (contact) => {
    if (!contact.viewed) {
      const updated = { ...contact, viewed: true };
      setContacts((prev) =>
        prev.map((c) => (c.referenceId === contact.referenceId ? updated : c))
      );
      setSelectedContact(updated);
      updateCachedContactViewed(contact.referenceId, true);
      updateContactViewed(contact.referenceId).catch(console.warn);
    } else {
      setSelectedContact(contact);
    }
  };

  const handleToggleViewed = async (referenceId) => {
    const target = contacts.find((c) => c.referenceId === referenceId);
    const newStatus = target ? !target.viewed : true;
    setContacts((prev) =>
      prev.map((c) => (c.referenceId === referenceId ? { ...c, viewed: newStatus } : c))
    );
    updateCachedContactViewed(referenceId, newStatus);
    await updateContactViewed(referenceId);
  };

  return (
    <div className="space-y-6">
      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Inquiries */}
        <div
          onClick={() => onNavigate('contacts')}
          className="bg-white border border-[#E5E0D8] rounded-xl p-5 shadow-xs hover:border-[#B9935A]/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6D675E] uppercase tracking-wide">
              Total Inquiries
            </span>
            <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#8F6E3B] group-hover:bg-[#1F1E1C] group-hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1E1C] mt-2">
            {loading ? '...' : totalContacts}
          </div>
          <p className="text-xs text-[#948C81] mt-1">Client inquiries received</p>
        </div>

        {/* Unseen Inquiries */}
        <div
          onClick={() => onNavigate('contacts')}
          className="bg-white border border-[#E5E0D8] rounded-xl p-5 shadow-xs hover:border-[#B9935A]/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6D675E] uppercase tracking-wide">
              New Inquiries
            </span>
            <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-800 mt-2">
            {loading ? '...' : unseenCount}
          </div>
          <p className="text-xs text-[#948C81] mt-1">Awaiting review</p>
        </div>

        {/* Published Articles */}
        <div
          onClick={() => onNavigate('blogs')}
          className="bg-white border border-[#E5E0D8] rounded-xl p-5 shadow-xs hover:border-[#B9935A]/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#6D675E] uppercase tracking-wide">
              Published Articles
            </span>
            <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#8F6E3B] group-hover:bg-[#1F1E1C] group-hover:text-white transition-colors">
              <Newspaper className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1E1C] mt-2">
            {loading ? '...' : blogs.length}
          </div>
          <p className="text-xs text-[#948C81] mt-1">Live blog posts</p>
        </div>
      </div>

      {/* Recent Inquiries & Recent Blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <div className="bg-white border border-[#E5E0D8] rounded-xl shadow-xs overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-[#E5E0D8] flex items-center justify-between bg-white">
            <div>
              <h2 className="text-sm sm:text-base font-serif font-bold text-[#1F1E1C]">
                Recent Inquiries
              </h2>
              <p className="text-xs text-[#6D675E] mt-0.5">Latest contact submissions</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contacts')}
              className="text-xs font-semibold text-[#8F6E3B] hover:text-[#1F1E1C] inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-3 sm:p-4 flex-1 space-y-1.5">
            {loading ? (
              <div className="py-12 text-center text-xs text-[#6D675E]">
                <div className="w-5 h-5 border-2 border-[#B9935A]/30 border-t-[#B9935A] rounded-full animate-spin mx-auto mb-2" />
                Loading inquiries...
              </div>
            ) : contacts.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#948C81]">
                <Inbox className="w-8 h-8 mx-auto mb-2 text-[#E5E0D8]" />
                No inquiries received yet.
              </div>
            ) : (
              contacts.slice(0, 5).map((c) => (
                <AdminContactItem
                  key={c.referenceId}
                  contact={c}
                  onOpen={handleOpenContact}
                  onToggleViewed={(e, id) => handleToggleViewed(id)}
                  showToggle={true}
                />
              ))
            )}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="bg-white border border-[#E5E0D8] rounded-xl shadow-xs overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-[#E5E0D8] flex items-center justify-between bg-white">
            <div>
              <h2 className="text-sm sm:text-base font-serif font-bold text-[#1F1E1C]">
                Recent Articles
              </h2>
              <p className="text-xs text-[#6D675E] mt-0.5">Published editorial articles</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('blogs', { create: true })}
                className="text-xs font-semibold text-[#1F1E1C] hover:text-[#8F6E3B] inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Article</span>
              </button>
              <span className="text-[#E5E0D8]">|</span>
              <button
                type="button"
                onClick={() => onNavigate('blogs')}
                className="text-xs font-semibold text-[#8F6E3B] hover:text-[#1F1E1C] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-3 sm:p-4 flex-1 space-y-1.5">
            {loading ? (
              <div className="py-12 text-center text-xs text-[#6D675E]">
                <div className="w-5 h-5 border-2 border-[#B9935A]/30 border-t-[#B9935A] rounded-full animate-spin mx-auto mb-2" />
                Loading blogs...
              </div>
            ) : blogs.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#948C81]">
                <Newspaper className="w-8 h-8 mx-auto mb-2 text-[#E5E0D8]" />
                No blog posts created yet.
              </div>
            ) : (
              blogs.slice(0, 5).map((b) => (
                <AdminBlogItem
                  key={b.id}
                  blog={b}
                  onEdit={() => onNavigate('blogs')}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Unified Inquiry Detail Modal */}
      <ContactDetailModal
        contact={selectedContact}
        onClose={() => setSelectedContact(null)}
        onNavigateToContacts={() => onNavigate('contacts')}
      />
    </div>
  );
}
