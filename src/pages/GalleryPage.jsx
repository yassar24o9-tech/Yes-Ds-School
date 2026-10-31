import PageHero from '../components/PageHero.jsx'
import GallerySection from '../components/home/GallerySection.jsx'
import { schoolPhotos } from '../data/homeContent.js'

function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo gallery"
        description="A visual collection of photographs supplied by YES DS High School."
        image={schoolPhotos.campusAssembly.src}
        imageAlt={schoolPhotos.campusAssembly.alt}
        imageWidth={schoolPhotos.campusAssembly.width}
        imageHeight={schoolPhotos.campusAssembly.height}
      />
      <GallerySection
        description="Browse campus, learning and student activity photographs supplied by the school."
        eyebrow="School photography"
        showFilters
        title="Moments from YES DS."
      />
    </>
  )
}

export default GalleryPage
