import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, RefreshCw, Clock, ArrowUpDown, ChevronLeft, ChevronRight, Inbox } from 'lucide-react';
import { fetchAllContacts, fetchContactById, updateContactViewed, updateCachedContactViewed } from '../../utils/adminApi';
import AdminContactItem from './components/AdminContactItem';
import ContactDetailModal from './components/ContactDetailModal';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('isViewed');
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('all');
  const [modal, setModal] = useState(null);

  const load = useCallback(async (force = false) => {
    setLoading(true);
    const res = await fetchAllContacts({ page, size: 10, sortBy, ascending, force });
    setLoading(false);
    if (res.ok && res.data) {
      const items = res.data.content || res.data || [];
      setContacts(Array.isArray(items) ? items : []);
      setTotalPages(res.data.totalPages || 1);
    }
  }, [page, sortBy, ascending]);

  useEffect(() => { load(); }, [load]);

  const openContact = (c) => {
    if (!c.viewed) {
      const updated = { ...c, viewed: true };
      setContacts((prev) =>
        prev.map((item) => (item.referenceId === c.referenceId ? updated : item))
      );
      setModal(updated);
      updateCachedContactViewed(c.referenceId, true);
      updateContactViewed(c.referenceId).catch(console.warn);
    } else {
      setModal(c);
    }
  };

  const toggleViewed = async (e, id) => {
    if (e) e.stopPropagation();
    const target = contacts.find((c) => c.referenceId === id);
    const newStatus = target ? !target.viewed : true;
    setContacts((prev) =>
      prev.map((c) => (c.referenceId === id ? { ...c, viewed: newStatus } : c))
    );
    updateCachedContactViewed(id, newStatus);
    await updateContactViewed(id);
  };

  const unseenCount = useMemo(() => contacts.filter((c) => !c.viewed).length, [contacts]);

  const list = useMemo(() => {
    const q = search.trim().toLowerCase();
    return contacts.filter((c) => {
      if (tab === 'unseen' && c.viewed) return false;
      if (tab === 'viewed' && !c.viewed) return false;
      return !q || [c.name, c.email, c.phoneNo, c.message].some((v) => (v || '').toLowerCase().includes(q));
    });
  }, [contacts, search, tab]);

  return (
    <div className="space-y-4">
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: 'Total Inquiries', val: contacts.length, color: 'text-[#1F1E1C]' },
          { label: 'Unseen / New', val: unseenCount, color: 'text-[#8F6E3B]', isNew: true },
          { label: 'Viewed', val: contacts.length - unseenCount, color: 'text-[#1F1E1C]' },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-[#E5E0D8] rounded-xl p-3.5 shadow-xs">
            <span className="text-[11px] font-semibold text-[#6D675E] uppercase flex items-center gap-1.5">
              {m.isNew && <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />} {m.label}
            </span>
            <div className={`text-2xl font-serif font-bold mt-1 ${m.color}`}>{m.val}</div>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="bg-white border border-[#E5E0D8] rounded-xl p-3.5 shadow-xs space-y-3 text-xs">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#948C81] absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone, or message..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E5E0D8] focus:border-[#B9935A] focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#E5E0D8] bg-[#FAF7F2]">
              <ArrowUpDown className="w-3 h-3 text-[#B9935A]" />
              <select
                value={`${sortBy}:${ascending}`}
                onChange={(e) => {
                  const [s, a] = e.target.value.split(':');
                  setSortBy(s);
                  setAscending(a === 'true');
                  setPage(0);
                }}
                className="bg-transparent text-[#1F1E1C] font-medium focus:outline-none cursor-pointer"
              >
                <option value="isViewed:true">Unseen First</option>
                <option value="createdAt:false">Newest First</option>
                <option value="createdAt:true">Oldest First</option>
              </select>
            </div>
            <button type="button" onClick={() => load(true)} disabled={loading} className="p-2 rounded-lg border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] cursor-pointer">
              <RefreshCw className={`w-3.5 h-3.5 text-[#B9935A] ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#E5E0D8]/60">
          {['all', 'unseen', 'viewed'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-full font-semibold capitalize cursor-pointer transition-colors ${tab === t ? 'bg-[#1F1E1C] text-white' : 'bg-[#FAF7F2] text-[#6D675E]'
                }`}
            >
              {t} ({t === 'all' ? contacts.length : t === 'unseen' ? unseenCount : contacts.length - unseenCount})
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      <div className="bg-white border border-[#E5E0D8] rounded-xl shadow-xs overflow-hidden">
        {loading ? (
          <div className="py-12 text-center text-xs text-[#6D675E]">
            <div className="w-5 h-5 border-2 border-[#B9935A]/30 border-t-[#B9935A] rounded-full animate-spin mx-auto mb-2" />
            Loading inquiries...
          </div>
        ) : list.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#6D675E]">
            <Inbox className="w-7 h-7 text-[#948C81] mx-auto mb-1.5" />
            No inquiries match criteria.
          </div>
        ) : (
          <div className="p-3 sm:p-4 space-y-2">
            {list.map((c) => (
              <AdminContactItem
                key={c.referenceId}
                contact={c}
                onOpen={openContact}
                onToggleViewed={toggleViewed}
                showToggle={true}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="px-4 py-2 border-t border-[#E5E0D8] bg-[#FAF7F2] flex items-center justify-between text-xs text-[#6D675E]">
          <span className="font-medium">Page {page + 1} of {Math.max(1, totalPages)}</span>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0 || loading} className="p-1 rounded border border-[#E5E0D8] bg-white disabled:opacity-40 cursor-pointer">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button type="button" onClick={() => setPage((p) => p + 1)} disabled={page + 1 >= totalPages || loading} className="p-1 rounded border border-[#E5E0D8] bg-white disabled:opacity-40 cursor-pointer">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Unified Contact Detail Modal */}
      <ContactDetailModal
        contact={modal}
        onClose={() => setModal(null)}
      />
    </div>
  );
}
