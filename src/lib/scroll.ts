import type Lenis from 'lenis'

/**
 * Jedno źródło prawdy dla programowego przewijania.
 * SmoothScroll rejestruje tu instancję Lenis (setLenis), a pozostałe
 * komponenty przewijają przez `scrollToTarget`. Gdy Lenis jest wyłączony
 * (np. prefers-reduced-motion) — wracamy do natywnego scrolla.
 *
 * Singleton modułowy jest współdzielony między wyspami Astro, bo wszystkie
 * importują ten sam chunk — dlatego nie potrzebujemy globala na window.
 */

/** Wysokość przyklejonej nawigacji (h-16 = 64px) + zapas oddechu. */
export const HEADER_OFFSET = -80

let lenis: Lenis | null = null

/** Wywoływane przez SmoothScroll przy montażu/odmontowaniu. */
export function setLenis(instance: Lenis | null) {
  lenis = instance
}

type Target = number | string | HTMLElement

/**
 * Przewija do celu: liczby (px), selektora ('#contact') albo elementu.
 * `'#'` oraz brak celu = powrót na samą górę.
 */
export function scrollToTarget(target: Target = 0, offset = HEADER_OFFSET) {
  const top = target === '#' || target === '' ? 0 : target

  if (lenis) {
    lenis.scrollTo(top, { offset: top === 0 ? 0 : offset })
    return
  }

  if (typeof top === 'number') {
    window.scrollTo({ top, behavior: 'smooth' })
    return
  }
  const el = typeof top === 'string' ? document.querySelector(top) : top
  if (el instanceof HTMLElement) {
    const y = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
