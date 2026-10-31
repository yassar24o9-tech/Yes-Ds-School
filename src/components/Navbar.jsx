import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SchoolBrand from './SchoolBrand.jsx'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function Navbar({ transparentOnTop = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenuPath, setOpenMenuPath] = useState(null)
  const prefersReducedMotion = useReducedMotion()
  const location = useLocation()
  const isMenuOpen = openMenuPath === location.pathname
  const isTransparent = transparentOnTop && !isScrolled

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMenuPath(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setOpenMenuPath(null)

  return (
    <header
      className={`site-header${isTransparent ? ' site-header--transparent' : ' site-header--solid'}`}
    >
      <div className="site-header__inner">
        <SchoolBrand onClick={closeMenu} />

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => `desktop-nav__link${isActive ? ' is-active' : ''}`}
              end={to === '/'}
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="header-enquire" to="/contact">
          School location
          <span aria-hidden="true">↗</span>
        </NavLink>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`menu-toggle${isMenuOpen ? ' menu-toggle--open' : ''}`}
          onClick={() => setOpenMenuPath(isMenuOpen ? null : location.pathname)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mobile-nav"
            id="mobile-navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navigation.map(({ label, to }, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                key={to}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.035, duration: 0.18 }}
              >
                <NavLink
                  className={({ isActive }) => `mobile-nav__link${isActive ? ' is-active' : ''}`}
                  end={to === '/'}
                  onClick={closeMenu}
                  to={to}
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
