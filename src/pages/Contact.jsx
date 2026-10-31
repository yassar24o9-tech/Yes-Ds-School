import Reveal from '../animations/Reveal.jsx'
import HomeImage from '../components/HomeImage.jsx'
import PageHero from '../components/PageHero.jsx'
import { schoolContact, schoolPhotos } from '../data/homeContent.js'

function Contact() {
  return (
    <>
      <PageHero
        title="Contact YES DS High School"
        description={schoolContact.location}
        image={schoolPhotos.campusAssembly.src}
        imageAlt={schoolPhotos.campusAssembly.alt}
        imageWidth={schoolPhotos.campusAssembly.width}
        imageHeight={schoolPhotos.campusAssembly.height}
      />

      <section className="internal-section contact-page">
        <div className="home-container contact-page__layout">
          <Reveal className="contact-page__details">
            <p className="section-heading__eyebrow">School location</p>
            <h2>{schoolContact.name}</h2>
            <div className="contact-page__detail-list">
              <div>
                <span>Location</span>
                <p>{schoolContact.location}</p>
              </div>
            </div>
            <p className="contact-page__intro">
              For current contact and admissions information, please refer to communications from
              YES DS High School.
            </p>
          </Reveal>

          <Reveal className="contact-page__visual">
            <HomeImage
              alt={schoolPhotos.campusEntrance.alt}
              className="contact-page__image"
              height={schoolPhotos.campusEntrance.height}
              src={schoolPhotos.campusEntrance.src}
              width={schoolPhotos.campusEntrance.width}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
