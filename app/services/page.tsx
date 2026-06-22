import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpFromLine,
  Settings,
  Tractor,
  Zap,
  Hammer,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Industrial Services & Equipment Rental | ${SEO_CONFIG.company.fullName}`,
  description: `Expert industrial services from ${SEO_CONFIG.company.fullName}, part of ${SEO_CONFIG.company.parentCompany}. We provide aerial platform rental, heavy equipment services, agriculture solutions, genset rental, and professional fabrication.`,
  keywords: [
    "industrial services",
    "equipment rental services",
    "aerial platform rental",
    "heavy equipment rental",
    "genset rental",
    "equipment rental Jakarta",
    "machinery rental services",
    "fabrication services",
  ],
  openGraph: {
    title: `Industrial Services | ${SEO_CONFIG.company.name}`,
    description: `Comprehensive industrial services and equipment rental solutions from ${SEO_CONFIG.company.fullName}.`,
  },
};

const serviceCategories = [
  {
    title: "Boomlift &",
    subtitle: "Scissor Lift",
    description:
      "Premium aerial work platforms for safe and efficient height access in construction and maintenance.",
    icon: <ArrowUpFromLine className="w-12 h-12" />,
    href: "/services/boomlift",
    features: [
      "Electric & Diesel Lifts",
      "Height up to 40m+",
      "Safety Certified",
    ],
  },
  {
    title: "Heavy Duty",
    subtitle: "Equipment",
    description:
      "Reliable heavy machinery rental and maintenance services for large-scale earthmoving and mining.",
    icon: <Settings className="w-12 h-12" />,
    href: "/services/heavy-duty",
    features: ["Excavators", "Bulldozers", "Wheel Loaders"],
  },
  {
    title: "Agriculture",
    subtitle: "Solutions",
    description:
      "Specialized machinery and support for modern agriculture to maximize crop productivity.",
    icon: <Tractor className="w-12 h-12" />,
    href: "/services/agricultur",
    features: ["Combine Harvesters", "Maintenance", "Field Support"],
  },
  {
    title: "Genset Silent",
    subtitle: "Diesel",
    description:
      "High-performance power generation services with silent technology for uninterrupted operations.",
    icon: <Zap className="w-12 h-12" />,
    href: "/services/genset",
    features: ["Multiple KVA Range", "Fuel Efficient", "24/7 Support"],
  },
  {
    title: "Custom",
    subtitle: "Fabrication",
    description:
      "Precision engineering and fabrication services for industrial parts and structural components.",
    icon: <Hammer className="w-12 h-12" />,
    href: "/services/fabrication",
    features: ["Steel Structure", "Machinery Parts", "On-site Welding"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-services.jpg"
          alt="Construction site with heavy machinery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex mb-6 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Our Services</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-barlow-condensed uppercase italic tracking-tighter leading-none">
            Industrial <span className="text-[#FACC15]">Solutions</span> &{" "}
            <br /> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-[#FACC15] pl-6 py-2">
            Delivering excellence through technical expertise, premium equipment
            rental, and comprehensive support systems.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-white group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-10 flex-grow">
                  <div className="text-[#111111] mb-8 group-hover:scale-110 group-hover:text-[#FACC15] transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase leading-tight">
                    {service.title} <br />
                    <span className="text-gray-400 group-hover:text-[#FACC15] transition-colors">
                      {service.subtitle}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-sm font-bold uppercase tracking-wide text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FACC15] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  className="bg-[#111111] group-hover:bg-[#FACC15] p-6 flex justify-between items-center transition-colors duration-300"
                >
                  <span className="text-white group-hover:text-[#111111] font-bold uppercase tracking-widest text-sm">
                    Service Details
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#FACC15] group-hover:text-[#111111]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
