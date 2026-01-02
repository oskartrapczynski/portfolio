import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/button'
import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-text font-mono">
            {'<'} GET IN TOUCH {'>'}
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about tech, music, or
            design? Let's connect and create something amazing together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-neon-cyan transition-all duration-300 neon-box">
              <Mail className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                Email
              </h3>
              <p className="text-gray-400">your.email@example.com</p>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-neon-cyan transition-all duration-300 neon-box">
              <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                Location
              </h3>
              <p className="text-gray-400">Your City, Country</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              // variant="neon"
              size="lg"
              className="text-lg font-mono"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Send className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg font-mono border-gray-700 hover:border-neon-cyan"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
