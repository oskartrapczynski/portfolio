import { type ComponentType } from 'react'

/**
 * Typy współdzielone przez podstrony portfolio (Programming, 3D Graphics, …).
 * Trzymamy je tutaj, żeby kolejne sekcje nie kopiowały tych samych kształtów.
 */

export type Icon = ComponentType<{ className?: string }>

// Grupa umiejętności/narzędzi renderowana jako karta z tagami.
export type SkillGroup = {
  label: string
  icon: Icon
  items: string[]
}

// Link wychodzący przy pozycji portfolio (Live, Code, YouTube, …).
export type ProjectLink = {
  label: string
  href: string
  icon: Icon
}

// Pola wspólne dla każdej pozycji portfolio — doświadczenia, side-projectu,
// pracy 3D. Konkretne sekcje dokładają do tego swoje pola.
export type ProjectBase = {
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}
