import { motion, useScroll, useTransform } from 'framer-motion'
import {
  useState,
  useEffect,
  useRef,
  useSyncExternalStore,
  type CSSProperties,
} from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToTarget } from '../lib/scroll'
import { NAV_ITEMS } from './Hero/skills'

const DOT_SIZE = 6 // px, h-1.5 / w-1.5

const noopSubscribe = () => () => {}

// Aktywny tab z pathname (na serwerze null, ustalany po hydracji). Pomijamy hrefy
// współdzielone przez kilka zakładek (np. /wip), żeby nie świeciło kilku kropek.
const getActiveHref = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const matches = NAV_ITEMS.filter(({ href }) => href === path)
  return matches.length === 1 ? path : null
}

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeHref = useSyncExternalStore(
    noopSubscribe,
    getActiveHref,
    () => null
  )
  const activeLabel =
    NAV_ITEMS.find(({ href }) => href === activeHref)?.label ?? null
  // Jedna kropka dla całego desktopowego menu: stoi pod aktywnym linkiem,
  // na hover przesuwa się (x) i zmienia kolor pod najechany link, po zjechaniu
  // z menu wraca. Bez aktywnego linku (np. /wip) pokazuje się tylko na hover —
  // wtedy `slide` = false przy wejściu z zewnątrz, żeby nie jechała z poprzedniej
  // pozycji, tylko pojawiła się pod linkiem.
  const [hover, setHover] = useState<{
    label: string | null
    last: string | null
    slide: boolean
  }>({ label: null, last: null, slide: false })
  // Środki linków (offsetLeft) mierzone ResizeObserverem — łapie też zmianę
  // szerokości po załadowaniu fontu.
  const linksRef = useRef<HTMLDivElement>(null)
  const [dotXs, setDotXs] = useState<Record<string, number>>({})

  useEffect(() => {
    const container = linksRef.current
    if (!container) return
    const measure = () => {
      const xs: Record<string, number> = {}
      container
        .querySelectorAll<HTMLAnchorElement>('a[data-label]')
        .forEach((link) => {
          xs[link.dataset.label!] =
            link.offsetLeft + link.offsetWidth / 2 - DOT_SIZE / 2
        })
      setDotXs(xs)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const dotLabel = hover.label ?? activeLabel ?? hover.last
  const dotX = dotLabel !== null ? dotXs[dotLabel] : undefined
  const dotVisible = (hover.label ?? activeLabel) !== null && dotX !== undefined
  const dotColor =
    NAV_ITEMS.find(({ label }) => label === dotLabel)?.accent ??
    NAV_ITEMS[0].accent
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled
            ? 'border-[color:var(--hero-accent,#00ffff)]'
            : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                scrollToTarget(0)
              }}
            >
              <img
                src="/logo.svg"
                alt="Oskar Logo"
                className="h-12 w-auto -mt-4 filter invert"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div
              ref={linksRef}
              className="relative hidden md:flex items-center space-x-8"
              onMouseLeave={() =>
                setHover((prev) => ({ ...prev, label: null, slide: true }))
              }
            >
              {NAV_ITEMS.map(({ label, href, accent }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-current={href === activeHref ? 'page' : undefined}
                  style={{ '--tab-accent': accent } as CSSProperties}
                  data-label={label}
                  onMouseEnter={() =>
                    setHover((prev) => ({
                      label,
                      last: label,
                      slide: prev.label !== null || activeLabel !== null,
                    }))
                  }
                  className={`relative font-mono transition-colors duration-300 ${
                    href === activeHref
                      ? 'text-[var(--tab-accent)]'
                      : 'text-gray-300'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-0 -bottom-2.5 !ml-0 h-1.5 w-1.5 rounded-full"
                initial={false}
                animate={{
                  x: dotX ?? 0,
                  backgroundColor: dotColor,
                  opacity: dotVisible ? 1 : 0,
                }}
                transition={{
                  x: hover.slide
                    ? { type: 'spring', stiffness: 400, damping: 30 }
                    : { duration: 0 },
                  backgroundColor: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-md border-l border-neon-cyan/30 z-40 md:hidden"
      >
        <div className="flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map(({ label, href, accent }) => (
            <a
              key={label}
              href={href}
              aria-current={href === activeHref ? 'page' : undefined}
              style={{ '--tab-accent': accent } as CSSProperties}
              className={`group flex items-center gap-2 font-mono text-lg py-2 transition-colors duration-300 ${
                href === activeHref
                  ? 'text-[var(--tab-accent)]'
                  : 'text-gray-300'
              }`}
            >
              {label}
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--tab-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </motion.div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
