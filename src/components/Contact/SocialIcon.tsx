import type { IconType } from './types'

export const SocialIcon = ({
  icon,
  className,
}: {
  icon: IconType
  className?: string
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label={icon.title}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}
