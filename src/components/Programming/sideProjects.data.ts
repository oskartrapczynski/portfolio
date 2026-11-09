import { ExternalLink, Github } from 'lucide-react'
import type { ProjectBase, ProjectLink } from '../shared/types'

export type SideProject = ProjectBase & {
  name: string
  tagline?: string
  links?: ProjectLink[]
}

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

const pttkCmsProject: SideProject = {
  name: 'PTTK Club Website & CMS',
  tagline: 'Non-profit website & custom CMS',
  period: '2026',
  summary:
    'Solo rewrite of the hacked, non-functional Joomla 2.5 website of the PTTK club at the KWK „Bolesław Śmiały” mine in Mikołów into a modern architecture: a static frontend with interactive components, a read-only REST API and a custom admin panel.',
  highlights: [
    'Diagnosed the outage (Joomla code incompatible with PHP 7.4 variable interpretation) and temporarily restored the site for the duration of the migration',
    'Wrote a Node.js scraper and converter that archived the site and split over a decade of hand-pasted content into structured database records, with 301 redirects from old URLs',
    'Built a responsive Astro frontend with React components loading data from the API, mobile navigation, a news archive by year and loading skeletons',
    'Designed 5 PHP API endpoints and an 8-table MariaDB schema covering news, trips, the season plan, fees and page content',
    'Built a CMS for posts, trips, the season plan, fees, menus and page copy, with a content editor and image uploads, so club members can update the site without a developer',
    'Secured the app with hashed passwords and hardened sessions, CSRF tokens, prepared statements, allowlist-based HTML sanitization, upload validation, no script execution in the uploads directory, HTTPS/HSTS enforcement and separate read and admin database accounts',
    'Set up a local Docker Compose environment, database reset and seed scripts, and documented deployment to cPanel hosting without Node.js (local build, publishing the output files)',
  ],
  stack: [
    'Astro',
    'React',
    'TypeScript',
    'Tailwind',
    'Radix UI',
    'PHP',
    'MariaDB',
    'Apache',
    'Docker',
    'Node.js',
  ],
  links: [
    { label: 'Live', href: 'https://kwk.mikolow.pttk.pl', icon: ExternalLink },
  ],
}

const wykominujProject: SideProject = {
  name: 'Wykominuj',
  tagline: 'Local business site & route planner',
  period: '2025 — Present',
  summary:
    'Monorepo for a chimney-sweeping company in the Katowice region, built solo: a marketing site running in production at wykominuj.pl and a route planner that turns client visits into optimized weekly schedules.',
  highlights: [
    'Built a static Astro site with React islands hydrating galleries and accordions only on view, a lightweight hero video and a Sharp pipeline emitting WebP variants for 60 gallery photos',
    'Implemented local SEO with ChimneySweep and BreadcrumbList JSON-LD, canonical URLs, a generated sitemap and llms.txt',
    'Built a contact form on Pages Functions with validation shared between frontend and backend, Resend delivery and layered anti-spam including Turnstile',
    'Modeled weekly planning as a Vehicle Routing Problem (each day a vehicle, each client a visit) on Cloudflare Workers with the Google Route Optimization API',
    'When the owner reported shorter manual routes, built a result-explanation panel and a route comparison; the diagnosis pinpointed a solver penalty that added 11% distance in a test',
    'Built the planner UI with React 19, TanStack Query, Google Maps and Hono RPC: week and day views, manual adjustments and navigation deep links',
    'Enforced server-side roles with Cloudflare Access JWTs and an employee panel synced with Access, plus a Workbox PWA with offline field preview and data clearing on logout',
    'Added custom API cost guards below free-tier limits (D1, Cloud Monitoring) and a pnpm monorepo with 168 tests and GitHub Actions running migrations before deploy',
  ],
  stack: [
    'TypeScript',
    'Astro',
    'React',
    'Tailwind',
    'Radix UI',
    'Sharp',
    'Hono',
    'TanStack Query',
    'Google Maps',
    'Route Optimization API',
    'Cloudflare Workers',
    'Cloudflare Pages',
    'Cloudflare D1',
    'Cloudflare Access',
    'Resend',
    'Turnstile',
    'Workbox',
    'pnpm',
    'GitHub Actions',
  ],
  links: [{ label: 'Live', href: 'https://wykominuj.pl', icon: ExternalLink }],
}

const youtubeConverterProject: SideProject = {
  name: 'Youtube converter/downloader',
  tagline: 'Desktop YouTube downloader',
  period: '2024 — Present (maintenance)',
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
  period: '2023 — Present (maintenance)',
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

export const SIDE_PROJECTS: SideProject[] = [
  spaceShooterProject,
  pttkCmsProject,
  wykominujProject,
  zapolankaProject,
  mebelprojektProject,
  musicVideoAIGeneratorProject,
  ganttProject,
  youtubeConverterProject,
  noGhostingProject,
  time2partyProject,
]
