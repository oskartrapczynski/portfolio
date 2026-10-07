import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Calendar, Clapperboard } from 'lucide-react'
import { Tag } from '../shared/ui'
import { YouTubeEmbed } from './YouTubeEmbed'
import type { VideoWork } from './graphics3d.data'

/**
 * Karta pojedynczej pracy 3D: odtwarzacz na górze, meta pod spodem.
 * Układ i klasy spójne z SideProjectCard, żeby obie podstrony czytały się tak
 * samo.
 */

type VideoCardProps = {
  work: VideoWork
  playing: boolean
  onPlay: () => void
}

export const VideoCard = ({ work, playing, onPlay }: VideoCardProps) => (
  <Card className="skill-card group relative overflow-hidden rounded-xl backdrop-blur-sm">
    <div className="p-3 md:p-4">
      <YouTubeEmbed
        id={work.youtubeId}
        title={work.title}
        kind={work.kind}
        duration={work.duration}
        poster={work.poster}
        playing={playing}
        onPlay={onPlay}
      />
    </div>

    <CardHeader className="space-y-3 pt-3 pb-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="skill-icon shrink-0 rounded-lg p-2.5">
            <Clapperboard className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-mono text-lg font-bold text-[var(--accent)]">
              {work.title}
            </h3>
            <p className="font-mono text-sm text-gray-400">
              {work.kind} · {work.duration}
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
          <Calendar className="h-3.5 w-3.5" />
          {work.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-gray-300">{work.summary}</p>
    </CardHeader>

    <CardContent className="space-y-5">
      <ul className="space-y-1.5">
        {work.highlights.map((highlight) => (
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
        {work.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {work.links && work.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {work.links.map(({ label, href, icon: Icon }) => (
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
