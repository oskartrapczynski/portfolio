import { type ComponentType } from 'react'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  FlaskConical,
  BrainCircuit,
  GraduationCap,
  Languages,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

type Icon = ComponentType<{ className?: string }>

// commercial exp

const biotechProject = {
  role: 'Biotechnology Research Systems',
  domain: 'BioTech',
  flag: '🇺🇸',
  company: 'Brainhub',
  period: 'Jan 2026 — Present',
  current: true,
  summary:
    'Developing full-stack features for a biotechnology platform coordinating complex biological processes. Focusing on integration of research management panels, real-time communication with specialized hardware, and optimization of scientific workflows.',
  highlights: [
    'Developing and maintaining full-stack features within an existing modular biotechnology platform',
    'Building and enhancing complex research management dashboards with focus on usability and workflows',
    'Integrating and maintaining APIs and handling data flows across systems',
    'Working with PostgreSQL and DynamoDB for efficient data storage and access',
    'Implementing custom logic for generating scripts used in communication with specialized hardware',
    'Writing and maintaining automated tests to ensure reliability and prevent regressions',
    'Collaborating with biologists and researchers to deliver end-to-end features',
  ],
  stack: [
    'JavaScript',
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'GraphQL',
    'AWS DynamoDB',
    'AWS S3',
    'TanStack Query',
    'TanStack Router',
    'FastAPI',
    'SQLAlchemy',
    'Alembic',
    'Redis',
    'pytest',
    'plotly.js',
    'Vitest',
    'Vite',
  ],
}

const fintechProject = {
  role: 'Finance Advice Systems & Calculators',
  domain: 'FinTech',
  flag: '🇬🇧',
  company: 'Brainhub',
  period: 'Jan 2025 — Dec 2025',
  summary:
    'Developing fullstack features for a financial web application for clients, advisors and stakeholders. Focusing on real-time data visualization, REST and GraphQL communication, integration with external APIs, and accessibility (WCAG, a11y).',
  highlights: [
    'Building and maintaining reusable UI components in React with TypeScript and MUI',
    'Implementing backend services and GraphQL APIs with Node.js and Express',
    'Integrating internal and external services and data synchronization',
    'Writing end-to-end tests with Cypress for reliability and regression control',
    'Managing CI/CD pipelines in Bitbucket and optimizing build times using NX + Vite',
    'Collaborating with designers and analysts to improve UX and accessibility',
  ],
  stack: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'GraphQL',
    'MongoDB',
    'MUI',
    'Cypress',
    'Yup',
    'Formik',
    'Styled Components',
    'SCSS',
    'Bitbucket CI/CD',
    'NX',
    'Vite',
  ],
}

const virtualAssistantProject = {
  role: 'Virtual Assistant Project',
  domain: 'FinTech',
  flag: '🇬🇧',
  company: 'Brainhub',
  period: 'Sep 2024 — Dec 2024',
  summary:
    'Working on a Virtual Assistant widget leveraging 3D models and AI-powered Text-to-Speech and Speech-to-Text. The work involved integrating advanced AI, WebGL rendering and optimizing the assistant for seamless user experiences.',
  highlights: [
    'Integrated AI-driven speech and rendering technologies (OpenAI, AzureAI, CereProc)',
    'Created interactive 3D experiences with Three.js and React Unity WebGL',
    'Optimised frontend rendering and API performance using Vite and NX',
    'Ensured quality through automated testing (Cypress, Storybook)',
    'Styled UI components using Styled Components, CSS Modules, SCSS, and GSAP',
    'Built and maintained frontend components with React and backend services with Node',
  ],
  stack: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Three.js',
    'React Unity WebGL',
    'OpenAI',
    'AzureAI',
    'CereProc',
    'Cypress',
    'Storybook',
    'Styled Components',
    'GSAP',
    'Bitbucket CI/CD',
    'NX',
    'Vite',
  ],
}

const trackingAdminProject = {
  role: 'Tracking Admin Control Panel',
  domain: 'WorkTech',
  flag: '🇵🇱',
  company: 'Brainhub',
  period: 'Jul 2024 — Sep 2024',
  summary:
    'Developed and improved the admin control panel UI for an internal project — implementing new frontend components, testing APIs, enhancing backend features and fixing bugs to modernize and optimize the system.',
  highlights: [
    'Implemented modern UI components and improved UX with React and Styled Components',
    'Enhanced backend features and database models using NestJS and Prisma',
    'Automated testing pipelines using Jest, Playwright, and Pact',
    'Containerized backend with Docker and deployed via GitLab CI/CD',
    'Improved performance through query optimization and caching',
  ],
  stack: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vite',
    'Styled Components',
    'NestJS',
    'Jest',
    'Playwright',
    'Pact',
    'Supertest',
    'Turborepo',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'GitLab',
  ],
}

