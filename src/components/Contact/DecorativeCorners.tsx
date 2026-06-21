import { motion } from 'framer-motion'
import type { IsInViewType } from './types'

type DecorativeCornersProps = {} & IsInViewType

export const DecorativeCorners = ({ isInView }: DecorativeCornersProps) => {
  return (
    <>
      <motion.div
        className="absolute top-6 left-6 w-32 h-32 border-l-2 border-t-2 border-neon-cyan opacity-30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.div
        className="absolute top-6 right-6 w-32 h-32 border-r-2 border-t-2 border-neon-cyan opacity-30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-32 h-32 border-l-2 border-b-2 border-neon-cyan opacity-30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-32 h-32 border-r-2 border-b-2 border-neon-cyan opacity-30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
    </>
  )
}
