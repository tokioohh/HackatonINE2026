"use client";

import { FadeIn } from "../ui/FadeIn";

export function CtaSection() {
  return (
    <section style={{ padding: "0" }}>
      {/* Franja bandera — verde / blanco / rojo */}
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          height: "8px",
        }}
      >
        <div style={{ flex: 1, background: "var(--verde-mx)" }} />
        <div style={{ flex: 1, background: "#f5f5f0" }} />
        <div style={{ flex: 1, background: "var(--rojo-mx)" }} />
      </div>

      <div
        className="min-h-[44svh] flex flex-col justify-center"
        style={{
          padding: "80px var(--margin)",
          background: "var(--bg)",
        }}
      >
        <FadeIn>
          <p
            className="max-w-[45ch] leading-[1.3]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--ink)" }}
          >
            En seis elecciones, la brecha entre la participación juvenil y la de
            otros grupos no se ha cerrado. Los datos están abiertos.{" "}
            <a
              href="https://ine.mx/transparencia/datos-abiertos/visualizacion-datos/conteos-censales-participacion/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ine-purple-bright)", textDecoration: "underline", textDecorationThickness: "2px", textUnderlineOffset: "4px", fontWeight: 500 }}
            >
              Consulta los datos completos del INE
            </a>
            .
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="mt-6 max-w-[40ch]"
            style={{ fontSize: "var(--step-body)", color: "var(--muted)" }}
          >
            Este ensayo visual fue creado con datos abiertos de la Plataforma de Conteos
            Censales de Participación Ciudadana (CCPC) 2009–2024 del INE.
          </p>
        </FadeIn>
      </div>

      {/* Franja inferior bandera — invertida */}
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          height: "8px",
        }}
      >
        <div style={{ flex: 1, background: "var(--rojo-mx)" }} />
        <div style={{ flex: 1, background: "#f5f5f0" }} />
        <div style={{ flex: 1, background: "var(--verde-mx)" }} />
      </div>
    </section>
  );
}
