"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, HardHat } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Company Profile", href: "/about#profile" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Business Focus", href: "/about#focus" },
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
  { name: "Projects", href: "/projects" },
  { name: "Supporting Documents", href: "/docs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky effect styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      } border-b border-neutral-100`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo SVG */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-secondary p-2 rounded-sm transform group-hover:rotate-12 transition-transform">
              <HardHat className="w-6 h-6 text-neutral-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-bold text-primary leading-none">
                TEKNIKA PESONA
              </span>
              <span className="text-sm font-heading font-bold text-secondary tracking-[0.2em]">
                KAHAYAN
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-4 py-2 font-sans font-medium text-primary hover:text-secondary transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Desktop */}
                    <div
                      className={`absolute left-0 w-64 bg-white border border-neutral-100 rounded-sm shadow-2xl py-2 transition-all duration-200 ${activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-secondary border-l-2 border-transparent hover:border-secondary transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 font-sans font-medium text-primary hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary p-2 hover:bg-neutral-50 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ease-in-out ${isOpen ? "max-h-[80vh] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
        >
          <ul className="pb-6 space-y-1">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-neutral-50 last:border-0"
              >
                {item.submenu ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-secondary font-heading font-bold uppercase text-xs tracking-wider">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1 mt-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-neutral-600 hover:text-secondary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 font-sans font-medium text-primary hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
