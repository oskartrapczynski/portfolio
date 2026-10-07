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
  ExternalLink,
} from 'lucide-react'
import type {
  Icon,
  ProjectBase,
  ProjectLink,
  SkillGroup,
} from '../shared/types'

// commercial exp

const fintechSaasProject: Experience = {
  role: 'FinTech SaaS Platform',
  domain: 'FinTech',
  flag: '🇸🇪',
  company: 'The Codest',
  period: 'Aug 2026 — Present',
  current: true,
  summary:
    'Developing a B2B FinTech SaaS platform spanning a web application, a cross-platform mobile app and a browser extension within a TypeScript/Python monorepo. Focusing on AI-powered document processing, durable background workflows and integrations with financial and third-party services.',
  highlights: [
    'Building the web app with Next.js 16, React 19, shadcn/ui, TanStack Query, Zustand and Zod',
    'Developing a cross-platform mobile app with Expo and React Native (including native iOS/Android modules and EAS releases) and a Manifest V3 browser extension with WXT',
    'Designing end-to-end type-safe APIs with tRPC and implementing authentication with Better Auth',
    'Implementing AI-powered document processing using OCRmyPDF together with the OpenAI and Anthropic SDKs',
    'Orchestrating long-running asynchronous processes with Temporal (Python and TypeScript workers)',
    'Integrating card issuing, accounting systems, email inboxes, subscription payments, push notifications and monitoring',
    'Managing infrastructure on GCP Cloud Run with Terraform, Docker and GitHub Actions CI/CD',
    'Writing automated tests with Playwright, Vitest and pytest',
  ],
  stack: [
    'TypeScript',
    'Python',
    'Next.js',
    'React',
    'React Native',
    'Expo',
    'tRPC',
    'PostgreSQL',
    'Drizzle ORM',
    'SQLAlchemy',
    'Temporal',
    'OpenAI SDK',
    'Anthropic SDK',
    'GCP Cloud Run',
    'Terraform',
    'Docker',
    'GitHub Actions',
    'Playwright',
    'Vitest',
    'pytest',
  ],
}

const biotechProject: Experience = {
  role: 'Biotechnology Research Systems',
  domain: 'BioTech',
  flag: '🇺🇸',
  company: 'Brainhub',
  period: 'Jan 2026 — Jul 2026',
  summary:
    'Developed fullstack features for a biotechnology platform coordinating complex biological processes. Focused on integration of research management panels, real-time communication with specialized hardware, and optimization of scientific workflows. Worked at the intersection of software and laboratory automation, where script correctness directly affected physical research processes.',
  highlights: [
    'Developed and maintained fullstack features within an existing modular biotechnology platform',
    'Built and enhanced complex research management dashboards with focus on usability and workflows',
    'Contributed to UX improvements while implementing detailed product requirements',
    'Integrated and maintained APIs and handled data flows across systems',
    'Worked with PostgreSQL and DynamoDB for efficient data storage and access',
    'Implemented custom logic for generating scripts used in communication with specialized hardware',
    'Wrote and maintained automated tests to ensure reliability and prevent regressions',
    'Collaborated with biologists and researchers to gather requirements and deliver end-to-end features',
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
    'gql',
    'Redis',
    'pytest',
    'pyright',
    'ruff',
    'axios',
    'plotly.js',
    'React Testing Library',
    'Vitest',
    'Vite',
  ],
}

// R&D z wirtualnym asystentem był pierwszą fazą tego samego zlecenia — w CV
// to jedna pozycja, więc tu też.
const fintechProject: Experience = {
  role: 'Financial Advice Platform',
  domain: 'FinTech',
  flag: '🇬🇧',
  company: 'Brainhub',
  period: 'Sep 2024 — Dec 2025',
  summary:
    'Developed fullstack features for a financial advice web application used by clients, advisors and stakeholders, covering real-time data visualization, REST/GraphQL communication between internal products and integrations with external APIs. The engagement started with an R&D phase building an AI-powered virtual assistant and chatbot for the same client.',
  highlights: [
    'Built reusable, WCAG-compliant UI components with React, TypeScript and MUI',
    'Implemented backend services and GraphQL APIs with Node.js and Express',
    'Integrated internal and external services, including data synchronization',
    'R&D: built a 3D virtual assistant widget (Three.js, React Unity WebGL) with AI text-to-speech and speech-to-text (OpenAI, Azure AI, CereProc)',
    'Managed Bitbucket CI/CD and optimized build times with NX and Vite',
    'Wrote end-to-end tests with Cypress and documented components in Storybook',
  ],
  stack: [
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'GraphQL',
    'MongoDB',
    'MUI',
    'React Query',
    'Three.js',
    'OpenAI',
    'Azure AI',
    'Cypress',
    'Storybook',
    'NX',
    'Vite',
    'Bitbucket CI/CD',
  ],
}

const trackingAdminProject: Experience = {
  role: 'Tracking Admin Control Panel',
  domain: 'WorkTech',
  flag: '🇵🇱',
  company: 'Brainhub',
  period: 'Jul 2024 — Sep 2024',
  summary:
    "Developed and improved the admin control panel UI for an internal project — implementing new frontend components, testing APIs and functionalities, and enhancing backend features while fixing bugs. The project aimed to modernize and optimize the system's user experience and performance.",
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
    'BullMQ',
    'Supertest',
    'Turborepo',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'GitLab',
  ],
}

