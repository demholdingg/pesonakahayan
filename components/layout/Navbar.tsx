"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Company Profile", href: "/about/company-profile" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Business Focus", href: "/about/business-focus" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    submenu: [
      {
        name: "Material Handling Equipment",
        href: "/products/material-handling",
      },
      { name: "Crane Systems", href: "/products/cranes" },
      { name: "Specialized Equipment", href: "/products/specialized" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Boomlift & Scissor Lift", href: "/services/boomlift" },
      { name: "Heavy Duty Equipment", href: "/services/heavy-duty" },
      { name: "Agricultur / Combine Harvester", href: "/services/agricultur" },
      { name: "Genset KVA Silent Diesel", href: "/services/genset" },
      { name: "Fabrication", href: "/services/fabrication" },
    ],
  },
  { name: "Supporting Documents", href: "/docs" },
  { name: "Contact", href: "/contact" },
];

// Halaman yang punya hero transparan (navbar overlay di atas hero gelap)
const TRANSPARENT_HERO_PAGES = ["/"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Apakah halaman ini punya hero transparan?
  const isTransparentPage = TRANSPARENT_HERO_PAGES.includes(pathname);

  // Navbar transparan hanya jika halaman hero DAN belum di-scroll
  const isTransparent = isTransparentPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    // Cek posisi awal
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup mobile menu saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-5"
          : "bg-white/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3 border-b border-neutral-100"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="shrink-0 transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.png"
                alt="Teknika Pesona Kahayan Logo"
                className="w-10 h-10 md:w-11 md:h-11 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-sm md:text-base font-bold tracking-wide uppercase transition-colors font-barlow-condensed ${
                  isTransparent ? "text-white" : "text-[#111111]"
                }`}
              >
                Teknika Pesona
              </span>
              <span
                className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-colors font-barlow-condensed ${
                  isTransparent ? "text-yellow-300" : "text-[#FACC15]"
                }`}
              >
                Kahayan
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-sm font-medium transition-all duration-200 font-barlow ${
                          isTransparent
                            ? isActive
                              ? "text-[#FACC15]"
                              : "text-white/90 hover:text-white"
                            : isActive
                              ? "text-[#FACC15]"
                              : "text-[#111111] hover:text-[#FACC15]"
                        }`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Desktop */}
                      <div
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                        className={`absolute left-0 top-full mt-1 w-60 bg-white border border-neutral-100 rounded shadow-xl py-1.5 transition-all duration-200 origin-top ${
                          activeDropdown === item.name
                            ? "opacity-100 visible scale-y-100 translate-y-0"
                            : "opacity-0 invisible scale-y-95 -translate-y-1"
                        }`}
                        style={{ transformOrigin: "top" }}
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`flex items-center px-4 py-2.5 text-sm transition-all duration-150 border-l-2 mx-1 rounded-sm ${
                              pathname === sub.href
                                ? "text-[#111111] font-semibold border-[#FACC15] bg-yellow-50"
                                : "text-neutral-600 border-transparent hover:text-[#111111] hover:border-[#FACC15] hover:bg-neutral-50"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3.5 py-2 rounded-sm text-sm font-medium transition-all duration-200 font-barlow ${
                        isTransparent
                          ? isActive
                            ? "text-[#FACC15]"
                            : "text-white/90 hover:text-white"
                          : isActive
                            ? "text-[#FACC15]"
                            : "text-[#111111] hover:text-[#FACC15]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* CTA Button */}
            <li className="ml-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#FACC15] text-[#111111] text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 shadow-sm hover:shadow-md font-barlow-condensed"
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-[#111111] hover:bg-neutral-100"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[90vh] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white rounded shadow-xl border border-neutral-100 overflow-hidden">
            <ul className="py-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li
                    key={item.name}
                    className="border-b border-neutral-50 last:border-0"
                  >
                    {item.submenu ? (
                      <>
                        <button
                          className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-left transition-colors font-barlow ${
                            isActive
                              ? "text-[#FACC15] bg-yellow-50"
                              : "text-[#111111] hover:bg-neutral-50"
                          }`}
                          onClick={() => toggleMobileSubmenu(item.name)}
                          aria-expanded={openMobileSubmenu === item.name}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 text-neutral-400 ${
                              openMobileSubmenu === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-250 ${
                            openMobileSubmenu === item.name
                              ? "max-h-80 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-neutral-50 border-t border-neutral-100">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-2 pl-8 pr-5 py-3 text-sm transition-colors border-l-4 ${
                                  pathname === sub.href
                                    ? "text-[#111111] font-semibold border-[#FACC15] bg-yellow-50"
                                    : "text-neutral-600 border-transparent hover:text-[#111111] hover:border-[#FACC15] hover:bg-white"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-5 py-3.5 text-sm font-medium transition-colors font-barlow ${
                          isActive
                            ? "text-[#FACC15] bg-yellow-50 border-l-4 border-[#FACC15]"
                            : "text-[#111111] hover:bg-neutral-50 border-l-4 border-transparent"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li className="px-4 py-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-[#FACC15] text-[#111111] text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-yellow-400 transition-colors font-barlow-condensed"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
