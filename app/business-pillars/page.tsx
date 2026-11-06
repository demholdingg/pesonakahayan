import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle2, Zap, Truck, Network } from "lucide-react";
import { BUSINESS_PILLARS } from "@/lib/data";
import { SEO_CONFIG } from "@/lib/seo-config";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Core Business Pillars | ${SEO_CONFIG.company.fullName}`,
  description: `Explore the 3 strategic business pillars of PT Teknika Pesona Kahayan: PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
  keywords: [
    "business pillars",
    "PLTD power generation",
    "material equipment handling",
    "FTTH telecom infrastructure",
    "Teknika Pesona Kahayan",
  ],
};

const iconMap = {
  Zap: Zap,
  Truck: Truck,
  Network: Network,
};

export default function BusinessPillarsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#111111] overflow-hidden">
        <Image
          src="/images/hero/hero-company-profile.jpg"
          alt="Teknika Pesona Kahayan Business Pillars"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold font-barlow-condensed mb-4">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">Business Pillars</span>
          </nav>

          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Diversified Operations
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase font-barlow-condensed tracking-tight max-w-4xl leading-tight">
            3 Strategic Business Pillars of <br />
            <span className="text-[#FACC15]">PT Teknika Pesona Kahayan</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 font-barlow max-w-2xl leading-relaxed">
            Delivering comprehensive engineering synergy across captive power generation, robust industrial equipment fleet management, and high-speed digital telecommunications infrastructure.
          </p>
        </div>
      </section>

      {/* Pillars Detailed Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {BUSINESS_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName];
            const isEven = idx % 2 === 1;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:border-[#FACC15] transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[350px] lg:min-h-full ${isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={pillar.heroImage}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />

                    <div className="absolute top-6 left-6">
                      <span className="bg-[#FACC15] text-[#111111] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm font-barlow-condensed">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#FACC15]" />
                        <span className="text-xs uppercase font-bold tracking-widest text-yellow-300 font-barlow-condensed">
                          Pillar 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-barlow-condensed uppercase leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-between ${isEven ? "lg:order-1" : ""}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-yellow-600 font-barlow-condensed">
                        {pillar.tagline}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold font-barlow-condensed uppercase text-[#111111] mt-1 mb-4">
                        About {pillar.shortTitle} Division
                      </h4>
                      <p className="text-sm md:text-base text-gray-700 font-barlow leading-relaxed mb-6">
                        {pillar.longDescription}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="space-y-4 mb-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#111111] font-barlow-condensed border-b border-gray-200 pb-2">
                          Core Capabilities & Services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {pillar.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="bg-[#F9FAFB] p-4 rounded border border-gray-100">
                              <div className="flex items-center gap-2 mb-1.5">
                                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                                <h5 className="font-bold text-xs font-barlow-condensed uppercase text-[#111111]">
                                  {cap.title}
                                </h5>
                              </div>
                              <p className="text-xs text-gray-600 font-barlow leading-relaxed line-clamp-3">
                                {cap.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pillar Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F3F4F6] rounded mb-8">
                        {pillar.stats.map((st, sIdx) => (
                          <div key={sIdx} className="text-center">
                            <div className="text-lg md:text-xl font-extrabold font-barlow-condensed text-[#111111]">
                              {st.value}
                            </div>
                            <div className="text-[10px] text-gray-500 font-barlow uppercase leading-tight">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200">
                      <Link
                        href={`/business-pillars/${pillar.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider font-barlow-condensed rounded-sm hover:bg-[#FACC15] hover:text-[#111111] transition-colors"
                      >
                        Explore {pillar.shortTitle} Details <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-wider font-barlow-condensed rounded-sm hover:border-[#111111] hover:text-[#111111] transition-colors"
                      >
                        Consult Your Requirements
                      </Link>
                    </div>
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
