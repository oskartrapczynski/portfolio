import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.p
            className="font-mono text-sm text-[var(--hero-accent)] transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Oskar T.T
          </motion.p>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-[var(--hero-accent)] to-transparent transition-colors duration-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  )
}
