import { Link } from 'react-router-dom'
import Reveal from '../../animations/Reveal.jsx'
import HomeImage from '../HomeImage.jsx'
import { schoolContact, schoolPhotos } from '../../data/homeContent.js'
import SectionHeading from '../SectionHeading.jsx'

function ContactPreview() {
  return (
    <section aria-labelledby="contact-preview-title" className="home-section contact-preview" id="contact-preview">
      <div className="home-container contact-preview__layout">
        <Reveal className="contact-preview__copy">
          <SectionHeading
            eyebrow="Find us"
            title="YES DS High School"
            id="contact-preview-title"
            description={schoolContact.location}
          />
          <div className="contact-preview__details">
            <div>
              <span className="contact-preview__label">School</span>
              <p>{schoolContact.name}</p>
            </div>
            <div>
              <span className="contact-preview__label">Location</span>
              <p>{schoolContact.location}</p>
            </div>
          </div>
          <Link className="button button--primary" to="/contact">
            View school location
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <Reveal className="contact-preview__visual" delay={0.1}>
          <HomeImage
            alt={schoolPhotos.campusEntrance.alt}
            className="contact-preview__image"
            height={schoolPhotos.campusEntrance.height}
            src={schoolPhotos.campusEntrance.src}
            width={schoolPhotos.campusEntrance.width}
          />
        </Reveal>
      </div>
    </section>
  )
}

export default ContactPreview
