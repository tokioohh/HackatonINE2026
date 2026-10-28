import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jmhTypewriter = localFont({
  src: [
    {
      path: "../../public/fonts/jmh_typewriter/JMH Typewriter.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/jmh_typewriter/JMH Typewriter-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/jmh_typewriter/JMH Typewriter-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-typewriter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EL VOTO JOVEN — Una Crónica Visual en Tres Actos | Hackatón INE 2026",
  description: "Expediente interactivo de periodismo de datos sobre el colapso de la participación juvenil en México (2009–2024). Datos oficiales CCPC del INE.",
  keywords: ["INE", "Hackatón INE 2026", "Voto Joven", "Participación Ciudadana", "Storytelling con datos", "CCPC"],
  authors: [{ name: "Equipo El Voto Joven" }],
  openGraph: {
    title: "EL VOTO JOVEN — Una Crónica Visual en Tres Actos",
    description: "¿Por qué los jóvenes mexicanos dejaron de votar en plena era digital? Expediente con datos censales del INE.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bebas.variable} ${playfair.variable} ${mono.variable} ${sans.variable} ${jmhTypewriter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[#F5EFE6] text-[#111110] selection:bg-[#B84A28] selection:text-white">
        {children}
      </body>
    </html>
  );
}
