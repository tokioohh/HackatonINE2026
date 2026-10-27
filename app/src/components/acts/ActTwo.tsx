"use client";

import { FadeIn } from "../ui/FadeIn";
import { MaskedReveal } from "../ui/MaskedReveal";
import { participationByAge } from "@/lib/data";
import { ComparisonChart } from "../charts/ComparisonChart";

export function ActTwo() {
  const data2009 = participationByAge.find((d) => d.year === 2009)!;
  const data2018 = participationByAge.find((d) => d.year === 2018)!;

  return (
    <>
      {/* Foto del Zócalo — ya en era digital, colores oscuros */}
      <div className="relative h-[60svh] overflow-hidden" style={{ background: "var(--surface)" }}>
        <img
          src="/images/crowds-at-lopez-obrador-rally-2627056034.jpg"
          alt="Multitud en el Zócalo de la Ciudad de México con la Catedral Metropolitana al fondo"
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
            Zócalo, Ciudad de México. Foto: Randal Sheppard, CC BY-SA 2.0
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
                  Presidenciales 2012–2018
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
                  El Despertar
                </span>
              </MaskedReveal>
              <MaskedReveal delay={0.11} className="block">
                <span
                  className="block font-bold"
                  style={{
                    fontSize: "clamp(2.5rem, 5.6vw, 5.5rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                    color: "var(--ine-purple-bright)",
                  }}
                >
                  Digital
                </span>
              </MaskedReveal>
            </h2>

            <FadeIn delay={0.3} className="mt-8 max-w-[45ch]">
              <p style={{ fontSize: "var(--step-lead)", lineHeight: 1.4, color: "var(--muted)" }}>
                2012 fue el año que lo cambió todo. El movimiento #YoSoy132 demostró
                que cuando los jóvenes se sienten escuchados, votan. Fue el{" "}
                <strong style={{ color: "var(--ink)" }}>mejor año</strong>{" "}
                para la participación juvenil en lo que va del siglo. La pregunta es: ¿duró?
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-6 max-w-[45ch]">
              <p style={{ fontSize: "var(--step-body)", lineHeight: 1.5, color: "var(--muted)" }}>
                En 2018, con AMLO en la boleta y WhatsApp inundado de mensajes
                políticos, más gente que nunca salió a votar. Los jóvenes también.
                Pero el patrón ya era claro: sin importar la emoción del momento,{" "}
                <strong style={{ color: "var(--ink)" }}>los jóvenes siempre se quedaban atrás</strong>{" "}
                de los adultos.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="md:w-[45%] mt-12 md:mt-24">
            <p style={{ fontSize: "var(--step-small)", color: "var(--muted)", marginBottom: "24px" }}>
              Cómo cambió la participación
            </p>
            <ComparisonChart before={data2009} after={data2018} beforeLabel="2009" afterLabel="2018" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
