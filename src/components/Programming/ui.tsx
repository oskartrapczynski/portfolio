import { type ReactNode } from 'react'
import { easeOut, motion } from 'framer-motion'
import { Badge } from '../ui/badge'

/**
 * Wspólne klocki podstrony „Programming". Trzymamy tu prezentację, której nie
 * ma sensu duplikować w każdej sekcji (reveal na scroll, nagłówek, tag).
 */

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

// Jednolite wejście „od dołu" gdy element wjeżdża w widok (jak reszta strony).
export const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: easeOut, delay }}
  >
    {children}
  </motion.div>
)

type SectionTitleProps = {
  icon?: React.ComponentType<{ className?: string }>
  children: ReactNode
}

export const SectionTitle = ({ icon: Icon, children }: SectionTitleProps) => (
  <Reveal className="mb-10 flex items-center gap-3">
    {Icon && (
      <span className="skill-icon rounded-lg p-2.5">
        <Icon className="h-6 w-6" />
      </span>
    )}
    <h2 className="font-mono text-3xl font-bold text-[var(--accent)] md:text-4xl">
      {children}
    </h2>
  </Reveal>
)

// Tag oparty o ten sam wygląd co badge'y skilli w Hero (.skill-tag + --accent).
export const Tag = ({ children }: { children: ReactNode }) => (
  <Badge
    variant="outline"
    className="skill-tag px-3 py-1 text-sm font-normal"
  >
    {children}
  </Badge>
)
