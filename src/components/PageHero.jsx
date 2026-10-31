import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../animations/Reveal.jsx'
import HomeImage from './HomeImage.jsx'

function PageHero({
  eyebrow = 'YES DS HIGH SCHOOL',
  title,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section aria-label={`${title} page introduction`} className="page-hero">
      <div className="page-hero__image-wrap">
        <motion.div
          animate={prefersReducedMotion ? undefined : { scale: 1, y: 0 }}
          className="page-hero__image-motion"
          initial={prefersReducedMotion ? false : { scale: 1.025, y: 4 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <HomeImage
            alt={imageAlt}
            className="page-hero__image"
            fetchPriority="high"
            height={imageHeight}
            loading="eager"
            src={image}
            width={imageWidth}
          />
        </motion.div>
        <div aria-hidden="true" className="page-hero__overlay" />
      </div>
      <div className="page-hero__content home-container">
        <Reveal>
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </Reveal>
        <span className="page-hero__image-note">Supplied YES DS High School photograph</span>
      </div>
    </section>
  )
}

export default PageHero
