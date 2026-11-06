import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Silent Diesel Genset & Power Systems | ${SEO_CONFIG.company.fullName}`,
  description: `Professional silent diesel genset solutions and power generation systems from ${SEO_CONFIG.company.fullName}, part of ${SEO_CONFIG.company.parentCompany}. Reliable power generation for industrial operations.`,
  keywords: [
    "genset rental",
    "diesel generator",
    "power generation",
    "silent genset",
    "industrial generator rental",
    "emergency power",
  ],
  openGraph: {
    title: `Silent Diesel Genset Services | ${SEO_CONFIG.company.name}`,
    description: `Reliable power generation solutions with silent diesel gensets from ${SEO_CONFIG.company.fullName}.`,
  },
};

type DetailItem = {
  title: string;
  description: string;
  image: string;
  brandLogo?: string;
  brandName?: string;
};

const details: DetailItem[] = [
  {
    title: "Perkins Silent Genset",
    description:
      "High-quality silent diesel generators by Perkins, ensuring reliable and quiet power for sensitive environments and continuous operations.",
    image: "/images/products/genseet.png",
    brandLogo: "/images/brands/perkins-logo.svg",
  },
  {
    title: "Cummins Open Type Genset",
    description:
      "Robust open-type generator sets from Cummins offering maximum power output, rapid transient response, and accessible maintenance points.",
    image: "/images/products/cummins-open-genset.webp",
    brandLogo: "/images/brands/cummins_logo.png",
  },
  {
    title: "Kubota Control Panel",
    description:
      "Advanced control panels for precise electrical monitoring, automatic transfer switching (ATS), and automated multi-unit synchronization.",
    image: "/images/products/kubota-control-panel.jpg",
    brandLogo: "/images/brands/kubota-Logo.svg",
  },
  {
    title: "MTU Power Generator",
    description:
      "Heavy-duty MTU gensets built for mission-critical industrial applications, continuous heavy loads, and unmatched operational endurance.",
    image: "/images/products/mtu-genset.png",
    brandLogo: "/images/brands/mtu-logo.png",
  },
];

export default function GensetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-genset.jpg"
          alt="Power generation silent diesel gensets"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/services" className="hover:text-[#FACC15]">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Genset & Power</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Power Generation <span className="text-[#FACC15]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-barlow">
            Ensuring uninterrupted operations with reliable, quiet, and fuel-efficient diesel power generation systems.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          {/* Banner PLTD Power Generation */}
          <div className="mb-16 bg-[#111111] text-white p-8 md:p-10 rounded border-l-4 border-[#FACC15] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-xs uppercase font-bold text-[#FACC15] tracking-widest font-barlow-condensed">
                Core Business Pillar 01 &bull; Energy
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-barlow-condensed uppercase mt-1">
                Looking for Multi-Megawatt Diesel Power Plants (PLTD)?
              </h3>
              <p className="text-sm text-gray-300 font-barlow mt-2 max-w-2xl leading-relaxed">
                We provide long-term Power Purchase Agreements (PPA), turnkey EPC power plant construction, synchronizing switchboards, and full Operation & Maintenance (O&M) contracts for mining and industrial facilities.
              </p>
            </div>
            <Link
              href="/business-pillars/pltd-power-generation"
              className="bg-[#FACC15] text-[#111111] px-6 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors shrink-0"
            >
              Explore PLTD Pillar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.map((item, index) => (
              <div
                key={index}
                className="bg-white border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm group overflow-hidden flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="h-10 mb-4 flex items-center">
                    {item.brandLogo ? (
                      <div className="relative h-8 w-28 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={item.brandLogo}
                          alt={`${item.title} Logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <span className="font-bold text-sm text-gray-400 uppercase tracking-wider font-barlow-condensed">
                        {item.brandName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3 font-barlow-condensed uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs font-barlow leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center font-bold text-xs uppercase tracking-wider text-[#111111] gap-2 hover:gap-3 transition-all group mt-auto w-fit font-barlow-condensed"
                  >
                    Inquire Unit Specs{" "}
                    <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FACC15] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-6 italic">
            Need a Reliable Power Generation Partner?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors font-barlow-condensed text-sm"
          >
            Inquire Power Solutions
          </Link>
        </div>
      </section>
    </main>
  );
}
