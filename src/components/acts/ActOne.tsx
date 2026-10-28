"use client";

import { motion } from "framer-motion";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { SpiralPaperCard, PostItNote, TornPaperScrap } from "@/components/ui/NotebookPaper";
import { ImpactQuote } from "@/components/ui/ImpactQuote";
import {
  DoodleCircle,
  DoodleArrow,
  DoodleUnderline,
  DoodleCross,
  ScotchTape,
} from "@/components/ui/DoodleStickers";
import { Check, Radio } from "lucide-react";

export function ActOne() {
  const ballotContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const ballotItemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="acto-1"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabecera con cinta adhesiva y estilo de cuaderno de investigación */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-dashed border-neutral-300 pb-6 relative"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="urgent-tag">
              ACTO I // ELECCIÓN 2009: EL SILENCIO
            </span>
            <span className="font-mono text-xs uppercase text-[#DC2626] tracking-widest font-bold">
              ★ EXPEDIENTE HISTÓRICO CCPC-09
            </span>
          </div>

          {/* Dos renglones estables e independientes para que el typewriter no empuje el Ransom Note */}
          <div className="flex flex-col gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-start w-full min-h-[40px] sm:min-h-[56px]">
              <TypewriterText
                text="EL SILENCIO DE LAS"
                className="text-3xl sm:text-5xl md:text-6xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-start w-full pt-1">
              <RansomNoteTitle text="PLAZAS" size="lg" />
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#4B5563] max-w-3xl italic mt-2">
            La política mexicana se transmitía por televisión abierta y se negociaba en mítines de acarreados. Para la juventud de 2009, la democracia era un monólogo ajeno.
          </p>
        </motion.div>

        {/* Layout en Plana de Cuaderno: Hojas arrancadas y Post-its en vez de recuadros rígidos */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Columna Izquierda: Crónica en recortes de papel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Pedazo de papel arrancado con cinta scotch */}
            <TornPaperScrap tilt="rotate-[-1deg]" tapePosition="top">
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase font-black text-[#DC2626] tracking-wider flex items-center gap-2">
                  <Radio className="w-4 h-4" />
                  <span>EL PAÍS SIN SMARTPHONES NI REDES</span>
                </div>
                <p className="font-sans text-base text-[#141312] leading-relaxed">
                  En 2009, solo <strong className="highlighter-yellow text-black font-bold">27 de cada 100 hogares</strong> tenían acceso a internet. No existían los teléfonos inteligentes populares ni los algoritmos de video corto. Los partidos políticos acaparaban los spots de radio y televisión abierta.
                </p>
              </div>
            </TornPaperScrap>

            {/* Impact Quote destacado con animación */}
            <ImpactQuote
              quote="La juventud simplemente apagaba el televisor. La política ocurría en un canal que nadie menor de 30 años sintonizaba."
              author="Testimonio Juvenil 2009"
              color="white"
              tilt="rotate-[-0.5deg]"
            />

            {/* Comparación directa en 2 Post-Its / notas de papel */}
            <div className="pt-2 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-neutral-300 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  EL DESBALANCE EN LAS CASILLAS
                </span>
                <span className="text-[10px] font-mono text-[#DC2626] font-bold">
                  CENSO OFICIAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Jóvenes: Post-it Amarillo */}
                <PostItNote tilt="rotate-[-2deg]" className="w-full">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#DC2626] font-black mb-1">
                    JÓVENES (20–24 AÑOS)
                  </div>
                  <div className="font-poster text-5xl text-[#DC2626] leading-none my-1">
                    <DoodleCircle color="#DC2626">
                      <span>3</span>
                    </DoodleCircle>{" "}
                    <span className="text-xl text-[#141312]">DE 10</span>
                  </div>
                  <p className="font-typewriter text-xs text-[#141312] leading-relaxed pt-1">
                    <strong>11.5 millones</strong> de boletas juveniles se quedaron vacías.
                  </p>
                  <div className="text-[9px] font-mono text-[#4B5563] pt-2 border-t border-black/15 mt-2">
                    CCPC-09: 31.5% efectivo
                  </div>
                </PostItNote>

                {/* Adultos: Nota arrancada con cinta */}
                <TornPaperScrap tilt="rotate-[1.5deg]" tapePosition="top" className="w-full">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#4B5563] font-bold mb-1">
                    ADULTOS (45–59 AÑOS)
                  </div>
                  <div className="font-poster text-5xl text-[#141312] leading-none my-1">
                    6 <span className="text-xl text-[#4B5563]">DE 10</span>
                  </div>
                  <p className="font-typewriter text-xs text-[#141312] leading-relaxed pt-1">
                    Casi el doble de participación. Los adultos tomaron las decisiones.
                  </p>
                  <div className="text-[9px] font-mono text-[#4B5563] pt-2 border-t border-black/15 mt-2">
                    CCPC-09: 57.8% efectivo
                  </div>
                </TornPaperScrap>
              </div>

              {/* Flecha y nota garabateada */}
              <div className="mt-2 flex items-center gap-3 text-xs font-mono text-[#DC2626] font-bold">
                <DoodleArrow direction="right" className="w-8 h-8 text-[#DC2626] shrink-0" />
                <span>7 de cada 10 jóvenes no acudieron a su casilla ↓</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Tablón de Boletas montado sobre la hoja de espiral */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <SpiralPaperCard tilt="rotate-[0.5deg]">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-dashed border-neutral-300 pb-3 mb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#4B5563] font-bold block mb-1">
                    MUESTRA CENSAL REPRESENTATIVA
                  </span>
                  <h3 className="font-poster text-3xl sm:text-4xl text-[#141312]">
                    ¿DÓNDE ESTABAN 10 JÓVENES EN 2009?
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold text-[#DC2626] bg-[#FFE66D] px-3 py-1 border border-[#141312] self-start sm:self-auto shadow-sm rotate-1">
                  7 DE CADA 10 AUSENTES
                </div>
              </div>

              <p className="font-sans text-xs text-[#4B5563] mb-4">
                De cada 10 jóvenes inscritos en el padrón electoral, solo 3 depositaron su boleta. Mira cómo caen una por una en el recuento:
              </p>

              {/* Boletas animadas una a una con estilo de papeletas grapadas */}
              <motion.div
                variants={ballotContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const voted = num <= 3; // solo ~31.5% votaron
                  return (
                    <motion.div
                      key={num}
                      variants={ballotItemVariants}
                      className={`p-3 border-2 flex flex-col justify-between h-28 relative transition-transform hover:scale-105 ${
                        voted
                          ? "bg-[#141312] text-[#FAF8F5] border-[#141312] shadow-md"
                          : "bg-white text-[#141312] border-dashed border-red-400 shadow-sm"
                      }`}
                    >
                      <div className="flex justify-between items-start text-[10px] font-mono">
                        <span>BOLETA #{num}</span>
                        {voted ? (
                          <Check className="w-3.5 h-3.5 text-[#FAF8F5]" />
                        ) : (
                          <DoodleCross className="w-3.5 h-3.5 text-[#DC2626]" />
                        )}
                      </div>

                      <div className="my-auto text-center">
                        {voted ? (
                          <span className="font-poster text-xl text-[#FAF8F5]">VOTÓ</span>
                        ) : (
                          <span className="font-poster text-lg text-[#DC2626]">
                            NO VOTÓ
                          </span>
                        )}
                      </div>

                      <div className="text-[9px] font-mono uppercase text-right opacity-70">
                        {voted ? "URNAS ✓" : "ABSTENCIÓN ✗"}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Resumen al Pie con sello y anotación manuscrita */}
              <div className="border-t border-dashed border-neutral-300 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="text-xs font-sans text-[#141312]">
                  <strong>Dictamen Censal 2009:</strong> De los 17 millones de jóvenes en la lista nominal, más de <strong className="highlighter-yellow text-black font-bold">11.5 millones</strong> no acudieron a las urnas.
                </div>
                <span className="ink-stamp text-[10px] whitespace-nowrap bg-white">
                  EXPEDIENTE OFICIAL
                </span>
              </div>
            </SpiralPaperCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
