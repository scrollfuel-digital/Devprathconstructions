import React, { useState } from 'react';

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
      <div className="bg-white p-8 sm:p-10 rounded-3xl max-w-lg w-full relative shadow-2xl border border-[#C9A063]/40">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#C9A063] hover:text-white text-[#172235] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-1 block">
          Private Appointment
        </span>
        <h3 className="text-2xl font-extrabold text-[#172235] mb-2">
          Book Private Consultation
        </h3>
        <p className="text-xs text-gray-600 mb-6">
          Reserve an exclusive walkthrough of Mangalmurti Residency with DEVPRATH Senior Architects.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <span className="material-symbols-outlined text-[#C9A063] text-5xl">
              verified
            </span>
            <h4 className="text-xl font-bold text-[#172235]">Consultation Confirmed</h4>
            <p className="text-xs text-gray-600">
              Our executive concierge will contact you to confirm your calendar invite.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#172235] focus:border-[#C9A063] outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#172235] focus:border-[#C9A063] outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-xs text-[#172235] focus:border-[#C9A063] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                  Time Window
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-xs text-[#172235] focus:border-[#C9A063] outline-none transition-all"
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
