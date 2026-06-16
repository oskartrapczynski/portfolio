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
    [0, 1, 0, 1, 0, 1, 0, 1, 0]
  )

  const textColor = useTransform(
    scrollYProgress,
    glowFrames,
    ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#00ffff', '#00ffff']
  )

  const brandTextShadow = useMotionTemplate`0 0 10px rgba(0, 255, 255, ${glow}), 0 0 20px rgba(0, 255, 255, ${glow}), 0 0 30px rgba(0, 255, 255, ${glow})`

  const brandOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  // Łączymy ref wewnętrzny z ewentualnie przekazanym z zewnątrz.
  const setRefs = (node: HTMLDivElement | null) => {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    // Wrapper bez transformu = stabilny target pomiaru scrolla (brak sprzężenia
    // z animowanym y poniżej).
    <motion.div ref={setRefs} className="relative z-20 mb-6" {...props}>
      <motion.div style={{ opacity: brandOpacity, y: brandY }}>
        <motion.span
          style={{ color: textColor, textShadow: brandTextShadow }}
          className="text-neon-cyan text-center text-4xl font-bold md:text-7xl"
        >
          Welcome in my world
        </motion.span>
      </motion.div>
    </motion.div>
  )
})

WelcomeInMyWorld.displayName = 'WelcomeInMyWorld'
