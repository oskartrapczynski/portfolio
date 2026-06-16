import { forwardRef, useRef } from 'react'
import {
  easeOut,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from 'framer-motion'

const glowFrames = [0.15, 0.18, 0.21, 0.24, 0.27, 0.3, 0.33, 0.4, 0.45]

export const WelcomeInMyWorld = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>((props, forwardedRef) => {
  // Własny ref napisu — pewny target dla useScroll (podpina się przed efektem
  // tego komponentu, w przeciwieństwie do współdzielonego refa sekcji-rodzica).
  const innerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ['start end', 'start start'],
  })

  const brandY = useTransform(scrollYProgress, [0.15, 0.6], [-450, 0], {
    ease: easeOut,
  })

  const glow = useTransform(
    scrollYProgress,
    glowFrames,
    [0, 1, 1, 1, 1, 1, 1, 0, 0]
  )

  // Stopień "zapalenia" napisu (0 = czarny, 1 = pełny akcent). Tym samym
  // timingiem co wcześniej, ale kolor docelowy bierzemy z --hero-accent, więc
  // napis podąża za akcentem najechanej karty zamiast stałego cyjanu.
  const reveal = useTransform(
    scrollYProgress,
    glowFrames,
    [0, 0, 0, 0, 0, 0, 1, 1, 1]
  )
  const revealPct = useTransform(reveal, (v) => `${v * 100}%`)
  const textColor = useMotionTemplate`color-mix(in srgb, var(--hero-accent, #00ffff) ${revealPct}, #000000)`

  const brandOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  // Łączymy ref wewnętrzny z ewentualnie przekazanym z zewnątrz.
  const setRefs = (node: HTMLDivElement | null) => {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <motion.div ref={setRefs} className="relative z-20 mb-6" {...props}>
      <motion.div
        style={{ opacity: brandOpacity, y: brandY }}
        className="relative"
      >
        {/*glow text */}
        <motion.span
          aria-hidden
          style={{
            opacity: glow,
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
          }}
          className="pointer-events-none absolute inset-0 text-center text-4xl font-bold text-transparent md:text-7xl"
        >
          Welcome in my WORLD
        </motion.span>
        {/* main text */}
        <motion.span
          style={{ color: textColor }}
          className="text-neon-cyan relative text-center text-4xl font-bold duration-250 transition-colors md:text-7xl"
        >
          Welcome in my WORLD
        </motion.span>
      </motion.div>
    </motion.div>
  )
})

WelcomeInMyWorld.displayName = 'WelcomeInMyWorld'
