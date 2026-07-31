import React, { useState } from "react";
import logo from "../assets/logo/logo.png";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3500);
  };

  return (
    <footer className="bg-[#EBE6DF] text-[#172235] pt-20 pb-10 border-t border-[#B9935A]/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B9935A]/20">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="mb-6 block">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-28 sm:h-32 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-gray-700 leading-relaxed font-light mb-6 max-w-sm">
              DEVPRATH CONSTRUCTIONS LLP is committed to crafting ultra-luxury residential landmarks with uncompromised engineering quality, RERA compliance, and timeless aesthetics.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9935A]">
                RERA Reg No: P51600012345
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#B9935A] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 font-light">
              <li>
                <a href="#about" className="hover:text-[#B9935A] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#B9935A] transition-colors duration-300">
                  Projects Spotlight
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="hover:text-[#B9935A] transition-colors duration-300">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#B9935A] transition-colors duration-300">
                  Resort Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B9935A] transition-colors duration-300">
                  Prime Location
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#B9935A] mb-6">
              Landmark Projects
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 font-light">
              <li>
                <a href="#projects" className="hover:text-[#B9935A] transition-colors duration-300">
                  Mangalmurti Residency (Nagpur)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
                  Riddhi Siddhi Heights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
                  Vignaharta Luxury Enclave
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
                  The Penthouse Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#B9935A] mb-6">
              Newsletter
            </h4>
            <p className="text-xs text-gray-700 font-light mb-4">
              Subscribe to receive exclusive project updates and preview invites.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#B9935A]/20 border border-[#B9935A] text-xs text-center text-[#8B6732]">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#B9935A]/30 text-xs text-[#172235] placeholder-gray-500 focus:outline-none focus:border-[#B9935A]"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#B9935A] py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent cursor-pointer shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-light">
          <p>© {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#B9935A] transition-colors duration-300">
              RERA Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;