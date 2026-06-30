import { type ComponentType } from 'react'
import { Code2, Music, Film, Palette, Box, Disc3 } from 'lucide-react'

export type Skill = {
  label: string
  icon: ComponentType<{ className?: string }>
  items: string[]
  accent: string
  scrollLink: boolean
  href: string
}

const programing: Skill = {
  label: 'Programming',
  icon: Code2,
  items: [
    'Front-end',
    'Back-end',
    'Fullstack',
    'GenAI',
    'FinTech',
    'BioTech',
    'WorkTech',
  ],
  accent: '#00ffff',
  scrollLink: false,
  href: '/wip',
}

const djing: Skill = {
  label: 'DJing',
  icon: Disc3,
  items: ['Festivals', 'Clubs', 'Sport & TV events', 'Karaoke', 'Weddings'],
  accent: '#ff2d95',
  scrollLink: false,
  href: '/wip',
}

const musicProduction: Skill = {
  label: 'Music Production',
  icon: Music,
  items: ['FL Studio', 'Sound Design', 'Mixing', 'Mastering'],
  accent: '#a78bfa',
  scrollLink: false,
  href: '/wip',
}

const graphic2d: Skill = {
  label: '2D Graphics',
  icon: Palette,
  items: [
    'Photoshop',
    'Illustrator',
    'Canva',
    'Figma',
    'Logo',
    'Advertisements',
    'UI/UX Design',
  ],
  accent: '#fbbf24',
  scrollLink: false,
  href: '/wip',
}

const graphic3d: Skill = {
  label: '3D Graphics',
  icon: Box,
  items: ['Blender', '3D Modeling', 'Rendering', 'Animation'],
  accent: '#ff8200',
  scrollLink: false,
  href: '/wip',
}

const videoEditing: Skill = {
  label: 'Video Editing',
  icon: Film,
  items: ['Premiere Pro', 'After Effects', 'Music Videos', 'Advertisements'],
  accent: '#00ff41ff',
  scrollLink: false,
  href: '/wip',
}

export const SKILLS: Skill[] = [
  programing,
  djing,
  musicProduction,
  graphic2d,
  graphic3d,
  videoEditing,
]

export const NAV_ITEMS = [
  { label: 'Start', href: '#', scrollLink: true },
  ...SKILLS,
]
