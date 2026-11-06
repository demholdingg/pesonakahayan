import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Clock,
  UserCog,
  TrendingUp,
  Zap,
  Truck,
  Network,
} from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: `Vision & Mission | ${SEO_CONFIG.company.fullName}`,
  description: `Vision and mission of PT Teknika Pesona Kahayan in advancing excellence across PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
  keywords: [
    "vision and mission",
    "corporate vision",
    "PLTD power generation",
    "material handling",
    "FTTH telecom infrastructure",
    "Teknika Pesona Kahayan",
  ],
};

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-vision-mission.jpg"
          alt="Industrial sunrise horizon"
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
            Strategic Direction
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-barlow-condensed uppercase leading-tight">
            Vision & <span className="text-[#FACC15]">Mission</span>
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="text-[#FACC15] mb-6">
                <Eye size={60} />
              </div>
              <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
                Our Future Outlook
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-6">
                Corporate Vision
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-barlow leading-relaxed">
                To be Indonesia&apos;s foremost and most trusted integrated industrial and infrastructure solutions partner, excelling in captive power generation (<strong>PLTD Power Generation</strong>), heavy equipment and logistics fleet management (<strong>Material Equipment Handling</strong>), and high-speed optical telecommunications connectivity (<strong>FTTH Telecom Infrastructure</strong>).
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-[#111111] text-white p-10 md:p-12 border-l-8 border-[#FACC15] rounded-r shadow-xl">
                <p className="text-xl md:text-2xl font-barlow-condensed font-bold italic leading-relaxed text-gray-200">
                  &ldquo;Empowering Indonesia&apos;s industrial future through resilient energy generation, rugged machinery fleet solutions, and accelerated nationwide digital connectivity.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <div className="text-[#FACC15] mb-6">
                <Target size={60} />
              </div>
              <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
                Our Core Purpose
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-8">
                Corporate Mission
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Zap size={28} className="text-[#FACC15]" />,
                    title: "PLTD Power Generation Pillar",
                    text: "Deliver multi-megawatt diesel power plants that are fuel-efficient, resilient, and continuous to secure energy independence for mining, manufacturing, and regional grids.",
                  },
                  {
                    icon: <Truck size={28} className="text-[#FACC15]" />,
                    title: "Material Equipment Handling Pillar",
                    text: "Provide certified material handling fleets, heavy earthmoving equipment, crane systems, and specialized attachments backed by licensed operators and rapid technical support.",
                  },
                  {
                    icon: <Network size={28} className="text-[#FACC15]" />,
                    title: "FTTH Telecom Infrastructure Pillar",
                    text: "Engineer, deploy, and maintain carrier-grade optical fiber infrastructure with low attenuation and 24/7 SLA emergency recovery to advance national digital connectivity.",
                  },
                  {
                    icon: <ShieldCheck size={28} className="text-[#FACC15]" />,
                    title: "Safety & Governance Commitment",
                    text: "Uphold zero-accident K3/HSE standards and adhere to international quality benchmarks certified under ISO 9001, ISO 14001, and ISO 27001.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded border border-gray-200">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold font-barlow-condensed uppercase text-base text-[#111111] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 font-barlow leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-10 md:p-12 border-l-8 border-[#FACC15] rounded-r shadow-md">
                <p className="text-xl md:text-2xl font-barlow-condensed font-bold text-[#111111] italic leading-relaxed">
                  &ldquo;Integrating engineering precision, commercial integrity, and continuous innovation to generate sustainable value for all stakeholders.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
            Core Cultural Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] mb-12">
            Strategic Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Integrity & Governance",
                desc: "Fostering client and stakeholder trust through absolute transparency, legal compliance, and ethical business conduct.",
              },
              {
                icon: <Award size={40} />,
                title: "Reliability",
                desc: "Ensuring energy availability, fleet uptime, and optical network connectivity consistently meet and exceed strict SLA thresholds.",
              },
              {
                icon: <Clock size={40} />,
                title: "Responsive 24/7 Support",
                desc: "Rapid deployment of technical crews and genuine spare parts to minimize unplanned downtime for mission-critical facilities.",
              },
              {
                icon: <UserCog size={40} />,
                title: "Professional Competence",
                desc: "Continuously training our workforce with licensed operator certifications (SIO/SILO), K3 safety credentials, and telecom expertise.",
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Sustainable Expansion",
                desc: "Broadening our fleet capabilities and infrastructure footprint to support strategic national development across the archipelago.",
              },
            ].map((goal, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] p-8 border border-gray-200 hover:border-[#FACC15] transition-all rounded"
              >
                <div className="text-[#FACC15] mb-5">{goal.icon}</div>
                <h3 className="text-xl font-bold font-barlow-condensed uppercase text-[#111111] mb-3">
                  {goal.title}
                </h3>
                <p className="text-sm text-gray-600 font-barlow leading-relaxed">
                  {goal.desc}
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
