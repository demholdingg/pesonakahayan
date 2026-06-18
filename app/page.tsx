// d:\tpknew\src\app\page.tsx

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
// import Projects from "@/components/home/Projects";
// import Sectors from "@/components/home/Sectors";
// import FleetList from "@/components/home/FleetList";

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
