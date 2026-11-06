import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  MessageCircle,
  HardHat,
  ArrowRight,
  Warehouse,
  Zap,
  Truck,
  Network,
} from "lucide-react";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-[#FACC15] p-2 rounded-sm transform group-hover:rotate-12 transition-transform">
                <HardHat className="w-6 h-6 text-[#111111]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-barlow-condensed leading-none tracking-tight text-white">
                  TEKNIKA PESONA
                </span>
                <span className="text-xs font-bold text-[#FACC15] tracking-[0.2em] font-barlow-condensed">
                  KAHAYAN
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-barlow text-sm leading-relaxed">
              Leading integrated industrial and infrastructure enterprise delivering{" "}
              <strong className="text-gray-200">PLTD Power Generation</strong>,{" "}
              <strong className="text-gray-200">Material Equipment Handling</strong>, and{" "}
              <strong className="text-gray-200">FTTH Telecom Infrastructure</strong> solutions built to international standards.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/pt-teknika-pesona-kahayan/"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@tpk_kahayann?si=yQmMtnc0KHLE_Zio"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/tpk_kahayann/"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:info@pesonakahayan.co.id"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@tpk_kahayann?_r=1&_t=ZS-9AvRvyQDT8h"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: 3 Core Pillars & Links */}
          <div>
            <h4 className="text-lg font-bold font-barlow-condensed mb-6 uppercase tracking-wider text-[#FACC15] border-l-4 border-[#FACC15] pl-3">
              Core Business Pillars
            </h4>
            <ul className="space-y-3 text-sm font-barlow">
              <li>
                <Link
                  href="/business-pillars/pltd-power-generation"
                  className="text-gray-300 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <Zap className="w-4 h-4 mr-2 text-[#FACC15] shrink-0" />
                  <span>PLTD Power Generation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/business-pillars/material-equipment-handling"
                  className="text-gray-300 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <Truck className="w-4 h-4 mr-2 text-[#FACC15] shrink-0" />
                  <span>Material Equipment Handling</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/business-pillars/ftth-telecom-infrastructure"
                  className="text-gray-300 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <Network className="w-4 h-4 mr-2 text-[#FACC15] shrink-0" />
                  <span>FTTH Telecom Infrastructure</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-800">
                <Link
                  href="/business-pillars"
                  className="text-gray-400 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                  Overview of 3 Pillars
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                  Products & Fleet Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FACC15] flex items-center group transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                  Services & Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-barlow-condensed mb-6 uppercase tracking-wider text-[#FACC15] border-l-4 border-[#FACC15] pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-barlow">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white mb-0.5 font-barlow-condensed uppercase tracking-wider text-xs text-[#FACC15]">
                    Head Office
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed">
                    18 Office Park Building, 25th Floor Unit A2, Jl. TB Simatupang No. 18, Pasar Minggu, South Jakarta 12520
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Warehouse className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white mb-0.5 font-barlow-condensed uppercase tracking-wider text-xs text-[#FACC15]">
                    Workshop & Fleet Depot
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed">
                    Jl. Sultan Agung Pondok Ungu Raya, Medan Satria, Bekasi City, West Java
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#FACC15] shrink-0" />
                <span>+62 877-9834-5443</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <PhoneCall className="w-5 h-5 text-[#FACC15] shrink-0" />
                <span>+62 877-7624-8028</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#FACC15] shrink-0" />
                <span>info@pesonakahayan.co.id</span>
              </li>
              <li className="pt-2">
                <Link
                  href="https://wa.me/6287776248028"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#FACC15] text-[#111111] px-4 py-2 rounded-sm font-bold hover:bg-yellow-400 transition-colors text-xs uppercase tracking-wider font-barlow-condensed"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult via WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Expertise & Certifications */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold font-barlow-condensed mb-4 uppercase tracking-wider text-[#FACC15] border-l-4 border-[#FACC15] pl-3">
                Pillar Expertise
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Multi-MW PLTD",
                  "Power Generation",
                  "Forklift Fleet",
                  "Material Handling",
                  "FTTH Rollout",
                  "Fiber Optic OSP/ISP",
                  "Aerial Work Platform",
                  "Silent Gensets",
                  "Splicing & OTDR",
                  "Power Plant O&M",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-900 text-yellow-300 px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider border border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-barlow-condensed">
                International Certifications
              </h5>
              <div className="flex items-center gap-3 bg-neutral-900/80 p-3 rounded border border-neutral-800">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/ISO/25. ISO 9001-2015.png"
                    alt="ISO 9001:2015"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/ISO/26. ISO 14001-2015.png"
                    alt="ISO 14001:2015"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/ISO/27. ISO 27001-2022.png"
                    alt="ISO 27001:2022"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                Certified ISO 9001 (Quality), ISO 14001 (Environment), and ISO 27001 (Information Security).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="bg-black border-t border-neutral-800 py-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-barlow text-gray-500">
          <p>
            &copy; {currentYear} PT Teknika Pesona Kahayan. All rights reserved. Part of PT Duta Energi Muliatama / DEM Holdings.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/about"
              className="hover:text-[#FACC15] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/business-pillars"
              className="hover:text-[#FACC15] transition-colors"
            >
              Business Pillars
            </Link>
            <Link
              href="/docs"
              className="hover:text-[#FACC15] transition-colors"
            >
              Supporting Documents
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FACC15] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
