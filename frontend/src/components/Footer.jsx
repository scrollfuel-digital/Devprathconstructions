import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png";
import SocialConnectBar from "./SocialConnectBar";
import { FOOTER_QUICK_LINKS } from "../constants/navigationData";

const OFFICE = {
  address:
    "Arpitshrushti, Behind Ganpati Temple, Near Tatya Tope Hall, Surendra Nagar, Nagpur - 440015",
  hours: "Mon-Fri, 10:30 AM - 07:00 PM",
  phones: [
    { label: "+91 99211 41299", href: "tel:+919921141299" },
    { label: "+91 99232 03281", href: "tel:+919923203281" },
  ],
  email: "devprathconstructions@gmail.com",
};

const ColumnLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9935A] mb-3 sm:mb-4">
    {children}
  </p>
);

export const Footer = () => {
  return (
    <footer className="bg-[#F2EDE4] text-[#1F1E1C] font-body pt-8 sm:pt-10 pb-4 border-t border-[#B9935A]/30 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* 100% Fully Responsive Grid: 1 col on mobile, 2 cols on tablet, 12 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-x-6 xl:gap-10 pb-6 border-b border-[#1F1E1C]/10 items-start">

          {/* Column 1: Brand Info */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-4">
            <Link to="/" className="mb-3 sm:mb-4 block">
              <img
                src={logo}
                alt="Devprath Constructions LLP"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain object-left max-w-[220px] sm:max-w-none"
              />
            </Link>
            <p className="text-sm text-[#4A453E] leading-relaxed font-medium max-w-sm">
              DEVPRATH CONSTRUCTIONS LLP builds quality homes in Nagpur with strong construction and MahaRERA-compliant transparency.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <ColumnLabel>Explore</ColumnLabel>
            <ul className="space-y-2.5 sm:space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <p className="text-sm text-[#4A453E] leading-relaxed font-medium">
                    <Link
                      to={link.path}
                      className="hover:text-[#B9935A] transition-colors duration-200 block"
                    >
                      {link.title}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <ColumnLabel>Connect</ColumnLabel>
            <div className="space-y-2.5 sm:space-y-3">
              <p className="flex items-center gap-2.5 sm:gap-3 text-sm text-[#4A453E] leading-relaxed font-medium">
                <Clock className="w-4 h-4 text-[#B9935A] shrink-0" />
                <span>{OFFICE.hours}</span>
              </p>
              {OFFICE.phones.map((phone) => (
                <p key={phone.href} className="flex items-center gap-2.5 sm:gap-3 text-sm text-[#4A453E] leading-relaxed font-medium">
                  <Phone className="w-4 h-4 text-[#B9935A] shrink-0" />
                  <a
                    href={phone.href}
                    className="hover:text-[#B9935A] transition-colors duration-200"
                  >
                    {phone.label}
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-2.5 sm:gap-3 text-sm text-[#4A453E] leading-relaxed font-medium">
                <Mail className="w-4 h-4 text-[#B9935A] shrink-0" />
                <a
                  href={`mailto:${OFFICE.email}`}
                  className="hover:text-[#B9935A] transition-colors duration-200 break-all"
                >
                  {OFFICE.email}
                </a>
              </p>
            </div>
            <div className="w-full max-w-[260px] pt-1">
              <SocialConnectBar
                containerClassName="w-full flex items-center justify-between sm:justify-evenly pt-2 mt-3"
                iconSizeClass="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Column 4: Operations Office */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <ColumnLabel>Reach Us</ColumnLabel>
            <address className="not-italic">
              <p className="flex items-start gap-2.5 sm:gap-3 text-sm text-[#4A453E] leading-relaxed font-medium">
                <MapPin className="w-4 h-4 text-[#B9935A] shrink-0 mt-0.5" />
                <span>{OFFICE.address}</span>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex items-center justify-center text-xs font-medium text-[#554F47] tracking-wide text-center">
          <p className="text-[11px] sm:text-xs">
            © {new Date().getFullYear()} DEVPRATH CONSTRUCTIONS LLP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;