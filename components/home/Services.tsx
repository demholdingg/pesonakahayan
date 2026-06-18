// d:\tpknew\src\components\home\Services.tsx
import { Truck, Construction, Factory } from "lucide-react";

const services = [
  {
    title: "Material Handling",
    desc: "Efficient solutions for moving and controlling materials.",
    icon: <Truck size={32} />,
  },
  {
    title: "Heavy Duty Equipment",
    desc: "Reliable machinery for construction and mining.",
    icon: <Construction size={32} />,
  },
  {
    title: "Aerial Work Platform",
    desc: "Safe access for high-altitude industrial tasks.",
    icon: <Factory size={32} />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold font-barlow-condensed uppercase mt-2 text-[#111111]">Core Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 border border-gray-200 group hover:border-[#FACC15] transition-all duration-300">
              <div className="text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-barlow-condensed mb-4 uppercase">{service.title}</h3>
              <p className="text-gray-600 font-barlow leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
