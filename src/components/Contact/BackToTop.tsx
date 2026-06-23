import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { scrollToTarget } from '../../lib/scroll'
import type { IsInViewType } from './types'

type BackToTopProps = {} & IsInViewType

export const BackToTop = ({ isInView }: BackToTopProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center w-fit mx-auto"
    >
      <Button
        variant="outline"
        size="lg"
        className="text-lg text-[var(--hero-accent)] font-mono border-[color:color-mix(in_srgb,var(--hero-accent)_30%,transparent)] transition-colors duration-300"
        onClick={() => scrollToTarget(0)}
      >
        Back to Top
      </Button>
    </motion.div>
  )
}
