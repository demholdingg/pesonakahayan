import { COMPANY_STATS } from "@/lib/data";
import { Zap, Truck, Network, ShieldCheck, Award } from "lucide-react";

export default function CompanyStats() {
  const icons = [
    <Award key={0} className="w-8 h-8 text-[#FACC15]" />,
    <Zap key={1} className="w-8 h-8 text-[#FACC15]" />,
    <Truck key={2} className="w-8 h-8 text-[#FACC15]" />,
    <Network key={3} className="w-8 h-8 text-[#FACC15]" />,
    <ShieldCheck key={4} className="w-8 h-8 text-[#FACC15]" />,
  ];

  return (
    <section className="bg-[#111111] text-white py-16 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center flex flex-col items-center p-4 border border-white/5 rounded hover:border-[#FACC15]/40 transition-colors bg-white/[0.02]"
            >
              <div className="mb-3">{icons[idx]}</div>
              <div className="text-3xl md:text-4xl font-extrabold font-barlow-condensed text-[#FACC15] tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm font-bold font-barlow-condensed uppercase tracking-wider text-white mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-gray-400 font-barlow mt-1 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

