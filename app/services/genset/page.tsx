import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Zap,
  VolumeX,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silent Diesel Genset Services | Teknika Pesona Kahayan",
  description:
    "Reliable power generation solutions with silent diesel gensets for industrial and urban projects.",
};

const details = [
  {
    title: "Silent Technology",
    description:
      "Advanced soundproofing systems for power generation in residential areas and noise-sensitive sites.",
    icon: <VolumeX className="w-10 h-10" />,
  },
  {
    title: "Continuous Power",
    description:
      "High-endurance diesel generators capable of providing 24/7 power for remote industrial operations.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Load Monitoring",
    description:
      "Integrated monitoring systems to ensure stable power delivery and prevent electrical overloads.",
    icon: <ShieldCheck className="w-10 h-10" />,
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
            <span className="text-[#FACC15]">Genset Silent Diesel</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Silent Diesel <span className="text-[#FACC15]">Gensets</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ensuring uninterrupted operations with reliable, quiet, and
            fuel-efficient power generation solutions.
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
                className="bg-white p-8 border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm"
              >
                <div className="text-[#111111] mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8">{item.description}</p>
                <button className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-[#111111] gap-2 hover:gap-4 transition-all group">
                  Technical Specs{" "}
                  <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                </button>
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
