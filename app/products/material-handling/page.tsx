import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Material Handling Equipment | Teknika Pesona Kahayan",
  description:
    "Efficient warehouse solutions including Reach Trucks, Pallet Movers, AMR, and professional support services.",
};

const products = [
  {
    title: "Reach Truck",
    description:
      "Ideal for narrow aisle operations and high-level pallet storage.",
    image: "/images/products/reach-truck.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "Electric Pallet Truck / Pallet Mover",
    description:
      "Compact and agile for fast, efficient horizontal pallet movement.",
    image: "/images/products/pallet-mover.webp",
    brandLogo: "/images/brands/ep-equipment-logo.png",
  },
  {
    title: "Tow Tractor",
    description:
      "Designed for heavy-duty towing of carts and trolleys in logistics flow.",
    image: "/images/products/tow-tractor.jpg",
    brandLogo: "/images/brands/heli-logo.png",
  },
  {
    title: "Electric Stacker",
    description:
      "Versatile stacking solution for various lift heights and applications.",
    image: "/images/products/electric-stacker.jpg",
    brandLogo: "/images/brands/nichiyu-logo.png",
  },
  {
    title: "Order Picker",
    description: "Safe and efficient for picking at medium to high levels.",
    image: "/images/products/order-picker.webp",
    brandLogo: "/images/brands/ep-equipment-logo.png",
  },
  {
    title: "AMR (Autonomous Mobile Robot)",
    description:
      "Smart, automated solutions for material transport and workflow optimization.",
    image: "/images/products/amr.jpg",
    brandLogo: "/images/brands/ep-equipment-logo.png",
  },
  {
    title: "Warehouse Material Handling Support",
    description:
      "Complete support including unit supply, rental, spare parts, maintenance, and operator training.",
    image: "/images/products/warehouse-support.webp",
    brandLogo: "/images/brands/ep-equipment-logo.png",
  },
];

export default function MaterialHandlingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-material-handling.jpg"
          alt="Forklift and material handling equipment in warehouse"
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
            <span className="text-[#FACC15]">Material Handling</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Material Handling <span className="text-[#FACC15]">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            PT. Teknika Pesona Kahayan provides sales, unit supply, and rental
            solutions for material handling operations across warehouse,
            logistics, industrial, and project environments. We deliver reliable
            equipment, professional support, and complete after-sales services
            to keep your operations safe, efficient, and productive.
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
            Need a custom handling solution?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Get an Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
