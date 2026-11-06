import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Network,
  CheckCircle2,
  Radio,
  Split,
  Activity,
  Compass,
} from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";
import { SEO_CONFIG } from "@/lib/seo-config";
import HomeCTA from "@/components/home/HomeCTA";

const pillar = BUSINESS_PILLARS.find(
  (p) => p.slug === "ftth-telecom-infrastructure",
)!;

export const metadata: Metadata = {
  title: `FTTH Telecom Infrastructure | ${SEO_CONFIG.company.fullName}`,
  description:
    "Turnkey fiber optic network engineering (FTTH/FTTx), Outside & Inside Plant (OSP/ISP), pole installation, precision fusion splicing, two-way OTDR testing, and 24/7 SLA maintenance.",
  keywords: [
    "FTTH Telecom Infrastructure",
    "fiber optic network deployment",
    "fiber cable pulling Indonesia",
    "fusion splicing OTDR",
    "ODC ODP installation",
    "Teknika Pesona Kahayan",
  ],
};

export default function FTTHTelecomInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#111111] overflow-hidden">
        <Image
          src="/images/hero/hero-services.jpg"
          alt="FTTH Telecom Infrastructure Teknika Pesona Kahayan"
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
            <Link
              href="/business-pillars"
              className="hover:text-[#FACC15] transition-colors"
            >
              Business Pillars
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">FTTH Telecom Infrastructure</span>
          </nav>

          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Pillar 03 &bull; Digital Telecommunications
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-barlow-condensed tracking-tight max-w-4xl leading-tight">
            FTTH Telecom <span className="text-[#FACC15]">Infrastructure</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 font-barlow max-w-2xl leading-relaxed">
            Turnkey engineering, construction, and 24/7 maintenance of high-speed fiber optic networks (Fiber To The Home / FTTx) for cellular operators, national ISPs, and modern industrial corridors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FACC15] text-[#111111] px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Consult FTTH Projects
            </Link>
            <Link
              href="/services/ftth-telecom"
              className="border border-white/40 text-white px-8 py-3.5 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-white hover:text-[#111111] transition-colors"
            >
              Rollout & Splicing Services
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
                Carrier-Grade Connectivity
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] leading-tight">
                Building Modern Optical Fiber Backbones
              </h2>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                Exponential growth in broadband data consumption, cloud computing, and smart infrastructure demands fiber optic networks with long-term mechanical resilience, expansive bandwidth, and near-zero attenuation loss.
              </p>
              <p className="text-base text-gray-700 font-barlow leading-relaxed">
                The FTTH Telecom Infrastructure division of PT Teknika Pesona Kahayan executes network rollouts from start to finish. We handle route survey and Right of Way (ROW) permitting, pole planting, aerial and underground cable installation (subduct/trenching/HDD), ODC and ODP termination, and last-mile Home Pass to Home Connected drops.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Automated core-alignment fusion splicers calibrated for <0.05 dB average loss",
                  "Comprehensive bi-directional validation with calibrated OTDR and Optical Power Meters",
                  "24/7 dedicated emergency fiber-cut recovery and restoration teams",
                  "Meticulous carrier-grade As-Built Drawing (ABD) documentation and GIS tagging",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-barlow text-gray-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-sm overflow-hidden shadow-2xl border-4 border-gray-100 bg-neutral-900">
                <Image
                  src="/images/hero/hero-services.jpg"
                  alt="Fiber Optic Deployment & Cable Splicing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Network className="w-5 h-5 text-[#FACC15]" />
                    <span className="text-xs font-bold font-barlow-condensed uppercase text-yellow-300 tracking-wider">
                      Digital Backbone Infrastructure
                    </span>
                  </div>
                  <h4 className="text-xl font-bold font-barlow-condensed uppercase">
                    High-Precision Fiber Optic Rollout
                  </h4>
                  <p className="text-xs text-gray-300 font-barlow mt-1">
                    Carrier-grade optical infrastructure engineered for zero-latency, high-availability digital communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of FTTH */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
              Turnkey Scope
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111]">
              Comprehensive FTTH Telecom Solutions
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600 font-barlow">
              End-to-end integration from initial design and route planning to 24/7 SLA managed operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillar.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#FACC15] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#111111] text-[#FACC15] rounded-sm flex items-center justify-center mb-6">
                  {idx === 0 && <Compass className="w-6 h-6" />}
                  {idx === 1 && <Radio className="w-6 h-6" />}
                  {idx === 2 && <Split className="w-6 h-6" />}
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

      {/* Scope of Works Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
              Structured Execution
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
              FTTH Project Delivery Methodology
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Survey & ROW Permitting",
                desc: "Geospatial corridor tracing, HLD/LLD creation, BOQ calculation, and regional municipal permit processing.",
              },
              {
                step: "02",
                title: "Civil Work & Cable Rollout",
                desc: "Installation of 7m/9m poles, aerial ADSS stringing, or underground HDPE microduct placement via trenching/HDD.",
              },
              {
                step: "03",
                title: "ODC/ODP & Fusion Splicing",
                desc: "Distribution cabinet terminations, optical closure sealing, and core-to-core fusion splicing under clean standards.",
              },
              {
                step: "04",
                title: "Testing & Acceptance (ATP)",
                desc: "Bi-directional OTDR/OLTS measurements, As-Built Drawing (ABD) sign-off, and SLA maintenance readiness.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F9FAFB] rounded border border-gray-200 relative group hover:border-[#FACC15] transition-all"
              >
                <div className="text-4xl font-extrabold font-barlow-condensed text-yellow-500/40 group-hover:text-[#FACC15] transition-colors mb-2">
                  {st.step}
                </div>
                <h4 className="text-lg font-bold font-barlow-condensed uppercase text-[#111111] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-gray-600 font-barlow leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients & Applications */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] font-barlow-condensed">
                Key Client Segments
              </span>
              <h3 className="text-3xl md:text-5xl font-bold font-barlow-condensed uppercase leading-tight">
                Trusted by Telco Carriers & Township Developers
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-barlow leading-relaxed">
                We accelerate homepass rollouts for mobile network operators and national internet service providers across major cities and emerging industrial hubs in Indonesia.
              </p>
              <div className="space-y-3">
                {pillar.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-neutral-900 rounded border border-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0" />
                    <span className="text-xs md:text-sm font-bold font-barlow-condensed uppercase text-white">
                      {sol}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900 p-8 md:p-10 rounded border border-neutral-800">
              <h4 className="text-xl font-bold font-barlow-condensed uppercase text-[#FACC15] mb-4">
                Certified Passive Hardware & Calibrated Equipment
              </h4>
              <p className="text-xs text-gray-300 font-barlow leading-relaxed mb-6">
                To guarantee optimal optical attenuation across the network lifecycle, we exclusively deploy carrier-certified hardware:
              </p>
              <div className="space-y-3">
                {pillar.equipmentList?.map((eq, eIdx) => (
                  <div key={eIdx} className="flex items-start gap-2.5 text-xs text-gray-300 font-barlow">
                    <div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full mt-1.5 shrink-0" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
