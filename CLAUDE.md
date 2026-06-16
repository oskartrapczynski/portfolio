# Portfolio website

Astro + React (wyspy `client:*`) + Tailwind. Płynny scroll: Lenis (`SmoothScroll`),
animacje scroll-driven: framer-motion (`useScroll`/`useInView`).

## Konwencje kodu

- **Named exports, nie default exports.** Komponenty i funkcje eksportujemy nazwanie:
  `export const Hero = () => { ... }` / `export function scrollToTarget() { ... }`.
  Importy odpowiednio nazwane: `import { Hero } from "../components/Hero"`.
  Nie używamy `export default`.

- **Programowy scroll przez `src/lib/scroll.ts`** (`scrollToTarget`), nie przez
  natywne `window.scrollTo` / `scrollIntoView` — Lenis steruje scrollem i natywne
  wywołania z nim walczą.

## Narzędzia

ESLint (flat config, `eslint.config.js`) + Prettier (`.prettierrc.json`).
Regułę named-export egzekwuje `no-restricted-syntax` (zakres `.ts`/`.tsx`;
`.astro` i pliki konfiguracyjne wymagają default exportu, więc są wyłączone).

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- `npm run build` — `astro check` (typy) + `astro build`
