import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Move,
  Construction,
  Truck,
  ArrowRight,
  Zap,
  Network,
} from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Industrial Products & Equipment Catalog | ${SEO_CONFIG.company.fullName}`,
  description: `Explore the product catalog of ${SEO_CONFIG.company.fullName}: material handling equipment, diesel power generation sets, crane systems, and telecommunications hardware.`,
  keywords: [
    "industrial equipment",
    "material handling equipment",
    "industrial gensets",
    "crane systems",
    "specialized machinery",
    "Teknika Pesona Kahayan",
  ],
  openGraph: {
    title: `Industrial Products | ${SEO_CONFIG.company.name}`,
    description: `Premium equipment and machinery catalog from ${SEO_CONFIG.company.fullName}.`,
  },
};

const productCategories = [
  {
    title: "Material Handling",
    subtitle: "Equipment",
    description:
      "Engineered solutions for moving, lifting, and organizing warehouse and site inventory: Diesel Forklifts, Lithium Electric Forklifts, and Reach Trucks.",
    icon: <Move className="w-12 h-12" />,
    href: "/products/material-handling",
    features: ["Forklifts 2.5 - 16T", "Lithium Battery Forklifts", "High-Reach Trucks (12.5m)"],
  },
  {
    title: "Crane & Lifting",
    subtitle: "Systems",
    description:
      "Vertical lifting engineering for heavy civil construction, workshop fabrication, and shipyard logistics.",
    icon: <Construction className="w-12 h-12" />,
    href: "/products/cranes",
    features: ["Tower Cranes", "Mobile Cranes", "Overhead Crane Systems"],
  },
  {
    title: "Power Generation",
    subtitle: "Genset Systems",
    description:
      "Silent and open-type industrial diesel generators (250 kVA - 2,500+ kVA) powered by Perkins, Cummins, and MTU.",
    icon: <Zap className="w-12 h-12" />,
    href: "/services/genset",
    features: ["Acoustic Canopy (<70dB)", "Synchronizing Panels", "Continuous Duty Rating"],
  },
  {
    title: "Specialized",
    subtitle: "Machinery",
    description:
      "Niche equipment tailored for agricultural harvesting, wetland crawler dumpers, and specialized hydraulic forklift attachments.",
    icon: <Truck className="w-12 h-12" />,
    href: "/products/specialized",
    features: [
      "Tracked Crawler Dumpers",
      "Combine Harvesters",
      "Special Forklift Clamps",
    ],
  },
  {
    title: "FTTH Telecom",
    subtitle: "Hardware & Enclosures",
    description:
      "Carrier-grade passive optical hardware: Optical Distribution Cabinets (ODC), Optical Distribution Points (ODP), ADSS cable, and subduct HDPE.",
    icon: <Network className="w-12 h-12" />,
    href: "/services/ftth-telecom",
    features: ["ODC 144 / 288 Core", "Pole-Mount ODP Enclosures", "Waterproof Joint Closures"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-products.jpg"
          alt="Industrial warehouse with equipment"
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
            <span className="text-[#FACC15]">Our Products</span>
          </nav>
          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Fleet & Unit Catalog
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase tracking-tight leading-tight">
            Our Equipment <span className="text-[#FACC15]">Categories</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl font-barlow leading-relaxed">
            Explore our curated portfolio of high-performance machinery and infrastructure hardware built to satisfy the most demanding industrial environments.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm flex flex-col group"
              >
                <div className="text-[#111111] mb-6 p-3 bg-[#FACC15] w-fit rounded-sm group-hover:scale-105 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-1 font-barlow-condensed uppercase">
                  {category.title}
                </h3>
                <h4 className="text-xl font-bold text-gray-600 mb-4 font-barlow-condensed uppercase">
                  {category.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 font-barlow text-sm leading-relaxed flex-grow">
                  {category.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-barlow-condensed mb-2">
                    Key Features & Options:
                  </p>
                  <ul className="space-y-1">
                    {category.features.map((feature, idx) => (
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
                  href={category.href}
                  className="inline-flex items-center font-bold text-xs uppercase tracking-wider text-[#111111] gap-2 hover:gap-3 transition-all group font-barlow-condensed pt-2"
                >
                  View Specifications <ArrowRight className="w-4 h-4 text-[#FACC15]" />
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
