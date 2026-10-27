"use client";

import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/acts/Hero";
import { TornTransition } from "@/components/ui/TornTransition";
import { ActOne } from "@/components/acts/ActOne";
import { StatsSentence } from "@/components/acts/StatsSentence";
import { LostVotesEstimate } from "@/components/acts/LostVotesEstimate";
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
        <TornTransition />
        <ActOne />
        <StatsSentence />
        <LostVotesEstimate />
        <HorizontalTimeline />
        <ActTwo />
        <MapSection />
        <ActThree />
        <BigStat
          figure="12.8"
          unit="%"
          claim="De cada 100 votos en 2024,"
          caption="solo 13 vinieron de alguien de 18 a 24 años. El 47% de los jóvenes inscritos sí votó — pero su proporción en el total sigue siendo la menor de todos los grupos de edad."
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
