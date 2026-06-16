import { useEffect } from 'react'
import Lenis from 'lenis'
import { HEADER_OFFSET, setLenis } from '../lib/scroll'

/**
 * Globalny płynny scroll (Lenis). Steruje natywną pozycją scrolla,
 * więc framer-motion `useScroll` działa normalnie.
 * Nie renderuje nic — to tylko island z efektem ubocznym.
 *
 * Aby wyłączyć płynny scroll: usuń <SmoothScroll /> z index.astro.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    // Szanuj ustawienie "ogranicz ruch" w systemie
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
    })

    setLenis(lenis)

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Płynne przewijanie do kotwic (#about, #projects...) zamiast skoku
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as
        | HTMLAnchorElement
        | undefined
      if (!target) return
      const id = target.getAttribute('href')!
      if (id.length > 1) {
        e.preventDefault()
        lenis.scrollTo(id, { offset: HEADER_OFFSET })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
