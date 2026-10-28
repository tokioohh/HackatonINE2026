import { ProgressBar } from "@/components/ui/ProgressBar";
import { Nav } from "@/components/ui/Nav";
import { HeroSection } from "@/components/acts/HeroSection";
import { ActOne } from "@/components/acts/ActOne";
import { LostVotesEstimate } from "@/components/acts/LostVotesEstimate";
import { HorizontalTimeline } from "@/components/acts/HorizontalTimeline";
import { ActTwo } from "@/components/acts/ActTwo";
import { MexicoMap } from "@/components/charts/MexicoMap";
import { ActThree } from "@/components/acts/ActThree";
import { ExplorerSection } from "@/components/explorer/ExplorerSection";
import { ConcienciaSection } from "@/components/acts/ConcienciaSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Barra de progreso de lectura superior */}
      <ProgressBar />

      {/* Navegación fijada con pestañas de libreta */}
      <Nav />

      {/* Hero: "SEIS ELECCIONES. UNA BRECHA." */}
      <HeroSection />

      {/* Acto 1: 2009 — La Brecha (Campañas de bardas y TV) */}
      <ActOne />

      {/* Escenario Hipotético: El Contador de Votos Perdidos (~1.2M) */}
      <LostVotesEstimate />

      {/* Cronología Histórica: 6 Elecciones en Post-Its Multicolores */}
      <HorizontalTimeline />

      {/* Acto 2: 2012–2018 — El Vaivén Presidencial */}
      <ActTwo />

      {/* Mapa Nacional Interactivo (Atlas Censal de Gravedad Cívica) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-14">
        <MexicoMap />
      </div>

      {/* Acto 3: 2021–2024 — La Persistencia + Matriz 13 de cada 100 */}
      <ActThree />

      {/* Explorador Censal Interactivo por Grupos de Edad */}
      <ExplorerSection />

      {/* Manifiesto de Conciencia Cívica: ¿La séptima? Depende de ti */}
      <ConcienciaSection />

      {/* Footer Final Aislado en Pantalla Completa: TU VOTO TAMBIÉN VALE */}
      <Footer />
    </main>
  );
}
