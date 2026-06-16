import { useRef } from 'react'
import {
  easeOut,
  motion,
} from 'framer-motion'
import { Code2, Music, Film, Palette, Box, Disc3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { WelcomeInMyWorld } from './WelcomeInMyWorld'

const skills = [
  {
    category: 'Development',
    icon: Code2,
    items: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
  },
  {
    category: 'Music Production',
    icon: Music,
    items: ['Ableton Live', 'FL Studio', 'Sound Design', 'Mixing', 'Mastering'],
    color: 'text-neon-cyan',
    borderColor: 'border-neon-blue',
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
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
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
    color: 'text-neon-cyan',
    borderColor: 'border-neon-blue',
  },
  {
    category: '2D Graphics',
    icon: Palette,
    items: ['Photoshop', 'Illustrator', 'Figma', 'UI/UX Design'],
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
  },
  {
    category: '3D Graphics',
    icon: Box,
    items: ['Blender', '3D Modeling', 'Rendering', 'Animation'],
    color: 'text-neon-cyan',
    borderColor: 'border-neon-blue',
  },
]

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



  // Neon scrubowany scrollem: w miarę pojawiania się napisu blask
  // miga kilka razy (0/1), a potem zostaje "włączony" na stałe.
  // Scroll w górę odtwarza migotanie wstecz — tak jak klatki filmu.



  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-clip px-4"
    >
      <div className="absolute inset-0 grid-bg opacity-20"></div>
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className={`group h-full bg-black/70 backdrop-blur-sm border ${skill.borderColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]`}
              >
                <CardHeader className="flex-row items-center gap-3 space-y-0 pb-4">
                  <div
                    className={`p-3 bg-gray-900 rounded-lg ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <CardTitle
                    className={`text-xl font-bold font-mono ${skill.color}`}
                  >
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-neon-cyan transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
