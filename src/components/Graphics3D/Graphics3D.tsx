import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Box, Clock } from 'lucide-react'
import { Card } from '../ui/card'
import { Reveal, SectionTitle, Tag } from '../shared/ui'
import { VideoCard } from './VideoCard'
import {
  ACCENT,
  PROFILE,
  WORKS,
  TOOLSET,
  CROSS_LINKS,
} from './graphics3d.data'

const sectionClass = 'mx-auto max-w-5xl px-4 py-16 md:py-20'

export const Graphics3D = () => {
  // Jeden odtwarzany film naraz — inaczej dwa iframe'y potrafią grać razem,
  // gdy ktoś odpali drugi i przewinie stronę.
  const [playingId, setPlayingId] = useState<string | null>(null)

  return (
    // --accent steruje neonami sekcji, --hero-accent siatką w tle. Navbar i
    // stopka są rodzeństwem tego diva, więc ich akcent ustawia 3d-graphics.astro.
    <div
      style={{
        ['--accent' as string]: ACCENT,
        ['--hero-accent' as string]: ACCENT,
      }}
      className="relative min-h-screen overflow-x-clip"
    >
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="scanline absolute inset-0" />

      <div className="relative z-10">
        {/* ── Header ─────────────────────────────────────────────── */}
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
              {PROFILE.title}
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
                <Clock className="h-4 w-4 text-[var(--accent)]" />
                {PROFILE.since}
              </span>
              <span className="flex items-center gap-1.5">
                <Box className="h-4 w-4 text-[var(--accent)]" />
                {WORKS.length} selected works
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300">
              {PROFILE.summary}
            </p>
          </Reveal>
        </header>

        {/* ── Showreel — sedno podstrony, dlatego zaraz pod headerem ─ */}
        <section className={sectionClass}>
          <SectionTitle>Showreel</SectionTitle>
          <div className="space-y-8">
            {WORKS.map((work, i) => (
              <Reveal key={work.youtubeId} delay={i * 0.05}>
                <VideoCard
                  work={work}
                  playing={playingId === work.youtubeId}
                  onPlay={() => setPlayingId(work.youtubeId)}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Toolset ────────────────────────────────────────────── */}
        <section className={sectionClass}>
          <SectionTitle>Toolset</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TOOLSET.map(({ label, icon: Icon, items }, i) => (
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
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Mostki do pozostałych podstron ─────────────────────── */}
        <section className={`${sectionClass} pb-28`}>
          <SectionTitle>Where 3D goes next</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CROSS_LINKS.map(
              ({ label, title, description, href, icon: Icon }, i) => (
                <Reveal key={title} delay={i * 0.05}>
                  <motion.a
                    href={href}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.99 }}
                    className="skill-card group flex h-full flex-col rounded-xl p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="skill-icon rounded-lg p-2.5">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
                          {label}
                        </p>
                        <h3 className="font-mono text-lg font-bold text-[var(--accent)]">
                          {title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-gray-300 transition-colors duration-300 group-hover:text-[var(--accent)]">
                      Open <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.a>
                </Reveal>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
