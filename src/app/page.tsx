import { ProgressBar } from "@/components/ui/ProgressBar";
import { HeroSection } from "@/components/acts/HeroSection";
import { ActOne } from "@/components/acts/ActOne";
import { ActTwo } from "@/components/acts/ActTwo";
import { ActThree } from "@/components/acts/ActThree";
import { GenerationalMirror } from "@/components/enhancements/GenerationalMirror";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Top Floating Progress Bar */}
      <ProgressBar />

      {/* Prólogo / Hero */}
      <HeroSection />

      {/* Acto 1: 2009 — El Silencio */}
      <ActOne />

      {/* Acto 2: 2012–2018 — El Despertar Digital */}
      <ActTwo />

      {/* Acto 3: 2021–2024 — La Desconexión & Votos Perdidos */}
      <ActThree />

      {/* Enhancement: Tu Generación en el Espejo */}
      <GenerationalMirror />

      {/* Footer Final: Tu voto también vale */}
      <Footer />
    </main>
  );
}
