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
} from 'lucide-react'

type Icon = ComponentType<{ className?: string }>

/**
 * Cały content podstrony „Programming" trzymamy tutaj — komponenty tylko mapują
 * te dane. Edycja CV = zmiana w tym pliku, bez dotykania widoku.
 */

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

export type Experience = {
  role: string
  domain?: string
  flag?: string
  company: string
  period: string
  current?: boolean
  summary: string
  duties: string[]
  stack: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Biotechnology Research Systems',
    domain: 'BioTech',
    flag: '🇺🇸',
    company: 'Brainhub',
    period: 'Jan 2026 — Present',
    current: true,
    summary:
      'Developing full-stack features for a biotechnology platform coordinating complex biological processes. Focusing on integration of research management panels, real-time communication with specialized hardware, and optimization of scientific workflows.',
    duties: [
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
  },
  {
    role: 'Finance Advice Systems & Calculators',
    domain: 'FinTech',
    flag: '🇬🇧',
    company: 'Brainhub',
    period: 'Jan 2025 — Dec 2025',
    summary:
      'Developing fullstack features for a financial web application for clients, advisors and stakeholders. Focusing on real-time data visualization, REST and GraphQL communication, integration with external APIs, and accessibility (WCAG, a11y).',
    duties: [
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
  },
  {
    role: 'Virtual Assistant Project',
    domain: 'FinTech',
    flag: '🇬🇧',
    company: 'Brainhub',
    period: 'Sep 2024 — Dec 2024',
    summary:
      'Working on a Virtual Assistant widget leveraging 3D models and AI-powered Text-to-Speech and Speech-to-Text. The work involved integrating advanced AI, WebGL rendering and optimizing the assistant for seamless user experiences.',
    duties: [
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
  },
  {
    role: 'Tracking Admin Control Panel',
    domain: 'WorkTech',
    flag: '🇵🇱',
    company: 'Brainhub',
    period: 'Jul 2024 — Sep 2024',
    summary:
      'Developed and improved the admin control panel UI for an internal project — implementing new frontend components, testing APIs, enhancing backend features and fixing bugs to modernize and optimize the system.',
    duties: [
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
  },
  {
    role: 'Software Development Program',
    flag: '🇵🇱',
    company: 'Brainhub',
    period: 'Apr 2024 — Jul 2024',
    summary:
      'Intensive training covering modeling, analysis, design, architecture selection, coding, testing, refactoring, and TDD — alongside best software development practices, teamwork, and creative thinking techniques.',
    duties: [
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
