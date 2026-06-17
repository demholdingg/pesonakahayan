import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg" // Ganti dengan path gambar industrial Anda
          alt="Heavy Equipment Background"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 opacity-40" // Opacity untuk overlay gradient
          priority
        />
        {/* Gradient Overlay memudar ke Putih (background) */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div className="relative z-20 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-light-white leading-tight mb-4">
            Premium Heavy Equipment and Fleet Solutions
          </h1>
          <p className="text-lg md:text-xl font-sans text-neutral-light-white mb-8">
            Your trusted partner for industrial operations, delivering
            reliability and technical expertise.
          </p>
          <button className="bg-secondary hover:bg-secondary-orange text-neutral-dark font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
            Explore Services
          </button>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-heading font-bold text-center mb-8 text-primary">
          Our Services
        </h2>
        {/* Grid kartu layanan akan ditempatkan di sini */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-secondary group hover:shadow-xl transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 text-primary">
              Material Handling
            </h3>
            <p className="font-sans text-gray-600">
              Efficient solutions for all your material handling needs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-secondary group hover:shadow-xl transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 text-primary">
              Heavy Duty Equipment
            </h3>
            <p className="font-sans text-gray-600">
              Robust machinery for demanding industrial tasks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-secondary group hover:shadow-xl transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 text-primary">
              Aerial Work Platform
            </h3>
            <p className="font-sans text-gray-600">
              Safe and reliable access to elevated work areas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
