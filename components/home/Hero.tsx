import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroSlider, SlideData } from "../Animations";

const FEATURED_SLIDES: SlideData[] = [
  {
    id: "pltd-power",
    title: "PLTD Multi-MW Power Generation",
    image: "/images/hero/hero-genset.jpg",
    specs: [
      "Capacity: Multi-MW Continuous Duty",
      "Target Availability Factor: 99.8%",
      "Engines: Perkins / Cummins / MTU / CAT",
      "IPP, PPA & Full O&M Contract Models",
    ],
    heroTitle: (
      <>
        PLTD Power <br />
        <span className="text-[#FACC15]">Generation</span>
      </>
    ),
    heroDesc:
      "Integrated diesel power plants and reliable captive energy supply solutions engineered for mining, smelters, heavy industry, and regional utility grids.",
  },
  {
    id: "material-handling",
    title: "Material Handling & Heavy Fleet",
    image: "/images/products/zoomlion-excavator.jpg",
    specs: [
      "500+ Active Fleet Units Ready to Deploy",
      "Diesel & Lithium Electric Forklifts",
      "Heavy Earthmoving & Boom Lifts",
      "Licensed SIO Operators & K3 Certified Technicians",
    ],
    heroTitle: (
      <>
        Material Equipment <br />
        <span className="text-[#FACC15]">Handling</span>
      </>
    ),
    heroDesc:
      "Complete equipment supply, heavy machinery rentals, precision crane systems, and specialized attachments to maximize logistics and site productivity.",
  },
  {
    id: "ftth-telecom",
    title: "FTTH Telecom Infrastructure",
    image: "/images/hero/hero-services.jpg",
    specs: [
      "1,500+ KM Optical Fiber Deployed",
      "End-to-End Outside & Inside Plant (OSP/ISP)",
      "High-Precision Splicing & Two-Way OTDR",
      "24/7 SLA Emergency Restoration Team",
    ],
    heroTitle: (
      <>
        FTTH Telecom <br />
        <span className="text-[#FACC15]">Infrastructure</span>
      </>
    ),
    heroDesc:
      "Strategic partner for fiber optic network deployment (FTTH/FTTx), civil engineering, and network maintenance for telecom carriers, ISPs, and modern estates.",
  },
  {
    id: "multi-pillar-synergy",
    title: "PT Teknika Pesona Kahayan",
    image: "/images/hero/hero-company-profile.jpg",
    specs: [
      "Subsidiary of DEM Holdings Group",
      "3 Integrated Core Business Pillars",
      "ISO 9001, 14001 & 27001 Certified",
      "Nationwide Support & Logistics Depots",
    ],
    heroTitle: (
      <>
        Integrated Industrial & <br />
        <span className="text-[#FACC15]">Infrastructure Partner</span>
      </>
    ),
    heroDesc:
      "Bridging the reliability of power generation, the resilience of industrial equipment handling, and the speed of digital telecommunications across Indonesia.",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background Slider with Dynamic Text */}
      <HeroSlider slides={FEATURED_SLIDES}>
        <Link href="/business-pillars">
          <button className="bg-[#FACC15] text-[#111111] px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase flex items-center gap-2 hover:cursor-pointer hover:bg-yellow-400 transition-all font-barlow-condensed tracking-wider shadow-lg text-sm md:text-base">
            Explore Business Pillars <ArrowRight size={18} />
          </button>
        </Link>
        <Link href="/contact">
          <button className="border-2 border-white text-white px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase hover:cursor-pointer hover:bg-white hover:text-[#111111] transition-all font-barlow-condensed tracking-wider text-sm md:text-base">
            Contact Us
          </button>
        </Link>
      </HeroSlider>
    </section>
  );
}
