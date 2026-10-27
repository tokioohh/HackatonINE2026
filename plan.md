# Plan: El Voto Joven — Una Historia en Tres Actos

> Micrositio interactivo de scroll-driven storytelling para el Hackatón INE 2026
> Eje temático 3: Storytelling con datos — Comunicación y visualización con impacto público

## Resumen

Micrositio que narra visualmente la evolución de la participación juvenil en México (2009–2024) usando datos de la plataforma CCPC del INE. La experiencia se estructura en tres actos — antes de las redes sociales, durante su auge, y el desinterés actual — combinando scroll-driven storytelling con una sección exploratoria interactiva. El objetivo: que cualquier ciudadano comprenda por qué los jóvenes dejaron de votar y qué significa para la democracia.

## Usuarios

| Persona | Descripción |
|---------|-------------|
| **Ciudadanía general** | Público principal. Personas de cualquier edad que navegan el sitio para entender los datos de participación. Priorizamos claridad sobre complejidad. |
| **Jóvenes 18-35** | Público secundario clave. El contenido busca resonar con su experiencia generacional y motivar reflexión. |
| **Jurado del hackathon** | Evalúan apego a la temática, claridad, originalidad, viabilidad y potencial institucional. |
| **INE (uso institucional)** | Potencial usuario futuro — el material debe ser reutilizable como herramienta de divulgación. |

## Fuentes de Datos

### Datos primarios (obligatorios)
**Plataforma CCPC 2009–2024** — Conteos Censales de Participación Ciudadana del INE.
- Elecciones: 2009, 2012, 2015, 2018, 2021, 2024
- Variables: lista nominal, sí votaron, no votaron, % participación, % abstención
- Filtros: entidad, municipio, distrito, sección, edad, etapa de vida, grupo quinquenal, sexo, tipo de sección (urbana/rural/mixta), población indígena/afromexicana
- Etapas de vida: Juventud (18-24), Adulta Joven (25-34), Adulta (35-44), Adulta Plena (45-59), Adulta Mayor (60+)

**Hallazgos clave ya detectados:**
- Participación general: 44.1% (2009) → 62.1% (2012) → 47.1% (2015) → 62.4% (2018) → 51.8% (2021) → 59.7% (2024)
- Edad promedio del votante: 43.12 (2009) → 45.46 (2024) — sube 2.3 años en 15 años
- Juventud (18-24) es solo el 13% de los votantes en 2024
- Los grupos 18-19 y 20-24 tienen las tasas más bajas (~30-40%)

### Datos complementarios
| Fuente | Qué aporta | Para qué acto |
|--------|-----------|----------------|
| INEGI — Encuesta Nacional sobre Disponibilidad y Uso de TIC (ENDUTIH) | Penetración de internet y smartphones por grupo de edad, año a año | Acto 2: correlacionar auge digital con participación |
| ENCUP/ENCUCI — Encuesta Nacional de Cultura Cívica | Confianza en instituciones, interés político por edad | Acto 3: explicar el desinterés |
| Hitos de redes sociales en México | Timeline editorial: llegada de Facebook, Twitter, #YoSoy132, WhatsApp, TikTok | Actos 1-2-3: contexto narrativo |

> **SUPUESTO**: Los datos de INEGI y ENCUCI son públicos y descargables. Si no se obtienen a tiempo, el proyecto funciona solo con CCPC + narrativa editorial.

## Requisitos Funcionales

### RF-01: Experiencia scroll-driven storytelling
El micrositio guía al usuario a través de una narrativa lineal mediante scroll. Cada acto se revela progresivamente con animaciones vinculadas a la posición del scroll.

### RF-02: Acto 1 — "El Silencio" (2009)
- Visualización de participación por grupo de edad en 2009 (barras animadas)
- Dato destacado: tasa de participación juvenil como baseline
- Contexto narrativo: cómo eran las campañas antes de redes sociales
- Comparación visual jóvenes vs. adultos mayores

### RF-03: Acto 2 — "El Despertar Digital" (2012–2018)
- Transición animada: timeline de llegada de redes sociales a México
- Gráfica comparativa 2009→2012 por grupo de edad (¿subió la juventud?)
- Mención de #YoSoy132 y su impacto en 2012
- Evolución 2015→2018 con contexto de WhatsApp y campañas digitales
- Correlación con penetración de internet (si los datos complementarios están disponibles)

