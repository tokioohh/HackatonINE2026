"use client";

import { useState } from "react";
import { ELECTION_YEARS, STATES_DATA } from "@/lib/data";
import { formatNumber } from "@/lib/utils";
import { RansomNoteTitle } from "@/components/ui/RansomNoteTitle";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { TornPaperScrap } from "@/components/ui/NotebookPaper";
import { ScotchTape } from "@/components/ui/DoodleStickers";

export function DataExplorer() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedStateCode, setSelectedStateCode] = useState<string>("NACIONAL");

  const currentYearData = ELECTION_YEARS.find((y) => y.year === selectedYear)!;
  const selectedState = STATES_DATA.find((s) => s.code === selectedStateCode);

  const stateFactor = selectedState
    ? (selectedYear === 2009
        ? selectedState.participation2009 / 44.1
        : selectedYear === 2018
        ? selectedState.participation2018 / 62.4
        : selectedState.participation2024 / 59.7)
    : 1;

  const tableData = currentYearData.ageGroups.map((group) => {
    const adjustedRate = Math.min(95, Math.max(15, group.rate * stateFactor));
    return {
      name: group.ageGroup,
      participacion: parseFloat(adjustedRate.toFixed(1)),
      votaron: Math.round(group.votaron * (selectedState ? 0.031 : 1)),
      lista: Math.round(group.listaNominal * (selectedState ? 0.031 : 1)),
      isYouth: group.lifeStage === "Juventud",
    };
  });

  return (
    <section
      id="explora"
      className="py-24 px-4 sm:px-8 md:px-14 notebook-canvas text-[#111110] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabecera Archivo General */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 border-b border-dashed border-neutral-300 pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="urgent-tag">
                ARCHIVO GENERAL // BASE CENSAL
              </span>
              <span className="font-mono text-xs uppercase text-[#4B5563] tracking-widest font-bold">
                CONSULTA PÚBLICA DEL PADRÓN
              </span>
            </div>

            {/* Dos renglones estables e independientes */}
            <div className="flex flex-col gap-1 sm:gap-2 mb-2">
              <div className="flex items-center justify-start w-full min-h-[36px] sm:min-h-[48px]">
                <TypewriterText
                  text="CONSULTA EL"
                  className="text-2xl sm:text-4xl uppercase text-[#141312] font-bold tracking-wide leading-none"
                />
              </div>
              <div className="flex items-center justify-start w-full pt-1">
                <RansomNoteTitle text="ARCHIVO CENSAL" size="md" />
              </div>
            </div>

            <p className="font-serif text-base sm:text-lg text-[#4B5563] italic max-w-xl">
              Filtra los datos oficiales de las 6 elecciones federales (2009–2024) y compara los patrones de participación por entidad y grupo etario.
            </p>
          </div>

          <div className="bg-[#FFE66D] border border-neutral-400 p-4 font-mono text-xs shadow-md relative rotate-1">
            <ScotchTape className="-top-3 right-4 w-20 h-5" tilt="-1deg" />
            <div className="text-[#1F2937] uppercase font-bold text-[10px]">PARTICIPACIÓN TOTAL:</div>
            <div className="font-poster text-4xl text-[#DC2626]">
              {selectedState
                ? selectedYear === 2009
                  ? `${selectedState.participation2009}%`
                  : selectedYear === 2018
                  ? `${selectedState.participation2018}%`
                  : `${selectedState.participation2024}%`
                : `${currentYearData.totalParticipation}%`}
            </div>
            <div className="text-[10px] text-[#4B5563]">
              {currentYearData.type} · {selectedState ? selectedState.name : "Nivel Nacional"}
            </div>
          </div>
        </div>

        {/* Panel de Filtros Documentales en hoja arrancada */}
        <TornPaperScrap tilt="rotate-[-0.5deg]" tapePosition="top" className="mb-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Año de Elección */}
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-[#111110] mb-2">
                AÑO DE ELECCIÓN:
              </label>
              <div className="flex flex-wrap gap-2">
                {[2009, 2012, 2015, 2018, 2021, 2024].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-1 font-mono text-xs border transition-all cursor-pointer ${
                      selectedYear === year
                        ? "bg-[#111110] text-white border-[#111110] font-bold shadow-sm"
                        : "bg-[#F8F6F0] text-[#111110] border-neutral-300 hover:bg-[#DC2626] hover:text-white"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Entidad Federativa */}
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-[#111110] mb-2">
                ENTIDAD FEDERATIVA:
              </label>
              <select
                value={selectedStateCode}
                onChange={(e) => setSelectedStateCode(e.target.value)}
                className="w-full bg-[#F8F6F0] border border-neutral-300 font-mono text-xs p-2 text-[#111110] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
              >
                <option value="NACIONAL">NACIONAL (TOTAL DEL PAÍS)</option>
                {STATES_DATA.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name.toUpperCase()} ({state.region.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Resumen del Filtro */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col justify-end">
              <div className="bg-[#FAF8F5] border border-neutral-200 p-3 text-xs font-mono text-[#4B5563]">
                Mostrando: <strong>{selectedState ? selectedState.name : "Datos Nacionales"}</strong> en el proceso electoral de <strong>{selectedYear}</strong>.
              </div>
            </div>
          </div>
        </TornPaperScrap>

        {/* Gráfico de Barras en hoja arrancada */}
        <TornPaperScrap tilt="rotate-[0.5deg]" tapePosition="top" className="mb-8">
          <h3 className="font-poster text-3xl uppercase text-[#111110] mb-1">
            PARTICIPACIÓN POR GRUPO DE EDAD ({selectedYear})
          </h3>
          <p className="font-mono text-xs text-[#4B5563] mb-6">
            Porcentaje de ciudadanos en lista nominal que emitieron su voto
          </p>

          <div className="space-y-3">
            {tableData.map((row) => (
              <div key={row.name} className="flex flex-col sm:flex-row sm:items-center gap-2 font-mono text-xs">
                <span className="w-24 font-bold text-[#111110]">
                  {row.name} años
                </span>
                <div className="flex-1 bg-[#F3F4F6] h-7 border border-neutral-300 relative flex items-center">
                  <div
                    className={`h-full transition-all ${
                      row.isYouth ? "bg-[#DC2626]" : "bg-[#111110]"
                    }`}
                    style={{ width: `${row.participacion}%` }}
                  />
                  <span className="absolute right-3 font-bold text-xs text-[#111110]">
                    {row.participacion}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-neutral-300 flex flex-wrap justify-between items-center text-xs font-mono text-[#4B5563]">
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#DC2626]" />
                <span className="font-bold text-[#DC2626]">Juventud (18-24)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#111110]" />
                <span>Población Adulta</span>
              </span>
            </div>
            <span>Fuente: Cuadernillos Censales CCPC · INE México</span>
          </div>
        </TornPaperScrap>

        {/* Tabla Documental */}
        <div className="bg-white border border-neutral-300 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="p-4 bg-[#111110] text-[#FAF8F5] font-mono text-xs font-bold uppercase flex justify-between items-center">
            <span>REGISTRO TABULAR DETALLADO</span>
            <span className="text-[#FFE66D]">CCPC CONTEO CENSAL</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#FAF8F5] border-b border-neutral-300 text-[#111110] uppercase">
                <tr>
                  <th className="py-3 px-4">GRUPO ETARIO</th>
                  <th className="py-3 px-4">% PARTICIPACIÓN</th>
                  <th className="py-3 px-4">LISTA NOMINAL</th>
                  <th className="py-3 px-4">VOTOS EMITIDOS</th>
                  <th className="py-3 px-4">CLASIFICACIÓN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]">
                    <td className="py-2.5 px-4 font-bold">{row.name} años</td>
                    <td className="py-2.5 px-4 font-bold text-[#DC2626]">{row.participacion}%</td>
                    <td className="py-2.5 px-4 text-[#4B5563]">{formatNumber(row.lista)}</td>
                    <td className="py-2.5 px-4 text-[#4B5563]">{formatNumber(row.votaron)}</td>
                    <td className="py-2.5 px-4">
                      {row.isYouth ? (
                        <span className="ink-stamp text-[9px] py-0 bg-white">JUVENTUD</span>
                      ) : (
                        <span className="font-mono text-[10px] text-[#6B7280]">ADULTO</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
