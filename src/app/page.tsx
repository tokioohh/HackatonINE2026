import { ProgressBar } from "@/components/ui/ProgressBar";
import { Nav } from "@/components/ui/Nav";
import { HeroSection } from "@/components/acts/HeroSection";
import { ActOne } from "@/components/acts/ActOne";
import { StatsSentence } from "@/components/acts/StatsSentence";
import { LostVotesEstimate } from "@/components/acts/LostVotesEstimate";
import { HorizontalTimeline } from "@/components/acts/HorizontalTimeline";
import { ActTwo } from "@/components/acts/ActTwo";
import { MexicoMap } from "@/components/charts/MexicoMap";
import { ActThree } from "@/components/acts/ActThree";
import { BigStat } from "@/components/acts/BigStat";
import { ExplorerSection } from "@/components/explorer/ExplorerSection";
import { ConcienciaSection } from "@/components/acts/ConcienciaSection";
import { CtaSection } from "@/components/acts/CtaSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 1. Barra de progreso de lectura superior */}
      <ProgressBar />

      {/* 2. Navegación fijada con pestañas de libreta */}
      <Nav />

      {/* 3. Hero: "SEIS ELECCIONES. UNA BRECHA." */}
      <HeroSection />

      {/* 4. Acto 1: 2009 — La Brecha */}
      <ActOne />

      {/* 5. Sentencia Estadística: En 6 elecciones, de 15/100 a 13/100 */}
      <StatsSentence />

      {/* 6. Escenario Hipotético: El Contador de Votos Perdidos (~1.2M) */}
      <LostVotesEstimate />

      {/* 7. Línea del Tiempo con SCROLL LATERAL (2009–2024) */}
      <HorizontalTimeline />

      {/* 8. Acto 2: 2012–2018–2024 — El Vaivén Presidencial */}
      <ActTwo />

      {/* 9. Mapa Nacional Interactivo (Participación Juvenil por Estado) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-14">
        <MexicoMap />
      </div>

      {/* 10. Acto 3: 2021–2024 — La Persistencia (3 Preguntas Clave) */}
      <ActThree />

      {/* 11. BigStat: 13 de cada 100 con la Matriz Gráfica 10x10 */}
      <BigStat />

      {/* 12. Explorador Censal Interactivo por Grupos de Edad */}
      <ExplorerSection />

      {/* 13. Franja fotográfica documental: Materiales Electorales INE */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden border-y border-dashed border-neutral-300">
        <img
          src="/images/elecciones-federales-de-mexico-de-2024-18.jpg"
          alt="Materiales electorales del INE"
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-neutral-900/40" />
        <div className="absolute bottom-4 left-6 sm:left-12 text-white font-mono text-xs drop-shadow-md">
          Materiales electorales oficiales, Elección Federal 2024 · INE
        </div>
      </div>

      {/* 14. Manifiesto de Conciencia Cívica: ¿La séptima? Depende de ti */}
      <ConcienciaSection />

      {/* 15. Llamado a la Acción y Datos Abiertos INE */}
      <CtaSection />

      {/* 16. Footer Final Aislado: TU VOTO TAMBIÉN VALE + Créditos Oficiales */}
      <Footer />
    </main>
  );
}
