"use client";

import { getLostVotes, elections } from "@/lib/data";
import { FadeIn } from "../ui/FadeIn";

export function LostVotesEstimate() {
  const lostVotes = getLostVotes();
  const e2024 = elections.find((e) => e.year === 2024)!;
  const actual = e2024.youthVoters;
  const hypothetical = actual + lostVotes;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--paper-dark)",
        padding: "100px var(--margin) 120px",
      }}
    >
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-[2] max-w-[900px] mx-auto">
        <FadeIn>
          <span
            className="rubber-stamp"
            style={{
              fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)",
              color: "var(--headline-red)",
              marginBottom: "32px",
              display: "inline-block",
            }}
          >
            Escenario hipotético
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--step-lead)",
              color: "var(--ink-aged)",
              maxWidth: "45ch",
              lineHeight: 1.5,
              marginBottom: "48px",
            }}
          >
            ¿Qué pasaría si los jóvenes de 2024 hubieran votado al mismo ritmo
            que los de 2012, cuando la participación juvenil alcanzó su máximo
            histórico (55.6%)?
          </p>
        </FadeIn>

        <div className="md:flex md:gap-12 md:items-end">
          <FadeIn delay={0.3} className="flex-1 mb-8 md:mb-0">
            <p
              style={{
                fontFamily: "var(--font-typewriter)",
                fontSize: "var(--step-small)",
                color: "var(--ink-faded)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "8px",
              }}
            >
              Votaron en 2024
            </p>
            <p
              className="font-bold leading-none"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "var(--ink-press)",
              }}
            >
              {(actual / 1_000_000).toFixed(1)}
              <span style={{ fontSize: "0.45em", marginLeft: "4px" }}>M</span>
            </p>
            <p
              style={{
                fontSize: "var(--step-small)",
                color: "var(--ink-faded)",
                marginTop: "6px",
              }}
            >
              jóvenes de 18–24 años (participación del 47.1%)
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="hidden md:block mb-12">
            <span
              className="handwritten-note"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                display: "block",
                transform: "rotate(-3deg)",
              }}
            >
              vs.
            </span>
          </FadeIn>

          <FadeIn delay={0.5} className="flex-1 mb-8 md:mb-0">
            <p
              style={{
                fontFamily: "var(--font-typewriter)",
                fontSize: "var(--step-small)",
                color: "var(--ink-faded)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "8px",
              }}
            >
              Habrían votado (con tasa de 2012)
            </p>
            <p
              className="font-bold leading-none"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "var(--ink-aged)",
                opacity: 0.55,
              }}
            >
              {(hypothetical / 1_000_000).toFixed(1)}
              <span style={{ fontSize: "0.45em", marginLeft: "4px" }}>M</span>
            </p>
            <p
              style={{
                fontSize: "var(--step-small)",
                color: "var(--ink-faded)",
                marginTop: "6px",
              }}
            >
              con participación del 55.6%
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="mt-12">
          <div
            style={{
              background: "var(--ink-press)",
              color: "var(--paper)",
              padding: "20px 28px",
              maxWidth: "520px",
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
              Diferencia:{" "}
              <span style={{ fontSize: "var(--step-lead)", fontWeight: 700 }}>
                ~{(lostVotes / 1_000_000).toFixed(1)} millones
              </span>{" "}
              de votos jóvenes adicionales.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.7} className="mt-8">
          <p
            style={{
              fontSize: "12px",
              color: "var(--ink-ghost)",
              fontFamily: "var(--font-typewriter)",
              maxWidth: "60ch",
              lineHeight: 1.6,
            }}
          >
            Cálculo: lista nominal 18–24 de 2024 (14.9M) × tasa de
            participación de 2012 (55.6%) − votos reales de 18–24 en 2024
            (7.0M). Es un ejercicio simplificado: la composición del padrón y
            las condiciones de cada elección difieren.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
