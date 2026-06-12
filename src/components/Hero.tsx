import { useRef } from 'react'
import { easeOut, motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  })

  const brandOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])
   const brandY = useTransform(scrollYProgress, [0.15, 0.6], [-450, 0], {
    ease: easeOut
  })

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
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          style={{ opacity: brandOpacity, y: brandY }}
          className="relative z-20 mb-6"
        >
          <span className="neon-text text-center text-4xl font-bold md:text-7xl">
            Welcome in my world
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl text-neon-cyan font-mono mb-4">
            {'<'} World of art and creativity {'>'}
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences through code, sound, and visuals
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            // variant="neon"
            size="lg"
            className="text-lg font-mono"
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg font-mono border-gray-700 hover:border-neon-cyan"
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            About Me
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
