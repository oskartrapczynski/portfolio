import { forwardRef } from 'react'
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
  HTMLElement,
  HTMLMotionProps<'div'>
>((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement> | undefined,
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

  return (
    <motion.div
      style={{ opacity: brandOpacity, y: brandY }}
      className="relative z-20 mb-6"
      {...props}
    >
      <motion.span
        style={{ color: textColor, textShadow: brandTextShadow }}
        className="text-neon-cyan text-center text-4xl font-bold md:text-7xl"
      >
        Welcome in my world
      </motion.span>
    </motion.div>
  )
})

WelcomeInMyWorld.displayName = 'WelcomeInMyWorld'

