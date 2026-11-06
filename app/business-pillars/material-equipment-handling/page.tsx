import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Truck,
  CheckCircle2,
  Package,
  Wrench,
  Construction,
  Layers,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";
import { SEO_CONFIG } from "@/lib/seo-config";
import HomeCTA from "@/components/home/HomeCTA";

const pillar = BUSINESS_PILLARS.find(
  (p) => p.slug === "material-equipment-handling",
)!;

export const metadata: Metadata = {
  title: `Material Equipment Handling | ${SEO_CONFIG.company.fullName}`,
  description:
    "Comprehensive industrial material handling solutions, forklift fleet rentals, heavy earthmoving machinery, crane systems, and specialized attachments in Indonesia.",
  keywords: [
    "Material Equipment Handling",
    "forklift rental Jakarta",
    "heavy equipment fleet rental",
    "lithium electric forklift",
    "excavator wheel loader rental",
    "Teknika Pesona Kahayan",
  ],
};

const brands = [
  { name: "Zoomlion", logo: "/images/brands/zoomlion-logo.png" },
  { name: "LiuGong", logo: "/images/brands/liugong-logos.png" },
  { name: "Develon", logo: "/images/brands/develon-logo.png" },
  { name: "Kobelco", logo: "/images/brands/kobelco-logo.png" },
  { name: "Heli", logo: "/images/brands/heli-logo.png" },
  { name: "EP Equipment", logo: "/images/brands/ep-equipment-logo.png" },
  { name: "Nichiyu", logo: "/images/brands/nichiyu-logo.png" },
  { name: "Caterpillar", logo: "/images/brands/caterpillar-Logo.png" },
];

export default function MaterialEquipmentHandlingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#111111] overflow-hidden">
        <Image
          src="/images/hero/hero-material-handling.jpg"
          alt="Material Equipment Handling Teknika Pesona Kahayan"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold font-barlow-condensed mb-4">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <Link
              href="/business-pillars"
              className="hover:text-[#FACC15] transition-colors"
            >
              Business Pillars
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">Material Equipment Handling</span>
          </nav>

          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Pillar 02 &bull; Fleet & Logistics Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-barlow-condensed tracking-tight max-w-4xl leading-tight">
            Material Equipment <span className="text-[#FACC15]">Handling</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 font-barlow max-w-2xl leading-relaxed">
            A comprehensive fleet of warehouse material handling equipment, heavy earthmoving machinery, aerial work platforms, and specialized attachments to maximize site logistics and operational efficiency.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FACC15] text-[#111111] px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Inquire Fleet Rental
            </Link>
            <Link
              href="/products/material-handling"
              className="border border-white/40 text-white px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-white hover:text-[#111111] transition-colors"
            >
              View Material Handling Units
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-neutral-900 border-b border-neutral-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {pillar.stats.map((item, idx) => (
              <div key={idx} className="border-r last:border-none border-neutral-800">
                <div className="text-3xl md:text-4xl font-extrabold font-barlow-condensed text-[#FACC15]">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400 font-barlow uppercase mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Pillar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block">
                Logistics & Construction Excellence
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] leading-tight">
                Trusted Nationwide Fleet Partner
              </h2>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                Modern manufacturing, logistics distribution hubs, and civil engineering require heavy machinery and material movers operating at prime performance. Unexpected downtime creates ripple effects across the entire supply chain.
              </p>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                PT Teknika Pesona Kahayan delivers turnkey fleet solutions from brand-new unit supply to short- and long-term rentals, Full Maintenance Contracts (FMC), and standby backup units to ensure continuous operational uptime.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Complete range of fuel-efficient diesel forklifts and zero-emission lithium-ion electric forklifts",
                  "Every machine certified with official SILO inspection certificates from the Ministry of Manpower",
                  "Licensed SIO heavy machinery operators and certified rigging crews",
                  "Modern workshop facilities in Jakarta and Bekasi with immediate genuine spare parts access",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-barlow text-gray-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-sm overflow-hidden shadow-2xl border-4 border-gray-100">
                <Image
                  src="/images/products/liugong-wheelloader.webp"
                  alt="Heavy Duty Wheel Loader Operation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Truck className="w-5 h-5 text-[#FACC15]" />
                    <span className="text-xs font-bold font-barlow-condensed uppercase text-yellow-300 tracking-wider">
                      Fleet Readiness
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-barlow-condensed uppercase">
                    Robust Earthmoving & Material Transport
                  </h4>
                  <p className="text-xs text-gray-300 font-barlow mt-1">
                    Heavy-duty machinery with high payload capacity and ergonomic, safety-certified operator cabins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of Equipment Handling */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
              Fleet Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111]">
              Our Material Handling Services
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 font-barlow">
              A comprehensive machinery portfolio engineered to fulfill every intra-facility logistics and site earthmoving challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillar.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FACC15] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-6">
                  {idx === 0 && <Package className="w-6 h-6" />}
                  {idx === 1 && <Construction className="w-6 h-6" />}
                  {idx === 2 && <Layers className="w-6 h-6" />}
                  {idx === 3 && <Wrench className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-600 font-barlow leading-relaxed mb-6">
                  {cap.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {cap.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs font-barlow text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
                Featured Fleet Units
              </span>
              <h3 className="text-3xl md:text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
                Ready-to-Deploy Machinery
              </h3>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-barlow-condensed text-[#111111] hover:text-yellow-600 transition-colors"
            >
              Explore Complete Product Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diesel & Electric Forklifts",
                image: "/images/products/reach-truck.jpg",
                desc: "Capacities from 2.5T to 16T for indoor and yard material handling.",
                link: "/products/material-handling",
              },
              {
                title: "Hydraulic Excavators",
                image: "/images/products/zoomlion-excavator.jpg",
                desc: "Precision hydraulic digging and heavy bucket capacities.",
                link: "/services/heavy-duty",
              },
              {
                title: "Boom & Scissor Lifts",
                image: "/images/products/zoomlion-boomlift.jpg",
                desc: "Certified aerial platforms reaching up to 40 meters safely.",
                link: "/services/boomlift",
              },
              {
                title: "Specialized Crawler Dumpers",
                image: "/images/products/crawler-dumpers.png",
                desc: "Rugged tracked transporters designed for peatland and wetland haulage.",
                link: "/products/specialized",
              },
            ].map((unit, uIdx) => (
              <div
                key={uIdx}
                className="bg-[#F9FAFB] rounded border border-gray-200 overflow-hidden hover:border-[#FACC15] hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-44 w-full bg-neutral-900">
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold font-barlow-condensed uppercase text-[#111111] mb-1">
                    {unit.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-barlow mb-4 flex-grow">
                    {unit.desc}
                  </p>
                  <Link
                    href={unit.link}
                    className="text-xs font-bold font-barlow-condensed uppercase text-[#111111] hover:text-yellow-600 inline-flex items-center gap-1.5 pt-3 border-t border-gray-200"
                  >
                    Explore Unit <ArrowRight size={14} className="text-[#FACC15]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 font-barlow-condensed">
              Authorized OEMs & Manufacturers
            </span>
            <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mt-1">
              Partnering with World-Leading Machinery Brands
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded border border-gray-200 flex flex-col items-center justify-center hover:border-[#FACC15] transition-all h-24"
              >
                <div className="relative w-full h-8 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase text-gray-400 mt-2 font-barlow-condensed">
                  {brand.name}
                </span>
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
