import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroSlider, SlideData } from "../Animations";

const FEATURED_SLIDES: SlideData[] = [
  {
    id: "excavator",
    title: "Zoomlion Excavator",
    image: "/images/products/zoomlion-excavator.jpg",
    specs: ["Operating Weight: 21.5T", "Engine Power: 112kW", "Bucket Capacity: 1.0 m³"],
    heroTitle: <>Premium Heavy Equipment <br /><span className="text-[#FACC15]">Solutions</span></>,
    heroDesc: "Teknika Pesona Kahayan provides top-tier industrial equipment and fleet rental services for your large-scale earthmoving operations."
  },
  {
    id: "wheelloader",
    title: "LiuGong Wheel Loader",
    image: "/images/products/liugong-wheelloader.webp",
    specs: ["Bucket Capacity: 3.0 m³", "Rated Load: 5000 kg", "Operating Weight: 17.1T"],
    heroTitle: <>High Performance <br /><span className="text-[#FACC15]">Material Handling</span></>,
    heroDesc: "Maximize productivity with robust wheel loaders built for tough environments and efficient material movement."
  },
  {
    id: "crawlerdumper",
    title: "Crawler Dumper",
    image: "/images/products/crawler-dumpers.png",
    specs: ["All-Terrain Track System", "Max Payload: 10,000 kg", "Engine: Diesel Turbocharged"],
    heroTitle: <>All-Terrain <br /><span className="text-[#FACC15]">Transport Logistics</span></>,
    heroDesc: "Navigate through challenging muddy fields and uneven surfaces with our reliable crawler dumper systems."
  },
  {
    id: "genset",
    title: "Perkins Silent Genset",
    image: "/images/products/genseet.png",
    specs: ["Capacity: 250 kVA", "Noise Level: <70 dB at 7m", "Fuel Tank: 400L Integrated"],
    heroTitle: <>Uninterrupted <br /><span className="text-[#FACC15]">Power Supply</span></>,
    heroDesc: "Ensure seamless operations with high-quality silent diesel generators perfect for urban and industrial needs."
  },
  {
    id: "harvester",
    title: "Zoomlion Harvester",
    image: "/images/products/harvesterr.jpg",
    specs: ["Feeding Capacity: 8.0 kg/s", "Engine Power: 175HP", "Grain Tank: High Capacity"],
    heroTitle: <>Advanced Agricultural <br /><span className="text-[#FACC15]">Harvesting</span></>,
    heroDesc: "Empower your harvest season with advanced combine harvesters designed to maximize crop yield and reduce losses."
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background Slider with Dynamic Text */}
      <HeroSlider slides={FEATURED_SLIDES}>
        <Link href="/services">
          <button className="bg-[#FACC15] text-[#111111] px-8 py-4 font-bold uppercase flex items-center gap-2 hover:cursor-pointer hover:bg-yellow-500 transition-colors">
            Explore Services <ArrowRight size={20} />
          </button>
        </Link>
        <Link href="/about">
          <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase hover:cursor-pointer hover:bg-white hover:text-[#111111] transition-all">
            About Us
          </button>
        </Link>
      </HeroSlider>
    </section>
  );
}
