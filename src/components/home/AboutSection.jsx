import { Link } from 'react-router-dom'
import Reveal from '../../animations/Reveal.jsx'
import HomeImage from '../HomeImage.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { schoolIntroduction } from '../../data/homeContent.js'

function AboutSection() {
  return (
    <section aria-labelledby="school-introduction-title" className="home-section about-section" id="about-school">
      <div className="home-container about-section__grid">
        <Reveal className="about-section__visual">
          <div className="about-section__image-frame">
            <HomeImage
              alt="Exterior of YES DS High School."
              className="about-section__image"
              height={schoolIntroduction.imageHeight}
              src={schoolIntroduction.image}
              width={schoolIntroduction.imageWidth}
            />
            <span className="image-caption">
              Supplied YES DS High School photograph
            </span>
          </div>
          <div aria-hidden="true" className="about-section__image-accent">YES DS</div>
        </Reveal>

        <div className="about-section__copy">
          <Reveal>
            <SectionHeading
              eyebrow="A school in focus"
              title="YES DS High School, in pictures."
              id="school-introduction-title"
              className="about-section__heading"
            />
            <p className="about-section__intro">{schoolIntroduction.introduction}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <Link className="text-link" to="/about">
              Discover more about us
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
