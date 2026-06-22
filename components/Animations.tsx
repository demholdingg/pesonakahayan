"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * File ini digunakan untuk menampung semua komponen animasi project.
 * Anda dapat menambahkan komponen animasi baru di bawah ini.
 */

const customers = [
  { name: "PT. NX LEMO LOGISTIK", logo: "/images/logos/PT. NX LEMO LOGISTIK.jpg" },
  { name: "PT. YOUNEXA INTI MATERIAL", logo: "/images/logos/PT. YOUNEXA INTI MATERIAL.jpg" },
  { name: "PT YOUNEXA MATERIAL UTAMA", logo: null },
  { name: "ESMALGLASS INDONESIA", logo: "/images/logos/ESMALGLASS INDONESIA.png" },
  { name: "PT. BARA SUKSES NUSANTARA", logo: "/images/logos/PT. BARA SUKSES NUSANTARA.webp" },
  { name: "PT. LAUTAN PUTRA PERKASA", logo: "/images/logos/PT. LAUTAN PUTRA PERKASA.png" },
  { name: "PT ROLL ROYCE", logo: "/images/logos/PT ROLL ROYCE.svg" },
  { name: "PT PERDONI", logo: "/images/logos/PT PERDONI.webp" },
  { name: "PT. PORTO INDONESIA SEJAHTERA", logo: "/images/logos/PT. PORTO INDONESIA SEJAHTERA.webp" },
  { name: "PT HAMIDI MANDALA PERKASA", logo: "/images/logos/PT HAMIDI MANDALA PERKASA.jpg" },
  { name: "PT. BRAWIJAYA PRIMA COAL INDONESIA", logo: null },
  { name: "PRATAMA SEJAHTERA JAYA CEMERLANG", logo: "/images/logos/PRATAMA SEJAHTERA JAYA CEMERLANG.jpg" },
  { name: "PT REZEKI BANDANG TAHAPAN ABADI", logo: "/images/logos/PT REZEKI BANDANG TAHAPAN ABADI.png" },
  { name: "PT. HYUNDAI GLOVIS INDONESIA", logo: "/images/logos/PT. HYUNDAI GLOVIS INDONESIA.png" },
  { name: "PT STEEL PIPE INDONESIA INDUSTRY", logo: "/images/logos/PT STEEL PIPE INDONESIA INDUSTRY.jpg" },
];

export const CustomerMarquee = () => {
  // Membagi daftar pelanggan menjadi dua kelompok untuk variasi baris
  const half = Math.ceil(customers.length / 2);
  const row1 = customers.slice(0, half);
  const row2 = customers.slice(half);

  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <div className="relative py-4">
      {/* Gradient Overlay Kiri */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Gradient Overlay Kanan */}
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Konten Marquee yang di-scroll */}
      <div className="flex flex-col gap-6 overflow-hidden">
        {/* Baris Pertama - Bergerak ke Kiri */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {marqueeRow1.map((customer, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-64 h-32 bg-[#F3F4F6] border border-gray-200 flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 hover:bg-white hover:border-[#FACC15] hover:shadow-md transition-all duration-300"
            >
              {customer.logo && (
                <div className="relative h-14 w-full mb-2">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className={`text-[10px] font-bold text-[#111111] text-center uppercase tracking-tighter leading-tight font-barlow-condensed group-hover:text-[#111111] ${customer.logo ? 'mt-auto' : ''}`}>
                {customer.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Baris Kedua - Bergerak ke Kanan */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: 45, // Durasi berbeda agar tidak sinkron sempurna
            repeat: Infinity,
          }}
        >
          {marqueeRow2.map((customer, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-64 h-32 bg-[#F3F4F6] border border-gray-200 flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 hover:bg-white hover:border-[#FACC15] hover:shadow-md transition-all duration-300"
            >
              {customer.logo && (
                <div className="relative h-14 w-full mb-2">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className={`text-[10px] font-bold text-[#111111] text-center uppercase tracking-tighter leading-tight font-barlow-condensed group-hover:text-[#111111] ${customer.logo ? 'mt-auto' : ''}`}>
                {customer.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Komponen Animasi Hero Slider
export type SlideData = {
  id: string;
  title: string;
  image: string;
  specs: string[];
  heroTitle: React.ReactNode;
  heroDesc: string;
};

export const HeroSlider = ({ slides, children }: { slides: SlideData[], children?: React.ReactNode }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Teks Utama Overlay (Berganti sesuai slide) */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 z-20 flex flex-col justify-center text-white pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold font-barlow-condensed uppercase leading-tight mb-6 pointer-events-auto w-fit"
            >
              {slides[current].heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl font-barlow text-gray-200 pointer-events-auto"
            >
              {slides[current].heroDesc}
            </motion.p>
            {/* CTA Buttons passed as children */}
            <div className="mt-8 flex gap-4 pointer-events-auto w-fit">
              {children}
            </div>
          </div>
          
          {/* Spesifikasi Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-16 right-6 md:right-12 bg-black/40 backdrop-blur-md border-l-4 border-[#FACC15] p-6 max-w-xs md:max-w-sm hidden sm:block shadow-2xl"
          >
            <h3 className="text-xl font-bold font-barlow-condensed text-white uppercase mb-3 border-b border-gray-600/50 pb-2">
              {slides[current].title}
            </h3>
            <ul className="space-y-2 mt-3">
              {slides[current].specs.map((spec, idx) => (
                <li key={idx} className="text-gray-200 font-barlow text-sm flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FACC15] shrink-0 mt-1.5" />
                  <span className="leading-tight">{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-[#FACC15] text-white hover:text-[#111111] backdrop-blur-sm transition-colors rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-[#FACC15] text-white hover:text-[#111111] backdrop-blur-sm transition-colors rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-[#FACC15] w-8" : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
