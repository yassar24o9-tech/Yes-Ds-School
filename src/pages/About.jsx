import { Link } from 'react-router-dom'
import Reveal from '../animations/Reveal.jsx'
import HomeImage from '../components/HomeImage.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { schoolIntroduction, schoolPhotos } from '../data/homeContent.js'

function About() {
  return (
    <>
      <PageHero
        title="About YES DS High School"
        description="A visual introduction to the school and its location."
        image={schoolPhotos.campusAssembly.src}
        imageAlt={schoolPhotos.campusAssembly.alt}
        imageWidth={schoolPhotos.campusAssembly.width}
        imageHeight={schoolPhotos.campusAssembly.height}
      />

      <section className="internal-section internal-about">
        <div className="home-container internal-about__grid">
          <Reveal className="internal-about__image-wrap">
            <HomeImage
              alt={schoolPhotos.campusEntrance.alt}
              className="internal-about__image"
              height={schoolIntroduction.imageHeight}
              src={schoolIntroduction.image}
              width={schoolIntroduction.imageWidth}
            />
            <span className="image-caption">YES DS High School</span>
          </Reveal>
          <Reveal className="internal-about__copy">
            <SectionHeading
              eyebrow="Our school"
              title="YES DS High School, in pictures."
              description={schoolIntroduction.introduction}
            />
            <Link className="text-link" to="/gallery">
              Explore school photographs
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default About
