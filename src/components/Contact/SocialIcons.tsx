import { motion } from 'framer-motion'
import { SocialIcon } from './SocialIcon'
import type { IsInViewType } from './types'
import { socialLinks } from './socialIcons.const'

type SocialIconsProps = {
  setIconId: (id: number | null) => void
} & IsInViewType

export const SocialIcons = ({ isInView, setIconId }: SocialIconsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="social-links flex flex-wrap justify-center gap-4 mb-12"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          style={{ ['--accent' as string]: link.accent }}
          className="social-link group rounded-lg p-3 backdrop-blur-sm"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIconId(index)}
          onMouseLeave={() => setIconId(null)}
        >
          <SocialIcon
            icon={link.icon}
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-150"
          />
        </motion.a>
      ))}
    </motion.div>
  )
}
