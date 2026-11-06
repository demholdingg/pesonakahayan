import React from "react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Send,
  ChevronRight,
  Warehouse,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Contact Us | ${SEO_CONFIG.company.fullName}`,
  description: `Contact ${SEO_CONFIG.company.fullName}, a subsidiary of ${SEO_CONFIG.company.parentCompany}, for your PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure requirements.`,
  keywords: [
    "contact Teknika Pesona Kahayan",
    "PLTD genset rental inquiry",
    "heavy equipment forklift rental",
    "FTTH telecom project contact",
    "head office Jakarta",
  ],
  openGraph: {
    title: `Contact Us | ${SEO_CONFIG.company.name}`,
    description: `Reach out to ${SEO_CONFIG.company.fullName} for your energy, heavy equipment, and telecom infrastructure needs.`,
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[#111111]">
        <Image
          src="/images/hero/hero-contact.jpg"
          alt="Professional office building"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex mb-4 text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold font-barlow-condensed">
            <Link href="/" className="hover:text-[#FACC15] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-[#FACC15]" />
            <span className="text-[#FACC15]">Contact</span>
          </nav>
          <span className="bg-[#FACC15] text-[#111111] px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-barlow-condensed rounded-sm inline-block mb-3">
            Inquiry & Consultation
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase tracking-tight leading-tight">
            Get In <span className="text-[#FACC15]">Touch</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl font-barlow leading-relaxed">
            Our engineering and commercial specialists are ready to structure customized proposals for captive PLTD power generation, heavy equipment rentals, and turnkey FTTH optical rollouts.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information & Map */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3 py-1 rounded-sm font-barlow-condensed inline-block mb-3">
                Corporate Facilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase font-barlow-condensed mb-8">
                Offices & Depots
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded border border-gray-200">
                  <div className="bg-[#FACC15] p-3 text-[#111111] rounded-sm shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider text-gray-500 mb-1 font-barlow-condensed">
                      Corporate Head Office
                    </h4>
                    <p className="text-[#111111] text-sm font-medium leading-relaxed font-barlow">
                      18 Office Park Building, 25th Floor Unit A2, Jl. TB Simatupang No. 18, Kebagusan, Pasar Minggu, South Jakarta 12520, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded border border-gray-200">
                  <div className="bg-[#FACC15] p-3 text-[#111111] rounded-sm shrink-0 mt-0.5">
                    <Warehouse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider text-gray-500 mb-1 font-barlow-condensed">
                      Main Workshop & Fleet Depot
                    </h4>
                    <p className="text-[#111111] text-sm font-medium leading-relaxed font-barlow">
                      Jl. Sultan Agung Pondok Ungu Raya, Medan Satria, Bekasi City, West Java, Indonesia
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded border border-gray-200">
                    <div className="bg-[#FACC15] p-3 text-[#111111] rounded-sm shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-[11px] tracking-wider text-gray-500 font-barlow-condensed">
                        Operations Desk
                      </h4>
                      <p className="text-[#111111] font-bold text-sm font-barlow">
                        +62 877-9834-5443
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded border border-gray-200">
                    <div className="bg-[#FACC15] p-3 text-[#111111] rounded-sm shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-[11px] tracking-wider text-gray-500 font-barlow-condensed">
                        24/7 Hotline
                      </h4>
                      <p className="text-[#111111] font-bold text-sm font-barlow">
                        +62 877-7624-8028
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded border border-gray-200">
                  <div className="bg-[#FACC15] p-3 text-[#111111] rounded-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider text-gray-500 font-barlow-condensed">
                      Official Inquiry Email
                    </h4>
                    <p className="text-[#111111] font-bold text-sm font-barlow">
                      info@pesonakahayan.co.id
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <div className="mb-8">
                <Link
                  href="https://wa.me/6287776248028"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-6 font-bold uppercase text-xs tracking-wider font-barlow-condensed rounded-sm hover:bg-[#20ba59] transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect Directly via WhatsApp (+62 877-7624-8028)
                </Link>
              </div>

              {/* Google Maps Integration */}
              <div className="w-full h-72 bg-gray-200 rounded border border-gray-200 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.485317929369!2d106.9752731!3d-6.1995228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b3079bb1bf9%3A0xbd9bf798ef719ad4!2sWarehouse%20PT.%20Teknika%20Pesona%20Kahayan!5e0!3m2!1sid!2sid!4v1788163175204!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Warehouse PT Teknika Pesona Kahayan"
                ></iframe>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-[#F3F4F6] p-8 md:p-12 border-l-4 border-[#FACC15] shadow-sm rounded-r">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 font-barlow-condensed">
                Request For Quotation (RFQ)
              </span>
              <h2 className="text-3xl font-bold text-[#111111] uppercase font-barlow-condensed mb-8 mt-1">
                Send a Project Inquiry
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors text-sm font-barlow"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors text-sm font-barlow"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors text-sm font-barlow"
                      placeholder="email@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors text-sm font-barlow"
                      placeholder="+62 812-xxxx-xxxx"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                    Pillar / Service Category
                  </label>
                  <select className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors appearance-none text-sm font-barlow">
                    <option>Pillar 1: PLTD Power Generation (Multi-MW PPA / IPP / O&M)</option>
                    <option>Pillar 2: Material Equipment Handling (Forklift / Heavy Machinery Fleet)</option>
                    <option>Pillar 3: FTTH Telecom Infrastructure (Turnkey Rollout / OSP-ISP / Splicing)</option>
                    <option>Aerial Work Platforms (Boom Lift & Scissor Lift)</option>
                    <option>Custom Industrial Fabrication & Engineering</option>
                    <option>General Strategic Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600 font-barlow-condensed">
                    Project Requirements & Site Location
                  </label>
                  <textarea
                    rows={5}
                    className="w-full p-3.5 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors text-sm font-barlow"
                    placeholder="Describe your power capacity needs, machinery fleet quantities, or fiber route length and site location..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111111] text-white py-4 font-bold uppercase tracking-wider text-xs font-barlow-condensed flex items-center justify-center gap-3 hover:bg-[#FACC15] hover:text-[#111111] transition-all group rounded-sm shadow-md"
                >
                  Submit Inquiry{" "}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
