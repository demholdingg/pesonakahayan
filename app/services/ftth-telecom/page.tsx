import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Network,
  Radio,
  Split,
  Activity,
} from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `FTTH Telecom Rollout Services | ${SEO_CONFIG.company.fullName}`,
  description:
    "Professional turnkey fiber optic network deployment services (FTTH/FTTx): Outside Plant (OSP), pole installation, aerial and underground cabling, ODC/ODP configurations, fusion splicing, and OTDR testing.",
  keywords: [
    "FTTH Rollout",
    "fiber optic services",
    "fiber cable pulling",
    "fiber optic splicing",
    "OTDR testing Indonesia",
    "Teknika Pesona Kahayan",
  ],
};

const serviceItems = [
  {
    title: "Outside Plant (OSP) Engineering & Civil Works",
    desc: "Physical telecom corridor construction: installation of 7m and 9m steel/concrete poles with guy wire supports, pole accessories, manual trenching, microtrenching, and HDD boring.",
    icon: <Radio className="w-8 h-8 text-[#111111]" />,
  },
  {
    title: "Aerial & Underground Cable Deployment",
    desc: "Stringing of aerial optical cables (ADSS / Figure-8) with carrier-standard tension and suspension hardware, alongside underground duct pulling inside shielded HDPE subducts.",
    icon: <Network className="w-8 h-8 text-[#111111]" />,
  },
  {
    title: "Enclosure Installation & Fusion Splicing",
    desc: "Mounting and termination of Optical Distribution Cabinets (ODC 144 / 288 core), Optical Distribution Points (ODP pole & wall mount), waterproof joint closures, and high-precision core-to-core fusion splicing.",
    icon: <Split className="w-8 h-8 text-[#111111]" />,
  },
  {
    title: "Measurement, OTDR Testing & 24/7 Maintenance",
    desc: "Comprehensive bi-directional Optical Time-Domain Reflectometer (OTDR) and Optical Power Meter (OPM) testing, As-Built Drawing (ABD) compilation, and rapid-response emergency fiber-cut restoration teams.",
    icon: <Activity className="w-8 h-8 text-[#111111]" />,
  },
];

export default function FTTHServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#111111] overflow-hidden">
        <Image
          src="/images/hero/hero-services.jpg"
          alt="FTTH Telecom Rollout Services"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold font-barlow-condensed mb-4">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <Link href="/services" className="hover:text-[#FACC15] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">FTTH Telecom Rollout</span>
          </nav>

          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Digital Telecommunications Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-barlow-condensed tracking-tight max-w-4xl leading-tight">
            FTTH Telecom <span className="text-[#FACC15]">Rollout & Services</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 font-barlow max-w-2xl leading-relaxed">
            Turnkey fiber optic network engineering partner backed by experienced crews, calibrated diagnostic instruments, and carrier-grade quality standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
              Scope of Works
            </span>
            <h2 className="text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
              Turnkey FTTH Network Engineering
            </h2>
            <p className="mt-3 text-sm text-gray-600 font-barlow">
              From corridor preparation and pole civil works to passive cabinet splicing and customer activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FACC15] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#FACC15] rounded-sm flex items-center justify-center mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 font-barlow leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Pillar Link */}
          <div className="mt-16 bg-[#111111] text-white p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#FACC15]">
            <div>
              <h3 className="text-2xl font-bold font-barlow-condensed uppercase">
                Want to Explore Our Full FTTH Telecom Pillar?
              </h3>
              <p className="text-sm text-gray-300 font-barlow mt-1">
                Visit the dedicated FTTH Telecom Infrastructure pillar page for detailed workflow steps, certified equipment specs, and case studies.
              </p>
            </div>
            <Link
              href="/business-pillars/ftth-telecom-infrastructure"
              className="bg-[#FACC15] text-[#111111] px-6 py-3 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors shrink-0"
            >
              Explore FTTH Pillar
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
