import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Forklift & Heavy Equipment Fabrication | Teknika Pesona Kahayan",
  description:
    "Custom fabrication for forklift and heavy equipment including fork extensions, side shifters, bale clamps, drum clamps, and more.",
};

const customFabrications = [
  { name: "Fork Extension", image: "/images/products/fork extension forklift.webp" },
  { name: "Side Shifter", image: "/images/products/side shifter.jpg" },
  { name: "Bale Clamp", image: "/images/products/bale clamp.png" },
  { name: "Drum Clamp", image: "/images/products/drum clamp.webp" },
  { name: "Work Platform", image: "/images/products/work platform.webp" },
  { name: "Jib Boom", image: "/images/products/jib boom.webp" },
  { name: "Bucket", image: "/images/products/bucket forklift.jpg" },
  { name: "Safety Cage", image: "/images/products/safety cage.webp" },
  { name: "Tire Handler", image: "/images/products/tire handler.jpg" },
  { name: "Mast & Garpu Custom", image: "/images/products/mast.jpg" }
];

export default function FabricationServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-fabrication.jpg"
          alt="Industrial fabrication and welding"
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
            <Link href="/services" className="hover:text-[#FACC15]">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Fabrication</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Custom Fabrication <br />
            <span className="text-[#FACC15]">For Forklift & Heavy Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Delivering precision metalwork, custom attachments, and structural engineering solutions 
            tailored to your unique industrial requirements.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-4 italic">
              Our Fabrication Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in fabricating high-quality attachments and components for forklifts and heavy equipment to meet your specific operational needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {customFabrications.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FACC15] transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  {/* Using standard img tag with placeholder for now */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex items-center gap-3 flex-grow">
                  <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0" />
                  <span className="font-bold text-[#111111] uppercase tracking-wide text-sm">{item.name}</span>
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
            Have a custom engineering requirement?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Talk to our Engineers
          </Link>
        </div>
      </section>
    </main>
  );
}
