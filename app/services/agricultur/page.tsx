import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Agriculture & Combine Harvester Services | Teknika Pesona Kahayan",
  description:
    "Specialized machinery and technical support for modern agricultural operations and harvesting.",
};

const details = [
  {
    title: "Zoomlion Combine Harvester",
    description: "High-performance combine harvesters by Zoomlion designed to maximize yield and efficiency during harvest seasons.",
    image: "/images/products/harvesterr.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "LiuGong Agriculture Support",
    description: "Dependable LiuGong support vehicles providing robust technical and field assistance for complex farming needs.",
    image: "/images/products/liugong-agriculture.webp",
    brandLogo: "/images/brands/liugong-logos.png",
  },
  {
    title: "Crawler Dumper",
    description: "Heavy-duty crawler dumpers ensuring efficient material transport across challenging muddy fields.",
    image: "/images/products/crawler-dumpers 2.png",
    brandName: "Crawler Dumper",
  },
  {
    title: "Crawler Dumper High Dump",
    description: "Efficient Crawler Dumper high dump systems for fast and safe unloading of agricultural yields.",
    image: "/images/products/crawler-dumpers-high.png",
    brandName: "Crawler Dumper",
  }
];

export default function AgricultureServicePage() {
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
            <span className="text-[#FACC15]">Agriculture</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Agriculture <span className="text-[#FACC15]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Empowering the agricultural sector with advanced harvesting
            technology and reliable machinery support.
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
                        {/* If we needed a brandName fallback it would go here */}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4 font-barlow-condensed uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">{item.description}</p>
                  <button className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-[#111111] gap-2 hover:gap-4 transition-all group mt-auto w-fit">
                    Learn More <ArrowRight className="w-4 h-4 text-[#FACC15]" />
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
            Ready for the harvest season?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Get Expert Support
          </Link>
        </div>
      </section>
    </main>
  );
}
