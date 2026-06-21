import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.p
            className="font-mono text-sm text-neon-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Oskar T.T
          </motion.p>
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
