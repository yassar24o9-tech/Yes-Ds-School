import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { schoolPhotos } from '../data/homeContent.js'

const MotionLink = motion.create(Link)

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section aria-labelledby="home-hero-title" className="home-hero">
      <motion.img
        alt={schoolPhotos.campusAssembly.alt}
        animate={prefersReducedMotion ? undefined : { scale: 1, y: 0 }}
        className="home-hero__image"
        fetchPriority="high"
        initial={prefersReducedMotion ? false : { scale: 1.04, y: 6 }}
        height={schoolPhotos.campusAssembly.height}
        src={schoolPhotos.campusAssembly.src}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        width={schoolPhotos.campusAssembly.width}
      />
      <div aria-hidden="true" className="home-hero__overlay" />
      <div aria-hidden="true" className="home-hero__grain" />

      <div className="home-hero__inner">
        <motion.div
          animate="visible"
          className="home-hero__content"
          initial={prefersReducedMotion ? false : 'hidden'}
          variants={contentVariants}
        >
          <motion.p className="home-hero__eyebrow" variants={itemVariants}>
            YES DS HIGH SCHOOL
            <span aria-hidden="true" />
            RAJOURI, JAMMU &amp; KASHMIR
          </motion.p>

          <motion.div aria-hidden="true" className="home-hero__wordmark" variants={itemVariants}>
            YES DS
          </motion.div>

          <motion.h1 className="home-hero__title" id="home-hero-title" variants={itemVariants}>
            Learning begins
            <br />
            <em>with possibility.</em>
          </motion.h1>

          <motion.p className="home-hero__description" variants={itemVariants}>
            Welcome to YES DS High School. Discover our school and the possibilities ahead.
          </motion.p>

          <motion.div className="home-hero__actions" variants={itemVariants}>
            <MotionLink
              className="hero-button hero-button--gold"
              to="/about"
              transition={{ duration: 0.18, ease: 'easeOut' }}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              Discover our school
              <span aria-hidden="true">↗</span>
            </MotionLink>
            <MotionLink
              className="hero-button hero-button--outline"
              to="/facilities"
              transition={{ duration: 0.18, ease: 'easeOut' }}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              Explore our campus
              <span aria-hidden="true">↗</span>
            </MotionLink>
          </motion.div>
        </motion.div>

        <div className="home-hero__bottom">
          <p className="home-hero__image-note">
            <span aria-hidden="true" />
            YES DS High School · supplied campus photograph
          </p>
          <Link className="home-hero__discover" to="/academics">
            <span>Discover more</span>
            <span aria-hidden="true" className="home-hero__discover-icon">↓</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
