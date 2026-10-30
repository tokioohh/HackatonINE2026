# El Voto Joven 🗳️

[![Hackatón INE 2026](https://img.shields.io/badge/Hackat%C3%B3n_INE-2026-c2185b?style=flat-square)](https://ine.mx/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&style=flat-square)](https://nextjs.org/)

> Proyecto para el Hackatón INE 2026: *"Hackea la Participación"*  
> **Eje 3:** Storytelling con datos sobre participación ciudadana

## Qué es esto

Una narrativa visual interactiva que cuenta **15 años de abstención electoral juvenil en México** usando datos abiertos del INE (2009–2024).

El proyecto responde tres preguntas:
* **¿Por qué los de 18 votan mucho pero del 19 a los 29 la participación cae?**
* **¿Cuántos millones de votos jóvenes se han perdido en estos años?**
* **¿Qué pasaría si la juventud votara como los adultos de 40+?**

## La Historia en 3 Actos

**Acto I: El Espejismo**  
A los 18 votan masivamente (~64%), pero del 19 a los 29 la participación se desploma (hasta 51%). Visualizamos esto con gráficas de matriz humana.

**Acto II: 15 Años de Brecha**  
Línea de tiempo interactiva con las 6 elecciones federales (2009-2024). La brecha entre jóvenes y adultos ha sido constante: entre 11 y 18 puntos porcentuales. **Resultado: +25 millones de boletas jóvenes perdidas.**

**Acto III: El Poder Dormido**  
Mapa interactivo de México mostrando participación por estado y edad. Estados como Yucatán lideran, mientras Sonora y BC tienen los mayores retos.

## Diseño

Estética de fanzine estudiantil con:
* Papel cuadriculado arrugado como fondo
* Títulos tipo "ransom note" (recortes de revista animados)
* Doodles a mano (Quetzalcóatl, urnas, credenciales INE)
* Cinta adhesiva y efectos analógicos
* Tipografía de máquina de escribir

## Stack

Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion + Mapa SVG interactivo

## Cómo correrlo

**Requisitos:** Node.js 18.18+ (recomendado 20 LTS o superior)

```bash
# Clonar e instalar
git clone https://github.com/tokioohh/HackatonINE2026.git
cd HackatonINE2026
npm install

# Desarrollo
npm run dev

# Producción (recomendado para demos)
npm run build
npm run start
```

Abre [http://localhost:3000](http://localhost:3000)

Si el puerto está ocupado: `npm run dev -- -p 3005`

## Datos

**Fuente:** [Conteos Censales de Participación Ciudadana (CCPC) del INE](https://ine.mx/transparencia/datos-abiertos/) — Elecciones Federales 2009, 2012, 2015, 2018, 2021 y 2024.

**Fotos:** Creative Commons (ProtoplasmaKid, Battroid, Randal Sheppard)

## Equipo

Oskar, Joe, Luis y René  
Hackatón INE 2026 — *"Datos que Construyen Democracia"*

---

**Licencia:** MIT
