import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Award,
  Handshake,
  Settings,
  Sprout,
  Truck,
  ShieldCheck,
  Clock,
  UserCog,
  TrendingUp,
} from "lucide-react";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container mx-auto px-4 z-20 text-white">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#FACC15] hover:text-yellow-400 mb-6"
          >
            <ArrowLeft size={20} />
            Back to About
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold font-barlow-condensed uppercase leading-tight">
            Vision & <br />
            <span className="text-[#FACC15]">Mission</span>
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="text-[#FACC15] mb-6">
                <Eye size={60} />
              </div>
              <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
                Our Future
              </span>
              <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-8">
                Vision
              </h2>
              <p className="text-xl text-gray-700 font-barlow leading-relaxed">
                To become a trusted and leading partner in sales, unit supply,
                and rental solutions for material handling, heavy duty
                equipment, agriculture machinery, aerial work platforms, crawler
                dumpers, and silent diesel gensets across Indonesia.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-[#F3F4F6] p-12 border-l-8 border-[#FACC15]">
                <p className="text-2xl font-barlow-condensed font-bold text-[#111111] italic">
                  "Becoming Indonesia's trusted partner in industrial sales and
                  rental solutions through excellence and reliability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <div className="text-[#FACC15] mb-6">
                <Target size={60} />
              </div>
              <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
                Our Purpose
              </span>
              <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-8">
                Mission
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Handshake size={28} />,
                    text: "Provide reliable equipment solutions for sales, unit supply, and rental with responsive and professional service.",
                  },
                  {
                    icon: <Settings size={28} />,
                    text: "Support customer operations with quality products for material handling, heavy duty equipment, and industrial applications.",
                  },
                  {
                    icon: <Sprout size={28} />,
                    text: "Deliver specialized solutions for agriculture, including combine harvesters, and for AWP needs including boomlift and scissorlift units.",
                  },
                  {
                    icon: <Truck size={28} />,
                    text: "Offer crawler dumper solutions for transporting TBS in peatland and wet terrain, along with silent diesel genset solutions and other supporting equipment.",
                  },
                  {
                    icon: <ShieldCheck size={28} />,
                    text: "Build long-term partnerships through integrity, efficiency, safety, and continuous improvement.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-[#FACC15] shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <p className="text-lg text-gray-700 font-barlow leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-12 border-l-8 border-[#FACC15]">
                <p className="text-2xl font-barlow-condensed font-bold text-[#111111] italic">
                  "Delivering quality products and specialized solutions that
                  empower industrial, agricultural, and logistics operations
                  nationwide."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
            How We Achieve It
          </span>
          <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-12">
            Strategic Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Integrity",
                desc: "Building trust through honesty and transparency in every business transaction.",
              },
              {
                icon: <Award size={40} />,
                title: "Reliability",
                desc: "Ensuring our fleet and services consistently meet and exceed operational expectations.",
              },
              {
                icon: <Clock size={40} />,
                title: "Responsive Service",
                desc: "Delivering fast and efficient solutions to minimize downtime and maximize productivity.",
              },
              {
                icon: <UserCog size={40} />,
                title: "Professional Support",
                desc: "Access to certified experts and technical guidance for all your equipment needs.",
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Growth",
                desc: "Continuous expansion of our fleet and expertise to better serve the Indonesian market.",
              },
            ].map((goal, i) => (
              <div
                key={i}
                className="bg-[#F3F4F6] p-10 border border-gray-200 hover:border-[#FACC15] transition-all"
              >
                <div className="text-[#FACC15] mb-6">{goal.icon}</div>
                <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mb-4">
                  {goal.title}
                </h3>
                <p className="text-gray-600 font-barlow leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
