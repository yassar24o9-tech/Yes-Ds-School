import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../../animations/Stagger.jsx'
import { activityPhotos } from '../../data/homeContent.js'
import HomeImage from '../HomeImage.jsx'
import SectionHeading from '../SectionHeading.jsx'

function EventsSection() {
  return (
    <section aria-labelledby="events-title" className="home-section events-section" id="events">
      <div className="home-container">
        <div className="home-section__topline">
          <SectionHeading
            eyebrow="School life"
            title="Activities in photographs."
            id="events-title"
            description="A selection of school-supplied photographs showing classroom, stage and outdoor moments."
          />
        </div>

        <Stagger className="events-grid">
          {activityPhotos.map((activity) => (
            <StaggerItem className="event-card" key={activity.title}>
              <div className="event-card__image-wrap">
                <HomeImage
                  alt={activity.image.alt}
                  className="event-card__image"
                  height={activity.image.height}
                  src={activity.image.src}
                  width={activity.image.width}
                />
              </div>
              <div className="event-card__body">
                <h3>{activity.title}</h3>
                <Link className="text-link" to="/gallery">
                  View gallery
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export default EventsSection
