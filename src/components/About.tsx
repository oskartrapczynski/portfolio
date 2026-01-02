import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Music, Film, Palette, Box, Disc3 } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      category: 'Development',
      icon: Code2,
      items: [
        'React',
        'Node.js',
        'TypeScript',
        'Python',
        'PostgreSQL',
        'Docker',
      ],
      color: 'text-neon-cyan',
      borderColor: 'border-neon-cyan',
    },
    {
      category: 'Music Production',
      icon: Music,
      items: [
        'Ableton Live',
        'FL Studio',
        'Sound Design',
        'Mixing',
        'Mastering',
      ],
      color: 'text-neon-blue',
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
      color: 'text-neon-blue',
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
      color: 'text-neon-blue',
      borderColor: 'border-neon-blue',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="about"
      className="relative py-32 px-4 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-text font-mono">
            {'<'} ABOUT ME {'>'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A versatile developer who believes in the intersection of technology
            and creativity. When I'm not writing code, you'll find me producing
            beats, mixing tracks, editing videos, or creating visual art.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-black/70 backdrop-blur-sm border ${skill.borderColor} rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gray-900 rounded-lg ${skill.color}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold ${skill.color} font-mono`}>
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-neon-cyan transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 border border-neon-cyan opacity-10 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  )
}
