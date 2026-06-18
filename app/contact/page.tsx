import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Teknika Pesona Kahayan",
  description:
    "Get in touch with Teknika Pesona Kahayan for industrial equipment rentals and fleet solutions.",
};

const Contact = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-[#FACC15]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#FACC15]">Contact</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-barlow-condensed uppercase italic tracking-tighter">
            Get In <span className="text-[#FACC15]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-barlow">
            Have questions about our fleet or need a custom quote? Our team is
            ready to assist your industrial needs.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information & Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#111111] uppercase font-barlow-condensed mb-8 italic">
                Office Information
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FACC15] p-3 text-[#111111]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1 font-barlow-condensed">
                      Our Location
                    </h4>
                    <p className="text-[#111111] font-medium leading-relaxed font-barlow">
                      Gedung 18 Office Park Lt. 25 Unit A2
                      <br />
                      Jl. Tb. Simatupang No.18 Kebagusan
                      <br />
                      Pasar Minggu, Jakarta Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FACC15] p-3 text-[#111111]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1 font-barlow-condensed">
                      Call Us
                    </h4>
                    <p className="text-[#111111] font-medium font-barlow">
                      +62 21 XXXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FACC15] p-3 text-[#111111]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1 font-barlow-condensed">
                      Email Inquiry
                    </h4>
                    <p className="text-[#111111] font-medium font-barlow">
                      info@teknikapesonakahayan.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="w-full h-80 bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8656608933256!2d106.8299863!3d-6.2814041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f21f00000001%3A0xc3f9a797828c46!2s18%20Office%20Park!5e0!3m2!1sid!2sid!4v1718612345678!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-[#F3F4F6] p-8 md:p-12 border-l-4 border-[#FACC15] shadow-sm">
              <h2 className="text-3xl font-bold text-[#111111] uppercase font-barlow-condensed mb-8 italic">
                Send an Inquiry
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Subject
                  </label>
                  <select className="w-full p-4 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors appearance-none">
                    <option>Equipment Rental</option>
                    <option>Fleet Management</option>
                    <option>Fabrication Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full p-4 bg-white border border-gray-300 focus:border-[#FACC15] outline-none transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#111111] text-white py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors group"
                >
                  Send Message{" "}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