### RF-04: Acto 3 — "La Desconexión" (2021–2024)
- Reveal dramático: gráfica de edad promedio del votante subiendo
- Dato de impacto: "Solo 13 de cada 100 votantes en 2024 tenían entre 18 y 24 años"
- Mapa de calor por entidad mostrando dónde cayó más la participación juvenil
- Correlación con confianza en instituciones (si datos ENCUCI disponibles)
- Contraste: más acceso a información ≠ más participación

### RF-05: Sección "Explora tú mismo"
- Dashboard interactivo con filtros: año, entidad, grupo de edad, sexo
- Gráficas dinámicas que responden a los filtros seleccionados
- Permite al usuario descubrir datos que la narrativa no cubre

### RF-06: Navegación e indicadores de progreso
- Barra de progreso o dots de navegación lateral indicando el acto actual
- Posibilidad de saltar entre actos
- Indicador de scroll progress

### RF-07: Responsividad
- El sitio funciona en móvil, tablet y desktop
- Las visualizaciones se adaptan al tamaño de pantalla
- El scroll storytelling funciona con touch en móvil

### RF-08: Contador de votos perdidos (ENHANCEMENT)
- Counter animado que calcula cuántos votos jóvenes se "perdieron" comparando tasas históricas con la actual
- Ejemplo: "Si los jóvenes votaran como en 2012, habría X millones más de votos"

### RF-09: Personalización generacional (ENHANCEMENT)
- El usuario puede ingresar su año de nacimiento
- El sitio le muestra cómo participó su generación en cada elección

## Requisitos No Funcionales

### RNF-01: Performance
- First Contentful Paint < 2s
- Las animaciones corren a 60fps
- Los datos se cargan como JSON estático (no API calls)

### RNF-02: Accesibilidad
- Contraste WCAG AA mínimo
- Navegable por teclado
- Alt text en todas las imágenes y visualizaciones
- Las visualizaciones tienen versiones texto alternativo

### RNF-03: SEO y compartibilidad
- Meta tags y Open Graph para compartir en redes sociales
- Título y descripción claros para cada sección

### RNF-04: Idioma
- Todo el contenido en español
- Código fuente en inglés (nombres de variables, componentes)
- Comentarios y documentación en español

### RNF-05: Deploy
- Deployable en cualquier servicio cloud (Vercel, Netlify, cloud VM)
- Build estático exportable (no requiere servidor)

## Alcance

### Incluido
- Micrositio interactivo con 3 actos + sección exploratoria
- Procesamiento y limpieza de datos CCPC
- Integración de datos complementarios (INEGI, ENCUCI) si están disponibles
- Guion narrativo (3-5 cuartillas PDF)
- Presentación ejecutiva (10 diapositivas)
- Código en repositorio público
- Diseño responsivo

### Excluido
- Video pitch (el equipo lo graba por separado)
- Cartas legales (responsabilidad del equipo)
- Backend / API / base de datos
- Autenticación o usuarios
- Integración directa con la plataforma CCPC (usamos datos descargados)
- Análisis predictivo o modelos ML (eso es Reto 2)

## Arquitectura

### Tipo: Static Site (JAMstack)
```
[Datos CCPC ZIP] → [Script de procesamiento] → [JSON estáticos]
                                                       ↓
[Next.js App] ← [JSON estáticos en /public/data/]
       ↓
[Build estático] → [Deploy a cloud]
```

No hay backend. Los datos se pre-procesan una vez y se incluyen como archivos JSON en el build.

### Stack técnico
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 15 | Framework React con App Router, static export |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4 | Estilos utilitarios |
| Framer Motion | 12 | Animaciones scroll-driven (useScroll, useTransform) |
| D3.js | 7 | Visualizaciones complejas (mapa de calor, custom charts) |
| Recharts | 2.x | Charts estándar (barras, líneas, áreas) |
| React Intersection Observer | - | Detección de secciones visibles |
| sharp | - | Optimización de imágenes en build |

