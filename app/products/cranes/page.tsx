import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Crane Systems | Teknika Pesona Kahayan",
  description:
    "Professional crane systems for construction, industrial workshops, and large-scale lifting operations.",
};

const products = [
  {
    title: "Tower Cranes",
    description:
      "The backbone of high-rise construction, offering unmatched reach and lifting capacity.",
    image: "/images/products/tower-crane.png",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "Mobile Cranes",
    description:
      "Versatile and highly mobile lifting solutions suitable for various terrain and site conditions.",
    image: "/images/products/mobile-crane.webp",
    brandLogo: "/images/brands/sany-logo.png",
  },
  {
    title: "Overhead Cranes",
    description:
      "Precision lifting systems for industrial facilities, manufacturing plants, and workshops.",
    image: "/images/products/overhead-crane.webp",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
];

export default function CranesPage() {
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
            <span className="text-[#FACC15]">Crane Systems</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Crane <span className="text-[#FACC15]">Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Engineering excellence in lifting technology for complex industrial
            and construction environments.
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
    </main>
  );
}
