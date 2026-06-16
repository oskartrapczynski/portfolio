import { useEffect, useState, type ComponentType } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type Skill = {
  category: string
  icon: ComponentType<{ className?: string }>
  items: string[]
  accent: string
}

type SkillCardProps = {
  skill: Skill
  variants: Variants
  // Pozycja kursora znormalizowana względem środka siatki (-1..1), wspólna dla kart.
  tiltX: MotionValue<number>
  tiltY: MotionValue<number>
  // 0 zanim kursor wejdzie w sekcję, 1 gdy się rusza — gasi tilt na starcie.
  engaged: MotionValue<number>
  // Na mobile: czy ta karta jest na środku ekranu (zastępuje hover myszką).
  active: boolean
  // Zgłasza hover myszką do rodzica (kolor sekcji podąża za najechaną kartą).
  onHoverChange: (hovered: boolean) => void
}

// Maksymalny kąt nachylenia karty (w stopniach) przy skrajnej pozycji kursora.
const MAX_TILT = 10

const spring = { stiffness: 150, damping: 18, mass: 0.6 }

export const SkillCard = ({
  skill,
  variants,
  tiltX,
  tiltY,
  engaged,
  active,
  onHoverChange,
}: SkillCardProps) => {
  // Wszystkie karty przechylają się tak samo, w stronę kursora względem siatki.
  const rotateX = useSpring(
    useTransform([tiltY, engaged], (input) => {
      const [ny, en] = input as number[]
      return !en ? 0 : -ny * MAX_TILT
    }),
    spring
  )

  const rotateY = useSpring(
    useTransform([tiltX, engaged], (input) => {
      const [nx, en] = input as number[]
      return !en ? 0 : nx * MAX_TILT
    }),
    spring
  )

  // Lokalny blask podążający za kursorem w środku najechanej karty.
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, color-mix(in srgb, ${skill.accent} 22%, transparent), transparent 55%)`

  // Czy urządzenie jest dotykowe — wtedy hover myszką jest wyłączony,
  // a podświetlenie steruje scroll (prop `active`). Desktop: odwrotnie.
  const [isCoarse, setIsCoarse] = useState(false)
  useEffect(() => {
    setIsCoarse(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isCoarse) return
    const r = e.currentTarget.getBoundingClientRect()
    glareX.set(((e.clientX - r.left) / r.width) * 100)
    glareY.set(((e.clientY - r.top) / r.height) * 100)
  }

  // Hover myszką (tylko desktop).
  const [hovered, setHovered] = useState(false)
  // Na mobile podświetla scroll (active), na desktopie kursor (hovered).
  const isActive = isCoarse ? active : hovered

  return (
    <motion.div
      variants={variants}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        if (isCoarse) return
        setHovered(true)
        onHoverChange(true)
      }}
      onPointerLeave={() => {
        if (isCoarse) return
        setHovered(false)
        onHoverChange(false)
      }}
      style={{
        ['--accent' as string]: skill.accent,
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={isActive ? { scale: 1.04, y: -8 } : { scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Card
          data-active={isActive}
          className="skill-card group relative h-full select-none overflow-hidden rounded-xl backdrop-blur-sm"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-data-[active=true]:opacity-100"
            style={{ background: glare }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            style={{ color: skill.accent, transformOrigin: 'center' }}
            animate={isActive ? { scale: 1, opacity: 0.18 } : { scale: 10, opacity: 0.08 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
          >
            <skill.icon className="h-24 w-24" />
          </motion.div>
          <CardHeader className="relative z-10 flex-row items-center gap-3 space-y-0 pb-4">
            <div className="skill-icon rounded-lg p-3 transition-transform duration-300 group-hover:scale-110 group-data-[active=true]:scale-110">
              <skill.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-150 group-data-[active=true]:scale-150" />
            </div>
            <CardTitle
              className="font-mono text-xl font-bold"
              style={{ color: skill.accent }}
            >
              {skill.category}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="skill-tag rounded-full px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
