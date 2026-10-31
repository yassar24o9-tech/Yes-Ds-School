import { Link } from 'react-router-dom'
import { schoolContact } from '../data/homeContent.js'
import SchoolBrand from './SchoolBrand.jsx'

const footerLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__identity">
          <SchoolBrand />
          <p>{schoolContact.location}</p>
        </div>

        <nav aria-label="Footer navigation" className="site-footer__links">
          <p className="site-footer__label">Explore</p>
          {footerLinks.map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>

        <div className="site-footer__note">
          <p className="site-footer__label">School information</p>
          <p className="site-footer__location-note">Find YES DS High School in Dhanore / Kheora, Rajouri.</p>
          <Link className="site-footer__contact-link" to="/contact">
            View school location
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} YES DS High School</span>
        <span>Designed and developed by Code Craft Labs</span>
      </div>
    </footer>
  )
}

export default Footer
