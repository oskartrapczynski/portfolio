import type { ProjectBase } from '../shared/types'

export type Experience = ProjectBase & {
  role: string
  domain?: string
  flag?: string
  company: string
  current?: boolean
}

const fintechSaasProject: Experience = {
  role: 'FinTech SaaS Platform',
  domain: 'FinTech',
  flag: '🇸🇪',
  company: 'The Codest',
  period: 'Aug 2026 — Oct 2026',
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

export const EXPERIENCES: Experience[] = [
  fintechSaasProject,
  biotechProject,
  fintechProject,
  trackingAdminProject,
  softwareDevelopmentProgram,
]
