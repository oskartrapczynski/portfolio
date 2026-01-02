import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-gray-400 font-mono text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Oskar T.T. Made with
            <Heart
              className="w-4 h-4 text-neon-cyan inline"
              fill="currentColor"
            />
            and caffeine
          </motion.p>

          <motion.div
            className="flex gap-6 text-gray-400 text-sm font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Source Code
            </a>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  )
}
