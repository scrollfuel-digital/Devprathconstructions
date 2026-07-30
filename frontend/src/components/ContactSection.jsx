import React, { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Mangalmurti Residency - 3 BHK",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Mangalmurti Residency - 3 BHK",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5EF] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Enquiry Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#C9A063]/30 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl font-extrabold text-[#172235] mb-2">
              Experience <span className="gold-gradient-text">Devprath</span>
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Fill out your contact details and our senior property advisor will reach out to you within 2 business hours.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#C9A063]/15 border border-[#C9A063] text-center animate-fadeIn">
                <span className="material-symbols-outlined text-[#C9A063] text-4xl mb-2">
                  check_circle
                </span>
                <h4 className="text-lg font-bold text-[#172235]">
                  Enquiry Received!
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Thank you for your interest. Our representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A063] focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A063] focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A063] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172235] mb-2">
                    Project Preference
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A063] focus:outline-none text-sm transition-colors bg-white text-gray-700"
                  >
                    <option value="Mangalmurti Residency - 3 BHK">
                      Mangalmurti Residency — 3 BHK (Royal)
                    </option>
                    <option value="Mangalmurti Residency - 4 BHK">
                      Mangalmurti Residency — 4 BHK (Imperial)
                    </option>
                    <option value="Penthouse Collection">
                      The Penthouse Collection
                    </option>
                    <option value="Commercial Leasing">
                      Commercial &amp; Corporate Spaces
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C9A063] py-4 text-xs font-semibold uppercase tracking-[3px] text-white transition-all hover:bg-[#B88C4D] hover:shadow-xl active:scale-95 cursor-pointer mt-4"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column - HQ Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#C9A063] mb-2 block">
                Visit Our Office
              </span>
              <h3 className="text-2xl font-bold text-[#172235] mb-6">
                Corporate Headquarters
              </h3>

              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C9A063] text-2xl mt-0.5">
                    location_on
                  </span>
                  <div>
                    <h5 className="font-bold text-[#172235]">Address</h5>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      4th Floor, Devprath Tower, Prime Avenue, Near City Center, Nashik, MH - 422005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C9A063] text-2xl mt-0.5">
                    call
                  </span>
                  <div>
                    <h5 className="font-bold text-[#172235]">Phone</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      +91 98765 43210 / +91 253 2345678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C9A063] text-2xl mt-0.5">
                    mail
                  </span>
                  <div>
                    <h5 className="font-bold text-[#172235]">Email</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      info@devprathconstructions.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C9A063] text-2xl mt-0.5">
                    schedule
                  </span>
                  <div>
                    <h5 className="font-bold text-[#172235]">Office Hours</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Monday – Saturday: 9:30 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30">
              <h5 className="text-sm font-bold text-[#172235] mb-1">
                Direct WhatsApp Consultation
              </h5>
              <p className="text-xs text-gray-600 mb-4">
                Chat with our sales team instantly for e-brochures &amp; instant site visits.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20Mangalmurti%20Residency."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-[#20b858] flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
