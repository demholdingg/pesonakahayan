import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, Truck, Network } from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Company Profile | ${SEO_CONFIG.company.fullName}`,
  description: `Discover the corporate profile of ${SEO_CONFIG.company.fullName}, a subsidiary of ${SEO_CONFIG.company.parentCompany}. Delivering multi-pillar industrial and infrastructure excellence.`,
  keywords: [
    "company profile",
    "corporate information",
    "PLTD power generation",
    "material equipment handling",
    "FTTH telecom infrastructure",
    "Teknika Pesona Kahayan",
  ],
};

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-company-profile.jpg"
          alt="Teknika Pesona Kahayan corporate facilities"
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
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-barlow-condensed uppercase leading-tight">
            Company <span className="text-[#FACC15]">Profile</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
              Corporate Background
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-8">
              PT Teknika Pesona Kahayan
            </h2>

            <div className="space-y-6 font-barlow text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>PT Teknika Pesona Kahayan</strong> is an operating subsidiary of <strong>PT Duta Energi Muliatama (DEM Holdings)</strong> delivering multi-pillar industrial and infrastructure solutions across Indonesia. The company concentrates its operational capabilities within three strategic core pillars:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="p-6 bg-[#F9FAFB] rounded border-t-4 border-[#FACC15] shadow-sm">
                  <div className="w-10 h-10 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-barlow-condensed uppercase text-lg text-[#111111] mb-2">
                    PLTD Power Generation
                  </h3>
                  <p className="text-xs text-gray-600 font-barlow leading-relaxed">
                    Turnkey multi-MW diesel power plants, IPP/PPA energy purchase models, medium-voltage synchronizing switchboards, and full long-term O&M contracts for industrial mines and remote sites.
                  </p>
                </div>

                <div className="p-6 bg-[#F9FAFB] rounded border-t-4 border-[#FACC15] shadow-sm">
                  <div className="w-10 h-10 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-3">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-barlow-condensed uppercase text-lg text-[#111111] mb-2">
                    Material Equipment Handling
                  </h3>
                  <p className="text-xs text-gray-600 font-barlow leading-relaxed">
                    Supply and fleet rental of diesel and lithium electric forklifts, heavy hydraulic excavators, wheel loaders, crane systems, aerial platforms, and custom handling attachments.
                  </p>
                </div>

                <div className="p-6 bg-[#F9FAFB] rounded border-t-4 border-[#FACC15] shadow-sm">
                  <div className="w-10 h-10 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-3">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-barlow-condensed uppercase text-lg text-[#111111] mb-2">
                    FTTH Telecom Infrastructure
                  </h3>
                  <p className="text-xs text-gray-600 font-barlow leading-relaxed">
                    End-to-end optical fiber network deployment (OSP/ISP), pole civil works, aerial and trenching cable rollout, ODC/ODP configurations, fusion splicing, and two-way OTDR testing.
                  </p>
                </div>
              </div>

              <p>
                Backed by prime machinery assets, extensive depot and workshop facilities in Jakarta and Bekasi, and hundreds of certified technical professionals (SILO inspected machinery and licensed SIO operators), PT Teknika Pesona Kahayan is primed to support long-term strategic projects throughout the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
            Standards & Governance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-12">
            Foundational Operational Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reliability",
                desc: "Maintaining fleet readiness and continuous captive power availability under strict availability SLAs.",
              },
              {
                title: "Safety (K3/HSE)",
                desc: "Uncompromising zero-accident commitment across power generation, heavy rigging, and telecom works.",
              },
              {
                title: "Technical Quality",
                desc: "Calibrated diagnostic tooling, ISO 9001, 14001, and 27001 certifications, and carrier-grade standards.",
              },
              {
                title: "Customer Centric",
                desc: "Commercial agility with customizable contracts (PPA, FMC, Rental, Turnkey EPC) tailored to client needs.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded border-b-4 border-transparent hover:border-[#FACC15] shadow-sm transition-all"
              >
                <div className="text-xl font-bold font-barlow-condensed uppercase text-[#111111] mb-3">
                  {val.title}
                </div>
                <p className="text-sm text-gray-600 font-barlow leading-relaxed">
                  {val.desc}
                </p>
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
