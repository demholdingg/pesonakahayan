import { Truck, Construction, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Material Handling",
    desc: "Efficient solutions for moving and controlling materials.",
    icon: <Truck size={32} />,
    href: "/products/material-handling"
  },
  {
    title: "Heavy Duty Equipment",
    desc: "Reliable machinery for construction and mining.",
    icon: <Construction size={32} />,
    href: "/products/heavy-duty"
  },
  {
    title: "Aerial Work Platform",
    desc: "Safe access for high-altitude industrial tasks.",
    icon: <Factory size={32} />,
    href: "/products/boomlift"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-16">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold font-barlow-condensed uppercase mt-2 text-[#111111]">Core Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group block h-full">
              <div className="bg-white p-10 border border-gray-200 h-full flex flex-col group-hover:border-[#FACC15] group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-barlow-condensed mb-4 uppercase text-[#111111]">{service.title}</h3>
                <p className="text-gray-600 font-barlow leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="bg-[#FACC15] text-[#111111] px-4 py-2 font-bold uppercase inline-flex items-center gap-2 group-hover:bg-yellow-500 transition-colors w-fit mt-auto">
                  Explore Services <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
