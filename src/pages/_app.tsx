import type { AppProps } from "next/app";
import Head from "next/head";
import { Bebas_Neue, Playfair_Display, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EL VOTO JOVEN — Una Crónica Visual en Tres Actos | Hackatón INE 2026</title>
        <meta name="description" content="Expediente interactivo de periodismo de datos sobre la brecha de participación electoral de los menores de 35 en México (2009–2024). Datos oficiales CCPC del INE." />
        <meta name="keywords" content="INE, Hackatón INE 2026, Voto Joven, Participación Ciudadana, Storytelling con datos, CCPC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:title" content="EL VOTO JOVEN — Una Crónica Visual en Tres Actos" />
        <meta property="og:description" content="¿Por qué los menores de 35 en México votan menos que el resto? Expediente con datos censales del INE." />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        className={`${bebas.variable} ${playfair.variable} ${mono.variable} ${sans.variable} ${jmhTypewriter.variable}`}
      >
        <div className="font-sans antialiased bg-[#F5EFE6] text-[#111110] selection:bg-[#B84A28] selection:text-white">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
