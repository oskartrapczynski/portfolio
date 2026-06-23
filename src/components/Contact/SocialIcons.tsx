import { motion } from 'framer-motion'
import { SocialIcon } from './SocialIcon'
import type { IsInViewType } from './types'
import { socialLinks } from './socialIcons.const'

type SocialIconsProps = {
  activeAccentColor: string
  setIconId: (id: number | null) => void
} & IsInViewType

export const SocialIcons = ({
  activeAccentColor,
  isInView,
  setIconId,
}: SocialIconsProps) => {
  return (
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
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* dokonczyc zmiane hover accent dla sekcji kontakt (jak w hero) */}
          <SocialIcon
            key={link.label}
            icon={link.icon}
            className="w-6 h-6"
            activeAccentColor={activeAccentColor}
          />
        </motion.a>
      ))}
    </motion.div>
  )
}