const softwareDevelopmentProgram = {
  role: 'Software Development Program',
  flag: '🇵🇱',
  company: 'Brainhub',
  period: 'Apr 2024 — Jul 2024',
  summary:
    'Intensive training covering modeling, analysis, design, architecture selection, coding, testing, refactoring, and TDD — alongside best software development practices, teamwork, and creative thinking techniques.',
  highlights: [
    'Learning and applying principles of software modeling, analysis, and design',
    'Gaining experience in selecting architectures for scalable applications',
    'Practicing writing clean, maintainable code following best practices',
    'Developing and testing software using TDD and refactoring techniques',
    'Collaborating with a team on simulated real-world projects',
    'Enhancing communication and applied creative thinking for problem-solving',
  ],
  stack: [
    'Software Modeling',
    'TDD',
    'Refactoring',
    'Teamwork',
    'Creative Thinking',
  ],
}

// side exp

const wykominujProject = {
  name: 'Wykominuj',
  tagline: 'Local business site',
  period: '2025 — Present',
  summary:
    'Marketing and service site for a chimney-sweeping company in the Katowice region, built solo and running in production at wykominuj.pl.',
  highlights: [
    'Built a static Astro site with React islands hydrating galleries and accordions only on view',
    'Implemented local SEO with ChimneySweep and BreadcrumbList JSON-LD, canonical URLs and a generated sitemap',
    'Designed a Sharp build pipeline emitting WebP thumbnail and full-size variants for 60 gallery photos',
  ],
  stack: ['TypeScript', 'Astro', 'React', 'Tailwind', 'Radix UI', 'Sharp'],
  links: [{ label: 'Live', href: 'https://wykominuj.pl', icon: ExternalLink }],
}

const youtubeConverterProject: SideProject = {
  name: 'Youtube converter/downloader',
  tagline: 'Desktop YouTube downloader',
  period: '2024 — Present',
  summary:
    'Cross-platform desktop app for downloading YouTube audio, video, and playlists, built solo. Wraps a bundled yt-dlp toolchain behind a React UI with format, quality, and resolution presets.',
  highlights: [
    'Built an Electron main/renderer split with typed IPC handlers exposed through a preload context bridge.',
    'Implemented a build-time fetcher bundling yt-dlp, Deno, and ffmpeg, plus runtime yt-dlp auto-updates.',
    'Designed format presets for MP3/WAV/FLAC audio and MP4/AVI/MOV video from 240p to 4K.',
  ],
  stack: [
    'TypeScript',
    'Electron',
    'React',
    'Chakra UI',
    'electron-vite',
    'yt-dlp',
    'electron-builder',
  ],
  links: [
    {
      label: 'Code',
      href: 'https://github.com/oskartrapczynski/yt-downloader-electron',
      icon: Github,
    },
  ],
}

const ganttProject = {
  name: 'Gantt Project',
  tagline: 'Construction Gantt planner',
  period: '2026',
  summary:
    'Full-stack Gantt chart app for planning construction projects, with hierarchical task trees, dependency types and cost tracking. Runs in production on Railway with a separate staging  environment.',
  highlights: [
    'Built a paginated PDF export engine covering A4–A1 formats with cross-page dependency arrows',
    'Implemented JWT auth plus project snapshot versioning with debounced API sync and offline fallback',
    'Designed a cost model with auto-summed summary tasks and monthly cost charts in Recharts',
  ],
  stack: [
    'TypeScript',
    'React',
    'Vite',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Docker',
  ],
  links: [],
}

const time2partyProject = {
  name: 'Time2Party',
  tagline: 'Event ticketing platform',
  period: '2023 — 2024',
  summary:
    'Event ticketing web app where organizers publish parties and issue QR tickets that staff scan at the door. Built solo, with a role-gated control panel for events, tickets and media.',
  highlights: [
    'Built a QR ticket pipeline that generates unique codes, composites them onto artwork and exports a ZIP',
    'Implemented a browser QR scanner that validates tickets against the database and flags reused ones',
    'Designed role-based routing for admin, moderator and user views of the control panel',
  ],
  stack: [
    'TypeScript',
    'Next.js',
    'React',
    'Material UI',
    'Redux Toolkit',
    'html5-qrcode',
    'Firebase',
  ],
}

const noGhostingProject = {
  name: 'No Ghosting',
  tagline: 'Recruiting SLA engine',
  period: '2026',
  summary:
    'Open-source platform for recruiting teams that tracks candidate wait times and nudges recruiters before they are ghosted. Built solo as a self-hosted, multi-tenant monorepo.',
  highlights: [
    'Built a NestJS and BullMQ follow-up engine to scan overdue candidates and enqueue recruiter nudges.',
    'Designed a plugin architecture for ATS integrations and webhooks that reset timers on replies.',
    'Implemented a multi-tenant Prisma schema with query scoping via a header-based tenant guard.',
  ],
  stack: ['TypeScript', 'NestJS', 'React', 'Prisma', 'PostgreSQL', 'Docker'],
  links: [
    {
      label: 'Code',
      href: 'https://github.com/oskartrapczynski/no-ghosting',
      icon: Github,
    },
  ],
}

