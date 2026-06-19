import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Heavy Duty Equipment Services | Teknika Pesona Kahayan",
  description: "Earthmoving, mining, and heavy machinery support services.",
};

const details = [
  {
    title: "Zoomlion Excavator",
    description:
      "Powerful and efficient excavators by Zoomlion, designed for major earthmoving tasks.",
    image:
      "/images/products/zoomlion-excavator.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "LiuGong Wheel Loader",
    description:
      "Heavy-duty wheel loaders from LiuGong offering maximum reliability and material handling speed.",
    image:
      "/images/products/liugong-wheelloader.webp",
    brandLogo: "/images/brands/liugong-logos.png",
  },
  {
    title: "CAT Bulldozer",
    description:
      "Legendary CAT bulldozers for pushing vast quantities of soil, sand, and rubble.",
    image:
      "/images/products/cat-bulldozer.jpg",
    brandLogo: "/images/brands/Caterpillar-Logo.png",
  },
  {
    title: "Hyundai Motor Grader",
    description:
      "Precision grading with Hyundai motor graders, perfect for road construction and maintenance.",
    image:
      "/images/products/hyundai-motor-grader.jpg",
    brandLogo: "/images/brands/hyundai-logo.png",
  },
  {
    title: "SANY Backhoe Loader",
    description:
      "Versatile SANY backhoe loaders combining digging, trenching, and material handling capabilities.",
    image:
      "/images/products/sany-backhoe.webp",
    brandLogo: "/images/brands/sany-logo.png",
  },
  {
    title: "XCMG Vibro Roller / Compactor",
    description:
      "High-performance XCMG compactors ensuring solid foundations and smooth road surfaces.",
    image:
      "/images/products/xcmg-vibro-roller.jpg",
    brandLogo: "/images/brands/xcmg-logo.png",
  },
  {
    title: "Develon Excavator",
    description:
      "Advanced Develon excavators with superior fuel efficiency and operator comfort.",
    image:
      "/images/products/develon-excavator.png",
    brandLogo: "/images/brands/develon-logo.png",
  },
  {
    title: "SDLG Wheel Loader",
    description:
      "Durable and cost-effective SDLG wheel loaders for demanding industrial and mining sites.",
    image:
      "/images/products/sdlg-wheelloader.png",
    brandLogo: "/images/brands/sdlg-logo.png",
  },
  {
    title: "Kobelco Excavator",
    description:
      "Kobelco excavators known for their exceptional fuel economy and rugged reliability.",
    image:
      "/images/products/kobelco-excavator.png",
    brandLogo: "/images/brands/kobelco-logo.png",
  },
  {
    title: "Hitachi Excavator",
    description:
      "Industry-leading Hitachi excavators delivering maximum performance in extreme conditions.",
    image:
      "/images/products/hitachi-excavator.png",
    brandLogo: "/images/brands/hitachi-logo.png",
  },
];

export default function HeavyDutyServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/services" className="hover:text-[#FACC15]">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Heavy Duty Equipment</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Heavy Duty <span className="text-[#FACC15]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Powering your industrial productivity with world-class machinery and
            technical excellence.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((item, index) => (
              <div
                key={index}
                className="bg-white border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm group overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="h-10 mb-6 flex items-center">
                    {item.brandLogo ? (
                      <div className="relative h-10 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={item.brandLogo}
                          alt={`${item.title} Logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <span className="font-bold text-lg text-gray-400 uppercase tracking-wider">
                        {item.brandName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">{item.description}</p>
                  <button className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-[#111111] gap-2 hover:gap-4 transition-all group mt-auto w-fit">
                    Rent Now <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FACC15] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-6 italic">
            Looking for dependable machinery?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Consult Our Experts
          </Link>
        </div>
      </section>
    </main>
  );
}
