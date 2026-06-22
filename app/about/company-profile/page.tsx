import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Company Profile | ${SEO_CONFIG.company.fullName}`,
  description: `Discover the company profile of ${SEO_CONFIG.company.fullName}, a subsidiary of ${SEO_CONFIG.company.parentCompany}. Learn about our commitment to excellence in industrial equipment and fleet management.`,
  keywords: [
    "company profile",
    "corporate information",
    "company history",
    "Teknika Pesona Kahayan",
  ],
};

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-company-profile.jpg"
          alt="Teknika Pesona Kahayan company office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="container mx-auto px-4 z-20 text-white">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#FACC15] hover:text-yellow-400 mb-6"
          >
            <ArrowLeft size={20} />
            Back to About
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold font-barlow-condensed uppercase leading-tight">
            Company <br />
            <span className="text-[#FACC15]">Profile</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
              Who We Are
            </span>
            <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-12">
              About Teknika Pesona Kahayan
            </h2>

            <div className="space-y-6 font-barlow text-lg text-gray-700 leading-relaxed">
              <p>
                PT. Teknika Pesona Kahayan is an equipment solutions company
                focused on sales, unit supply, and rental services. We support
                industrial, construction, warehouse, plantation, and field
                operations with dependable equipment and responsive service.
              </p>

              <p>
                Our business focus covers Material Handling, Heavy Duty
                Equipment, Agriculture equipment including Combine Harvester,
                Aerial Work Platform (AWP) including Boomlift and Scissorlift,
                Crawler Dumper for transporting TBS in peatland and wet terrain,
                Silent Diesel Genset, and other supporting industrial equipment.
              </p>

              <p>
                We are committed to delivering practical solutions, quality
                units, and professional support that help customers work safer,
                faster, and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <span className="text-[#FACC15] font-bold uppercase tracking-widest text-sm">
            Core Values
          </span>
          <h2 className="text-5xl font-bold font-barlow-condensed uppercase mt-4 text-[#111111] mb-12">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reliability",
                desc: "Consistent delivery of quality equipment and services",
              },
              {
                title: "Safety",
                desc: "Unwavering commitment to workplace safety standards",
              },
              {
                title: "Excellence",
                desc: "Pursuing the highest standards in everything we do",
              },
              {
                title: "Innovation",
                desc: "Continuous improvement and modern solutions",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-gray-200 hover:border-[#FACC15] transition-all"
              >
                <h3 className="text-2xl font-bold font-barlow-condensed uppercase text-[#111111] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-barlow">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
