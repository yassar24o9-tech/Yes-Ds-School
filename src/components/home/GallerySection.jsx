import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { galleryImages } from '../../data/homeContent.js'
import HomeImage from '../HomeImage.jsx'
import SectionHeading from '../SectionHeading.jsx'

function GallerySection({
  showFilters = false,
  imageLimit = 8,
  eyebrow = 'A glimpse',
  title = 'Moments from school life.',
  description = 'A collection of photographs supplied by YES DS High School.',
}) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All images')
  const dialogRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const previousIndexRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const isOpen = activeIndex !== null
  const images = useMemo(
    () => showFilters ? galleryImages : galleryImages.slice(0, imageLimit),
    [imageLimit, showFilters],
  )
  const categories = useMemo(
    () => ['All images', ...new Set(galleryImages.map((image) => image.category))],
    [],
  )
  const visibleImages = useMemo(
    () => activeCategory === 'All images'
      ? images
      : images.filter((image) => image.category === activeCategory),
    [activeCategory, images],
  )

  useEffect(() => {
    if (activeIndex === null && previousIndexRef.current !== null) {
      lastFocusedRef.current?.focus()
    } else if (activeIndex !== null) {
      dialogRef.current?.focus()
    }

    previousIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % visibleImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + visibleImages.length) % visibleImages.length)
      }
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button:not(:disabled)')
        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, visibleImages.length])

  const openImage = (index, event) => {
    lastFocusedRef.current = event.currentTarget
    setActiveIndex(index)
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + visibleImages.length) % visibleImages.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % visibleImages.length)
  }

  return (
    <section
      aria-labelledby="gallery-title"
      className={`home-section gallery-section${showFilters ? ' gallery-section--page' : ''}`}
      id="photo-gallery"
    >
      <div className="home-container">
        <div className="home-section__topline gallery-section__topline">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            id="gallery-title"
            description={description}
          />
          <span className="content-status">School-supplied photographs</span>
        </div>

        {showFilters && (
          <div aria-label="Gallery categories" className="gallery-categories" role="group">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`gallery-category${activeCategory === category ? ' is-active' : ''}`}
                key={category}
                onClick={() => {
                  setActiveIndex(null)
                  setActiveCategory(category)
                }}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <div
              className={`gallery-tile${image.width > image.height ? ' gallery-tile--landscape' : ''}`}
              key={image.src}
            >
              <button
                aria-label={`Open image ${index + 1}: ${image.label}`}
                className="gallery-tile__button"
                onClick={(event) => openImage(index, event)}
                type="button"
              >
                <HomeImage
                  alt={image.alt}
                  className="gallery-tile__image"
                  height={image.height}
                  src={image.src}
                  width={image.width}
                />
                <span className="gallery-tile__label">{image.label}</span>
                <span aria-hidden="true" className="gallery-tile__expand">＋</span>
              </button>
            </div>
          ))}
        </div>
        {!showFilters && (
          <div className="gallery-section__more">
            <Link className="text-link" to="/gallery">
              View all photographs
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="gallery-lightbox"
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null)
            }}
            transition={{ duration: 0.2 }}
          >
            <div
              aria-label="Photo gallery lightbox"
              aria-modal="true"
              className="gallery-lightbox__dialog"
              ref={dialogRef}
              role="dialog"
              tabIndex="-1"
            >
              <button
                aria-label="Close image viewer"
                className="gallery-lightbox__close"
                onClick={() => setActiveIndex(null)}
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
              <button
                aria-label="Previous image"
                className="gallery-lightbox__arrow gallery-lightbox__arrow--previous"
                disabled={visibleImages.length < 2}
                onClick={showPrevious}
                type="button"
              >
                <span aria-hidden="true">←</span>
              </button>
              <figure className="gallery-lightbox__figure">
                <HomeImage
                  alt={visibleImages[activeIndex].alt}
                  className="gallery-lightbox__image"
                  height={visibleImages[activeIndex].height}
                  loading="eager"
                  src={visibleImages[activeIndex].src}
                  width={visibleImages[activeIndex].width}
                />
                <figcaption>
                  {visibleImages[activeIndex].label}
                  <span> · Supplied YES DS High School photograph</span>
                </figcaption>
              </figure>
              <button
                aria-label="Next image"
                className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
                disabled={visibleImages.length < 2}
                onClick={showNext}
                type="button"
              >
                <span aria-hidden="true">→</span>
              </button>
              <p aria-atomic="true" aria-live="polite" className="gallery-lightbox__count" role="status">
                {activeIndex + 1} / {visibleImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
