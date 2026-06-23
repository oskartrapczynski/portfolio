import type { IconType } from './types'

export const SocialIcon = ({
  icon,
  className,
  activeAccentColor,
  setIconId,
}: {
  icon: IconType
  className?: string
  activeAccentColor: string
  setIconId: (id: number | null) => void
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label={icon.title}
      className={className}
      style={{ ['--contact-accent' as string]: activeAccentColor }}
      onHoverChange={(h) =>
        setIconId((prev) => (h ? i : prev === i ? null : prev))
      }
    >
      <path d={icon.path} />
    </svg>
  )
}
