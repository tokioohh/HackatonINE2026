# El Voto Joven — Una Historia en Tres Actos 🗳️

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js&style=flat-square)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-ff0055?logo=framer&style=flat-square)](https://www.framer.com/motion/)
[![Hackatón INE 2026](https://img.shields.io/badge/Hackat%C3%B3n_INE-2026-c2185b?style=flat-square)](https://ine.mx/)
[![Eje 3](https://img.shields.io/badge/Eje_3-Storytelling_con_Datos-006847?style=flat-square)](https://ine.mx/)

> **Proyecto desarrollado para el Hackatón INE 2026: *"Hackea la Participación: Datos que Construyen Democracia"***  
> **Eje Temático 3:** Storytelling con datos sobre la participación ciudadana.

---

## 📖 Resumen del Proyecto

**"El Voto Joven: Una Historia en Tres Actos"** es un ensayo visual interactivo que transforma más de 15 años de datos electorales abiertos del INE en una narrativa humana, accesible y reflexiva sobre la abstención y el poder electoral de las juventudes en México.

A través de los **Conteos Censales de Participación Ciudadana (CCPC) 2009–2024** (que abarcan seis elecciones federales y una lista nominal de más de 98.3 millones de personas), la plataforma responde a preguntas fundamentales:
* ¿Por qué los jóvenes de 18 años votan masivamente, pero a partir de los 19 y hasta los 29 años la participación se desploma?
* ¿Cuántos millones de votos han dejado de emitirse por esta brecha generacional?
* ¿Qué pasaría si la juventud votara al mismo nivel que los adultos de 40 a 69 años?

---

## 🎭 Estructura Narrativa (Los Tres Actos)

```
[ HERO ] ────────► [ ACTO 1 ] ────────► [ ACTO 2 ] ────────► [ ACTO 3 ] ────────► [ CIERRE ]
 Portada            El Espejismo         15 Años de Brecha    El Poder             "Tu Voto
 Fanzine            de los 18            (Línea de Tiempo)    Dormido (Mapa)       También Vale"
```

### 1. Acto I: El Espejismo de los 18
* **El fenómeno del primer voto:** A los 18 años se registra una de las tasas de participación más altas del país (~64%), impulsada por el entusiasmo del primer trámite de la credencial para votar.
* **El valle de abstención:** Entre los 19 y los 29 años, la participación cae drásticamente (hasta llegar a menos del 51% en elecciones presidenciales y cifras aún menores en intermedias).
* **Gráfica de matriz:** Representación visual de 100 ciudadanos donde se hace tangible la diferencia entre quienes acuden a las urnas y quienes se abstienen.

### 2. Acto II: 15 Años de Brecha Silenciosa (2009–2024)
* **Línea del tiempo horizontal interactiva:** Un recorrido inmersivo a lo largo de seis elecciones nacionales consecutivas:
  * 🗳️ **2009 Intermedia:** 31.6% voto joven vs 44.6% adultos (brecha de 13.0 pts).
  * 🗳️ **2012 Presidencial:** 53.2% vs 66.8% (brecha de 13.6 pts).
  * 🗳️ **2015 Intermedia:** 33.4% vs 51.8% (brecha histórica de 18.4 pts).
  * 🗳️ **2018 Presidencial:** 55.4% vs 66.8% (brecha de 11.4 pts).
  * 🗳️ **2021 Intermedia:** 41.7% vs 56.4% (brecha de 14.7 pts).
  * 🗳️ **2024 Presidencial:** 52.8% vs 64.9% (brecha de 12.1 pts).
* **Estimador de votos perdidos:** Cálculo histórico que demuestra que más de 25 millones de boletas jóvenes no llegaron a las urnas debido a esta brecha persistente.

### 3. Acto III: El Poder Dormido
* **Mapa Interactivo de México:** Cartografía vectorial SVG interactiva de las 32 entidades federativas.
* **Explorador por estado y grupos de edad:** Permite alternar entre la tasa de jóvenes (18-29) y adultos (30+), identificando los estados con mayor compromiso cívico (como Yucatán y Tlaxcala) frente a aquellos con mayor reto de abstención (como Sonora y Baja California).
* **Conciencia ciudadana:** Simulación de impacto que evidencia cómo el voto juvenil tiene el volumen numérico suficiente para decidir cualquier elección federal o local.

### 4. Cierre: "Tu Voto También Vale"
* **Slide final de presentación:** Formato póster en hoja arrancada con tipografía de rescate animada (*Ransom Note*), decorada con sellos y el pulgar entintado indeleble del INE, que invita a la reflexión final y enlaza directamente al repositorio de datos abiertos del INE.

---

## 🎨 Identidad Visual y Experiencia de Usuario

La interfaz rompe deliberadamente con las plantillas corporativas tradicionales para adoptar una **estética de libreta estudiantil / fanzine juvenil**:
* 📓 **Textura de papel cuadriculado milimétrico arrugado** (`notebook-canvas`).
* ✂️ **Títulos Ransom Note (Cartas de rescate):** Recortes de revistas vintage animados de forma independiente y asíncrona, con micro-interacciones al pasar el cursor.
* 🩹 **Cinta adhesiva semi-transparente (Scotch Tape):** Efectos visuales de sujeción analógica en fotos y tarjetas.
* ✍️ **Doodles y bocetos originales:** Garabatos dibujados a mano (Quetzalcóatl, urnas, credenciales del INE, pulgar entintado, bandera mexicana, pirámides, cactus, luchador) que aparecen dinámicamente con el scroll.
* ⌨️ **Tipografía mecanografiada:** Fuente estilo máquina de escribir clásica (`Special Elite` / Courier) para fichas técnicas y citas.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19).
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para tipado estricto de datasets y componentes.
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con tokens de diseño personalizados.
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (scroll dinámico, micro-rebotes, rotaciones orgánicas y apariciones secuenciales).
* **Iconografía:** [Lucide React](https://lucide.dev/).
* **Visualización Cartográfica:** SVG GeoJSON vectorial interactivo de la República Mexicana sin dependencias pesadas de mapas externos.

---

## 💻 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de contar con:
* **Node.js:** Versión `18.18.0` o superior (se recomienda **Node.js 20 LTS** o `22+`).
* **Gestor de paquetes:** `npm` (incluido con Node), `pnpm`, `yarn` o `bun`.
* **Navegador web moderno:** Chrome, Edge, Firefox, Safari u Opera.

---

## 🚀 Instrucciones de Instalación y Ejecución

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tokioohh/HackatonINE2026.git
cd HackatonINE2026
```

### 2. Cambiar a la Rama Activa
Si deseas explorar las últimas funciones y refinamientos visuales:
```bash
git checkout testing
```

### 3. Instalar Dependencias
```bash
npm install
```

### 4. Modo Desarrollo
Para iniciar el servidor local con recarga en caliente (*Hot Reload*):
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000).

---

## ⚡ Ejecución en Modo Producción (Recomendado para Evaluaciones)

Para experimentar la aplicación con el máximo rendimiento, sin sobrecostos de compilación en tiempo de ejecución:

```bash
# 1. Compilar la aplicación optimizada
npm run build

# 2. Iniciar el servidor de producción
npm run start
```
El proyecto estará disponible de inmediato en [http://localhost:3000](http://localhost:3000).

> 💡 **Para correr en un puerto específico (ejemplo: puerto 3001):**
> ```bash
> npm run start -- -p 3001
> ```

---

## 🔧 Solución de Problemas Frecuentes

* **Error: `Port 3000 is already in use`**
  Si el puerto 3000 está ocupado por otra instancia, puedes liberarlo o correr en otro puerto:
  ```powershell
  # En Windows (PowerShell)
  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
  ```
  O simplemente corre el proyecto en otro puerto:
  ```bash
  npm run dev -- -p 3005
  ```

* **Limpiar caché de compilación:**
  Si notas inconsistencias visuales tras cambios en ramas:
  ```bash
  # Eliminar caché de Next.js
  rm -rf .next
  npm run build
  ```

---

## 📁 Estructura del Proyecto

```
HackatonINE2026/
├── public/
│   ├── doodles/            # Bocetos dibujados a mano (Quetzalcóatl, INE, pulgar, etc.)
│   ├── textures/notebook/  # Texturas de papel arrugado, cinta adhesiva y recortes
│   └── images/historical/  # Fotografías documentales con licencia Creative Commons
├── src/
│   ├── app/
│   │   ├── globals.css     # Reglas globales, fondos notebook-canvas y tipografías
│   │   ├── layout.tsx      # Configuración de metadatos SEO y fuentes
│   │   └── page.tsx        # Ensamblado principal de la historia en 3 actos
│   ├── components/
│   │   ├── acts/           # Secciones principales del storytelling:
│   │   │   ├── HeroSection.tsx         # Portada fanzine y llamada de entrada
│   │   │   ├── ActOne.tsx              # Acto 1: Espejismo de los 18
│   │   │   ├── ActTwo.tsx              # Acto 2: 15 años de brecha
│   │   │   ├── HorizontalTimeline.tsx  # Línea del tiempo interactiva horizontal
│   │   │   ├── LostVotesEstimate.tsx   # Estimador de boletas perdidas
│   │   │   ├── ActThree.tsx            # Acto 3: El poder dormido
│   │   │   ├── ConcienciaSection.tsx   # Sección de impacto cívico
│   │   │   └── CtaSection.tsx          # Llamado a la acción con datos abiertos
│   │   ├── charts/         # Visualizaciones de datos:
│   │   │   ├── MexicoMap.tsx           # Mapa interactivo nacional SVG
│   │   │   ├── HandDrawnBarChart.tsx   # Barras con acabado artesanal
│   │   │   ├── ComparisonChart.tsx     # Comparador generacional
│   │   │   └── PersonMatrix100.tsx     # Matriz de 100 ciudadanos
│   │   ├── explorer/       # Explorador detallado de datos por estado
│   │   └── ui/             # Componentes de diseño y micro-interacciones:
│   │       ├── Footer.tsx              # Cierre de presentación "Tu voto también vale"
│   │       ├── RansomNoteTitle.tsx     # Letras de recorte animadas
│   │       ├── ScrollDoodles.tsx       # Sellos y bocetos que flotan con el scroll
│   │       ├── DoodleStickers.tsx      # Cinta adhesiva y adhesivos analógicos
│   │       └── TypewriterText.tsx      # Efecto mecánico de máquina de escribir
│   └── lib/
│       ├── data.ts                     # Datasets electorales procesados del CCPC (2009–2024)
│       └── mexico-paths.json           # Trazos SVG de los 32 estados de la República
├── package.json
└── README.md
```

---

## 📊 Fuentes de Datos y Transparencia

1. **Instituto Nacional Electoral (INE):**
   * Plataforma de Conteos Censales de Participación Ciudadana (CCPC): Elecciones Federales 2009, 2012, 2015, 2018, 2021 y 2024.
   * Portal de Datos Abiertos del INE: [https://ine.mx/transparencia/datos-abiertos/](https://ine.mx/transparencia/datos-abiertos/)
2. **Atribuciones Fotográficas (Licencias Libres):**
   * *ProtoplasmaKid* (CC BY-SA 4.0) — Jornadas electorales y materiales en casilla.
   * *Battroid* (CC BY 4.0) — Credencial para votar y tinta indeleble.
   * *Randal Sheppard* (CC BY-SA 2.0) — Participación ciudadana.

---

## 👥 Equipo y Créditos

* **Desarrollo y Diseño:** Oskar & Equipo de Storytelling.
* **Iniciativa:** Hackatón INE 2026 — *"Datos que Construyen Democracia"*.
* **Licencia:** MIT License.
