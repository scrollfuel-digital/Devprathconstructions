import React, { useState } from 'react';

// 5 Contact Channels Data (Facebook on Far-Left, Call on Far-Right)
const CONTACT_CHANNELS = [
  {
    id: 'facebook',
    title: 'Facebook',
    href: 'https://facebook.com',
    colorClass: 'text-[#1877F2] bg-[#1877F2]/10 hover:bg-[#1877F2]',
    svgPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://instagram.com',
    colorClass: 'text-[#E4405F] bg-[#E4405F]/10 hover:bg-[#E4405F]',
    svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    href: 'https://wa.me/919923203281?text=Hello%20DEVPRATH%20Team,%20I%20would%20like%20to%20know%20more%20about%20Mangalmurti%20Residency.',
    colorClass: 'text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]',
    svgPath: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.198 4.292-1.127z',
  },
  {
    id: 'email',
    title: 'Email',
    href: 'mailto:devprathconstructions@gmail.com',
    colorClass: 'text-[#EA4335] bg-[#EA4335]/10 hover:bg-[#EA4335]',
    svgPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    id: 'call',
    title: 'Call Us',
    href: 'tel:+919923203281',
    colorClass: 'text-[#0F9D58] bg-[#0F9D58]/10 hover:bg-[#0F9D58]',
    svgPath: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
  },
];

/**
 * ConsultationModal Component
 * Private appointment reservation modal featuring Facebook strictly on the far-left,
 * Call strictly on the far-right, and Instagram, WhatsApp, Email evenly positioned in between.
 */
export const ConsultationModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white p-6 sm:p-8 rounded-3xl max-w-lg w-full relative shadow-2xl border border-[#C9A063]/40">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#C9A063] hover:text-white text-gray-900 flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-1 block">
          Private Appointment
        </span>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
          Book Private Consultation
        </h3>
        <p className="text-xs text-gray-600 mb-5 leading-relaxed">
          Reserve an exclusive walkthrough of Mangalmurti Residency with DEVPRATH Senior Architects.
        </p>

        {/* 5 Equal-Spaced Authentic Brand Icons (Facebook Far-Left -> Instagram -> WhatsApp -> Email -> Call Far-Right) */}
        <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between w-full">
          {CONTACT_CHANNELS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={item.title}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer shrink-0 ${item.colorClass}`}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                <path d={item.svgPath} />
              </svg>
            </a>
          ))}
        </div>

        {/* Private Form Section */}
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <span className="material-symbols-outlined text-[#C9A063] text-5xl">
              verified
            </span>
            <h4 className="text-xl font-bold text-gray-900">Consultation Confirmed</h4>
            <p className="text-xs text-gray-600">
              Our executive concierge will contact you to confirm your calendar invite.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#C9A063] outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#C9A063] outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-xs text-gray-900 focus:border-[#C9A063] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Time Window
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-xs text-gray-900 focus:border-[#C9A063] outline-none transition-all"
                >
                  <option>Morning (10 AM - 1 PM)</option>
                  <option>Afternoon (1 PM - 4 PM)</option>
                  <option>Sunset (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A063] text-white font-semibold text-xs uppercase tracking-[2px] py-4 rounded-full hover:bg-[#B88C4D] transition-all mt-6 cursor-pointer font-bold active:scale-95 shadow-md"
            >
              Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
