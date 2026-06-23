import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef, useState } from 'react'
import { DecorativeCorners } from './DecorativeCorners'
import { SocialIcons } from './SocialIcons'
import { BackToTop } from './BackToTop'
import { socialLinks } from './socialIcons.const'

const HEADER_TEXT = 'GET IN TOUCH'
const HEADER_SUBTEXT =
  "Have a project in mind or just want to chat about tech, music, or design? Let's connect and create something amazing together."

export const Contact = () => {
  const [iconId, setIconId] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const activeAccentColor = iconId ? socialLinks[iconId]?.accent : '#00ffff'

  // Pozycja kursora względem sekcji (0..1) — steruje tłem.
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  // Sprężynujemy, żeby blask podążał za kursorem płynnie, z lekkim opóźnieniem.
  const sx = useSpring(mx, { stiffness: 120, damping: 25 })
  const sy = useSpring(my, { stiffness: 120, damping: 25 })

  // Spotlight podążający za kursorem.
  const spotX = useTransform(sx, [0, 1], ['0%', '100%'])
  const spotY = useTransform(sy, [0, 1], ['0%', '100%'])
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, color-mix(in srgb, var(--hero-accent) 12%, transparent), transparent 70%)`

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-4"
      ref={ref}
      onPointerMove={handlePointerMove}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-neon-cyan font-mono">
            {HEADER_TEXT}
          </h2>
          <p
            className={`text-xl text-[var(--hero-accent)] mb-12 max-w-2xl mx-auto`}
          >
            {HEADER_SUBTEXT}
          </p>
          <SocialIcons
            isInView={isInView}
            activeAccentColor={activeAccentColor}
            setIconId={setIconId}
          />
          <BackToTop isInView={isInView} />
        </motion.div>
        <DecorativeCorners isInView={isInView} />
      </div>
    </section>
  )
}
