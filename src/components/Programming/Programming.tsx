import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Clock } from 'lucide-react'
import { Card } from '../ui/card'
import { Reveal, SectionTitle, Tag } from './ui'
import { ExperienceCard } from './ExperienceCard'
import { SideProjectCard } from './SideProjectCard'
import {
  ACCENT,
  PROFILE,
  TECH_STACK,
  EXPERIENCES,
  SIDE_PROJECTS,
  EDUCATION,
  LANGUAGES,
  CERTIFICATIONS,
  SOFT_SKILLS,
} from './programming.data'

const sectionClass = 'mx-auto max-w-5xl px-4 py-16 md:py-20'

export const Programming = () => {
  return (
    // --accent steruje wszystkimi neonami sekcji (te same klasy co karty skilli).
    <div
      style={{ ['--accent' as string]: ACCENT }}
      className="hero-accent relative min-h-screen overflow-x-clip"
    >
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="scanline absolute inset-0" />

      <div className="relative z-10">
        {/* ── Header / wizytówka ─────────────────────────────────── */}
        <header className={`${sectionClass} pt-28 md:pt-32`}>
          <Reveal>
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to homepage
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-mono text-4xl font-bold text-[var(--accent)] md:text-6xl">
              {PROFILE.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 font-mono text-xl text-gray-300 md:text-2xl">
              {PROFILE.role}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[var(--accent)]" />
                {PROFILE.experience}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE.links.map(({ label, value, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="skill-card group flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-sm text-gray-300"
                >
                  <Icon className="h-4 w-4 text-[var(--accent)]" />
                  {value}
                </motion.a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300">
              {PROFILE.summary}
            </p>
          </Reveal>
        </header>

        {/* ── Tech stack ─────────────────────────────────────────── */}
        <section className={sectionClass}>
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TECH_STACK.map(({ label, icon: Icon, items }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <Card className="skill-card group h-full rounded-xl p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="skill-icon rounded-lg p-2.5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-mono text-lg font-bold text-[var(--accent)]">
                      {label}
                    </h3>
                  </div>
                  <div className="-m-1 flex flex-wrap">
                    {items.map((item) => (
                      <div key={item} className="p-1">
                        <Tag>{item}</Tag>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Doświadczenie ──────────────────────────────────────── */}
        <section className={sectionClass}>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={`${exp.role}-${exp.period}`} delay={i * 0.05}>
                <ExperienceCard exp={exp} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Side Projects ──────────────────────────────────────── */}
        <section className={sectionClass}>
          <SectionTitle>Side Projects</SectionTitle>
          <div className="space-y-6">
            {SIDE_PROJECTS.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.05}>
                <SideProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Edukacja / certyfikaty / skille miękkie ───────────── */}
        <section className={`${sectionClass} pb-28`}>
          <SectionTitle>Education & More</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="skill-card h-full rounded-xl p-6">
                <InfoHeader icon={EDUCATION.icon} title="Education" />
                <p className="font-mono text-[var(--accent)]">
                  {EDUCATION.degree}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {EDUCATION.school} · {EDUCATION.year}
                </p>

                <InfoHeader
                  icon={LANGUAGES.icon}
                  title="Languages"
                  className="mt-6"
                />
                <ul className="space-y-1">
                  {LANGUAGES.items.map(({ label, level }) => (
                    <li
                      key={label}
                      className="flex justify-between gap-3 text-sm text-gray-300"
                    >
                      <span>{label}</span>
                      <span className="text-gray-500">{level}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="skill-card h-full rounded-xl p-6">
                <InfoHeader
                  icon={CERTIFICATIONS.icon}
                  title="Certifications & Courses"
                />
                <ul className="space-y-1.5">
                  {CERTIFICATIONS.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-gray-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <InfoHeader
                  icon={SOFT_SKILLS.icon}
                  title="Soft Skills"
                  className="mt-6"
                />
                <div className="-m-1 flex flex-wrap">
                  {SOFT_SKILLS.items.map((item) => (
                    <div key={item} className="p-1">
                      <Tag>{item}</Tag>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  )
}

type InfoHeaderProps = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  className?: string
}

// Mały nagłówek wewnątrz karty (ikona + tytuł) — używany w kilku miejscach.
const InfoHeader = ({ icon: Icon, title, className = '' }: InfoHeaderProps) => (
  <div className={`mb-3 flex items-center gap-2.5 ${className}`}>
    <span className="skill-icon rounded-lg p-2">
      <Icon className="h-4 w-4" />
    </span>
    <h3 className="font-mono text-base font-bold text-[var(--accent)]">
      {title}
    </h3>
  </div>
)
