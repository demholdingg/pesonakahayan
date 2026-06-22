import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boomlift & Scissor Lift Rental | Teknika Pesona Kahayan",
  description:
    "Professional aerial work platform rental services for high-altitude projects.",
};

const details = [
  {
    title: "LiuGong Scissor Lifts",
    description:
      "Quiet, emission-free electric operation for indoor maintenance and tight spaces with LiuGong reliability.",
    image: "/images/products/liugong-scissorlift.jpg",
    brandLogo: "/images/brands/liugong-logos.png",
  },
  {
    title: "Zoomlion Boom Lifts",
    description:
      "Robust power and articulating reach for outdoor construction and rugged terrains engineered by Zoomlion.",
    image: "/images/products/zoomlion-boomlift.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "Zoomlion Scissor Lifts",
    description:
      "High-performance aerial platforms engineered by Zoomlion for safe, stable, and efficient vertical reach.",
    image: "/images/products/zoomlion-scissorlift.jpg",
    brandLogo: "/images/brands/zoomlion-logo.png",
  },
  {
    title: "LiuGong Boom Lifts",
    description:
      "Reliable and highly maneuverable boom lifts from LiuGong, perfect for heavy-duty outdoor construction.",
    image: "/images/products/liugong-boomliftt.png",
    brandLogo: "/images/brands/liugong-logos.png",
  },
];

export default function BoomliftServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-boomlift.jpg"
          alt="Aerial work platform boom lift"
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
            <span className="text-[#FACC15]">Boomlift & Scissor Lift</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Aerial <span className="text-[#FACC15]">Work Platforms</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Reach new heights safely with our range of telescopic and
            articulating platforms.
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
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
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
            Need height access for your project?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
