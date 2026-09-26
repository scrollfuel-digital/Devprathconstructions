import React from 'react';
import { X, Clock } from 'lucide-react';

export default function ContactDetailModal({ contact, onClose, onToggleViewed, onNavigateToContacts }) {
  if (!contact) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E5E0D8] rounded-2xl w-full max-w-lg p-5 sm:p-6 shadow-xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase mb-1.5 ${
                contact.viewed
                  ? 'bg-[#FAF7F2] text-[#6D675E] border border-[#E5E0D8]'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {!contact.viewed && <Clock className="w-3 h-3 text-amber-700 animate-pulse" />}
              {contact.viewed ? 'Viewed' : 'New Inquiry'}
            </span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1F1E1C]">
              {contact.name || 'Anonymous Client'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#948C81] hover:text-[#1F1E1C] hover:bg-[#FAF7F2] cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FAF7F2] p-3 rounded-xl border border-[#E5E0D8]">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948C81] block">Email</span>
            <a
              href={contact.email ? `mailto:${contact.email}` : undefined}
              className="font-medium text-[#1F1E1C] hover:text-[#B9935A] transition-colors break-all"
            >
              {contact.email || '—'}
            </a>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#948C81] block">Phone</span>
            <a
              href={contact.phoneNo ? `tel:${contact.phoneNo}` : undefined}
              className="font-medium text-[#1F1E1C] hover:text-[#B9935A] transition-colors"
            >
              {contact.phoneNo || '—'}
            </a>
          </div>
          {contact.createdAt && (
            <div className="sm:col-span-2">
              <span className="text-[10px] uppercase font-semibold text-[#948C81] block">Received On</span>
              <span className="font-medium text-[#1F1E1C]">
                {new Date(contact.createdAt).toLocaleString(undefined, {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>
            </div>
          )}
        </div>

        {/* Message Content */}
        <div>
          <span className="text-xs font-semibold text-[#1F1E1C] block mb-1">Inquiry Message:</span>
          <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E5E0D8] text-xs text-[#1F1E1C] leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
            {contact.message || 'No additional message was provided.'}
          </div>
        </div>

        {/* Modal Actions: Single Close Option */}
        <div className="flex items-center justify-end pt-3 border-t border-[#E5E0D8] gap-2">
          {onNavigateToContacts && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateToContacts();
              }}
              className="px-3.5 py-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#1F1E1C] cursor-pointer transition-colors"
            >
              All Inquiries
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#1F1E1C] hover:bg-[#8F6E3B] text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
