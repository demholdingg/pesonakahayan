import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
    image: "/images/products/crawler-dumpers.png",
    brandLogo: "/images/brands/logo.png",
  },
  {
    title: "Silent Diesel Gensets",
    description:
      "High-performance power generation with noise-reduction technology for urban and sensitive work sites.",
    image: "/images/products/genseet.png",
    brandLogo: "/images/brands/perkins-logo.svg",
  },
  {
    title: "Combine Harvesters",
    description:
      "Advanced agricultural machinery to maximize crop yield and operational efficiency during harvest.",
    image: "/images/products/harvesterr.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
];

export default function SpecializedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-specialized.jpg"
          alt="Specialized industrial equipment"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
        <div className="max-w-7xl mx-auto relative z-10">
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
                className="bg-white border-b-4 border-transparent hover:border-[#FACC15] transition-all duration-300 shadow-sm group overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="relative h-10 w-32 mb-6 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={item.brandLogo}
                      alt="Brand Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{item.description}</p>
                </div>
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
