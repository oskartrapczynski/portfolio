import { Card, CardContent, CardHeader } from '../ui/card'
import { Briefcase, Calendar } from 'lucide-react'
import type { Experience } from './programming.data'
import { Tag } from './ui'

/**
 * Pojedyncza pozycja doświadczenia z CV. Wygląd spójny z kartami skilli
 * (.skill-card + --accent), żeby cała strona trzymała ten sam język wizualny.
 */
export const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <Card className="skill-card group relative overflow-hidden rounded-xl backdrop-blur-sm">
    <CardHeader className="space-y-3 pb-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="skill-icon shrink-0 rounded-lg p-2.5">
            <Briefcase className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-mono text-lg font-bold text-[var(--accent)]">
              {exp.flag && <span className="mr-1.5">{exp.flag}</span>}
              {exp.role}
            </h3>
            <p className="font-mono text-sm text-gray-400">
              Fullstack Developer
              {exp.domain && ` · ${exp.domain}`} · {exp.company}
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
          <Calendar className="h-3.5 w-3.5" />
          {exp.period}
          {exp.current && (
            <span className="ml-1 rounded-full border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2 py-0.5 text-[var(--accent)]">
              Now
            </span>
          )}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-gray-300">{exp.summary}</p>
    </CardHeader>

    <CardContent className="space-y-5">
      <ul className="space-y-1.5">
        {exp.highlights.map((highlight) => (
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
        {exp.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </CardContent>
  </Card>
)
