import type { ICONS } from './socialIcons.const'

export type IconType = (typeof ICONS)[keyof typeof ICONS]

export type IsInViewType = {
  isInView: boolean
}