> **SUPUESTO**: El equipo tiene experiencia con React y TypeScript. Si no, se puede simplificar a JavaScript plano.

## Estructura de Carpetas

```
hackaton-ine-2026/
├── public/
│   ├── data/
│   │   ├── ccpc/                  # JSONs procesados por año
│   │   │   ├── 2009.json
│   │   │   ├── 2012.json
│   │   │   ├── 2015.json
│   │   │   ├── 2018.json
│   │   │   ├── 2021.json
│   │   │   └── 2024.json
│   │   ├── complementary/         # Datos INEGI/ENCUCI procesados
│   │   └── timeline.json          # Hitos de redes sociales
│   ├── images/                    # Íconos, ilustraciones
│   └── og-image.png               # Imagen para compartir en redes
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Layout principal con meta tags
│   │   ├── page.tsx               # Página principal (scroll storytelling)
│   │   └── explora/
│   │       └── page.tsx           # Sección exploratoria interactiva
│   ├── components/
│   │   ├── acts/                  # Componentes por acto
│   │   │   ├── ActOne.tsx         # "El Silencio"
│   │   │   ├── ActTwo.tsx         # "El Despertar Digital"
│   │   │   ├── ActThree.tsx       # "La Desconexión"
│   │   │   └── HeroSection.tsx    # Apertura dramática
│   │   ├── charts/                # Visualizaciones reutilizables
│   │   │   ├── ParticipationBars.tsx
│   │   │   ├── AgeComparisonChart.tsx
│   │   │   ├── TimelineRiver.tsx
│   │   │   ├── StateHeatMap.tsx
│   │   │   ├── VoterAgeEvolution.tsx
│   │   │   └── LostVotesCounter.tsx
│   │   ├── ui/                    # Componentes genéricos
│   │   │   ├── ScrollSection.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── NavigationDots.tsx
│   │   │   ├── StatHighlight.tsx
│   │   │   └── AnimatedNumber.tsx
│   │   └── explorer/              # Sección exploratoria
│   │       ├── FilterPanel.tsx
│   │       └── DynamicChart.tsx
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts
│   │   └── useDataFilter.ts
│   ├── lib/
│   │   ├── data.ts               # Carga y transformación de datos
│   │   ├── constants.ts          # Colores, breakpoints, textos
│   │   └── formatters.ts         # Formateo de números, porcentajes
│   └── styles/
│       └── globals.css
├── scripts/
│   └── process-data.ts           # Procesa ZIPs CCPC → JSON
├── docs/
│   ├── guion-narrativo.md        # Fuente del guion (se exporta a PDF)
│   └── wireframes/               # Sketches del storyboard
├── data-raw/                     # ZIPs descargados (gitignored)
├── .env.example
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── plan.md
├── AGENTS.md
└── README.md
```

## Modelo de Datos

No hay base de datos. Los datos se modelan como tipos TypeScript que representan los JSONs procesados:

```typescript
// Participación por grupo de edad y año
interface ParticipationData {
  year: number;
  entity: string;              // Clave de entidad o "NACIONAL"
  ageGroup: string;            // "18-19", "20-24", "25-29", etc.
  lifeStage: string;           // "Juventud", "Adulta Joven", etc.
  sex: "H" | "M" | "NB";
  sectionType: "U" | "R" | "M";
  listaNominal: number;
  siVotaron: number;
  noVotaron: number;
  participationRate: number;   // Calculado
  abstentionRate: number;      // Calculado
}

// Hitos de redes sociales
interface TimelineMilestone {
  year: number;
  month?: number;
  title: string;
  description: string;
  platform?: string;           // "Facebook", "Twitter", "TikTok"
  impact: "positive" | "negative" | "neutral";
}

// Datos complementarios INEGI
interface InternetPenetration {
  year: number;
  ageGroup: string;
  internetUsers: number;       // Porcentaje
  smartphoneUsers: number;     // Porcentaje
}
```

## Hitos y Cronograma

> **SUPUESTO**: El equipo dispone de ~5 días efectivos de trabajo antes del 31 de octubre de 2026.

