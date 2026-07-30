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
    <footer className="bg-[#172235] text-white pt-20 pb-10 border-t border-[#C9A063]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="mb-6 block">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-16 w-auto object-contain brightness-200"
              />
            </a>
            <p className="text-xs text-gray-300 leading-relaxed font-light mb-6 max-w-sm">
              DEVPRATH CONSTRUCTIONS LLP is committed to crafting ultra-luxury residential landmarks with uncompromised engineering quality, RERA compliance, and timeless aesthetics.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A063]">
                RERA Reg No: P51600012345
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#F0D060] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-[#C9A063] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C9A063] transition-colors">
                  Projects Spotlight
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="hover:text-[#C9A063] transition-colors">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#C9A063] transition-colors">
                  Resort Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C9A063] transition-colors">
                  Prime Location
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#F0D060] mb-6">
              Landmark Projects
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li>
                <a href="#featured-project" className="hover:text-[#C9A063] transition-colors">
                  Mangalmurti Residency (Nashik)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C9A063] transition-colors">
                  Riddhi Siddhi Heights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C9A063] transition-colors">
                  Vignaharta Luxury Enclave
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C9A063] transition-colors">
                  The Penthouse Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#F0D060] mb-6">
              Newsletter
            </h4>
            <p className="text-xs text-gray-300 font-light mb-4">
              Subscribe to receive exclusive project updates and preview invites.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#C9A063]/20 border border-[#C9A063] text-xs text-center text-[#F0D060]">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A063]"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C9A063] py-3 text-xs font-semibold uppercase tracking-[2px] text-white hover:bg-[#B88C4D] transition-all cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C9A063] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C9A063] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#C9A063] transition-colors">
              RERA Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;