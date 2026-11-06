import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  Cpu,
  Wrench,
  Activity,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";
import { SEO_CONFIG } from "@/lib/seo-config";
import HomeCTA from "@/components/home/HomeCTA";

const pillar = BUSINESS_PILLARS.find((p) => p.slug === "pltd-power-generation")!;

export const metadata: Metadata = {
  title: `PLTD Power Generation | ${SEO_CONFIG.company.fullName}`,
  description:
    "Integrated diesel power plants (PLTD), multi-megawatt captive power generation, EPC contracting, and reliable long-term O&M services for mining and heavy industry.",
  keywords: [
    "PLTD Power Generation",
    "diesel power plant Indonesia",
    "multi-MW genset rental",
    "IPP power generation Indonesia",
    "PLTD O&M",
    "Teknika Pesona Kahayan",
  ],
};

const brands = [
  { name: "Perkins", logo: "/images/brands/perkins-logo.svg" },
  { name: "Cummins", logo: "/images/brands/cummins_logo.png" },
  { name: "MTU", logo: "/images/brands/mtu-logo.png" },
  { name: "Caterpillar", logo: "/images/brands/caterpillar-Logo.png" },
  { name: "Kubota", logo: "/images/brands/kubota-Logo.svg" },
];

export default function PLTDPowerGenerationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#111111] overflow-hidden">
        <Image
          src="/images/hero/hero-genset.jpg"
          alt="PLTD Power Generation Teknika Pesona Kahayan"
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
            <span className="text-[#FACC15]">PLTD Power Generation</span>
          </nav>

          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Pillar 01 &bull; Energy & Power Generation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-barlow-condensed tracking-tight max-w-4xl leading-tight">
            PLTD Power <span className="text-[#FACC15]">Generation</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 font-barlow max-w-2xl leading-relaxed">
            High-output diesel power plants and captive energy supply solutions engineered for mining concessions, mineral smelters, heavy manufacturing, and remote regional electrification.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FACC15] text-[#111111] px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Consult Power Solutions
            </Link>
            <Link
              href="/services/genset"
              className="border border-white/40 text-white px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-white hover:text-[#111111] transition-colors"
            >
              Genset & Power Systems
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
                National Energy Reliability
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] leading-tight">
                Sustainable Captive & Grid Power Solutions
              </h2>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                In an era of intensive industrial processing and mineral downstreaming, continuous electrical stability is the cornerstone of operational viability. The PLTD Power Generation division of PT Teknika Pesona Kahayan delivers turnkey energy solutions to eliminate blackout risks and power quality instability.
              </p>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                We handle front-end engineering design, generator and transformer procurement, site civil and electrical construction, full long-term power purchase agreements (PPA/IPP), and on-site operation and maintenance (O&M).
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Multi-engine synchronizing configurations for dynamic load-following efficiency",
                  "SCADA automation architecture and real-time remote telemetry monitoring",
                  "Guaranteed genuine OEM spare parts supply with 24/7 emergency response crews",
                  "Strict compliance with national environmental exhaust emissions and acoustic noise regulations",
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
                  src="/images/products/cummins-industrial-genset.webp"
                  alt="Industrial Power Generator Station"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-5 h-5 text-[#FACC15]" />
                    <span className="text-xs font-bold font-barlow-condensed uppercase text-yellow-300 tracking-wider">
                      Continuous Duty Rating
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-barlow-condensed uppercase">
                    Heavy-Duty Diesel Power Station
                  </h4>
                  <p className="text-xs text-gray-300 font-barlow mt-1">
                    Engineered for continuous non-stop operation in tropical, humid, and dusty mining environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
              Service Spectrum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111]">
              Our Technical PLTD Capabilities
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 font-barlow">
              Turnkey power engineering from initial feasibility design to multi-year continuous plant operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillar.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FACC15] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-6">
                  {idx === 0 && <Zap className="w-6 h-6" />}
                  {idx === 1 && <Cpu className="w-6 h-6" />}
                  {idx === 2 && <Wrench className="w-6 h-6" />}
                  {idx === 3 && <Activity className="w-6 h-6" />}
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

      {/* Engine & Equipment Partners */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 font-barlow-condensed">
              World-Renowned Engine Manufacturers
            </span>
            <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mt-1">
              Powered by Heavy-Duty Global Engineering
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F9FAFB] rounded border border-gray-200 flex flex-col items-center justify-center hover:border-[#FACC15] hover:bg-white transition-all group h-28"
              >
                <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2 font-barlow-condensed">
                  {brand.name} Engine
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block">
                Industry Sectors
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] leading-tight">
                Trusted in Strategic National Industries
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-barlow leading-relaxed">
                Our power generation systems are engineered for off-grid operations, remote islands, and heavy manufacturing parks requiring continuous power under severe load variations.
              </p>
              <div className="space-y-3">
                {pillar.targetSectors.map((sector, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                    <div className="w-2 h-2 bg-[#FACC15] rounded-full shrink-0" />
                    <span className="text-sm font-bold font-barlow-condensed uppercase text-[#111111]">
                      {sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#111111] text-white p-8 md:p-12 rounded-sm border-l-4 border-[#FACC15]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] font-barlow-condensed">
                Flexible Business Engagement Models
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-barlow-condensed uppercase mt-2 mb-4">
                Commercial Contracting Models
              </h3>
              <ul className="space-y-4 font-barlow text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-barlow-condensed uppercase text-base">
                      Power Purchase Agreement (PPA) / IPP
                    </strong>
                    Clients pay on a per-kWh tariff model, eliminating upfront capital expenditure (Capex) for plant assets.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-barlow-condensed uppercase text-base">
                      Turnkey EPC & Unit Procurement
                    </strong>
                    Complete engineering, procurement, and construction of multi-megawatt gensets, civil foundations, and medium-voltage switchgear.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-barlow-condensed uppercase text-base">
                      Full Operation & Maintenance (O&M)
                    </strong>
                    Dedicated station management and certified engineering teams operating your assets under strict availability and efficiency SLAs.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
