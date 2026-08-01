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
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-[#B9935A]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= Logo ================= */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Devprath Constructions LLP"
            className={`object-contain transition-all duration-300 ${
              isScrolled
                ? "h-18 sm:h-20 max-h-[72px] w-[210px] sm:w-[250px]"
                : "h-24 sm:h-28 max-h-[96px] w-[260px] sm:w-[320px]"
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
            className="rounded-full bg-[#B9935A] px-7 py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent hover:shadow-xl active:scale-95 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* ================= Mobile Hamburger ================= */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#B9935A] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* ================= Mobile Menu Drawer ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#B9935A]/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-fadeIn">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={{ color: "#B9935A" }}
              onClick={() => {
                setActiveSection(item.title.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="text-sm font-bold uppercase tracking-[2px] py-2 border-b border-gray-100 transition-colors duration-300 hover:opacity-80"
            >
              {item.title}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookConsultation && onBookConsultation();
            }}
            className="w-full mt-2 rounded-full bg-[#B9935A] py-3 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732]"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}

function NavItem({ item, isScrolled, activeSection, setActiveSection }) {
  const isActive = activeSection === item.title.toLowerCase();

  return (
    <li>
      <Link
        to={item.path}
        style={{ color: "#B9935A" }}
        onClick={() => setActiveSection(item.title.toLowerCase())}
        className={`relative uppercase tracking-[2px] text-xs font-bold transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2.5px] after:bg-[#B9935A] after:transition-all after:duration-300 ${
          isActive ? "after:w-full font-extrabold" : "after:w-0 hover:after:w-full"
        }`}
      >
        {item.title}
      </Link>
    </li>
  );
}