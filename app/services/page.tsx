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
  Network,
} from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Industrial Services & Multi-Pillar Solutions | ${SEO_CONFIG.company.fullName}`,
  description: `Comprehensive industrial services from ${SEO_CONFIG.company.fullName}, part of ${SEO_CONFIG.company.parentCompany}. Encompassing PLTD Power Generation, FTTH Telecom Rollouts, Heavy Equipment Rentals, Aerial Work Platforms, and Custom Fabrication.`,
  keywords: [
    "industrial services",
    "PLTD power generation services",
    "FTTH telecom rollout",
    "equipment rental services",
    "aerial platform rental",
    "heavy equipment rental",
    "genset rental",
    "fabrication services",
  ],
  openGraph: {
    title: `Industrial Services | ${SEO_CONFIG.company.name}`,
    description: `Comprehensive industrial solutions across 3 strategic business pillars from ${SEO_CONFIG.company.fullName}.`,
  },
};

const serviceCategories = [
  {
    title: "PLTD Power",
    subtitle: "Generation & O&M",
    description:
      "Captive diesel power generation, multi-megawatt power purchase agreements (PPA/IPP), and full operation and maintenance (O&M) contracts for industrial sites.",
    icon: <Zap className="w-12 h-12" />,
    href: "/business-pillars/pltd-power-generation",
    features: ["Multi-MW Capacity", "PPA / IPP Contracts", "99.8% Availability SLA"],
  },
  {
    title: "FTTH Telecom",
    subtitle: "Rollout & Splicing",
    description:
      "Turnkey fiber optic network engineering (OSP/ISP), pole installation civil works, aerial and underground trenching, ODC/ODP splicing, and two-way OTDR testing.",
    icon: <Network className="w-12 h-12" />,
    href: "/services/ftth-telecom",
    features: ["Outside & Inside Plant", "Loss < 0.05 dB", "24/7 SLA Recovery"],
  },
  {
    title: "Boomlift &",
    subtitle: "Scissor Lift",
    description:
      "Certified aerial work platforms engineered for safe, efficient high-altitude access in industrial construction, inspection, and maintenance.",
    icon: <ArrowUpFromLine className="w-12 h-12" />,
    href: "/services/boomlift",
    features: [
      "Electric & Diesel Lifts",
      "Heights up to 40m+",
      "SILO Certified Safety",
    ],
  },
  {
    title: "Heavy Duty",
    subtitle: "Equipment Fleet",
    description:
      "Heavy machinery rental and continuous fleet management for large-scale earthmoving, mining infrastructure, and road civil works.",
    icon: <Settings className="w-12 h-12" />,
    href: "/services/heavy-duty",
    features: ["Excavators", "Bulldozers", "Wheel Loaders"],
  },
  {
    title: "Silent Diesel",
    subtitle: "Genset Systems",
    description:
      "Deployment of high-capacity silent canopy diesel generators (250 kVA - 2,500+ kVA) featuring superior acoustic attenuation technology.",
    icon: <Zap className="w-12 h-12" />,
    href: "/services/genset",
    features: ["Perkins & Cummins", "Silent Canopy <70dB", "24/7 Field Support"],
  },
  {
    title: "Agriculture",
    subtitle: "Machinery Solutions",
    description:
      "Modern agricultural combine harvesters and supporting harvesting logistics to maximize grain yield and field efficiency.",
    icon: <Tractor className="w-12 h-12" />,
    href: "/services/agricultur",
    features: ["Combine Harvesters", "Field Maintenance", "Harvest Logistics"],
  },
  {
    title: "Custom",
    subtitle: "Fabrication",
    description:
      "Precision structural steel fabrication, customized industrial attachments, acoustic genset canopies, and specialized fuel storage tanks.",
    icon: <Hammer className="w-12 h-12" />,
    href: "/services/fabrication",
    features: ["Steel Structures", "Machinery Parts", "On-site Certified Welding"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-services.jpg"
          alt="Teknika Pesona Kahayan Industrial Services"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex mb-4 text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold font-barlow-condensed">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">Services</span>
          </nav>
          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Comprehensive Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase tracking-tight leading-tight">
            Services & <span className="text-[#FACC15]">Solutions</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl font-barlow leading-relaxed">
            Delivering multi-disciplinary technical excellence across captive power generation, heavy machinery fleet management, optical telecommunications, and custom fabrication.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm flex flex-col group"
              >
                <div className="text-[#111111] mb-6 p-3 bg-[#FACC15] w-fit rounded-sm group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-1 font-barlow-condensed uppercase">
                  {service.title}
                </h3>
                <h4 className="text-xl font-bold text-gray-600 mb-4 font-barlow-condensed uppercase">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 font-barlow text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-barlow-condensed mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-700 font-barlow flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FACC15] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center font-bold text-xs uppercase tracking-wider text-[#111111] gap-2 hover:gap-3 transition-all group font-barlow-condensed pt-2"
                >
                  Explore Service <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
