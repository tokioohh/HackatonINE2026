"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ELECTION_YEARS } from "@/lib/data";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { TornPaperScrap } from "@/components/ui/NotebookPaper";
import { ScotchTape, DoodleCircle } from "@/components/ui/DoodleStickers";

export function GenerationalMirror() {
  const [birthYear, setBirthYear] = useState<number>(2000);

  const eligibleElections = ELECTION_YEARS.filter((e) => e.year - birthYear >= 18).map((e) => {
    const ageAtElection = e.year - birthYear;
    let group = "18-19";
    if (ageAtElection >= 20 && ageAtElection <= 24) group = "20-24";
    else if (ageAtElection >= 25 && ageAtElection <= 29) group = "25-29";
    else if (ageAtElection >= 30 && ageAtElection <= 34) group = "30-34";
    else if (ageAtElection >= 35 && ageAtElection <= 44) group = "35-44";
    else if (ageAtElection >= 45 && ageAtElection <= 59) group = "45-59";
    else if (ageAtElection >= 60) group = "60+";

    const groupData = e.ageGroups.find((g) => g.ageGroup === group);

    return {
      year: e.year,
      type: e.type,
      age: ageAtElection,
      group,
      rate: groupData?.rate || 0,
      nationalRate: e.totalParticipation,
    };
  });

  return (
    <section
      id="generacion"
      className="relative pt-24 pb-32 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden border-b border-dashed border-neutral-300"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex justify-center mb-4">
            <span className="urgent-tag">
              ★ EXPEDIENTE INDIVIDUAL // CÓDIGO CENSAL
            </span>
          </div>

          {/* Dos renglones estables e independientes centrados */}
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 mb-4">
            <div className="flex items-center justify-center w-full min-h-[36px] sm:min-h-[48px]">
              <TypewriterText
                text="TU GENERACIÓN EN EL"
                className="text-2xl sm:text-4xl text-[#141312] leading-none uppercase font-bold tracking-wide"
              />
            </div>
            <div className="flex items-center justify-center w-full pt-1">
              <RansomNoteTitle text="ESPEJO" size="md" className="justify-center" />
            </div>
          </div>

          <p className="font-serif text-lg text-[#4B5563] italic max-w-xl mx-auto">
            Ingresa tu año de nacimiento. El sistema consultará los registros censales del INE para revelarte cómo votaron tus contemporáneos desde que cumpliste 18 años.
          </p>
        </motion.div>

        {/* Formulario de Ficha Censal en hoja arrancada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto mb-14"
        >
          <TornPaperScrap tilt="rotate-[-0.5deg]" tapePosition="top">
            <div className="text-center py-2">
              <label className="block text-xs font-mono uppercase font-black text-[#141312] mb-3 tracking-wider">
                AÑO DE NACIMIENTO SEGÚN TU CREDENCIAL:
              </label>

              <input
                type="number"
                min="1950"
                max="2008"
                value={birthYear}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (!isNaN(val)) setBirthYear(val);
                }}
                className="w-44 text-center font-poster text-5xl bg-white border-2 border-[#141312] text-[#141312] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-inner"
              />

              <div className="mt-4 pt-3 border-t border-[#141312]/15 font-mono text-xs text-[#4B5563]">
                En 2024 tenías <strong>{2024 - birthYear} años</strong> · Convocado a{" "}
                <strong className="text-[#DC2626]">{eligibleElections.length} elecciones federales</strong>
              </div>
            </div>
          </TornPaperScrap>
        </motion.div>

        {/* Fichas Electorales tipo Boletas de Papel Arrancadas */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={birthYear}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              {eligibleElections.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6">
                  {eligibleElections.map((item, idx) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-xs"
                    >
                      <TornPaperScrap
                        tilt={`rotate-[${idx % 2 === 0 ? -1.5 : 1.5}deg]`}
                        tapePosition="top"
                        className="h-full"
                      >
                        <div>
                          <div className="flex justify-between items-start font-mono text-xs border-b border-[#141312] pb-2 mb-3">
                            <span className="font-bold text-3xl font-poster text-[#141312]">{item.year}</span>
                            <span className="urgent-tag text-[9px] py-0.5 px-2">{item.type}</span>
                          </div>

                          <div className="text-xs font-sans text-[#4B5563] mb-4">
                            Tenías <strong>{item.age} años</strong> (Grupo censal {item.group})
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#141312]/15">
                          <div className="flex justify-between items-baseline text-xs font-mono mb-1">
                            <span className="text-[#4B5563]">Votó de tu grupo:</span>
                            <span className="font-bold text-[#DC2626] text-base">
                              {Math.round((item.rate / 10))} DE 10
                            </span>
                          </div>

                          <div className="w-full bg-[#E5E7EB] h-2.5 border border-[#141312]/30 overflow-hidden mb-2">
                            <div className="bg-[#DC2626] h-full" style={{ width: `${item.rate}%` }} />
                          </div>

                          <div className="flex justify-between text-[10px] font-mono text-[#4B5563]">
                            <span>Censo: {item.rate}%</span>
                            <span
                              className={
                                item.rate >= item.nationalRate
                                ? "text-[#16A34A] font-bold"
                                : "text-[#DC2626] font-bold"
                              }
                            >
                              {item.rate >= item.nationalRate ? "▲ Sobre promedio" : "▼ Bajo promedio"}
                            </span>
                          </div>
                        </div>
                      </TornPaperScrap>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <TornPaperScrap tilt="rotate-[-1deg]" tapePosition="top" className="max-w-lg mx-auto">
                  <div className="p-4 text-center font-mono text-sm text-[#1F2937]">
                    Naciste después de 2006. Tu primer voto federal será en 2027 o 2030. Tu generación definirá el próximo capítulo democrático.
                  </div>
                </TornPaperScrap>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
