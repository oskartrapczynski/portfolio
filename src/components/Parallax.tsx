import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
  children: ReactNode
  /** Siła parallaxu w px (przesunięcie góra↔dół podczas przewijania). */
  offset?: number
  className?: string
}

/**
 * Subtelny parallax oparty wyłącznie o framer-motion.
 * Element przesuwa się wolniej/szybciej niż scroll, dając głębię.
 */
export const Parallax = ({ children, offset = 60, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: 'transform' }}>{children}</motion.div>
    </div>
  )
}
