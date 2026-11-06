import { WHY_CHOOSE_US } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Clock, Award, Users } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  const iconList = [
    <Award key={0} className="w-6 h-6 text-[#111111]" />,
    <ShieldCheck key={1} className="w-6 h-6 text-[#111111]" />,
    <Users key={2} className="w-6 h-6 text-[#111111]" />,
    <Clock key={3} className="w-6 h-6 text-[#111111]" />,
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1.5 rounded-sm font-barlow-condensed inline-block">
              Corporate Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight text-[#111111] leading-tight">
              Why Partner with <span className="text-yellow-500">Teknika Pesona Kahayan</span>?
            </h2>
            <p className="text-gray-600 font-barlow text-base leading-relaxed">
              As part of PT Duta Energi Muliatama (DEM Holdings), we combine deep technical expertise, commercial flexibility, and uncompromising safety standards to support strategic projects across the Indonesian archipelago.
            </p>

            <div className="p-6 bg-[#F9FAFB] border-l-4 border-[#FACC15] rounded-r">
              <h4 className="font-bold font-barlow-condensed uppercase text-base text-[#111111] mb-2">
                Commitment to Health, Safety & Environment (HSE)
              </h4>
              <p className="text-xs text-gray-600 font-barlow leading-relaxed">
                Every power plant operation, heavy equipment movement, and fiber optic installation is governed by strict K3/HSE standards aimed at maintaining a continuous Zero Lost Time Injury (LTI) record.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about/company-profile"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider font-barlow-condensed rounded-sm hover:bg-[#FACC15] hover:text-[#111111] transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#F9FAFB] border border-gray-200 rounded-sm hover:border-[#FACC15] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#FACC15] rounded-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconList[index]}
                </div>
                <h3 className="text-xl font-bold font-barlow-condensed uppercase text-[#111111] mb-2 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-barlow leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