| # | Hito | Criterio de terminado | Estimación |
|---|------|----------------------|------------|
| H1 | **Datos listos** | ZIPs descargados, script de procesamiento ejecutado, JSONs validados con los totales del manual CCPC | Día 1 |
| H2 | **Guion narrativo aprobado** | Documento de 3-5 cuartillas con storyline de los 3 actos, textos clave, propuesta de difusión | Día 1 |
| H3 | **Wireframes y diseño** | Sketches de cada sección del scroll, paleta de colores, tipografía definida, responsive wireframes | Día 1-2 |
| H4 | **Estructura + diseño base** | Proyecto Next.js funcionando con layout, navegación, scroll sections vacías, estilos globales | Día 2 |
| H5 | **Acto 1 implementado** | Sección "El Silencio" con datos reales, gráfica de barras por edad 2009, animaciones scroll | Día 2-3 |
| H6 | **Acto 2 implementado** | Timeline de redes sociales, comparativas 2009→2018, correlación con internet (si disponible) | Día 3 |
| H7 | **Acto 3 implementado** | Gráfica de edad promedio, mapa de calor por estado, datos de desinterés, call-to-action | Día 3-4 |
| H8 | **Sección exploratoria** | Filtros funcionando, gráficas dinámicas, responsive | Día 4 |
| H9 | **Polish y QA** | Animaciones pulidas, responsive probado en 3 dispositivos, textos finales, OG image | Día 4-5 |
| H10 | **Entregables completos** | Deploy en cloud, guion narrativo en PDF, presentación de 10 slides, repositorio público, video grabado | Día 5 |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos CCPC más antiguos (2009, 2012) tienen formato inconsistente | Media | Alto | Procesar y validar datos en el día 1; tener fallback con datos agregados del dashboard Tableau |
| Datos complementarios (INEGI/ENCUCI) no se obtienen a tiempo | Media | Medio | El proyecto funciona sin ellos; la narrativa editorial sustituye la correlación con datos |
| Scroll storytelling no funciona bien en móvil | Media | Alto | Probar en móvil desde el día 2; tener fallback de scroll simple sin animaciones complejas |
| Equipo no tiene experiencia con D3.js para el mapa | Baja | Medio | Usar una librería de mapas más simple (react-simple-maps) o Recharts para visualización alternativa |
| Tiempo insuficiente para todos los features | Media | Alto | Los RF-08 y RF-09 son enhancements opcionales; priorizar RF-01 a RF-07 |

## Ideas para Hacer el Proyecto Más Impactante

Estas son sugerencias adicionales que podrían diferenciar el proyecto. Preguntar al equipo cuáles incluir:

### 1. "El Contador de Votos Perdidos"
Un counter animado prominente que dice: *"Si los jóvenes de 2024 hubieran votado como los de 2012, habría X millones más de votos."* Hace tangible la abstención.

### 2. Lente de género dentro de la juventud
¿Las mujeres jóvenes participan más que los hombres jóvenes? El CCPC tiene datos por sexo. Podría revelar una historia dentro de la historia.

### 3. Urbano vs. Rural
¿La desconexión juvenil es igual en ciudades que en zonas rurales? El efecto de redes sociales podría ser diferente donde hay menos internet. El CCPC tiene tipo de sección.

### 4. Juventud indígena y afromexicana
El CCPC incluye filtros de población indígena y afrodescendiente. Una vista interseccional de la participación juvenil sería original y alineada con la agenda del INE.

### 5. "Tu generación en el espejo"
El usuario ingresa su año de nacimiento y ve cómo participó su generación en cada elección desde que cumplió 18. Personalización = engagement.

### 6. Mapa animado temporal
Mostrar cómo el "desierto del voto joven" se expandió geográficamente de 2009 a 2024, estado por estado, como una animación tipo timelapse.

## Preguntas Abiertas

1. ¿El equipo tiene experiencia con React/TypeScript o se necesita un stack más sencillo (HTML/CSS/JS vanilla)?
2. ¿Se necesita soporte offline o PWA?
3. ¿El INE proporciona la cartografía electoral en formato usable para mapas web (GeoJSON)?
4. ¿Cuáles de las "ideas para hacer más impactante" quiere incluir el equipo?
5. ¿El video pitch lo graban ustedes o necesitan ayuda con el guion del video?
