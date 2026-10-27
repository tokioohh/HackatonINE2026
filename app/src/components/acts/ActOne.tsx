"use client";

import { FadeIn } from "../ui/FadeIn";
import { MaskedReveal } from "../ui/MaskedReveal";
import { participationByAge } from "@/lib/data";
import { HandDrawnBarChart } from "../charts/HandDrawnBarChart";

export function ActOne() {
  const data2009 = participationByAge.find((d) => d.year === 2009)!;

  return (
    <>
      {/* Foto editorial — recorte de periódico viejo */}
      <div
        className="relative h-[65svh] overflow-hidden torn-top"
        style={{ background: "var(--paper-archive)" }}
      >
        <div className="grain-heavy" aria-hidden="true" />
        <div className="paper-stains" aria-hidden="true" />

        {/* Foto con halftone grueso */}
        <div
          className="absolute"
          style={{ inset: "12% 10%" }}
        >
          <img
            src="/images/votacion-elecciones-federales-de-mexico-de-2018-2.jpg"
            alt="Casilla electoral con urnas del INE y mamparas de votación en Ciudad de México"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "grayscale(1) contrast(1.7) brightness(0.65)",
              opacity: 0.65,
            }}
          />
          <div className="halftone-coarse" />
          {/* Viñeta */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 100px rgba(232, 213, 176, 0.8), inset 0 0 200px rgba(232, 213, 176, 0.4)",
            }}
          />
        </div>

        {/* Caption */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{ padding: "0 var(--margin) 48px" }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "var(--ink-ghost)",
              fontFamily: "var(--font-typewriter)",
            }}
          >
            Casilla electoral, Ciudad de México · Foto: ProtoplasmaKid, CC BY-SA 4.0
          </p>
        </div>
      </div>

      {/* ═══ CONTENIDO ACTO 1 ═══ */}
      <section
        id="acto-1"
        className="relative"
        style={{
          background: "var(--paper-archive)",
          padding: "100px var(--margin) 140px",
        }}
      >
        <div className="grain-heavy" aria-hidden="true" />
        <div className="paper-stains" aria-hidden="true" />

        <div className="relative z-[2]">
          {/* Marcador de acto — sello de goma */}
          <FadeIn>
            <div className="mb-10">
              <span
                className="rubber-stamp"
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                  color: "var(--ink-press)",
                }}
              >
                Acto I · 2009
              </span>
            </div>
          </FadeIn>

          {/* Título */}
          <h2>
            <MaskedReveal className="block">
              <span
                className="block"
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 9rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                  color: "var(--ink-press)",
                  textTransform: "uppercase",
                  paddingBottom: "0.05em",
                }}
              >
                La Brecha
              </span>
            </MaskedReveal>
          </h2>

          {/* Regla gruesa */}
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "4px",
              background: "var(--ink-press)",
              marginTop: "16px",
              marginBottom: "48px",
              opacity: 0.8,
            }}
            aria-hidden="true"
          />

          {/* Layout columnas */}
          <div className="md:flex md:gap-16">
            {/* Columna izquierda — texto narrativo */}
            <div className="md:w-[55%]">
              <FadeIn delay={0.3}>
                <p
                  className="drop-cap"
                  style={{
                    fontSize: "var(--step-body)",
                    lineHeight: 1.65,
                    color: "var(--ink-aged)",
                    fontFamily: "var(--font-serif)",
                    maxWidth: "42ch",
                  }}
                >
                  2009. Elección intermedia. Las campañas eran carteles pegados en
                  las bardas y anuncios en la tele a las ocho de la noche. La
                  participación general fue baja — 43% — y la de los jóvenes de
                  18 a 24 fue aún menor.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-6">
                <p
                  style={{
                    fontSize: "var(--step-body)",
                    lineHeight: 1.65,
                    color: "var(--ink-aged)",
                    fontFamily: "var(--font-serif)",
                    maxWidth: "42ch",
                  }}
                >
                  De cada 10 jóvenes inscritos para votar, solo{" "}
                  <strong
                    style={{
                      color: "var(--ink-press)",
                      borderBottom: "2px solid var(--ink-press)",
                      paddingBottom: "1px",
                    }}
                  >
                    4 fueron a la casilla
                  </strong>
                  . Pero no era un problema exclusivo de los jóvenes: el grupo de
                  25–34 participó casi igual (35%). La brecha real estaba con los
                  mayores de 45, que superaban el 50%.
                </p>
              </FadeIn>

              <FadeIn delay={0.5} className="mt-6">
                <p
                  style={{
                    fontSize: "var(--step-body)",
                    lineHeight: 1.65,
                    color: "var(--ink-aged)",
                    fontFamily: "var(--font-serif)",
                    maxWidth: "42ch",
                  }}
                >
                  La brecha entre jóvenes y adultos mayores ya existía antes
                  de las redes sociales, antes de los memes y antes de TikTok.
                  Es el punto de partida de esta historia.
                </p>
              </FadeIn>

              {/* Anotación manuscrita al margen */}
              <FadeIn delay={0.8} className="mt-10">
                <div
                  className="handwritten-note"
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                    borderLeft: "2px solid var(--ink-aged)",
                    paddingLeft: "16px",
                    marginLeft: "8px",
                    transform: "rotate(-1deg)",
                    opacity: 0.75,
                  }}
                >
                  <p>La brecha no empezó después.</p>
                  <p style={{ marginTop: "4px" }}>
                    Ya estaba ahí antes de que alguien la nombrara.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Columna derecha — gráfica */}
            <FadeIn delay={0.6} className="md:w-[45%] mt-14 md:mt-0">
              <div
                style={{
                  background: "var(--paper)",
                  padding: "24px 20px",
                  boxShadow: "3px 4px 12px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <div className="grain-overlay" aria-hidden="true" />
                <p
                  style={{
                    fontSize: "var(--step-small)",
                    color: "var(--ink-faded)",
                    marginBottom: "20px",
                    fontFamily: "var(--font-typewriter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  ¿Quién votó en 2009?
                </p>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <HandDrawnBarChart
                    data={data2009}
                    highlightGroup="18-24"
                    year={2009}
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Dato de impacto — recorte negro */}
          <FadeIn delay={0.9} className="mt-16">
            <div
              style={{
                background: "var(--ink-press)",
                color: "var(--paper)",
                padding: "20px 28px",
                maxWidth: "500px",
                transform: "rotate(-0.5deg)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-typewriter)",
                  fontSize: "var(--step-small)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                }}
              >
                Participación juvenil 2009:{" "}
                <span style={{ fontSize: "var(--step-lead)", fontWeight: 700 }}>
                  {data2009["18-24"]}%
                </span>
                {" "}— La más baja de todos los grupos de edad.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
