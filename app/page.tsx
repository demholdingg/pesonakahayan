import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
// import Projects from "@/components/home/Projects";
// import Sectors from "@/components/home/Sectors";
// import FleetList from "@/components/home/FleetList";

export const metadata: Metadata = {
  title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
  description: `${SEO_CONFIG.company.fullName}, part of ${SEO_CONFIG.company.parentCompany}, provides premium heavy equipment and fleet rental solutions for industrial operations including material handling, aerial work platforms, genset rental, and specialized equipment.`,
  keywords: [
    "industrial equipment rental",
    "heavy equipment rental",
    "fleet rental Jakarta",
    "material handling equipment",
    "aerial work platform rental",
    "genset rental",
    "construction equipment",
    "equipment leasing",
    "machinery rental",
    "Teknika Pesona Kahayan",
    "DEM Holdings",
  ],
  openGraph: {
    title: `${SEO_CONFIG.company.fullName} - Premium Equipment & Fleet Solutions`,
    description: `${SEO_CONFIG.company.fullName} is part of ${SEO_CONFIG.company.parentCompany}. Your trusted partner for premium heavy equipment and fleet rental solutions.`,
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
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      {/* <Projects />
      <Sectors />
      <FleetList /> */}
    </main>
  );
}
