import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../../animations/Stagger.jsx'
import { learningPhotos } from '../../data/homeContent.js'
import HomeImage from '../HomeImage.jsx'
import SectionHeading from '../SectionHeading.jsx'

function AcademicsSection() {
  return (
    <section aria-labelledby="academics-title" className="home-section academics-section" id="academics-overview">
      <div className="home-container">
        <div className="home-section__topline">
          <SectionHeading
            eyebrow="Learning"
            title="A glimpse of learning at school."
            id="academics-title"
            description="A selection of school photographs from classroom learning and student activities."
          />
          <Link className="text-link academics-section__all-link" to="/academics">
            Explore academics
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <Stagger className="academics-grid">
          {learningPhotos.map((item, index) => (
            <StaggerItem className={`academic-card academic-card--${index + 1}`} key={item.title}>
              <Link aria-label={`${item.title}: view academic photographs`} className="academic-card__link" to="/academics">
                <div className="academic-card__image-wrap">
                  <HomeImage
                    alt={item.image.alt}
                    className="academic-card__image"
                    height={item.image.height}
                    src={item.image.src}
                    width={item.image.width}
                  />
                  <span className="academic-card__number">0{index + 1}</span>
                </div>
                <div className="academic-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="academic-card__more">
                    Explore more
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export default AcademicsSection
