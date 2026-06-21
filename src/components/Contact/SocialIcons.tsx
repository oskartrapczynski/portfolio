import { motion } from 'framer-motion'
import { ICONS, SocialIcon } from './SocialIcon'
import type { IsInViewType } from './types'

const socialLinks = [
  {
    icon: ICONS.linkedin,
    href: 'https://www.linkedin.com/in/oskar-trapczynski/',
    label: 'LinkedIn',
    accent: '#0a66c2',
  },
  {
    icon: ICONS.github,
    href: 'https://github.com/oskartrapczynski',
    label: 'GitHub',
    accent: '#f5f5f5',
  },
  {
    icon: ICONS.fb,
    href: 'https://www.facebook.com/OskarT.TOfficial',
    label: 'Twitter',
    accent: '#ffffff',
  },
  {
    icon: ICONS.instagram,
    href: 'https://www.instagram.com/oskarttofficial/',
    label: 'Instagram',
    accent: '#e4405f',
  },
  {
    icon: ICONS.soundcloud,
    href: 'https://soundcloud.com/oskarttofficial',
    label: 'SoundCloud',
    accent: '#ff5500',
  },
  {
    icon: ICONS.gmail,
    href: 'mailto:oskar.trapczynski@gmail.com',
    label: 'Email',
    accent: '#ea4335',
  },
]

type SocialIconsProps = {} & IsInViewType

export const SocialIcons = ({ isInView }: SocialIconsProps) => {
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
          <SocialIcon icon={link.icon} className="w-6 h-6" />
        </motion.a>
      ))}
    </motion.div>
  )
}
