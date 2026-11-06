import {
  Zap,
  Truck,
  Network,
  Construction,
  ArrowUpFromLine,
  Hammer,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const coreServices = [
  {
    title: "PLTD Power Generation & O&M",
    category: "Power & Energy",
    desc: "Multi-megawatt diesel power plant supply, captive power purchase agreements (PPA), synchronizing switchgear, and full O&M contracts.",
    icon: <Zap size={32} />,
    href: "/business-pillars/pltd-power-generation",
  },
  {
    title: "Material Handling & Fleet",
    category: "Fleet Logistics",
    desc: "Rental of diesel & lithium-ion electric forklifts, reach trucks, pallet movers, and comprehensive warehouse fleet management.",
    icon: <Truck size={32} />,
    href: "/products/material-handling",
  },
  {
    title: "FTTH Telecom Rollout",
    category: "Telecommunications",
    desc: "Aerial and underground optical cable deployment, pole installations, ODC/ODP configurations, core fusion splicing, and OTDR testing.",
    icon: <Network size={32} />,
    href: "/services/ftth-telecom",
  },
  {
    title: "Heavy Duty Machinery",
    category: "Heavy Equipment",
    desc: "Fleet of excavators, wheel loaders, bulldozers, motor graders, and crawler dumpers for mining, agriculture, and civil earthworks.",
    icon: <Construction size={32} />,
    href: "/services/heavy-duty",
  },
  {
    title: "Aerial Work Platforms",
    category: "Height Access",
    desc: "Articulated boom lifts, telescopic boom lifts, and electric scissor lifts certified for safe high-altitude industrial maintenance.",
    icon: <ArrowUpFromLine size={32} />,
    href: "/services/boomlift",
  },
  {
    title: "Fabrication & Engineering",
    category: "Engineering",
    desc: "Structural steel fabrication, customized industrial attachments, acoustic genset canopies, and certified mechanical engineering.",
    icon: <Hammer size={32} />,
    href: "/services/fabrication",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#111111] bg-[#FACC15] font-bold uppercase tracking-widest text-xs px-3 py-1 font-barlow-condensed inline-block mb-3">
              Services & Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase text-[#111111] leading-tight">
              Integrated Three-Pillar Solutions
            </h2>
          </div>
          <p className="text-gray-600 font-barlow max-w-md text-sm md:text-base">
            Backed by certified technical crews, meticulously maintained machinery, and advanced diagnostic tooling to keep your operations at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block h-full"
            >
              <div className="bg-white p-8 border border-gray-200 h-full flex flex-col group-hover:border-[#FACC15] group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[#111111] bg-[#FACC15] p-3 rounded-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-barlow-condensed bg-gray-100 px-2.5 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-barlow-condensed mb-3 uppercase text-[#111111] group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-barlow text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="text-[#111111] font-bold uppercase tracking-wider text-xs inline-flex items-center gap-2 group-hover:text-yellow-600 transition-colors pt-4 border-t border-gray-100 mt-auto">
                  Service Details <ArrowRight size={16} className="text-[#FACC15] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
