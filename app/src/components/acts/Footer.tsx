"use client";

export function Footer() {
  return (
    <footer
      className="min-h-svh flex flex-col justify-between sticky bottom-0"
      style={{
        padding: "var(--margin)",
        background: "var(--ine-purple-dark)",
        zIndex: -1,
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ fontSize: "15px" }}>
        <div>
          <p style={{ color: "var(--purple-1)", fontWeight: 500, marginBottom: "12px" }}>Datos</p>
          <ul className="space-y-2" style={{ color: "var(--purple-2)" }}>
            <li>CCPC INE 2009–2024</li>
            <li>98.3M registros procesados</li>
            <li>32 entidades federativas</li>
          </ul>
        </div>
        <div>
          <p style={{ color: "var(--purple-1)", fontWeight: 500, marginBottom: "12px" }}>Equipo</p>
          <ul className="space-y-2" style={{ color: "var(--purple-2)" }}>
            <li>Hackatón INE 2026</li>
            <li>Eje 3: Storytelling</li>
          </ul>
        </div>
        <div>
          <p style={{ color: "var(--purple-1)", fontWeight: 500, marginBottom: "12px" }}>Tecnología</p>
          <ul className="space-y-2" style={{ color: "var(--purple-2)" }}>
            <li>Next.js + TypeScript</li>
            <li>D3.js + Framer Motion</li>
          </ul>
        </div>
        <div>
          <p style={{ color: "var(--purple-1)", fontWeight: 500, marginBottom: "12px" }}>Fotografías</p>
          <ul className="space-y-2" style={{ color: "var(--purple-2)" }}>
            <li>ProtoplasmaKid, CC BY-SA 4.0</li>
            <li>Battroid, CC BY 4.0</li>
            <li>Randal Sheppard, CC BY-SA 2.0</li>
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        <p
          className="font-bold leading-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(3rem, 10vw, 12rem)",
            color: "var(--purple-1)",
            fontFamily: "var(--font-serif)",
          }}
        >
          El Voto Joven
        </p>
        <p style={{ fontSize: "13px", color: "var(--purple-3)", marginTop: "16px" }}>
          Hackea la Participación: Datos que Construyen Democracia — INE 2026
        </p>
      </div>
    </footer>
  );
}
