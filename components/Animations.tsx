"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * File ini digunakan untuk menampung semua komponen animasi project.
 * Anda dapat menambahkan komponen animasi baru di bawah ini.
 */

const customers = [
  "PT. NX LEMO LOGISTIK",
  "PT. YOUNEXA INTI MATERIAL",
  "PT YOUNEXA MATERIAL UTAMA",
  "ESMEGLASS INDONESIA",
  "PT. BARA SUKSES NUSANTARA",
  "PT. LAUTAN PUTRA PERKASA",
  "PT ROLL ROYCE",
  "PT PERDONI",
  "PT. PORTO INDONESIA SEJAHTERA",
  "PT HAMIDI MANDALA PERKASA",
  "PT. BRAWIJAYA PRIMA COAL INDONESIA",
  "PRATAMA SEJAHTERA JAYA CEMERLANG",
  "PT REZEKI BANDANG TAHAPAN ABADI",
  "PT. HYUNDAI GLOVIS INDONESIA",
  "PT STEEL PIPE INDONESIA INDUSTRY",
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
              className="group flex-shrink-0 w-64 h-32 bg-[#F3F4F6] border border-gray-200 flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:bg-white hover:border-[#FACC15] hover:shadow-md transition-all duration-300"
            >
              <span className="text-[10px] font-bold text-[#111111] text-center uppercase tracking-tighter leading-tight font-barlow-condensed group-hover:text-[#111111]">
                {customer}
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
              className="group flex-shrink-0 w-64 h-32 bg-[#F3F4F6] border border-gray-200 flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:bg-white hover:border-[#FACC15] hover:shadow-md transition-all duration-300"
            >
              <span className="text-[10px] font-bold text-[#111111] text-center uppercase tracking-tighter leading-tight font-barlow-condensed group-hover:text-[#111111]">
                {customer}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Contoh tempat menambahkan animasi lain di masa depan:
// export const FadeIn = ({ children }) => { ... }
// export const PageTransition = ({ children }) => { ... }
