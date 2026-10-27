"use client";

import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/acts/Hero";
import { ActOne } from "@/components/acts/ActOne";
import { StatsSentence } from "@/components/acts/StatsSentence";
import { HorizontalTimeline } from "@/components/acts/HorizontalTimeline";
import { ActTwo } from "@/components/acts/ActTwo";
import { MapSection } from "@/components/acts/MapSection";
import { ActThree } from "@/components/acts/ActThree";
import { BigStat } from "@/components/acts/BigStat";
import { ExplorerSection } from "@/components/explorer/ExplorerSection";
import { CtaSection } from "@/components/acts/CtaSection";
import { ConcienciaSection } from "@/components/acts/ConcienciaSection";
import { Footer } from "@/components/acts/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-[1]" style={{ background: "var(--bg)" }}>
        <Hero />
        <ActOne />
        <StatsSentence />
        <HorizontalTimeline />
        <ActTwo />
        <MapSection />
        <ActThree />
        <BigStat
          figure="12.8"
          unit="%"
          claim="De cada 8 votos en México,"
          caption="Solo 1 vino de alguien menor de 25 años. La generación con más acceso a información de la historia es la que menos aparece en las urnas."
          source="Fuente: CCPC INE 2024 — Conteo censal de participación ciudadana"
          background="var(--bg)"
          figureColor="var(--rojo-mx)"
        />
        <ExplorerSection />
        <div className="relative h-[40svh] overflow-hidden">
          <img
            src="/images/elecciones-federales-de-mexico-de-2024-18.jpg"
            alt="Materiales electorales del INE: bolígrafos de tinta indeleble en bolsas plásticas"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "grayscale(0.4) contrast(1.1)" }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, var(--bg) 0%, transparent 30%, transparent 70%, var(--ine-purple-dark) 100%)",
            }}
          />
        </div>
        <ConcienciaSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
