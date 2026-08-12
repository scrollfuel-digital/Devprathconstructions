import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import SocialConnectBar from "./SocialConnectBar";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_LANDMARK_PROJECTS,
  FOOTER_LEGAL_LINKS,
} from "../constants/navigationData";

export const Footer = () => {
  return (
    <footer className="bg-[#EBE6DF] text-gray-900 pt-12 sm:pt-14 pb-8 border-t border-[#B9935A]/30">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#B9935A]/20">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-start">
            <Link to="/" className="mb-4 block -ml-3 -mt-1">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-[102px] sm:h-[128px] w-auto object-contain object-left"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#4E453A] leading-relaxed font-normal max-w-sm">
              DEVPRATH CONSTRUCTIONS LLP is committed to crafting quality residential landmarks with uncompromised engineering quality, RERA compliance, and timeless aesthetics in Nagpur.
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#B9935A] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4E453A] font-normal">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="hover:text-[#B9935A] transition-colors duration-300 block">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#B9935A] mb-4">
              Landmark Projects
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4E453A] font-normal">
              {FOOTER_LANDMARK_PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <Link to={proj.path} className="hover:text-[#B9935A] transition-colors duration-300 block">
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Connect (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[2px] text-[#B9935A] mb-4">
              Connect With Us
            </h4>
            <p className="text-xs sm:text-sm text-[#4E453A] font-normal leading-relaxed mb-4">
              Follow Devprath Constructions for live site progress updates, luxury project launches, and architectural media highlights.
            </p>
            <SocialConnectBar
              containerClassName="flex items-center justify-between w-full pt-1"
              iconSizeClass="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#4E453A] font-normal">
          <p>© {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6 font-normal">
            {FOOTER_LEGAL_LINKS.map((legal) => (
              <Link key={legal.id} to={legal.path} className="hover:text-[#B9935A] transition-colors duration-300">
                {legal.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;