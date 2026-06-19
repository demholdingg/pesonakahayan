import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Silent Diesel Genset Services | Teknika Pesona Kahayan",
  description:
    "Reliable power generation solutions with silent diesel gensets for industrial and urban projects.",
};

const details = [
  {
    title: "Perkins Silent Genset",
    description: "High-quality silent diesel generators by Perkins, ensuring reliable and quiet power for sensitive environments.",
    image: "/images/products/genseet.png",
    brandLogo: "/images/brands/perkins-logo.svg",
  },
  {
    title: "Cummins Open Type Genset",
    description: "Robust open-type generators from Cummins offering maximum power output and easy maintenance access.",
    image: "https://images.unsplash.com/photo-1542484674-1db5e33dd919?q=80&w=800&auto=format&fit=crop",
    brandName: "Cummins",
  },
  {
    title: "Kubota Control Panel",
    description: "Advanced Kubota control panels for precise monitoring, automation, and synchronization of power systems.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=800&auto=format&fit=crop",
    brandName: "Kubota",
  },
  {
    title: "MTU Genset",
    description: "Heavy-duty MTU gensets built for mission-critical applications and unmatched operational endurance.",
    image: "https://images.unsplash.com/photo-1533036814674-d2c67b938c5d?q=80&w=800&auto=format&fit=crop",
    brandName: "MTU",
  },
  {
    title: "Cummins Industrial Genset",
    description: "Powerful Cummins industrial generators designed to handle continuous high-load electrical demands.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
    brandName: "Cummins",
  },
];

export default function GensetServicePage() {
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
            <span className="text-[#FACC15]">Genset & Power</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Power Generation <span className="text-[#FACC15]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ensuring uninterrupted operations with reliable, quiet, and
            fuel-efficient power generation systems.
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
                    Technical Specs <ArrowRight className="w-4 h-4 text-[#FACC15]" />
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
            Need a reliable power source?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Inquire Power Solutions
          </Link>
        </div>
      </section>
    </main>
  );
}
