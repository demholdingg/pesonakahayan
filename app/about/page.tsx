import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import {
  ChevronRight,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  Package,
  HardHat,
  Construction,
  Truck,
  Sprout,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CustomerMarquee } from "@/components/Animations";

export const metadata: Metadata = {
  title: `About ${SEO_CONFIG.company.fullName} | Part of ${SEO_CONFIG.company.parentCompany}`,
  description: `Learn about ${SEO_CONFIG.company.fullName}, a leader in premium heavy equipment and fleet solutions. Part of ${SEO_CONFIG.company.parentCompany}, we deliver industrial excellence with professional equipment rental and fleet management services.`,
  keywords: [
    "about Teknika Pesona Kahayan",
    "company profile",
    "industrial equipment provider",
    "fleet management company",
    "DEM Holdings subsidiary",
    "equipment rental company Indonesia",
  ],
  openGraph: {
    title: `About ${SEO_CONFIG.company.fullName}`,
    description: `Discover the story behind ${SEO_CONFIG.company.fullName} - a subsidiary of ${SEO_CONFIG.company.parentCompany}, delivering premium industrial solutions.`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/images/hero/hero-about.jpg"
          alt="Industrial construction site"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">About Us</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Our <span className="text-[#FACC15]">Legacy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-barlow">
            Since 2009 part of DEM Holdings / PT. Duta Energi Muliatama, we have
            been building Indonesia's infrastructure — one project, one tower,
            one power plant at a time. From Jakarta to Papua, our engineers show
            up and deliver.
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-6 italic border-l-4 border-[#FACC15] pl-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-barlow">
              PT Teknika Pesona Kahayan is a premier provider of industrial
              equipment and fleet rental services. With a focus on reliability
              and precision, we serve diverse industries including construction,
              mining, agriculture, and manufacturing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-barlow">
              Our commitment goes beyond just providing machinery; we provide
              comprehensive solutions that ensure our clients&apos; operations
              run smoothly, safely, and efficiently. Our fleet consists of the
              latest technology from world-renowned brands, maintained to the
              highest standards.
            </p>
          </div>
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#FACC15]"></div>
            <div className="bg-[#F3F4F6] p-4 border-2 border-[#111111] relative z-10">
              <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-[#111111]/20 font-bold text-4xl uppercase -rotate-12 select-none">
                  Industrial Excellence
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#FACC15]"></div>
          </div>
        </div>
      </section>

      {/* Business Focus Grid */}
      <section className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] uppercase font-barlow-condensed italic">
              Business <span className="text-[#FACC15]">Focus</span>
            </h2>
            <div className="w-20 h-1 bg-[#FACC15] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Material Handling",
                desc: "Forklifts, Reach Trucks, and warehouse solutions.",
                icon: <Package className="w-8 h-8" />,
              },
              {
                title: "Heavy Duty Equipment",
                desc: "Excavators, Dozers, and Material Handling.",
                icon: <HardHat className="w-8 h-8" />,
              },
              {
                title: "Aerial Work Platforms",
                desc: "Boomlifts, Scissor Lifts, and manlifts.",
                icon: <Construction className="w-8 h-8" />,
              },
              {
                title: "Crawler Dumper",
                desc: "Specialized rugged transport for tough terrains.",
                icon: <Truck className="w-8 h-8" />,
              },
              {
                title: "Agriculture",
                desc: "Modern Combine Harvester solutions for efficiency.",
                icon: <Sprout className="w-8 h-8" />,
              },
              {
                title: "Silent Diesel Genset",
                desc: "Reliable power solutions with low noise levels.",
                icon: <Zap className="w-8 h-8" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border-l-4 border-transparent hover:border-[#FACC15] transition-all group shadow-sm"
              >
                <div className="text-[#111111] mb-4 group-hover:text-[#FACC15] transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#111111] font-barlow-condensed text-2xl uppercase mb-2 group-hover:text-[#FACC15] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-barlow italic text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] uppercase font-barlow-condensed italic">
              Our Trusted <span className="text-[#FACC15]">Customers</span>
            </h2>
            <p className="text-gray-500 font-barlow mt-2 uppercase tracking-widest text-sm">
              Trusted by leading companies across logistics, materials,
              manufacturing, mining, and industrial sectors.
            </p>
            <div className="w-20 h-1 bg-[#FACC15] mx-auto mt-4"></div>
          </div>

          <CustomerMarquee />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <ShieldCheck className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-4 italic">
                Safety First
              </h4>
              <p className="text-gray-600 font-barlow leading-relaxed">
                We prioritize the highest safety protocols and regular equipment
                certifications to ensure zero-accident operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <Award className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-4 italic">
                Expert Team
              </h4>
              <p className="text-gray-600 font-barlow leading-relaxed">
                Our team consists of certified technicians and experienced
                operators dedicated to maintaining peak performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FACC15] flex items-center justify-center mx-auto mb-6 transform rotate-45">
                <Users className="w-8 h-8 text-[#111111] -rotate-45" />
              </div>
              <h4 className="text-2xl font-bold uppercase font-barlow-condensed mb-4 italic">
                Reliability
              </h4>
              <p className="text-gray-600 font-barlow leading-relaxed">
                We build long-term trust through consistent equipment
                availability and rapid technical support in the field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
