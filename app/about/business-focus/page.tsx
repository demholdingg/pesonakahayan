import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Zap,
  Truck,
  Network,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";
import { SEO_CONFIG } from "@/lib/seo-config";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Business Focus Areas | ${SEO_CONFIG.company.fullName}`,
  description: `Explore the business focus areas of PT Teknika Pesona Kahayan across 3 core pillars: PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
  keywords: [
    "business focus",
    "PLTD power generation",
    "material handling",
    "FTTH telecom",
    "Teknika Pesona Kahayan",
  ],
};

const pillarIcons = {
  Zap: Zap,
  Truck: Truck,
  Network: Network,
};

export default function BusinessFocusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-business-focus.jpg"
          alt="Multi-equipment industrial operation"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="container mx-auto px-4 z-20 text-white max-w-7xl">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#FACC15] hover:text-yellow-400 mb-6 font-barlow-condensed font-bold uppercase tracking-wider text-xs"
          >
            <ArrowLeft size={16} />
            Back to About Us
          </Link>
          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Focus & Specialization
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-barlow-condensed uppercase leading-tight">
            Business <span className="text-[#FACC15]">Focus Areas</span>
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
              Corporate Structure
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-6">
              Three Integrated Business Pillars
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-barlow leading-relaxed">
              To deliver superior engineering value and satisfy the rigorous demands of modern Indonesian industrial operations, PT Teknika Pesona Kahayan organizes its core capabilities into 3 strategic pillars:
            </p>
          </div>
        </div>
      </section>

      {/* 3 Pillars Deep Grid */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl space-y-16">
          {BUSINESS_PILLARS.map((pillar, index) => {
            const Icon = pillarIcons[pillar.iconName];
            return (
              <div
                key={pillar.id}
                className="bg-[#F9FAFB] rounded border border-gray-200 p-8 md:p-12 hover:border-[#FACC15] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#111111] text-[#FACC15] rounded-sm shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-yellow-600 font-barlow-condensed">
                        Pillar 0{index + 1} &bull; {pillar.badge}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    href={`/business-pillars/${pillar.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider font-barlow-condensed rounded-sm hover:bg-[#FACC15] hover:text-[#111111] transition-colors shrink-0"
                  >
                    Explore Pillar Details <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm md:text-base font-bold text-gray-800 font-barlow-condensed uppercase">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-gray-600 font-barlow leading-relaxed">
                      {pillar.longDescription}
                    </p>
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 font-barlow-condensed mb-2">
                        Target Sectors:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.targetSectors.map((sector, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-white px-2.5 py-1 rounded text-[11px] font-bold text-gray-700 border border-gray-200 font-barlow-condensed"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillar.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white p-5 rounded border border-gray-200 shadow-sm"
                      >
                        <h4 className="font-bold font-barlow-condensed uppercase text-base text-[#111111] mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                          {cap.title}
                        </h4>
                        <p className="text-xs text-gray-600 font-barlow leading-relaxed mb-3">
                          {cap.description}
                        </p>
                        <ul className="space-y-1">
                          {cap.details.slice(0, 2).map((det, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-[11px] text-gray-500 font-barlow flex items-start gap-1.5"
                            >
                              <span className="w-1 h-1 bg-[#FACC15] rounded-full mt-1.5 shrink-0" />
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
