# El Voto Joven — Hackatón INE 2026

Micrositio interactivo de scroll-driven storytelling sobre la evolución de la participación juvenil en México (2009–2024), usando datos CCPC del INE.

## Stack
- Next.js 15 (App Router, static export)
- TypeScript 5.x
- Tailwind CSS 4
- Framer Motion 12 (animaciones scroll-driven)
- D3.js 7 (visualizaciones complejas, mapas)
- Recharts 2.x (charts estándar)
- React Intersection Observer

## Comandos
```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Build de producción
npm run start        # Servir build de producción
npm run lint         # Lint con ESLint
npm run process-data # Procesar ZIPs CCPC → JSON (requiere data-raw/)
```

## Estructura
```
src/app/              → Páginas (page.tsx principal + /explora)
src/components/acts/  → Componentes de cada acto del storytelling
src/components/charts/→ Visualizaciones de datos reutilizables
src/components/ui/    → Componentes genéricos (scroll, counters, nav)
src/components/explorer/ → Dashboard interactivo
src/hooks/            → Hooks custom (scroll, intersection, filtros)
src/lib/              → Utilidades, constantes, formateo
public/data/          → JSONs procesados de CCPC e INEGI
scripts/              → Script de procesamiento de datos
docs/                 → Guion narrativo y wireframes
data-raw/             → ZIPs descargados (gitignored)
```

## Skills del proyecto
- Este proyecto incluye skills propias en `.agents/skills/`. Úsalas cuando apliquen: consulta las de diseño antes de construir UI, las de planeación antes de añadir funcionalidad, y las de datos/visualización antes de crear gráficas.

## Convenciones
- Idioma del código: inglés. Comentarios y documentación: español.
- Contenido del micrositio: español.
- Trabaja en una rama (`dev` o `feature/*`); nunca hagas push directo a `main`.
- Commits pequeños con mensaje claro.
- Ejecuta lint y build antes de dar una tarea por terminada.
- Los datos procesados (JSONs en public/data/) se versionan; los datos crudos (data-raw/) no.

## Seguridad
- No leas ni imprimas `.env*`. Usa `.env.example` para documentar variables.
- No subas secretos. No uses `--force`, `rm -rf` ni borres datos sin permiso explícito.
- Los datos CCPC son públicos y agregados — no contienen datos personales.

## Reglas del stack
- Crear con `npx create-next-app@latest` (plantilla TypeScript + Tailwind + App Router).
- Estructura: `src/components`, `src/hooks`, `src/lib`.
- Estado local primero; agrega una librería de estado solo si el plan lo justifica.
- Los datos se cargan como JSON estático desde `public/data/` — no hay API calls.
- Accesibilidad mínima: etiquetas en formularios, contraste suficiente, navegación por teclado, `alt` en imágenes.
- Diseño responsivo (móvil primero).
- Las animaciones scroll-driven usan Framer Motion `useScroll` + `useTransform`.
- Las visualizaciones complejas (mapas, custom) usan D3.js; las estándar (barras, líneas) usan Recharts.
- Comandos de calidad: `npm run lint`, `npm run build`.

## Fuera de alcance
- Backend, API, base de datos
- Autenticación o gestión de usuarios
- Análisis predictivo o ML (eso es Reto 2 del hackathon)
- Integración directa con la plataforma CCPC en tiempo real
- Video pitch (se graba por separado)
