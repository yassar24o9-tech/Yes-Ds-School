import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../animations/Stagger.jsx'
import HomeImage from '../components/HomeImage.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { campusSpaces, schoolPhotos } from '../data/homeContent.js'

function Facilities() {
  return (
    <>
      <PageHero
        title="Campus & facilities"
        description="Photographs of the campus exterior and an indoor learning space."
        image={schoolPhotos.campusAssembly.src}
        imageAlt={schoolPhotos.campusAssembly.alt}
        imageWidth={schoolPhotos.campusAssembly.width}
        imageHeight={schoolPhotos.campusAssembly.height}
      />

      <section className="internal-section internal-facilities">
        <div className="home-container">
          <div className="internal-page-intro">
            <SectionHeading
              eyebrow="Campus photographs"
              title="A look around the school."
              description="A selection of photographs supplied by YES DS High School."
            />
          </div>

          <Stagger className="internal-facilities__grid">
            {campusSpaces.map((space, index) => (
              <StaggerItem className={`internal-facility internal-facility--${index + 1}`} key={space.title}>
                <div className="internal-facility__image-wrap">
                  <HomeImage
                    alt={space.image.alt}
                    className="internal-facility__image"
                    height={space.image.height}
                    src={space.image.src}
                    width={space.image.width}
                  />
                </div>
                <div className="internal-facility__caption">
                  <span className="internal-facility__index">0{index + 1}</span>
                  <div>
                    <h2>{space.title}</h2>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Link className="text-link" to="/gallery">
            View all school photographs
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Facilities
