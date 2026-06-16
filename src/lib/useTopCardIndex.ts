import { useEffect, useState, type RefObject } from 'react'

// Na urządzeniach dotykowych zwraca indeks JEDNEJ karty najbliższej środka
// ekranu — to ona "udaje hover". Zawsze dokładnie jedna jest aktywna, więc przy
// scrollu w obie strony podświetlenie przechodzi po kolei.
// Na desktopie (pointer: fine) zwraca null — hover obsługuje myszka.
export const useTopCardIndex = (
  containerRef: RefObject<HTMLElement | null>,
  count: number
) => {
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: coarse)').matches) return
    const container = containerRef.current
    if (!container) return

    let raf = 0

    const compute = () => {
      raf = 0
      const cards = container.children
      // Linia "hovera" na środku ekranu.
      const lineY = window.innerHeight * 0.5
      let best: number | null = null
      let bestDist = Infinity

      for (let i = 0; i < cards.length; i++) {
        const r = cards[i].getBoundingClientRect()
        // Pomijamy karty całkiem poza ekranem.
        if (r.bottom < 0 || r.top > window.innerHeight) continue
        const center = r.top + r.height / 2
        const dist = Math.abs(center - lineY)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      }
      setIndex(best)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef, count])

  return index
}
