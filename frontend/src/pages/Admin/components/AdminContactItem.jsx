import React from 'react';
import { Eye, Mail, Phone } from 'lucide-react';

export default function AdminContactItem({ contact, onOpen, onToggleViewed, showToggle = true }) {
  if (!contact) return null;

  return (
    <div
      onClick={() => onOpen?.(contact)}
      className={`p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all border border-[#E5E0D8] hover:border-[#B9935A]/50 hover:shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 ${
        !contact.viewed ? 'bg-amber-50/50' : 'bg-white hover:bg-[#FAF7F2]/80'
      }`}
    >
      {/* Column 1: Name, Contact No, Email */}
      <div className="w-full md:w-52 lg:w-60 shrink-0 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold text-[#1F1E1C] truncate">
            {contact.name || 'Anonymous Client'}
          </span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ${
              contact.viewed
                ? 'bg-[#FAF7F2] text-[#6D675E] border border-[#E5E0D8]'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            {contact.viewed ? 'Viewed' : 'New'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1F1E1C]">
          <Phone className="w-3.5 h-3.5 text-[#B9935A] shrink-0" />
          <span className="font-medium">{contact.phoneNo || '—'}</span>
        </div>

        {contact.email && (
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#4A453E] truncate">
            <Mail className="w-3.5 h-3.5 text-[#B9935A] shrink-0" />
            <span className="truncate">{contact.email}</span>
          </div>
        )}
      </div>

      {/* Column 2: Message (Multi-line) */}
      <div className="flex-1 min-w-0 md:px-3 border-t md:border-t-0 md:border-l border-[#E5E0D8]/60 pt-2 md:pt-0">
        <p className="text-xs sm:text-sm text-[#3D3A35] leading-relaxed line-clamp-3 font-sans break-words">
          {contact.message || <span className="text-[#948C81] italic">No message content.</span>}
        </p>
      </div>

      {/* Column 3: Actions & Date Info */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E0D8]/60">
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {showToggle && onToggleViewed && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleViewed(e, contact.referenceId);
              }}
              className="px-2.5 py-1 rounded-md border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#6D675E] cursor-pointer transition-colors"
            >
              {contact.viewed ? 'Mark Unread' : 'Mark Seen'}
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen?.(contact);
            }}
            className="px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-[#1F1E1C] hover:text-white text-[#8F6E3B] text-xs font-medium transition-colors inline-flex items-center gap-1 cursor-pointer border border-[#E5E0D8]"
            title="Inspect Details"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect</span>
          </button>
        </div>

        <span className="text-xs text-[#948C81]">
          {contact.createdAt
            ? new Date(contact.createdAt).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            : ''}
        </span>
      </div>
    </div>
  );
}
