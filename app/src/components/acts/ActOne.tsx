"use client";

import { FadeIn } from "../ui/FadeIn";
import { MaskedReveal } from "../ui/MaskedReveal";
import { elections, participationByAge } from "@/lib/data";
import { AgeBarChart } from "../charts/AgeBarChart";
import { RansomText } from "../ui/RansomText";

export function ActOne() {
  const data2009 = participationByAge.find((d) => d.year === 2009)!;
  const election2009 = elections.find((e) => e.year === 2009)!;

  return (
    <>
      {/* Foto editorial con tratamiento periódico */}
      <div className="relative h-[70svh] overflow-hidden" style={{ background: "var(--paper)" }}>
        <img
          src="/images/votacion-elecciones-federales-de-mexico-de-2018-2.jpg"
          alt="Casilla electoral con urnas del INE y mamparas de votación en Ciudad de México"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.4) brightness(0.85)", opacity: 0.6 }}
        />
        {/* Trama halftone */}
        <div className="halftone-dots" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--paper) 0%, transparent 25%, transparent 60%, var(--paper) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ padding: "0 var(--margin) 48px" }}>
          <p style={{ fontSize: "13px", color: "var(--ink-faded)", fontStyle: "italic" }}>
            Casilla electoral, Ciudad de México. Foto: ProtoplasmaKid, CC BY-SA 4.0
          </p>
        </div>
      </div>

      {/* Contenido del acto — era periódico */}
      <section
        id="acto-1"
        className="relative"
        style={{
          background: "var(--paper)",
          padding: "120px var(--margin) 160px",
        }}
      >
        {/* Grano de papel */}
        <div className="grain-overlay" aria-hidden="true" />

        <div className="relative z-[2] md:flex md:gap-12">
          <div className="md:w-[55%]">
            <FadeIn>
              {/* Marcador de acto — estilo cabecera de sección periodística */}
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{
                  borderTop: "2px solid var(--ink-press)",
                  borderBottom: "1px solid var(--ink-press)",
                  padding: "4px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--step-small)",
                    color: "var(--ink-press)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Acto I
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "14px",
                    background: "var(--ink-press)",
                    opacity: 0.4,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--step-small)",
                    color: "var(--ink-faded)",
                    fontStyle: "italic",
                  }}
                >
                  Elección Intermedia 2009
                </span>
              </div>
            </FadeIn>

            <h2>
              <MaskedReveal className="block">
                <span
                  className="block font-bold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.5rem, 5.6vw, 5.5rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    paddingBottom: "0.04em",
                  }}
                >
                  <RansomText
                    words={["El", "Silencio"]}
                    color="var(--ink-press)"
                    offset={3}
                  />
                </span>
              </MaskedReveal>
            </h2>

            <FadeIn delay={0.3} className="mt-8 max-w-[45ch]">
              <p
                style={{
                  fontSize: "var(--step-lead)",
                  lineHeight: 1.4,
                  color: "var(--ink-aged)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                2009. No había Instagram ni WhatsApp. Las campañas eran carteles
                y anuncios en la tele. Y la brecha entre jóvenes y adultos
                ya existía — aunque nadie la llamaba crisis.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-8 max-w-[45ch]">
              <p style={{ fontSize: "var(--step-body)", lineHeight: 1.5, color: "var(--ink-aged)" }}>
                En la elección de 2009, de cada 10 jóvenes inscritos para votar,
                solo{" "}
                <strong style={{ color: "var(--ink-press)" }}>4 fueron a la casilla</strong>.
                Era preocupante — pero casi igual que las generaciones anteriores.
                La brecha ya existía. Aún no se veía como una emergencia.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="md:w-[45%] mt-12 md:mt-24">
            <p
              style={{
                fontSize: "var(--step-small)",
                color: "var(--ink-faded)",
                marginBottom: "24px",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
              }}
            >
              ¿Quién votó en 2009?
            </p>
            <AgeBarChart data={data2009} highlightGroup="18-24" year={2009} era="paper" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
