import { Suspense, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import PageMetadata from '../components/PageMetadata.jsx'

function MainLayout({ transparentNavbar = false }) {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPathRef = useRef(pathname)
  const hasHeroNavigation = transparentNavbar || pathname === '/'

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      mainRef.current?.focus()
      previousPathRef.current = pathname
    }
  }, [pathname])

  return (
    <>
      <PageMetadata />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar transparentOnTop={hasHeroNavigation} />
      <main
        className={`site-main${hasHeroNavigation ? ' site-main--under-nav' : ''}`}
        id="main-content"
        ref={mainRef}
        tabIndex="-1"
      >
        <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
