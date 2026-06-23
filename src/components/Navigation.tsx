import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToTarget } from '../lib/scroll'
import { NAV_ITEMS } from './Hero/skills'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    scrollToTarget(href)
  }

  const handleLinkOnClick = (
    e:
      | MouseEvent<HTMLAnchorElement, MouseEvent>
      | MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    scrollLink: boolean,
    href: string
  ) => {
    if (scrollLink) {
      e.preventDefault()
      e.stopPropagation()
      scrollToSection(href)
    }
  }

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
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map(({ label, scrollLink, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 font-mono"
                  whileHover={{ scale: 1.1, transition: { delay: 0 } }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => handleLinkOnClick(e, scrollLink, href)}
                >
                  {label}
                </motion.a>
              ))}
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
          {NAV_ITEMS.map(({ label, href, scrollLink }) => (
            <a
              key={label}
              href={href}
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 font-mono text-lg py-2"
              onClick={(e) => handleLinkOnClick(e, scrollLink, href)}
            >
              {label}
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
