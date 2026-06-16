import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/button'
import { ICONS, SocialIcon } from './SocialIcon'
import { scrollToTarget } from '../lib/scroll'

const socialLinks = [
  {
    icon: ICONS.github,
    href: '#',
    label: 'GitHub',
    accent: '#f5f5f5',
  },
  {
    icon: ICONS.linkedin,
    href: '#',
    label: 'LinkedIn',
    accent: '#0a66c2',
  },
  { icon: ICONS.x, href: '#', label: 'Twitter', accent: '#ffffff' },
  {
    icon: ICONS.instagram,
    href: '#',
    label: 'Instagram',
    accent: '#e4405f',
  },
  {
    icon: ICONS.soundcloud,
    href: '#',
    label: 'SoundCloud',
    accent: '#ff5500',
  },
  {
    icon: ICONS.gmail,
    href: '#',
    label: 'Email',
    accent: '#ea4335',
  },
]

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-neon-cyan font-mono">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-neon-blue mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about tech, music, or
            design? Let's connect and create something amazing together.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ ['--accent' as string]: link.accent }}
                className="social-link rounded-lg p-3 backdrop-blur-sm"
              >
                <SocialIcon icon={link.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-lg font-mono border-gray-700 hover:border-neon-cyan"
              onClick={() => scrollToTarget(0)}
            >
              Back to Top
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative corner elements */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-neon-cyan opacity-30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-neon-cyan opacity-30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-neon-cyan opacity-30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-neon-cyan opacity-30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
      </div>
    </section>
  )
}
