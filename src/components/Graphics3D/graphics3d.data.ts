import {
  Boxes,
  Clapperboard,
  Youtube,
  Music4,
  Code2,
  Wand2,
  ExternalLink,
} from 'lucide-react'
import type { ProjectBase, ProjectLink, SkillGroup } from '../shared/types'

/**
 * DRAFT TREŚCI — opisy prac napisane na podstawie tego, co dało się odczytać
 * z YouTube (tytuł, długość, data publikacji, opis filmu). Highlighty opisują
 * typowy workflow, nie Twój konkretny — przejrzyj i popraw przed publikacją.
 */

// Akcent sekcji (ten sam pomarańcz co karta „3D Graphics" w Hero / skills.ts).
export const ACCENT = '#ff8200'

export const PROFILE = {
  title: '3D Graphics',
  role: 'Blender · Three.js · Unity',
  // TODO(weryfikacja): od kiedy robisz 3D + czy chcesz inny podtytuł.
  since: 'Since 2021',
  summary:
    'Second craft next to code — 3D as a way to give music and ideas a picture. Modelling, lighting and animation in Blender, plus real-time work in Three.js and Unity that ends up back in the browser. Below: a short animation piece and a full-length visualiser cut to one of my remixes.',
}

export type VideoWork = ProjectBase & {
  title: string
  kind: string
  youtubeId: string
  duration: string
  // Opcjonalny własny kadr (np. /posters/xxx.webp). Gdy pusty, poster jest
  // rysowany gradientem w akcencie sekcji — patrz VideoPoster.
  poster?: string
  links?: ProjectLink[]
}

const animationReel: VideoWork = {
  // Na YouTube film nazywa się „Grafika 3D" — tu dałem tytuł czytelny dla
  // portfolio. Podmień na docelową nazwę pracy.
  title: '3D Animation Reel',
  kind: '3D Animation',
  youtubeId: '8lmaupLShKI',
  duration: '0:57',
  period: '2021',
  summary:
    'A short self-directed 3D animation — an exercise in modelling, lighting and camera work, built and rendered in Blender and cut down to under a minute.',
  highlights: [
    'Modelled and shaded the scene in Blender, from blockout to final materials',
    'Set up lighting and camera moves, then rendered the shot sequence to frames',
    'Assembled and graded the final 57-second cut in post',
  ],
  stack: ['Blender', '3D Modeling', 'Lighting', 'Rendering', 'Animation'],
  links: [
    {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=8lmaupLShKI',
      icon: Youtube,
    },
  ],
}

const miracleVisualizer: VideoWork = {
  title: 'Miracle (Oskar T.T Remix) — 3D Visualizer',
  kind: 'Music Visualizer',
  youtubeId: 'xxYBeY-8vhg',
  duration: '3:11',
  period: '2023',
  summary:
    'A full-length 3D visualiser for my remix of Calvin Harris & Ellie Goulding — “Miracle”. The animation runs the whole track and is cut to its structure, from the intro through the drops. Both the remix and the video are mine.',
  highlights: [
    'Built the 3D scene in Blender and timed camera moves to the arrangement of the track',
    'Landed visual accents on the drops and breakdowns so the picture reads as part of the mix',
    'Produced and mixed the remix itself, then rendered and mastered the video for YouTube',
  ],
  stack: ['Blender', 'Motion Design', 'Rendering', 'FL Studio', 'Premiere Pro'],
  links: [
    {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=xxYBeY-8vhg',
      icon: Youtube,
    },
    {
      label: 'SoundCloud',
      href: 'https://soundcloud.com/oskarttofficial',
      icon: Music4,
    },
    {
      label: 'Original song',
      href: 'https://www.youtube.com/watch?v=961v0E3b01g',
      icon: ExternalLink,
    },
  ],
}

export const WORKS: VideoWork[] = [miracleVisualizer, animationReel]

export const TOOLSET: SkillGroup[] = [
  {
    label: 'DCC & Engines',
    icon: Boxes,
    items: ['Blender', 'Unity', 'Three.js'],
  },
  {
    label: 'Craft',
    icon: Wand2,
    items: [
      '3D Modeling',
      'Lighting',
      'Shading',
      'Rendering',
      'Animation',
      'Motion Design',
    ],
  },
  {
    label: 'Real-time & Web',
    icon: Code2,
    items: ['Three.js', 'React Unity WebGL', 'WebGL'],
  },
  {
    label: 'Post & Delivery',
    icon: Clapperboard,
    items: ['Premiere Pro', 'After Effects', 'Video Editing'],
  },
]

export type CrossLink = {
  label: string
  title: string
  description: string
  href: string
  icon: ProjectLink['icon']
}

// Mostki do pozostałych podstron — 3D u Ciebie nie kończy się na renderach.
export const CROSS_LINKS: CrossLink[] = [
  {
    label: '3D in the browser',
    title: 'Programming',
    description:
      'Three.js and React Unity WebGL shipped commercially — a virtual assistant widget with a real-time 3D model driven by AI speech.',
    href: '/programming',
    icon: Code2,
  },
  {
    label: 'The sound behind the visuals',
    title: 'Music Production',
    description:
      'The remix under the visualiser above comes from the same desk — production, mixing and mastering in FL Studio.',
    href: '/music-production',
    icon: Music4,
  },
]
