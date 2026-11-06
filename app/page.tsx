import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Hero from "@/components/home/Hero";
import BusinessPillars from "@/components/home/BusinessPillars";
import CompanyStats from "@/components/home/CompanyStats";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeCTA from "@/components/home/HomeCTA";
import { CustomerMarquee } from "@/components/Animations";

export const metadata: Metadata = {
  title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
  description: `${SEO_CONFIG.company.fullName}, a subsidiary of ${SEO_CONFIG.company.parentCompany}, delivers integrated solutions across 3 Core Business Pillars: PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
  keywords: [
    "PLTD Power Generation",
    "Material Equipment Handling",
    "FTTH Telecom Infrastructure",
    "diesel power plant Indonesia",
    "silent industrial genset",
    "heavy equipment rental",
    "forklift rental",
    "fiber optic rollout",
    "fusion splicing OTDR",
    "Teknika Pesona Kahayan",
    "DEM Holdings",
  ],
  openGraph: {
    title: `${SEO_CONFIG.company.fullName} - PLTD, Material Handling & FTTH Telecom`,
    description: `${SEO_CONFIG.company.fullName} - Your trusted partner for captive power generation, industrial fleet solutions, and telecommunications infrastructure in Indonesia.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.company.fullName,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Slider with 3 Core Business Pillars */}
      <Hero />

      {/* 2. Core Business Pillars Showcase */}
      <BusinessPillars />

      {/* 3. Corporate Stats & Figures */}
      {/* <CompanyStats /> */}

      {/* 4. Integrated Services & Technical Capabilities */}
      <Services />

      {/* 5. Why Choose PT Teknika Pesona Kahayan */}
      {/* <WhyChooseUs /> */}

      {/* 6. Trusted Clients & Partner Marquee */}
      {/* <section className="py-20 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1 rounded-sm font-barlow-condensed inline-block mb-2">
            Partnership Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-barlow-condensed uppercase text-[#111111]">
            Trusted by Leading Industry Enterprises
          </h2>
          <p className="text-sm text-gray-500 font-barlow max-w-xl mx-auto mt-2">
            Empowering critical energy, logistics, and telecom infrastructure supply chains nationwide.
          </p>
        </div>
        <CustomerMarquee />
      </section> */}

      {/* 7. Call To Action (RFQ / WhatsApp Consultation)
      <HomeCTA /> */}
    </div>
  );
}
