"use client";

import { FadeIn } from "../ui/FadeIn";
import { MaskedReveal } from "../ui/MaskedReveal";
import { participationByAge } from "@/lib/data";
import { ComparisonChart } from "../charts/ComparisonChart";

export function ActTwo() {
  const data2012 = participationByAge.find((d) => d.year === 2012)!;
  const data2024 = participationByAge.find((d) => d.year === 2024)!;

  return (
    <>
      {/* Foto del Zócalo — ya en era digital, colores oscuros */}
      <div className="relative h-[60svh] overflow-hidden" style={{ background: "var(--surface)" }}>
        <img
          src="/images/votacion-elecciones-federales-de-mexico-de-2018.jpg"
          alt="Casilla electoral durante las elecciones federales de México, 2018"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: 0.5 }}
          loading="lazy"
        />
        {/* Tinte morado sobre la foto */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(107, 33, 168, 0.25)", mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--surface) 0%, transparent 30%, transparent 60%, var(--surface) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0 var(--margin) 48px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            Casilla electoral, México 2018. Foto: ProtoplasmaKid, CC BY-SA 4.0
          </p>
        </div>
      </div>

      <section
        id="acto-2"
        className="min-h-svh relative"
        style={{ padding: "120px var(--margin) 160px", background: "var(--surface)" }}
      >
        <div className="md:flex md:gap-12">
          <div className="md:w-[55%]">
            <FadeIn>
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{
                  borderTop: "2px solid var(--ine-purple-bright)",
                  borderBottom: "1px solid rgba(168, 85, 247, 0.4)",
                  padding: "4px 0",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--step-small)",
                    color: "var(--ine-purple-bright)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Acto II
                </span>
                <span
                  style={{ width: "1px", height: "14px", background: "var(--ine-purple-bright)", opacity: 0.4 }}
                  aria-hidden="true"
                />
                <span style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
                  Presidenciales 2012 · 2018 · 2024
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
                  El Vaivén
                </span>
              </MaskedReveal>
            </h2>

            <FadeIn delay={0.3} className="mt-8 max-w-[45ch]">
              <p style={{ fontSize: "var(--step-lead)", lineHeight: 1.4, color: "var(--muted)" }}>
                En las elecciones presidenciales la participación sube para todos
                los grupos de edad. En 2012 los jóvenes alcanzaron su{" "}
                <strong style={{ color: "var(--ink)" }}>máximo: 55.6%</strong>.
                En 2018 llegaron al 51%. En 2024, al 47%.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-6 max-w-[45ch]">
              <p style={{ fontSize: "var(--step-body)", lineHeight: 1.5, color: "var(--muted)" }}>
                El patrón se repite en cada presidencial: todos votan más, pero{" "}
                <strong style={{ color: "var(--ink)" }}>la brecha entre jóvenes y adultos mayores se mantiene</strong>{" "}
                en torno a 14 puntos porcentuales. El tipo de elección mueve las
                cifras; la distancia entre grupos, no tanto.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="md:w-[45%] mt-12 md:mt-24">
            <p style={{ fontSize: "var(--step-small)", color: "var(--muted)", marginBottom: "24px" }}>
              Cómo cambió la participación
            </p>
            <ComparisonChart before={data2012} after={data2024} beforeLabel="2012" afterLabel="2024" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
