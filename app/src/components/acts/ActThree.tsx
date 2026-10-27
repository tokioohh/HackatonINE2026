"use client";

import { FadeIn } from "../ui/FadeIn";
import { MaskedReveal } from "../ui/MaskedReveal";
import { getLostVotes } from "@/lib/data";

export function ActThree() {
  const lostVotes = getLostVotes();

  return (
    <>
      {/* Foto de tinta electoral */}
      <div
        className="relative h-[50svh] overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        <img
          src="/images/tinta-electoral.jpg"
          alt="Pulgar con tinta indeleble después de votar en las elecciones de México 2024"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "grayscale(0.2) contrast(1.15)", opacity: 0.5 }}
          loading="lazy"
        />
        {/* Tinte rojo-morado sobre foto */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(107, 33, 168, 0.3)", mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--bg) 0%, rgba(13,2,33,0.3) 40%, rgba(13,2,33,0.3) 60%, var(--bg) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0 var(--margin) 48px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            Tinta indeleble electoral, 2024. Foto: Battroid, CC BY 4.0
          </p>
        </div>
      </div>

      <section
        id="acto-3"
        className="min-h-svh relative"
        style={{ padding: "120px var(--margin) 160px", background: "var(--bg)" }}
      >
        <FadeIn>
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{
              borderTop: "2px solid var(--rojo-mx)",
              borderBottom: "1px solid rgba(206, 17, 38, 0.4)",
              padding: "4px 0",
            }}
          >
            <span
              style={{
                fontSize: "var(--step-small)",
                color: "var(--rojo-mx)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Acto III
            </span>
            <span
              style={{ width: "1px", height: "14px", background: "var(--rojo-mx)", opacity: 0.4 }}
              aria-hidden="true"
            />
            <span style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
              Intermedia 2021 – Presidencial 2024
            </span>
          </div>
        </FadeIn>

        <h2>
          <MaskedReveal className="block">
            <span
              className="block font-bold"
              style={{
                fontSize: "clamp(2.5rem, 5.6vw, 5.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              La Persistencia
            </span>
          </MaskedReveal>
        </h2>

        <div className="mt-12 md:mt-16 max-w-[900px]">
          <div className="space-y-16">
            <FadeIn delay={0.2}>
              <div className="md:flex md:gap-12 items-start">
                <p
                  className="font-medium md:w-[50%] mb-4 md:mb-0"
                  style={{ fontSize: "var(--step-lead)", color: "var(--ink)" }}
                >
                  ¿La brecha se está cerrando?
                </p>
                <div className="md:w-[50%]">
                  <p style={{ fontSize: "var(--step-body)", color: "var(--muted)" }}>
                    No. El votante promedio tenía{" "}
                    <strong style={{ color: "var(--ink)" }}>42 años</strong> en 2012.
                    En 2024 tiene{" "}
                    <strong style={{ color: "var(--ink)" }}>45</strong>. La proporción
                    de votos jóvenes en el total pasó de 15% a 13%. El peso de los
                    jóvenes en el resultado encoge.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="md:flex md:gap-12 items-start">
                <p
                  className="font-medium md:w-[50%] mb-4 md:mb-0"
                  style={{ fontSize: "var(--step-lead)", color: "var(--ink)" }}
                >
                  ¿Los jóvenes votan menos que antes?
                </p>
                <div className="md:w-[50%]">
                  <p style={{ fontSize: "var(--step-body)", color: "var(--muted)" }}>
                    Depende de la comparación. En 2024, el{" "}
                    <strong style={{ color: "var(--ink)" }}>47%</strong> de los
                    jóvenes inscritos votó — más que en 2009 (36%), 2015 (36%)
                    y 2021 (42%). Pero menos que en el pico de 2012 (56%). El
                    patrón varía con el tipo de elección, no con una tendencia lineal.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="md:flex md:gap-12 items-start">
                <p
                  className="font-medium md:w-[50%] mb-4 md:mb-0"
                  style={{ fontSize: "var(--step-lead)", color: "var(--ink)" }}
                >
                  ¿Cuántos votos más habría con la tasa de 2012?
                </p>
                <div className="md:w-[50%]">
                  <p style={{ fontSize: "var(--step-body)", color: "var(--muted)", marginBottom: "16px" }}>
                    Escenario hipotético: si en 2024 los jóvenes hubieran
                    participado al 55.6% (su máximo histórico, en 2012), habría habido
                    aproximadamente:
                  </p>
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      color: "var(--rojo-mx)",
                    }}
                  >
                    {(lostVotes / 1_000_000).toFixed(1)} millones
                  </p>
                  <p style={{ fontSize: "var(--step-body)", color: "var(--muted)", marginTop: "8px" }}>
                    de votos jóvenes adicionales. Un ejercicio con supuestos, no una predicción.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