const musicVideoAIGeneratorProject = {
  name: 'Music Video AI Generator',
  tagline: 'AI video generator',
  period: '2026',
  summary:
    "Web app that turns a list of scene prompts into AI-generated music-video clips through Runway's text-to-video API. Built solo as a React client and Express backend run from a shared root.",
  highlights: [
    'Built a scene-based editor in React that estimates generation times and costs before API calls.',
    "Integrated Runway's API behind an Express service to run batches and poll task status in the background.",
    'Implemented session-based progress tracking and per-scene status updates with client polling.',
  ],
  stack: [
    'TypeScript',
    'React',
    'Express',
    'Node.js',
    'Tailwind',
    'Runway API',
  ],
  links: [
    {
      label: 'Code',
      href: 'https://github.com/oskartrapczynski/video-ai-gen',
      icon: Github,
    },
  ],
}

const mebelprojektProject = {
  name: 'Mebelprojekt',
  tagline: 'Furniture studio site',
  period: '2023 — Present',
  summary:
    'Marketing site for MEBELPROJEKT AG, a Polish custom furniture workshop operating since 1996. Built and maintained solo, running in production on the company domain.',
  highlights: [
    'Built a scroll-scrubbed hero sequencing 183 WebP frames, with a reduced-motion static fallback.',
    'Implemented a gallery of 143 project photos across six categories via Vite glob imports.',
    'Automated deploys with a branch-guarded FTP pipeline that retries failed uploads.',
  ],
  stack: [
    'TypeScript',
    'React',
    'Vite',
    'Tailwind',
    'Framer Motion',
    'shadcn/ui',
    'Lenis',
  ],
  links: [
    { label: 'Live', href: 'https://mebelprojekt.com.pl', icon: ExternalLink },
  ],
}

const zapolankaProject = {
  name: 'Zapolanka',
  tagline: 'Rental marketing site',
  period: '2026',
  summary:
    'Marketing site for Zapolanka, a mountain house rental in Ujsoły (Beskid Żywiecki), covering the offer, gallery, pricing and reservations. Built solo and running in production.',
  highlights: [
    'Built a static Astro site with React islands, seasonal hero images and a gallery lightbox',
    'Implemented a sharp and WebP image pipeline that strips original JPG/PNG assets at build time',
    'Added JSON-LD, sitemap and canonical SEO plus automated FTP deploys guarded by a branch check',
  ],
  stack: [
    'TypeScript',
    'Astro',
    'React',
    'Tailwind',
    'Radix UI',
    'Framer Motion',
    'sharp',
  ],
  links: [
    { label: 'Live', href: 'https://zapolanka.com.pl', icon: ExternalLink },
  ],
}

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
  role: 'Fullstack JavaScript Developer',
  location: 'Katowice, Poland',
  experience: '~3 years of experience',
  summary:
    'Fullstack JavaScript Developer with 3 years of experience building modern web applications using React, Next.js, Node.js, and TypeScript. Skilled in designing scalable architectures, implementing efficient CI/CD pipelines, and delivering optimized user experiences across FinTech and e-commerce domains. Developed professional best practices and real business context at Brainhub software house. Passionate about clean code, test-driven development, and continuous learning in the field of AI-powered web technologies. Always building something after hours — from a live e-commerce platform to custom tools and landing pages, driven by genuine passion for the craft.',
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

export type SkillGroup = {
  label: string
  icon: Icon
  items: string[]
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
      'MUI',
      'TanStack Query',
      'TanStack Router',
      'Styled Components',
      'SCSS',
      'GSAP',
      'Three.js',
      'React Unity WebGL',
      'Formik',
      'Yup',
      'plotly.js',
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'FastAPI',
      'GraphQL',
      'SQLAlchemy',
      'Alembic',
      'Redis',
    ],
  },
  {
    label: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'AWS DynamoDB', 'Prisma'],
  },
  {
    label: 'DevOps & Cloud',
    icon: Cloud,
    items: [
      'AWS S3',
      'Docker',
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
    items: ['GenAI', 'OpenAI', 'AzureAI', 'CereProc'],
  },
]

// Pola wspólne dla wpisów doświadczenia i side-projectów — reużywane niżej.
export type ProjectBase = {
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Experience = ProjectBase & {
  role: string
  domain?: string
  flag?: string
  company: string
  current?: boolean
}

export const EXPERIENCES: Experience[] = [
  biotechProject,
  fintechProject,
  virtualAssistantProject,
  trackingAdminProject,
  softwareDevelopmentProgram,
]

export type SideProjectLink = {
  label: string
  href: string
  icon: Icon
}

export type SideProject = ProjectBase & {
  name: string
  tagline?: string
  links?: SideProjectLink[]
}

// Zamockowane przykłady — uzupełnij / podmień własnymi projektami.
export const SIDE_PROJECTS: SideProject[] = [
  wykominujProject,
  zapolankaProject,
  mebelprojektProject,
  musicVideoAIGeneratorProject,
  ganttProject,
  youtubeConverterProject,
  noGhostingProject,
  time2partyProject,
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
    'Anthropic Academy',
    'AWS Certified Developer Associate',
    'MongoDB Basics',
    'CISCO CCNA & Essentials',
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
