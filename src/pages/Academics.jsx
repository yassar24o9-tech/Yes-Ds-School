import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../animations/Stagger.jsx'
import HomeImage from '../components/HomeImage.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { learningPhotos, schoolPhotos } from '../data/homeContent.js'

function Academics() {
  return (
    <>
      <PageHero
        title="Academics"
        description="A photo overview of classroom learning and student activities."
        image={schoolPhotos.classroomActivity.src}
        imageAlt={schoolPhotos.classroomActivity.alt}
        imageWidth={schoolPhotos.classroomActivity.width}
        imageHeight={schoolPhotos.classroomActivity.height}
      />

      <section className="internal-section internal-academics">
        <div className="home-container">
          <div className="internal-page-intro">
            <SectionHeading
              eyebrow="Learning"
              title="Learning in pictures."
              description="School-supplied photographs show students participating in classroom and science activities."
            />
          </div>

          <Stagger className="internal-programmes">
            {learningPhotos.map((item, index) => (
              <StaggerItem className="internal-programme" key={item.title}>
                <div className="internal-programme__image-wrap">
                  <HomeImage
                    alt={item.image.alt}
                    className="internal-programme__image"
                    height={item.image.height}
                    src={item.image.src}
                    width={item.image.width}
                  />
                </div>
                <div className="internal-programme__content">
                  <span className="internal-programme__eyebrow">0{index + 1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="internal-section internal-academics-cta">
        <div className="home-container internal-academics-cta__inner">
          <div>
            <p className="section-heading__eyebrow">Academic enquiries</p>
            <h2>For current class and curriculum information, contact the school.</h2>
          </div>
          <Link className="button button--primary" to="/contact">
            View school location
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Academics
