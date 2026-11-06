import Link from "next/link";
import Image from "next/image";
import { Zap, Truck, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";

const iconMap = {
  Zap: Zap,
  Truck: Truck,
  Network: Network,
};

export default function BusinessPillars() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1.5 rounded-sm font-barlow-condensed inline-block mb-3">
            Our Diversified Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] mt-2">
            3 Core Business Pillars of <span className="text-yellow-500">PT Teknika Pesona Kahayan</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 font-barlow leading-relaxed">
            Addressing complex industrial challenges through integrated captive power generation, robust material handling fleet readiness, and high-speed digital telecommunications infrastructure.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <div
                key={pillar.id}
                className="group relative bg-[#F9FAFB] rounded-sm border border-gray-200 hover:border-[#FACC15] transition-all duration-300 flex flex-col hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Pillar Image with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={pillar.heroImage}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#FACC15] text-[#111111] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm font-barlow-condensed shadow">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon & Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3">
                    <div className="p-2.5 bg-[#111111] text-[#FACC15] rounded-sm border border-[#FACC15]/40 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-yellow-300 font-barlow-condensed">
                        Pillar 0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold font-barlow-condensed text-white uppercase leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-sm font-bold text-gray-800 font-barlow-condensed uppercase tracking-wide mb-2 text-[#111111]">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-gray-600 font-barlow leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-200 flex-grow">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 font-barlow-condensed">
                      Core Solutions Scope:
                    </p>
                    {pillar.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-barlow text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                        <span className="leading-tight font-medium">{cap.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats Pill */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-white border border-gray-200 rounded mb-6 text-center">
                    <div>
                      <div className="text-base font-bold font-barlow-condensed text-[#111111]">
                        {pillar.stats[0]?.value}
                      </div>
                      <div className="text-[10px] text-gray-500 font-barlow uppercase">
                        {pillar.stats[0]?.label}
                      </div>
                    </div>
                    <div className="border-l border-gray-200">
                      <div className="text-base font-bold font-barlow-condensed text-[#111111]">
                        {pillar.stats[1]?.value}
                      </div>
                      <div className="text-[10px] text-gray-500 font-barlow uppercase">
                        {pillar.stats[1]?.label}
                      </div>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/business-pillars/${pillar.slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider font-barlow-condensed rounded-sm group-hover:bg-[#FACC15] group-hover:text-[#111111] transition-colors"
                  >
                    <span>Explore {pillar.shortTitle} Pillar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#111111] text-white p-8 md:p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FACC15] font-bold font-barlow-condensed">
              Multi-Disciplinary Synergy
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-barlow-condensed uppercase mt-1">
              Need an Integrated Power, Heavy Equipment & Telecom Solution?
            </h3>
            <p className="text-sm text-gray-300 font-barlow max-w-2xl mt-1">
              We structure comprehensive agreements tailored to the operational scale, site terrain, and technical specifications of your enterprise.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              href="/business-pillars"
              className="bg-[#FACC15] text-[#111111] px-6 py-3 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-colors"
            >
              View All Pillars
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-6 py-3 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-white hover:text-[#111111] transition-colors"
            >
              Consult Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
