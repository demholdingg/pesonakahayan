import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HardHat,
  ArrowRight,
  Briefcase,
  Globe,
  Camera,
  Play,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark-DEFAULT text-primary border-t border-white/5">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-secondary-DEFAULT p-2 rounded-sm transform group-hover:rotate-12 transition-transform">
                <HardHat className="w-6 h-6 text-neutral-dark-DEFAULT" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold leading-none tracking-tight">
                  TEKNIKA PESONA
                </span>
                <span className="text-xs font-heading font-bold text-secondary-DEFAULT tracking-[0.2em]">
                  KAHAYAN
                </span>
              </div>
            </Link>
            <p className="text-primary/70 font-sans text-sm leading-relaxed max-w-xs">
              Premium heavy equipment and fleet solutions for industrial
              operations. Delivering reliability and technical expertise since
              2026.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-secondary transition-colors">
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Camera className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider text-secondary border-l-4 border-secondary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-sans">
              {["Home", "About Us", "Products", "Services", "Projects"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-primary/60 hover:text-secondary flex items-center group transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider text-secondary border-l-4 border-secondary pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start space-x-3 text-primary/60">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>
                  Jl. Kahayan Raya No. 123, <br />
                  Palangkaraya, Kalimantan Tengah
                </span>
              </li>
              <li className="flex items-center space-x-3 text-primary/60">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-primary/60">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@pesonakahayan.co.id</span>
              </li>
              <li className="pt-2">
                <Link
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center space-x-2 bg-secondary text-neutral-dark px-4 py-2 rounded-sm font-bold hover:bg-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Focus */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider text-secondary border-l-4 border-secondary pl-3">
              Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Material Handling",
                "Heavy Duty",
                "Aerial Platform",
                "Crawler Dumper",
                "Combine Harvester",
                "Genset Silent",
              ].map((focus) => (
                <span
                  key={focus}
                  className="bg-primary px-3 py-1 text-amber-100 rounded-sm text-[10px] font-bold uppercase tracking-widest border border-white/10"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="bg-black/40 border-t border-white/5 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[12px] font-sans text-neutral-light/40">
          <p>
            &copy; {currentYear} Teknika Pesona Kahayan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/docs"
              className="hover:text-secondary transition-colors"
            >
              Supporting Documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
