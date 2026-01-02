import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Instagram, Music } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-neon-cyan' },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-neon-blue',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-neon-cyan',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-neon-blue',
    },
    {
      icon: Music,
      href: '#',
      label: 'SoundCloud',
      color: 'hover:text-neon-cyan',
    },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-neon-blue' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      {/* Scanline effect */}
      <div className="scanline absolute inset-0"></div>

      {/* Floating geometric shapes */}
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

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 neon-text">
            Oskar T.T
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl text-neon-cyan font-mono mb-4">
            {'<'} Fullstack Developer {'>'}
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences through code, sound, and visuals
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-300 ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
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

        {/* Scroll indicator */}
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
