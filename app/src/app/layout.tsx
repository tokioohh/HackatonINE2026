import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Voto Joven — Una Historia en Tres Actos",
  description:
    "Ensayo visual interactivo sobre la evolución de la participación juvenil en México, 2009–2024. Datos del INE.",
  openGraph: {
    title: "El Voto Joven — Una Historia en Tres Actos",
    description:
      "Seis elecciones federales, 2009–2024: cómo cambió la participación de 18 a 24 años y cómo se compara con la de otros grupos.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Special+Elite&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
