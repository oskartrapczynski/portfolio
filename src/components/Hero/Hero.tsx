import { useRef } from 'react'
import {
  easeOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Code2, Music, Film, Palette, Box, Disc3 } from 'lucide-react'
import { WelcomeInMyWorld } from './WelcomeInMyWorld'
import { SkillCard } from './SkillCard'

const skills = [
  {
    category: 'Development',
    icon: Code2,
    items: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    accent: '#00ffff',
  },
  {
    category: 'Music Production',
    icon: Music,
    items: ['Ableton Live', 'FL Studio', 'Sound Design', 'Mixing', 'Mastering'],
    accent: '#a78bfa',
  },
  {
    category: 'DJing',
    icon: Disc3,
    items: [
      'Traktor',
      'Serato',
      'Live Performance',
      'Track Selection',
      'Mixing',
    ],
    accent: '#ff2d95',
  },
  {
    category: 'Video Editing',
    icon: Film,
    items: [
      'Premiere Pro',
      'After Effects',
      'DaVinci Resolve',
      'Motion Graphics',
    ],
    accent: '#38bdf8',
  },
  {
    category: '2D Graphics',
    icon: Palette,
    items: ['Photoshop', 'Illustrator', 'Figma', 'UI/UX Design'],
    accent: '#fbbf24',
  },
  {
    category: '3D Graphics',
    icon: Box,
    items: ['Blender', '3D Modeling', 'Rendering', 'Animation'],
    accent: '#34d399',
  },
]

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
}

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // Pozycja kursora względem sekcji (0..1) — steruje tłem.
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  // Sprężynujemy, żeby blask podążał za kursorem płynnie, z lekkim opóźnieniem.
  const sx = useSpring(mx, { stiffness: 120, damping: 25 })
  const sy = useSpring(my, { stiffness: 120, damping: 25 })

  // Spotlight podążający za kursorem.
  const spotX = useTransform(sx, [0, 1], ['0%', '100%'])
  const spotY = useTransform(sy, [0, 1], ['0%', '100%'])
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, rgba(0, 255, 255, 0.12), transparent 70%)`

  // Lekki parallax siatki w przeciwną stronę niż ruch kursora.
  const gridX = useTransform(sx, [0, 1], [20, -20])
  const gridY = useTransform(sy, [0, 1], [20, -20])
  const gridPos = useMotionTemplate`calc(50% + ${gridX}px) calc(50% + ${gridY}px)`

  // Pozycja kursora znormalizowana względem ŚRODKA siatki kart (-1..1).
  // Wspólna dla wszystkich kart — cała siatka przechyla się jak jedna płaszczyzna.
  const gridRef = useRef<HTMLDivElement>(null)
  const tiltX = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 })
  const tiltY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 })
  // 0 zanim kursor wejdzie w sekcję — karty startują płasko.
  const engaged = useMotionValue(0)

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)

    const grid = gridRef.current
    if (grid) {
      const g = grid.getBoundingClientRect()
      tiltX.set(clamp((e.clientX - (g.left + g.width / 2)) / (g.width / 2), -1, 1))
      tiltY.set(clamp((e.clientY - (g.top + g.height / 2)) / (g.height / 2), -1, 1))
      engaged.set(1)
    }
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex items-center justify-center overflow-x-clip px-4"
    >
      <motion.div
        className="absolute inset-0 grid-bg opacity-20"
        style={{ backgroundPosition: gridPos }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />
      <div className="scanline absolute inset-0"></div>
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-neon-cyan opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 border-2 border-neon-blue opacity-20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative z-10 text-center max-w-7xl mx-auto py-32">
        <WelcomeInMyWorld ref={sectionRef} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl text-neon-blue font-mono mb-4">
            {'< World of art and creativity >'}
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences through code, sound, and visuals
          </p>
        </motion.div>
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              skill={skill}
              variants={itemVariants}
              tiltX={tiltX}
              tiltY={tiltY}
              engaged={engaged}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
