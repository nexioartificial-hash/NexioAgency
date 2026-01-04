import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import SocialProof from "@/components/sections/SocialProof";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2F1D1A] text-[#FFF1E3] relative overflow-x-hidden">
      {/* Dynamic Background Layer (z-10) */}
      <InteractiveBackground />

      {/* Content Layer (z-20) */}
      <div className="relative z-20 w-full">
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <Method />
        <SocialProof />
        <About />
        <FAQ />
        <Contact />

        <footer className="py-12 border-t border-border bg-black/80 text-center text-muted-foreground text-sm backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <p className="mb-4">© {new Date().getFullYear()} Nexio Agency. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-8 font-bold uppercase tracking-tighter text-xs">
              <span>Privacidad</span>
              <span>Términos</span>
              <span className="text-primary italic">Menos humo, más resultados.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
