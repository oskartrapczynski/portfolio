import type { ComponentType } from 'react'
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

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    glareX.set(((e.clientX - r.left) / r.width) * 100)
    glareY.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <motion.div
      variants={variants}
      onPointerMove={handlePointerMove}
      whileHover={{ scale: 1.04, y: -8 }}
      style={{
        ['--accent' as string]: skill.accent,
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
    >
      <Card className="skill-card group relative h-full overflow-hidden rounded-xl backdrop-blur-sm">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />
        <CardHeader className="flex-row items-center gap-3 space-y-0 pb-4">
          <div className="skill-icon rounded-lg p-3 transition-transform duration-300 group-hover:scale-110">
            <skill.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-150" />
          </div>
          <CardTitle
            className="font-mono text-xl font-bold"
            style={{ color: skill.accent }}
          >
            {skill.category}
          </CardTitle>
        </CardHeader>
        <CardContent>
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
  )
}
