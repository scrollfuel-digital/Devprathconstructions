import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import CTAButton from "./common/CTAButton";
import { NAV_LINKS } from "../constants/navigationData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isLinkActive = (path) => {
    if (path === "/") return pathname === "/";

    if (path === "/about-us") {
      return ["/about-us", "/aboutus"].includes(pathname);
    }

    if (path === "/projects" || path === "/project") {
      return [
        "/projects",
        "/project",
        "/completed-projects",
        "/completed-project",
      ].includes(pathname);
    }

    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full border-b border-gold/20 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-18 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Devprath Constructions LLP"
            className="h-18 sm:h-20 lg:h-22 w-auto object-contain shrink-0 -my-2 sm:-my-3"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={isLinkActive(item.path)}
              />
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <CTAButton
            to="/contact"
            label="ENQUIRE"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="p-2 text-text-dark lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gold/20 bg-cream px-5 py-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-text-dark/10 py-4 font-body text-xs uppercase tracking-[0.2em] transition-colors ${isLinkActive(item.path)
                  ? "font-semibold text-gold"
                  : "text-text-dark hover:text-gold"
                  }`}
              >
                {item.title}
              </Link>
            ))}

            <CTAButton
              to="/contact"
              label="ENQUIRE →"
              className="mt-5 w-full"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ item, isActive }) {
  return (
    <li>
      <Link
        to={item.path}
        className={`relative pb-1 font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:content-[''] after:transition-all after:duration-300 ${isActive
          ? "font-semibold text-gold after:w-full"
          : "text-text-dark hover:text-gold after:w-0 hover:after:w-full"
          }`}
      >
        {item.title}
      </Link>
    </li>
  );
}
