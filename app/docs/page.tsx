import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SEO_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: `Certifications | ${SEO_CONFIG.company.fullName}`,
  description: `View the ISO certifications held by ${SEO_CONFIG.company.fullName}, covering quality, environmental, and information security management.`,
};

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/images/ISO/25.%20ISO%209001-2015.png",
    alt: "ISO 9001:2015 Quality Management System certificate",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System",
    image: "/images/ISO/26.%20ISO%2014001-2015.png",
    alt: "ISO 14001:2015 Environmental Management System certificate",
  },
  {
    title: "ISO 27001:2022",
    description: "Information Security Management System",
    image: "/images/ISO/27.%20ISO%2027001-2022.png",
    alt: "ISO 27001:2022 Information Security Management System certificate",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#111111] px-6 py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-7xl">
          <nav className="mb-6 flex items-center text-sm font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="transition-colors hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-[#FACC15]">Certifications</span>
          </nav>
          <p className="mb-3 font-barlow text-sm font-bold uppercase tracking-widest text-[#FACC15]">
            Supporting Documents
          </p>
          <h1 className="font-barlow-condensed text-5xl font-bold uppercase leading-none text-white md:text-7xl">
            Our <span className="text-[#FACC15]">Certifications</span>
          </h1>
          <p className="mt-6 max-w-2xl font-barlow text-lg leading-relaxed text-gray-300">
            Our management systems are certified to internationally recognized
            standards for quality, environmental responsibility, and information
            security.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F4F6] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-gray-300 pb-5">
            <div>
              <p className="mb-2 font-barlow text-sm font-bold uppercase tracking-widest text-gray-500">
                Management Standards
              </p>
              <h2 className="font-barlow-condensed text-3xl font-bold uppercase text-[#111111] md:text-4xl">
                Certified Systems
              </h2>
            </div>
            <span className="shrink-0 font-barlow text-sm font-bold text-gray-500">
              03 Certificates
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <figure
                key={certification.title}
                className="overflow-hidden border border-gray-200 bg-white"
              >
                <div className="relative aspect-[3/4] bg-white p-3 md:p-5">
                  <Image
                    src={certification.image}
                    alt={certification.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>
                <figcaption className="border-t border-gray-200 px-5 py-5">
                  <h3 className="font-barlow-condensed text-2xl font-bold uppercase text-[#111111]">
                    {certification.title}
                  </h3>
                  <p className="mt-1 font-barlow text-sm text-gray-600">
                    {certification.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
