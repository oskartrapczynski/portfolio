import {
  siGithub,
  siInstagram,
  siSoundcloud,
  siGmail,
  siFacebook,
  siYoutube,
  siSpotify,
} from 'simple-icons'
import type { IconType } from './types'

const siLinkedin = {
  title: 'LinkedIn',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
}

export const ICONS = {
  linkedin: siLinkedin,
  github: siGithub,
  fb: siFacebook,
  instagram: siInstagram,
  soundcloud: siSoundcloud,
  gmail: siGmail,
  yotube: siYoutube,
  spotify: siSpotify,
} as const

export const socialLinks: {
  icon: IconType
  href: string
  label: string
  accent: string
}[] = [
  {
    icon: ICONS.linkedin,
    href: 'https://www.linkedin.com/in/oskar-trapczynski/',
    label: 'LinkedIn',
    accent: '#0A66C2',
  },
  {
    icon: ICONS.github,
    href: 'https://github.com/oskartrapczynski',
    label: 'GitHub',
    accent: '#FFF',
  },
  {
    icon: ICONS.yotube,
    href: 'https://www.youtube.com/@OskarTT',
    label: 'Youtube',
    accent: '#FF0000',
  },
  {
    icon: ICONS.spotify,
    href: 'https://open.spotify.com/artist/2OVetJ63mx7fvwt2xKPfYY',
    label: 'Spotify',
    accent: '#1DB954',
  },
  {
    icon: ICONS.instagram,
    href: 'https://www.instagram.com/oskarttofficial/',
    label: 'Instagram',
    accent: '#E1306C',
  },
  {
    icon: ICONS.fb,
    href: 'https://www.facebook.com/OskarT.TOfficial',
    label: 'Facebook',
    accent: '#1877F2',
  },
  {
    icon: ICONS.soundcloud,
    href: 'https://soundcloud.com/oskarttofficial',
    label: 'SoundCloud',
    accent: '#FF5500',
  },
  {
    icon: ICONS.gmail,
    href: 'mailto:oskar.trapczynski@gmail.com',
    label: 'Gmail',
    accent: '#EA4335',
  },
]
