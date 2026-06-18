import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Truck, Zap, Tractor, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialized Equipment | Teknika Pesona Kahayan",
  description:
    "Niche industrial equipment including crawler dumpers, silent diesel generators, and agricultural machinery.",
};

const products = [
  {
    title: "Crawler Dumpers",
    description:
      "Rugged all-terrain dumpers designed for material transport in challenging environments and soft ground.",
    icon: <Truck className="w-10 h-10" />,
  },
  {
    title: "Silent Diesel Gensets",
    description:
      "High-performance power generation with noise-reduction technology for urban and sensitive work sites.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Combine Harvesters",
    description:
      "Advanced agricultural machinery to maximize crop yield and operational efficiency during harvest.",
    icon: <Tractor className="w-10 h-10" />,
  },
];

export default function SpecializedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/products" className="hover:text-[#FACC15]">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Specialized Equipment</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Specialized <span className="text-[#FACC15]">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Providing niche solutions for agriculture, power generation, and
            difficult-terrain logistics.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item, index) => (
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
                  Explore Models{" "}
                  <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FACC15] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-6 italic">
            Searching for niche machinery?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Request Special Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
