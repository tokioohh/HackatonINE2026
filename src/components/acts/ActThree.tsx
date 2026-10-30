"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { PostItNote } from "@/components/ui/NotebookPaper";
import { ScotchTape } from "@/components/ui/DoodleStickers";
import { DoodleStamp, NotebookBgDoodle } from "@/components/ui/ScrollDoodles";
import { HelpCircle } from "lucide-react";
import { getLostVotes } from "@/lib/data";

export function ActThree() {
  const lostVotes = getLostVotes();

  return (
    <section
      id="acto-3"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      {/* Doodles tenues de fondo en libreta */}
      <NotebookBgDoodle
        src="/doodles/Usuario.png"
        alt="Usuario fondo libreta"
        width={130}
        tilt={-6}
        opacity={0.15}
        className="top-28 left-8 hidden lg:block"
      />
      <NotebookBgDoodle
        src="/doodles/casillamarcada.png"
        alt="Casilla fondo libreta"
        width={110}
        tilt={10}
        opacity={0.14}
        className="bottom-20 left-12 hidden md:block"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de Acto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO III // INTERMEDIA 2021 – PRESIDENCIAL 2024
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ EL PRESENTE ELECTORAL
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL PRESENTE Y"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="LA PERSISTENCIA" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            La brecha lleva seis elecciones abierta. ¿Se está cerrando? ¿Votan menos? Las respuestas que arrojan los datos del CCPC.
          </p>
        </motion.div>

        {/* ═══ FOTO DOCUMENTAL PERIODÍSTICA: TINTA INDELEBLE 2024 ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-3 sm:p-5 border border-neutral-300 shadow-[4px_8px_20px_rgba(0,0,0,0.15)] rotate-[-0.3deg]">
            <ScotchTape className="-top-3 left-14 w-28 h-6" tilt="-2deg" />
            <ScotchTape className="-top-3 right-14 w-28 h-6" tilt="3deg" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
                <Image
                  src="/images/elecciones-mx/17-fila-votantes-hospital-2024.jpg"
                  alt="Ciudadanos esperando para votar en casilla especial, Hospital 20 de Noviembre, CDMX 2024"
                  fill
                  sizes="(max-width: 640px) 100vw, 448px"
                  quality={85}
                  className="object-cover contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 text-white text-[10px] sm:text-xs font-mono drop-shadow-md">
                  Fila para votar, CDMX 2024 · Foto: ProtoplasmaKid (CC BY-SA 4.0)
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200">
                <Image
                  src="/images/elecciones-mx/18-verificacion-credencial-2024.jpg"
                  alt="Presidente de casilla verificando credencial de elector, elecciones federales 2024"
                  fill
                  sizes="(max-width: 640px) 100vw, 448px"
                  quality={85}
                  className="object-cover contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 text-white text-[10px] sm:text-xs font-mono drop-shadow-md">
                  Verificación de credencial, CDMX 2024 · Foto: ProtoplasmaKid (CC BY-SA 4.0)
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span className="uppercase font-bold text-[#141312]">
                REGISTRO CENSAL: ELECCIÓN FEDERAL 2024
              </span>
              <span>CCPC · 55.8% PARTICIPACIÓN TOTAL</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ LAS 3 PREGUNTAS CLAVE TEXTUALES DE DEV (Composición desestructurada) ═══ */}
        <div className="relative">
          {/* Doodle Ojos vigilantes al margen superior derecho sin tapar el texto */}
          <DoodleStamp
            src="/doodles/ojos.png"
            alt="Ojos observando el voto"
            width={120}
            tilt={6}
            className="absolute -top-20 right-0 sm:right-6 hidden sm:block"
          />

          <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Pregunta 1: ¿La brecha se está cerrando? (Post-it amarillo inclinado a la izquierda) */}
          <div className="relative transform md:-rotate-2 md:-translate-y-3 transition-transform hover:rotate-0">
            <ScotchTape className="-top-3 left-6 w-24 h-5" tilt="3deg" />
            <PostItNote color="yellow" tilt="rotate-0" className="w-full flex flex-col justify-between shadow-[4px_6px_0px_#141312]">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#DC2626] mb-3 border-b border-black/10 pb-1.5">
                  <HelpCircle className="w-4 h-4 shrink-0 text-[#DC2626]" />
                  <span>¿LA BRECHA SE ESTÁ CERRANDO?</span>
                </div>
                <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                  No. El votante promedio tenía <strong className="text-[#DC2626]">42 años</strong> en 2012. En 2024 tiene <strong className="text-[#DC2626]">45</strong>. La proporción de votos de menores de 35 pasó de 37% a 31%. El peso de la generación joven en el resultado encoge.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] font-bold uppercase">
                ★ ENVEJECIMIENTO DEL PADRÓN
              </div>
            </PostItNote>
          </div>

          {/* Pregunta 2: ¿Los jóvenes votan menos que antes? (Ficha azul con ligero desnivel) */}
          <div className="relative transform md:rotate-2 md:translate-y-4 transition-transform hover:rotate-0">
            <ScotchTape className="-top-3 right-6 w-24 h-5" tilt="-2deg" />
            <PostItNote color="blue" tilt="rotate-0" className="w-full flex flex-col justify-between shadow-[5px_5px_0px_#141312]">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#0369A1] mb-3 border-b border-black/10 pb-1.5">
                  <HelpCircle className="w-4 h-4 shrink-0 text-[#0369A1]" />
                  <span>¿LOS JÓVENES VOTAN MENOS?</span>
                </div>
                <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                  Depende de la comparación. En 2024, el <strong className="text-[#0369A1]">~47%</strong> de los menores de 35 inscritos votó — más que en 2009 (36%), 2015 (35%) y 2021 (41%). Pero menos que en el pico de 2012 (~54%). El patrón varía con el tipo de elección, no con una tendencia lineal.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] font-bold uppercase">
                ★ COMPORTAMIENTO CÍCLICO
              </div>
            </PostItNote>
          </div>

          {/* Pregunta 3: ¿Cuántos votos más habría con la tasa de 2012? (Nota rosa con sello) */}
          <div className="relative transform md:-rotate-1 md:-translate-y-1 transition-transform hover:rotate-0">
            <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-5" tilt="1deg" />
            <PostItNote color="pink" tilt="rotate-0" className="w-full flex flex-col justify-between shadow-[4px_6px_0px_#141312]">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#9D174D] mb-3 border-b border-black/10 pb-1.5">
                  <HelpCircle className="w-4 h-4 shrink-0 text-[#9D174D]" />
                  <span>¿VOTOS CON TASA DE 2012?</span>
                </div>
                <p className="font-serif text-base sm:text-lg text-[#1F2937] leading-relaxed">
                  Escenario hipotético: si en 2024 los menores de 35 hubieran participado al ~54% (su máximo, en 2012), habría habido aproximadamente:
                </p>
                <div className="my-3 py-1.5 px-3 bg-white/90 border border-pink-300 shadow-xs">
                  <span className="font-poster text-3xl sm:text-4xl text-[#DC2626] block">
                    {(lostVotes / 1_000_000).toFixed(1)} millones
                  </span>
                  <span className="block text-xs font-mono text-[#9D174D] font-bold">
                    de votos adicionales de menores de 35.
                  </span>
                </div>
                <p className="font-typewriter text-xs text-[#6B7280]">
                  Un ejercicio con supuestos, no una predicción.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-[#6B7280] font-bold uppercase">
                ★ PROYECCIÓN HIPOTÉTICA
              </div>
            </PostItNote>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