const softwareDevelopmentProgram: Experience = {
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

const spaceShooterProject: SideProject = {
  name: 'Multiplayer 2.5D Space Shooter',
  tagline: 'Real-time multiplayer browser game',
  period: '2026 — Present',
  summary:
    'Session-based PvP space arena (8–16 players) with an authoritative 30 Hz server and a deterministic simulation shared by client and server, enabling client-side prediction, reconciliation and lag compensation. Built solo as a pre-playtest prototype (~32k LOC, 320+ tests) — the arena is the first game mode of a planned space MMORPG with persistent maps, NPCs, missions and factions.',
  highlights: [
    'Built netcode on WebTransport (QUIC datagrams) with a WebRTC fallback and a custom binary protocol, reaching RTT p99 of 6.6 ms vs 96–120 ms over WebRTC',
    'Treated performance as a requirement (zero allocations in the game loop, SoA typed arrays, object pools): the server loop uses under 2% of its budget at 15 connections',
    'Built a GenAI asset pipeline (Runway 2D generation → Tripo3D image-to-3D → KTX2 + meshopt compression) that cut model size by 38%, rendered with Three.js on WebGPU/WebGL2 with mobile touch controls',
  ],
  stack: [
    'TypeScript',
    'Three.js',
    'WebGPU',
    'WebTransport',
    'WebRTC',
    'Node.js',
    'React',
    'PostgreSQL',
    'Drizzle',
    'Redis',
    'Docker',
    'Caddy',
  ],
}

const wykominujProject: SideProject = {
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
    'Built an Electron main/renderer split with typed IPC handlers exposed through a preload context bridge',
    'Implemented a build-time fetcher bundling yt-dlp, Deno, and ffmpeg, plus runtime yt-dlp auto-updates',
    'Designed format presets for MP3/WAV/FLAC audio and MP4/AVI/MOV video from 240p to 4K',
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

const ganttProject: SideProject = {
  name: 'Gantt Project',
  tagline: 'Construction Gantt planner',
  period: '2026',
  summary:
    'Full-stack Gantt chart app for planning construction projects, with hierarchical task trees, dependency types and cost tracking. Runs in production on Railway with a separate staging environment.',
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
}

const time2partyProject: SideProject = {
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

const noGhostingProject: SideProject = {
  name: 'No Ghosting',
  tagline: 'Recruiting SLA engine',
  period: '2026',
  summary:
    'Open-source platform for recruiting teams that tracks candidate wait times and nudges recruiters before they are ghosted. Built solo as a self-hosted, multi-tenant monorepo.',
  highlights: [
    'Built a NestJS and BullMQ follow-up engine to scan overdue candidates and enqueue recruiter nudges',
    'Designed a plugin architecture for ATS integrations and webhooks that reset timers on replies',
    'Implemented a multi-tenant Prisma schema with query scoping via a header-based tenant guard',
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

const musicVideoAIGeneratorProject: SideProject = {
  name: 'Music Video AI Generator',
  tagline: 'AI video generator',
  period: '2026',
  summary:
    "Web app that turns a list of scene prompts into AI-generated music-video clips through Runway's text-to-video API. Built solo as a React client and Express backend run from a shared root.",
  highlights: [
    'Built a scene-based editor in React that estimates generation times and costs before API calls',
    "Integrated Runway's API behind an Express service to run batches and poll task status in the background",
    'Implemented session-based progress tracking and per-scene status updates with client polling',
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

const mebelprojektProject: SideProject = {
  name: 'Mebelprojekt',
  tagline: 'Furniture studio site',
  period: '2023 — Present',
  summary:
    'Marketing site for MEBELPROJEKT AG, a Polish custom furniture workshop operating since 1996. Built and maintained solo, running in production on the company domain.',
  highlights: [
    'Built a scroll-scrubbed hero sequencing 183 WebP frames, with a reduced-motion static fallback',
    'Implemented a gallery of 143 project photos across six categories via Vite glob imports',
    'Automated deploys with a branch-guarded FTP pipeline that retries failed uploads',
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

const zapolankaProject: SideProject = {
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
  role: 'Fullstack Developer (TypeScript / Python)',
  location: 'Katowice, Poland',
  experience: '2+ years of commercial experience',
  summary:
    'Fullstack Developer (TypeScript / Python) with 2+ years of commercial experience building web, mobile and AI-powered applications for FinTech, BioTech and SaaS clients from the UK, US, Sweden and Poland. I work across the whole product, from Next.js and React Native frontends, through type-safe APIs and async workflows, to cloud infrastructure on GCP and AWS. After hours I build a real-time multiplayer browser game with custom netcode and WebGPU rendering. Fluent in English, used daily in direct collaboration with clients and stakeholders in remote, international teams.',
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

export type Experience = ProjectBase & {
  role: string
  domain?: string
  flag?: string
  company: string
  current?: boolean
}

export const EXPERIENCES: Experience[] = [
  fintechSaasProject,
  biotechProject,
  fintechProject,
  trackingAdminProject,
  softwareDevelopmentProgram,
]

export type SideProject = ProjectBase & {
  name: string
  tagline?: string
  links?: ProjectLink[]
}

export const SIDE_PROJECTS: SideProject[] = [
  spaceShooterProject,
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
    'Anthropic Academy courses',
    'AWS Certified Developer Associate',
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
