import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import {
  ChevronRight,
  ShieldCheck,
  Award,
  Users,
  Zap,
  Truck,
  Network,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CustomerMarquee } from "@/components/Animations";
import { BUSINESS_PILLARS } from "@/lib/data";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `About Us | ${SEO_CONFIG.company.fullName}`,
  description: `Discover ${SEO_CONFIG.company.fullName}, a subsidiary of ${SEO_CONFIG.company.parentCompany}. Providing integrated engineering across PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
  keywords: [
    "about Teknika Pesona Kahayan",
    "company profile",
    "PLTD power generation",
    "material equipment handling",
    "FTTH telecom infrastructure",
    "DEM Holdings subsidiary",
  ],
  openGraph: {
    title: `About ${SEO_CONFIG.company.fullName}`,
    description: `Discover the story behind ${SEO_CONFIG.company.fullName} - a subsidiary of ${SEO_CONFIG.company.parentCompany}.`,
  },
};

const pillarIcons = {
  Zap: Zap,
  Truck: Truck,
  Network: Network,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-about.jpg"
          alt="Industrial engineering operation"
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
            <span className="text-[#FACC15]">About Us</span>
          </nav>
          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase tracking-tight leading-tight">
            Integrated Industrial & <br />
            <span className="text-[#FACC15]">Infrastructure Excellence</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl font-barlow leading-relaxed">
            As a subsidiary of DEM Holdings (PT Duta Energi Muliatama), we combine engineering discipline and fleet capability to build and operate captive power plants (PLTD), heavy industrial machinery, and optical telecommunications networks across Indonesia.
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] uppercase font-barlow-condensed mb-6 leading-tight">
              PT Teknika Pesona Kahayan
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 font-barlow">
              PT Teknika Pesona Kahayan is an integrated industrial and infrastructure solutions company uniting three core pillars: <strong>PLTD Power Generation</strong>, <strong>Material Equipment Handling</strong>, and <strong>FTTH Telecom Infrastructure</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-barlow mb-6">
              Our commitment extends beyond merely supplying equipment; we deliver full-lifecycle engineering from front-end feasibility and certified site installation to multi-year preventative servicing and performance-guaranteed SLAs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about/company-profile"
                className="bg-[#111111] text-white px-6 py-3 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-[#FACC15] hover:text-[#111111] transition-colors inline-flex items-center gap-2"
              >
                Full Company Profile <ArrowRight size={16} />
              </Link>
              <Link
                href="/business-pillars"
                className="border border-gray-300 text-gray-700 px-6 py-3 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:border-[#111111] hover:text-[#111111] transition-colors"
              >
                Explore 3 Business Pillars
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#FACC15]"></div>
            <div className="bg-[#111111] p-8 rounded shadow-2xl relative z-10 text-white border border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] font-barlow-condensed">
                Our Standards & Governance
              </span>
              <h3 className="text-2xl font-bold font-barlow-condensed uppercase mt-2 mb-6">
                Uncompromising Quality Benchmarks
              </h3>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Quality Management Certified",
                  "ISO 14001:2015 Environmental Management Certified",
                  "ISO 27001:2022 Information Security Management Certified",
                  "Rigorous K3 / HSE Zero-Accident Operational Protocols",
                  "Full Fleet SILO Certifications & Licensed SIO Operators",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-barlow text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#FACC15]"></div>
          </div>
        </div>
      </section>

      {/* 3 Core Business Pillars Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block mb-3">
              Strategic Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] uppercase font-barlow-condensed">
              3 Core Business Pillars
            </h2>
            <div className="w-20 h-1 bg-[#FACC15] mx-auto mt-4"></div>
            <p className="mt-4 text-sm md:text-base text-gray-600 font-barlow">
              Each division operates with dedicated engineering teams and specialized equipment fleets to deliver optimal outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_PILLARS.map((pillar, idx) => {
              const Icon = pillarIcons[pillar.iconName];
              return (
                <div
                  key={pillar.id}
                  className="bg-white p-8 border-b-4 border-transparent hover:border-[#FACC15] transition-all group shadow-sm flex flex-col"
                >
                  <div className="p-3 bg-[#111111] text-[#FACC15] w-fit rounded-sm mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-600 font-barlow-condensed mb-1">
                    Pillar 0{idx + 1} &bull; {pillar.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#111111] font-barlow-condensed uppercase mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 font-barlow text-sm leading-relaxed mb-6 flex-grow">
                    {pillar.description}
                  </p>
                  <Link
                    href={`/business-pillars/${pillar.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] font-barlow-condensed group-hover:text-yellow-600 transition-colors pt-4 border-t border-gray-100"
                  >
                    Explore Pillar Details <ArrowRight size={16} className="text-[#FACC15]" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block mb-3">
              Foundational Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111]">
              Our Guiding Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-[#F9FAFB] rounded border border-gray-200 hover:border-[#FACC15] transition-colors">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <ShieldCheck className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-3">
                Safety First (K3/HSE)
              </h4>
              <p className="text-gray-600 font-barlow text-sm leading-relaxed">
                We prioritize rigorous workplace safety protocols and certified machinery inspections to guarantee zero-accident operations.
              </p>
            </div>
            <div className="text-center p-6 bg-[#F9FAFB] rounded border border-gray-200 hover:border-[#FACC15] transition-colors">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <Award className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-3">
                Technical Expertise
              </h4>
              <p className="text-gray-600 font-barlow text-sm leading-relaxed">
                Seasoned electrical engineers, licensed machinery operators, and certified optical technicians ensure precision in execution.
              </p>
            </div>
            <div className="text-center p-6 bg-[#F9FAFB] rounded border border-gray-200 hover:border-[#FACC15] transition-colors">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <Users className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-3">
                Uncompromising Reliability
              </h4>
              <p className="text-gray-600 font-barlow text-sm leading-relaxed">
                Forging long-term enterprise partnerships through reliable machine availability, continuous captive power, and 24/7 SLA emergency response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Marquee */}
      <section className="py-20 px-6 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
            Clients & Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
            Trusted Across National Industries
          </h2>
        </div>
        <CustomerMarquee />
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
