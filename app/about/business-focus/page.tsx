import Link from "next/link";
import {
  ArrowLeft,
  Loader,
  Sprout,
  Zap,
  Wrench,
  Pickaxe,
  Wind,
} from "lucide-react";

const focusAreas = [
  {
    title: "Material Handling",
    desc: "Efficient solutions for moving, lifting, and controlling materials in industrial settings. From forklifts to cranes, we provide equipment that optimizes material flow.",
    icon: <Loader size={48} />,
    details: [
      "Forklift solutions",
      "Material lifters",
      "Loading equipment",
      "Custom handling solutions",
    ],
  },
  {
    title: "Heavy Duty Equipment",
    desc: "Powerful machinery for construction, mining, and industrial operations. Our fleet includes excavators, bulldozers, and specialized heavy equipment.",
    icon: <Pickaxe size={48} />,
    details: ["Excavators", "Bulldozers", "Graders", "Specialized machinery"],
  },
  {
    title: "Aerial Work Platform",
    desc: "Safe access solutions for high-altitude industrial and construction tasks. MEWP and scissor lifts for working at height.",
    icon: <Wind size={48} />,
    details: [
      "Boom lifts",
      "Scissor lifts",
      "Cherry pickers",
      "Access platforms",
    ],
  },
  {
    title: "Crawler Dumper",
    desc: "Versatile dumper solutions for rugged terrain and challenging environments. All-terrain dumping capabilities for construction sites.",
    icon: <Wrench size={48} />,
    details: [
      "Tracked dumpers",
      "All-terrain solutions",
      "Heavy load capacity",
      "Rough terrain operation",
    ],
  },
  {
    title: "Agriculture Equipment",
    desc: "Modern agricultural machinery including combine harvesters for crop operations. Supporting the agricultural sector with cutting-edge technology.",
    icon: <Sprout size={48} />,
    details: [
      "Combine harvesters",
      "Farming equipment",
      "Crop solutions",
      "Seasonal rentals",
    ],
  },
  {
    title: "Genset Silent Diesel",
    desc: "Reliable power generation solutions with minimal noise for sensitive operations. Perfect for events, construction, and emergency backup.",
    icon: <Zap size={48} />,
    details: [
      "Silent operation",
      "Various KVA options",
      "Fuel efficient",
      "Portable solutions",
    ],
  },
];

export default function BusinessFocusPage() {
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
            Business <br />
            <span className="text-[#FACC15]">Focus Areas</span>
          </h1>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
            Our Expertise
          </span>
          <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-12">
            Specialized Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#F3F4F6] p-10 border border-gray-200 group hover:border-[#FACC15] hover:bg-white transition-all duration-300"
              >
                <div className="text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold font-barlow-condensed mb-4 uppercase text-[#111111]">
                  {area.title}
                </h3>
                <p className="text-gray-600 font-barlow leading-relaxed mb-6">
                  {area.desc}
                </p>
                <ul className="space-y-2">
                  {area.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 font-barlow flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
            The Difference
          </span>
          <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-12">
            Why These Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold font-barlow-condensed uppercase text-[#111111] mb-6">
                Comprehensive Coverage
              </h3>
              <p className="text-lg text-gray-700 font-barlow leading-relaxed mb-6">
                We've strategically selected these focus areas to provide
                complete solutions for industrial operations. Each area
                represents a critical need in modern construction and industrial
                projects.
              </p>
              <ul className="space-y-4">
                {[
                  "Diverse equipment portfolio",
                  "Specialist expertise",
                  "Complete project support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-barlow"
                  >
                    <span className="w-3 h-3 bg-[#FACC15] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold font-barlow-condensed uppercase text-[#111111] mb-6">
                Industry Leadership
              </h3>
              <p className="text-lg text-gray-700 font-barlow leading-relaxed mb-6">
                With specialized knowledge in each area, we understand the
                unique demands of your projects and can provide tailored
                solutions that maximize efficiency and minimize downtime.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert technical teams",
                  "Proven track record",
                  "Innovative solutions",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-barlow"
                  >
                    <span className="w-3 h-3 bg-[#FACC15] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
