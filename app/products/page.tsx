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
} from "lucide-react";

export const metadata: Metadata = {
  title: `Industrial Products & Equipment | ${SEO_CONFIG.company.fullName}`,
  description: `Discover our comprehensive range of premium industrial equipment and machinery from ${SEO_CONFIG.company.fullName}. Part of ${SEO_CONFIG.company.parentCompany}, we offer material handling, cranes, and specialized machinery for industrial operations.`,
  keywords: [
    "industrial equipment",
    "material handling equipment",
    "crane systems",
    "specialized machinery",
    "equipment rental products",
    "heavy machinery",
    "construction equipment",
  ],
  openGraph: {
    title: `Industrial Products | ${SEO_CONFIG.company.name}`,
    description: `Premium equipment catalog from ${SEO_CONFIG.company.fullName} - your trusted partner for industrial solutions.`,
  },
};

const productCategories = [
  {
    title: "Material Handling",
    subtitle: "Equipment",
    description:
      "Efficient solutions for moving, lifting, and controlling materials in industrial environments.",
    icon: <Move className="w-12 h-12" />,
    href: "/products/material-handling",
    features: ["Forklifts", "Material Lifters", "Loading Solutions"],
  },
  {
    title: "Crane",
    subtitle: "Systems",
    description:
      "Engineering excellence in lifting technology for complex construction and workshops.",
    icon: <Construction className="w-12 h-12" />,
    href: "/products/cranes",
    features: ["Tower Cranes", "Mobile Cranes", "Overhead Systems"],
  },
  {
    title: "Specialized",
    subtitle: "Equipment",
    description:
      "Providing niche solutions for agriculture, power generation, and difficult terrain.",
    icon: <Truck className="w-12 h-12" />,
    href: "/products/specialized",
    features: [
      "Crawler Dumpers",
      "Silent Diesel Gensets",
      "Combine Harvesters",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-products.jpg"
          alt="Industrial warehouse with equipment"
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
            <span className="text-[#FACC15]">Our Products</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-barlow-condensed uppercase italic tracking-tighter leading-none">
            Our <span className="text-[#FACC15]">Equipment</span> <br />{" "}
            Categories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-[#FACC15] pl-6 py-2">
            Explore our comprehensive range of high-performance industrial
            machinery designed to meet the rigorous demands of your operations.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {productCategories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col bg-white group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-10 flex-grow">
                  <div className="text-[#111111] mb-8 group-hover:scale-110 group-hover:text-[#FACC15] transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase leading-tight">
                    {cat.title} <br />
                    <span className="text-gray-400 group-hover:text-[#FACC15] transition-colors">
                      {cat.subtitle}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {cat.features.map((feature, fIdx) => (
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
                  href={cat.href}
                  className="bg-[#111111] group-hover:bg-[#FACC15] p-6 flex justify-between items-center transition-colors duration-300"
                >
                  <span className="text-white group-hover:text-[#111111] font-bold uppercase tracking-widest text-sm">
                    Explore Category
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#FACC15] group-hover:text-[#111111]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-white py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-[#111111] uppercase font-barlow-condensed mb-4 italic">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-600 text-lg">
              We specialize in custom fleet solutions and can source specific
              machinery to meet your project requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-[#FACC15] text-[#111111] px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all shadow-lg"
          >
            Technical Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
