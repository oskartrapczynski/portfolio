import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Rocket, Calendar } from 'lucide-react'
import type { SideProject } from './programming.data'
import { Tag } from './ui'

/**
 * Pojedyncza karta side-projectu. Wygląd spójny z ExperienceCard
 * (.skill-card + --accent), żeby cała strona trzymała ten sam język wizualny.
 */
export const SideProjectCard = ({ project }: { project: SideProject }) => (
  <Card className="skill-card group relative overflow-hidden rounded-xl backdrop-blur-sm">
    <CardHeader className="space-y-3 pb-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="skill-icon shrink-0 rounded-lg p-2.5">
            <Rocket className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-mono text-lg font-bold text-[var(--accent)]">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="font-mono text-sm text-gray-400">{project.tagline}</p>
            )}
          </div>
        </div>

        {project.period && (
          <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
            <Calendar className="h-3.5 w-3.5" />
            {project.period}
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-gray-300">{project.summary}</p>
    </CardHeader>

    <CardContent className="space-y-5">
      <ul className="space-y-1.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-relaxed text-gray-400"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="-m-1 flex flex-wrap">
        {project.stack.map((tech) => (
          <div key={tech} className="p-1">
            <Tag>{tech}</Tag>
          </div>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map(({ label, href, icon: Icon }) => (
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
              {label}
            </motion.a>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
)
