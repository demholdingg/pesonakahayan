import Link from "next/link";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="bg-gradient-to-br from-[#111111] via-neutral-900 to-[#1c1c1c] text-white py-20 relative overflow-hidden border-t border-neutral-800">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FACC15] px-3.5 py-1.5 rounded-sm font-barlow-condensed inline-block mb-4">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow-condensed uppercase tracking-tight leading-tight">
            Ready to Optimize Your Industrial & Infrastructure Operations?
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 font-barlow leading-relaxed">
            Consult your captive power plant requirements, heavy equipment fleet rental, or turnkey FTTH telecommunications rollout with our engineering specialists today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://wa.me/6287776248028"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#FACC15] text-[#111111] px-8 py-4 font-bold uppercase text-sm tracking-wider font-barlow-condensed rounded-sm hover:bg-yellow-400 transition-all shadow-lg"
            >
              <MessageCircle size={18} />
              Instant WhatsApp Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 font-bold uppercase text-sm tracking-wider font-barlow-condensed rounded-sm hover:bg-white hover:text-[#111111] transition-all"
            >
              Request a Quotation (RFQ) <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-xs text-gray-400 font-barlow">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FACC15]" />
              <span>+62 877-9834-5443 / +62 877-7624-8028</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FACC15]" />
              <span>info@pesonakahayan.co.id</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
