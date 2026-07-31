import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about-us" },
  { id: 3, title: "Projects", path: "/projects" },
  { id: 4, title: "Gallery", path: "/gallery" },
  { id: 5, title: "Blog", path: "/blog" },
  { id: 6, title: "Contact", path: "/contact" },
];

const SCROLL_OFFSET = 80;

export default function Navbar({ onBookConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C9A063]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* ================= Logo ================= */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Devprath Constructions LLP"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          />
        </Link>

        {/* ================= Navigation ================= */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 font-medium">
            {NAV_LINKS.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isScrolled={isScrolled}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            ))}
          </ul>
        </nav>

        {/* ================= CTA Button ================= */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onBookConsultation}
            className="rounded-full bg-[#C9A063] px-7 py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B88C4D] hover:shadow-xl active:scale-95 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* ================= Mobile Hamburger ================= */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#C9A063] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* ================= Mobile Menu Drawer ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#C9A063]/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-fadeIn">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[2px] text-[#172235] hover:text-[#C9A063] py-2 border-b border-gray-100 transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookConsultation && onBookConsultation();
            }}
            className="w-full mt-2 rounded-full bg-[#C9A063] py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-[#B88C4D]"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}

function NavItem({ item, isScrolled, activeSection, setActiveSection }) {
  const className = `relative uppercase tracking-[2px] text-xs font-semibold transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#C9A063] after:transition-all after:duration-300 ${
    isScrolled
      ? "text-[#172235] hover:text-[#C9A063]"
      : "text-white hover:text-[#C9A063]"
  } after:w-0 hover:after:w-full`;

  return (
    <li>
      <Link
        to={item.path}
        className={className}
        onClick={() => setActiveSection(item.title.toLowerCase())}
      >
        {item.title}
      </Link>
    </li>
  );
}