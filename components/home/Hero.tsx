// d:\tpknew\src\components\home\Hero.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#111111] overflow-hidden">
      {/* Overlay untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Konten Hero */}
      <div className="container mx-auto px-4 z-20 text-white">
        <h1 className="text-5xl md:text-7xl font-bold font-barlow-condensed uppercase leading-tight mb-6">
          Premium Heavy Equipment <br />
          <span className="text-[#FACC15]">Solutions</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-barlow text-gray-300">
          Teknika Pesona Kahayan provides top-tier industrial equipment and
          fleet rental services for your large-scale operations.
        </p>
        <div className="flex gap-4">
          <Link href="/services">
            <button className="bg-[#FACC15] text-[#111111] px-8 py-4 font-bold uppercase flex items-center gap-2 hover:cursor-pointer hover:bg-yellow-500 transition-colors">
              Explore Services <ArrowRight size={20} />
            </button>
          </Link>
          <Link href="/about">
            <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase hover:cursor-pointer hover:bg-white hover:text-[#111111] transition-all">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
