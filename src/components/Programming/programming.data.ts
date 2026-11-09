import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
  MonitorSmartphone,
  Smartphone,
  Server,
  Database,
  Cloud,
  FlaskConical,
  BrainCircuit,
  GraduationCap,
  Languages,
  Award,
  Sparkles,
} from 'lucide-react'
import type { Icon, SkillGroup } from '../shared/types'

export { EXPERIENCES, type Experience } from './experiences.data'
export { SIDE_PROJECTS, type SideProject } from './sideProjects.data'

// Akcent sekcji (ten sam cyjan co karta „Programming" w Hero / skills.ts).
export const ACCENT = '#00ffff'

export type ProfileLink = {
  label: string
  value: string
  href: string
  icon: Icon
}

export const PROFILE = {
  name: 'Oskar Trąpczyński',
  role: 'Fullstack Developer (TypeScript / Python)',
  location: 'Katowice, Poland',
  experience:
    '3 years of commercial experience with 3+ years of freelancing experience',
  summary:
    'Fullstack Developer (TypeScript / Python) with 6 years of combined commercial work, running freelance projects in parallel with full-time software house roles for clients from the UK, US, Sweden and Poland. I designed the E2E test architecture with observability for a Swedish FinTech, built scripts that run biological experiments for a US biotech platform and created a 3D AI virtual assistant for a UK financial advice company. For small businesses I deliver custom CMS platforms, SEO landing pages and a Google Maps route optimizer. I’m also the founder of a real-time multiplayer browser game with WebTransport netcode and WebGPU rendering. Fluent in English, working directly with international clients.',
  links: [
    {
      label: 'Email',
      value: 'oskar.trapczynski@gmail.com',
      href: 'mailto:oskar.trapczynski@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+48 791 015 485',
      href: 'tel:+48791015485',
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: 'oskar-trapczynski',
      href: 'https://linkedin.com/in/oskar-trapczynski',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'oskartrapczynski',
      href: 'https://github.com/oskartrapczynski',
      icon: Github,
    },
  ] satisfies ProfileLink[],
}

export const TECH_STACK: SkillGroup[] = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'Frontend',
    icon: MonitorSmartphone,
    items: [
      'React',
      'Next.js',
      'Astro',
      'shadcn/ui',
      'MUI',
      'Tailwind',
      'TanStack Query',
      'TanStack Router',
      'Zustand',
      'Zod',
      'Styled Components',
      'SCSS',
      'GSAP',
      'Three.js',
      'WebGPU',
      'React Unity WebGL',
      'Formik',
      'Yup',
      'plotly.js',
    ],
  },
  {
    label: 'Mobile & Extensions',
    icon: Smartphone,
    items: ['React Native', 'Expo', 'EAS', 'WXT', 'Manifest V3'],
  },
  {
    label: 'Backend',
    icon: Server,
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'tRPC',
      'GraphQL',
      'Better Auth',
      'FastAPI',
      'SQLAlchemy',
      'Alembic',
      'Temporal',
      'BullMQ',
      'Redis',
      'WebTransport',
      'WebRTC',
    ],
  },
  {
    label: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'AWS DynamoDB', 'Prisma', 'Drizzle ORM'],
  },
  {
    label: 'DevOps & Cloud',
    icon: Cloud,
    items: [
      'GCP Cloud Run',
      'AWS S3',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'Bitbucket CI/CD',
      'GitLab CI/CD',
      'NX',
      'Turborepo',
      'Vite',
    ],
  },
  {
    label: 'Testing',
    icon: FlaskConical,
    items: [
      'Vitest',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'Jest',
      'Pact',
      'Supertest',
      'Storybook',
      'pytest',
    ],
  },
  {
    label: 'AI',
    icon: BrainCircuit,
    items: [
      'GenAI',
      'OpenAI SDK',
      'Anthropic SDK',
      'Azure AI',
      'CereProc',
      'OCRmyPDF',
      'Runway',
      'Tripo3D',
    ],
  },
]

export const EDUCATION = {
  icon: GraduationCap,
  degree: "Engineer's degree — Computer Science",
  school: 'University of Silesia in Katowice',
  year: '2024',
}

export type Language = { label: string; level: string }

export const LANGUAGES = {
  icon: Languages,
  items: [
    { label: '🇵🇱 Polish', level: 'Native' },
    { label: '🇬🇧 English', level: 'Upper Intermediate (B2)' },
  ] satisfies Language[],
}

export const CERTIFICATIONS = {
  icon: Award,
  items: [
    'Anthropic Academy courses',
    'MongoDB Basics',
    'Cisco CCNA & Essentials',
  ],
}

export const SOFT_SKILLS = {
  icon: Sparkles,
  items: [
    'Ownership mindset',
    'Fast problem-solving',
    'Adaptability',
    'Teamwork & collaboration',
    'Determination',
    'Creativity',
  ],
}
