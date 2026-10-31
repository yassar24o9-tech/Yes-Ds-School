import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../../animations/Stagger.jsx'
import { campusSpaces } from '../../data/homeContent.js'
import HomeImage from '../HomeImage.jsx'
import SectionHeading from '../SectionHeading.jsx'

function FacilitiesSection() {
  return (
    <section aria-labelledby="campus-title" className="home-section campus-section" id="campus">
      <div className="home-container">
        <div className="home-section__topline campus-section__heading">
          <SectionHeading
            eyebrow="Campus & spaces"
            title="A look around the school."
            id="campus-title"
            description="School-supplied photographs show the campus exterior and an indoor learning space."
          />
          <Link className="text-link" to="/facilities">
            Campus information
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <Stagger className="campus-grid">
          {campusSpaces.map((space, index) => (
            <StaggerItem className={`campus-card campus-card--${index + 1}`} key={space.title}>
              <Link aria-label={`${space.title}: view campus photographs`} className="campus-card__link" to="/facilities">
                <div className="campus-card__image-wrap">
                  <HomeImage
                    alt={space.image.alt}
                    className="campus-card__image"
                    height={space.image.height}
                    src={space.image.src}
                    width={space.image.width}
                  />
                  <span className="campus-card__image-label">Supplied school photograph</span>
                </div>
                <div className="campus-card__caption">
                  <div>
                    <h3>{space.title}</h3>
                    <p>Photograph supplied by YES DS High School.</p>
                  </div>
                  <span aria-hidden="true" className="campus-card__arrow">↗</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export default FacilitiesSection
