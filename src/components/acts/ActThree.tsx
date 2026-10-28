"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ELECTION_YEARS } from "@/lib/data";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { MexicoMap } from "@/components/charts/MexicoMap";
import { PersonMatrix100 } from "@/components/charts/PersonMatrix100";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote, TornPaperScrap } from "@/components/ui/NotebookPaper";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import {
  DoodleCircle,
  DoodleArrow,
  DoodleUnderline,
  ScotchTape,
} from "@/components/ui/DoodleStickers";

export function ActThree() {
  // Simulador de votos fantasma
  const youthNominal2024 = 19500000;
  const youthRate2024 = 39.3;
  const [targetRate, setTargetRate] = useState(52.0);

  const realVotes = Math.round(youthNominal2024 * (youthRate2024 / 100));
  const projectedVotes = Math.round(youthNominal2024 * (targetRate / 100));
  const lostVotes = Math.max(0, projectedVotes - realVotes);

  return (
    <section
      id="acto-3"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera Acto III */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO III // 2021–2024: EL COLAPSO
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ DIAGNÓSTICO OFICIAL CCPC
            </span>
          </div>

          {/* Dos renglones estables e independientes */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="LA GRAN"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="DESCONEXIÓN" size="lg" />
            </div>
          </div>

          {/* Impact Quote en el encabezado */}
          <ImpactQuote
            quote="La paradoja contemporánea: una juventud con conectividad absoluta las 24 horas del día, pero ausente en las urnas. La política se convirtió en un feed que se desliza sin votar."
            author="CCPC INE Diagnóstico 2024"
            color="yellow"
            tilt="rotate-[-0.5deg]"
          />
        </motion.div>

        {/* El Gran Hecho Gráfico: 13 DE CADA 100 con ICONOS DE PERSONA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 border-b border-dashed border-neutral-300 pb-14"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 border-b border-dashed border-neutral-300 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4B5563]">
                  PROPORCIÓN REAL EN LAS CASILLAS:
                </span>
                <span className="urgent-tag text-[10px]">14 MILLONES AUSENTES</span>
              </div>
              <h3 className="font-poster text-7xl sm:text-9xl text-[#141312] leading-none">
                <DoodleCircle color="#DC2626" className="mr-2">
                  <span>13</span>
                </DoodleCircle>{" "}
                <span className="text-[#DC2626]">DE CADA 100</span>
              </h3>
            </div>

            {/* Post-It descriptivo */}
            <PostItNote color="yellow" tilt="rotate-[1deg]" className="max-w-md w-full">
              <p className="text-xs sm:text-sm font-typewriter text-[#1F2937] leading-relaxed">
                De cada 100 personas que emitieron su voto en las elecciones de 2024,{" "}
                <strong className="highlighter-yellow font-bold text-black">
                  solo 13 eran jóvenes de 18 a 24 años
                </strong>
                . Los 87 restantes fueron adultos y mayores. Más de 14 millones de jóvenes se quedaron en casa.
              </p>
            </PostItNote>
          </div>

          {/* Matriz Gráfica 10x10 exactamente como la imagen de referencia */}
          <PersonMatrix100 />
        </motion.div>

        {/* La Curva de Envejecimiento (43.12 → 45.46 años) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85 }}
          className="grid lg:grid-cols-12 gap-10 mb-16 border-b border-dashed border-neutral-300 pb-14 items-start"
        >
          <div className="lg:col-span-5 space-y-4">
            <PostItNote color="yellow" tilt="rotate-[-1.5deg]" className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-xs font-bold text-[#DC2626] uppercase">
                  HECHO DEMOGRÁFICO CCPC
                </span>
                <span className="font-mono text-xs text-[#6B7280]">15 AÑOS DE HISTORIA</span>
              </div>
              <h4 className="font-poster text-3xl sm:text-4xl text-[#141312] leading-none my-2">
                EL ENVEJECIMIENTO DE LAS URNAS
              </h4>
              <p className="font-typewriter text-xs text-[#1F2937] leading-relaxed">
                En 2009, la edad media del ciudadano que acudía a votar era de <strong>43.12 años</strong>. Para 2024, esa cifra escaló hasta los <strong>45.46 años</strong>.
              </p>

              <div className="pt-3 border-t border-black/15 mt-3">
                <div className="font-poster text-5xl text-[#DC2626]">
                  <DoodleCircle color="#DC2626">
                    <span>+2.34</span>
                  </DoodleCircle>{" "}
                  <span className="text-xl text-[#141312]">AÑOS</span>
                </div>
                <div className="text-[10px] font-mono text-[#4B5563] uppercase pt-1 font-bold">
                  ENVEJECIMIENTO CONTINUO DEL VOTANTE PROMEDIO
                </div>
              </div>
            </PostItNote>
          </div>

          {/* Historial de Años en hoja arrancada */}
          <div className="lg:col-span-7">
            <TornPaperScrap tilt="rotate-[0.5deg]" tapePosition="top">
              <div className="flex justify-between items-center border-b border-dashed border-neutral-300 pb-2 mb-4">
                <span className="font-mono text-xs font-bold uppercase">
                  REGISTRO HISTÓRICO DE EDAD PROMEDIO:
                </span>
                <span className="font-mono text-[10px] text-[#6B7280]">INE CCPC</span>
              </div>

              <div className="space-y-3">
                {ELECTION_YEARS.map((y) => (
                  <div
                    key={y.year}
                    className="flex items-center justify-between text-xs font-mono border-b border-neutral-200 pb-2"
                  >
                    <span className="font-bold text-[#141312] text-sm w-16">{y.year}</span>
                    <span className="text-[#6B7280]">{y.type}</span>
                    <span className="font-bold text-[#DC2626] text-base">
                      {y.averageVoterAge} años
                    </span>
                    <div className="w-24 sm:w-40 bg-neutral-200 h-2 overflow-hidden hidden sm:block">
                      <div
                        className="bg-[#DC2626] h-full"
                        style={{ width: `${((y.averageVoterAge - 40) / 7) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TornPaperScrap>
          </div>
        </motion.div>

        {/* MAPA INTERACTIVO DE MÉXICO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 border-b border-dashed border-neutral-300 pb-14"
        >
          <MexicoMap />
        </motion.div>

        {/* SIMULADOR DE VOTOS FANTASMA (RF-08) */}
        <motion.div
          id="votos-perdidos"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85 }}
          className="pb-12 mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              RF-08 // CALCULADORA DE CRISIS
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ SIMULADOR ELECTORAL INTERACTIVO
            </span>
          </div>

          {/* Dos renglones estables para el título del simulador */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[32px] sm:min-h-[44px]">
              <TypewriterText
                text="EL CONTADOR DE"
                className="text-2xl sm:text-4xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="VOTOS FANTASMA" size="md" />
            </div>
          </div>

          <p className="font-serif text-lg text-[#4B5563] italic mb-8 max-w-2xl">
            ¿Cuántos votos juveniles desaparecieron en 2024 frente a lo que México logró en 2012 o 2018?
          </p>

          <TornPaperScrap tilt="rotate-[-0.5deg]" tapePosition="top">
            <div className="grid lg:grid-cols-12 gap-8 items-center py-4">
              <div className="lg:col-span-7 lg:border-r lg:border-dashed lg:border-neutral-300 lg:pr-8">
                <div className="text-xs font-mono uppercase tracking-widest text-[#DC2626] font-bold mb-1">
                  VOTOS QUE NO LLEGARON A LAS URNAS:
                </div>
                <div className="font-poster text-6xl sm:text-8xl text-[#DC2626] tracking-tight my-2">
                  <AnimatedNumber value={lostVotes} decimals={0} duration={1000} />
                </div>
                <p className="text-xs sm:text-sm font-sans text-[#141312] leading-relaxed">
                  A una tasa de <strong>{targetRate.toFixed(1)}%</strong>, México sumaría más de dos millones de votos juveniles adicionales: el equivalente a llenar{" "}
                  <strong className="highlighter-yellow text-black font-bold">
                    25 veces el Estadio Azteca
                  </strong>{" "}
                  con jóvenes que no acudieron a su casilla.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#141312] font-bold">SIMULAR PARTICIPACIÓN:</span>
                  <span className="text-[#DC2626] font-bold text-lg">{targetRate.toFixed(1)}%</span>
                </div>

                <input
                  type="range"
                  min="39.3"
                  max="65.0"
                  step="0.5"
                  value={targetRate}
                  onChange={(e) => setTargetRate(parseFloat(e.target.value))}
                  className="w-full h-3 bg-neutral-200 appearance-none cursor-pointer accent-[#DC2626]"
                />

                <div className="flex justify-between text-[10px] font-mono text-[#4B5563]">
                  <span>2024 Real (39.3%)</span>
                  <span>Pico 2012 (52.0%)</span>
                  <span>Meta Cívica (65.0%)</span>
                </div>
              </div>
            </div>
          </TornPaperScrap>
        </motion.div>
      </div>
    </section>
  );
}
